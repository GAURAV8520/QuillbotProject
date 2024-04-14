import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Card, CardContent, Typography, Switch,Button } from '@mui/material';
import { Search as SearchIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';

const ResearchTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filterType, setFilterType] = useState('academic'); // Default filter type

  const handleSearch = async () => {
    try {
      const response = await axios.post('https://api.gyanibooks.com/search_publication/', {
        keyword: searchTerm,
        limit: 10,
        type: filterType // Pass filter type to API request
      });
      setSearchResults(response.data.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  // Toggle filter type
  const toggleFilterType = () => {
    setFilterType(filterType === 'academic' ? 'non-academic' : 'academic');
  };

  return (
    < > 
<div className='mx-12 my-4 p-10'>
<div className="flex items-center w-full h-18 bg-slate-50 border-solid border-2 rounded-full border-green-300 relative px-10">
        <div className="flex-1">
          <TextField
           label="Search" variant="standard" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className='text-green-700 text-sm font-semibold' htmlFor="switch">{filterType}</label>
          <Switch
            id="switch"
            checked={filterType === 'academic'}
            onChange={toggleFilterType}
            className="flex items-center justify-center bg-transparent rounded-md w-10 h-10 mr-2"
          >
            {filterType === 'academic' ? <Switch checked={filterType === 'academic'} onChange={toggleFilterType} /> : <Switch checked={filterType === 'academic'} onChange={toggleFilterType} />}
          </Switch>
        </div>
        <div>
          <button onClick={handleSearch} className="flex items-center justify-center bg-transparent rounded-md w-10 h-10">
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className='mt-10'>
  {searchResults.map((result, index) => (
    <div key={index} className="mb-4 border rounded-md p-4">
      <h2 className="text-xl font-bold mb-2">{result.title}</h2>
      <p className="mb-2">
        <strong>Authors:</strong> {result.authors.slice(0, 3).map(author => author.name).join(', ')}
        {result.authors.length > 3 && ' et al.'}
      </p>
      <p className="text-gray-700 mb-2">{result.abstract}</p>
      <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" onClick={() => window.open(result.url, '_blank')}>
        Explore
      </button>
    </div>
  ))}
</div>
</div>
    
    </>
  );
};

export default ResearchTab;

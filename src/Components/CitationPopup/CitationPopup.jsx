// CitationPopup.jsx
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material'; 

const CitationPopup = ({ isOpen, onClose }) => {
  const [bibText, setBibText] = useState('');
  const [citationStyle, setCitationStyle] = useState('APA');

  const handleGenerateCitation = () => {
    // Citation generation logic
  };

  return (
    <Dialog open={isOpen} onClose={onClose}> {/* Ensure open prop is passed correctly */}
      <DialogTitle>Generate Citation</DialogTitle>
      <DialogContent>
        <TextField
          label="BibTeX Text"
          multiline
          rows={4}
          variant="outlined"
          value={bibText}
          onChange={(e) => setBibText(e.target.value)}
        />
        <TextField
          select
          label="Citation Style"
          variant="outlined"
          value={citationStyle}
          onChange={(e) => setCitationStyle(e.target.value)}
        >
          {/* Options for citation styles */}
        </TextField>
        <Button variant="contained" color="primary" onClick={handleGenerateCitation}>
          Generate Citation
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CitationPopup;

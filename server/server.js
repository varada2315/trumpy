const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and parsing JSON bodies
app.use(cors());
app.use(express.json());

// API Endpoint to submit partnership inquiry
app.post('/api/partnership', (req, res) => {
  const { fullName, organization, email, natureOfPartnership, overview } = req.body;

  // Simple validation
  if (!fullName || !email || !natureOfPartnership || !overview) {
    return res.status(400).json({ error: 'Please fill in all required fields: Name, Email, Nature of Partnership, and Overview.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address format.' });
  }

  const newInquiry = {
    id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
    fullName,
    organization: organization || 'N/A',
    email,
    natureOfPartnership,
    overview,
    submittedAt: new Date().toISOString()
  };

  const inquiriesFilePath = path.join(__dirname, 'inquiries.json');

  // Read existing inquiries and write back
  fs.readFile(inquiriesFilePath, 'utf8', (err, data) => {
    let inquiries = [];

    if (!err && data) {
      try {
        inquiries = JSON.parse(data);
      } catch (parseErr) {
        console.error('Error parsing inquiries.json:', parseErr);
      }
    }

    inquiries.push(newInquiry);

    fs.writeFile(inquiriesFilePath, JSON.stringify(inquiries, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing to inquiries.json:', writeErr);
        return res.status(500).json({ error: 'Failed to save inquiry. Please try again.' });
      }

      console.log('Successfully saved partnership inquiry:', newInquiry.id);
      return res.status(201).json({ message: 'Inquiry saved successfully', inquiryId: newInquiry.id });
    });
  });
});

// Serve frontend static assets in production
const clientDistPath = path.join(__dirname, '../client/dist');
if (fs.existsSync(clientDistPath)) {
  console.log(`Serving static files from: ${clientDistPath}`);
  app.use(express.static(clientDistPath));

  // Catch-all to serve index.html for SPA routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
} else {
  console.log('Client distribution directory not found. Server running in API-only mode.');
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

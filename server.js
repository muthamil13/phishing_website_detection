const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// Serve static frontend
app.use('/', express.static(path.join(__dirname, '..', 'frontend')));

// Simple dummy phishing check endpoint
// This is for demo/testing only. Replace with your model or logic.
app.get('/api/check', (req, res) => {
  const url = (req.query.url || '').toLowerCase();
  if (!url) return res.status(400).json({ error: 'no url provided' });
  // naive rules for demo:
  const suspiciousSigns = ['@', '%40', 'bit.ly', 'tinyurl', 'free', 'login', 'update', 'secure', 'verify'];
  const isSuspicious = suspiciousSigns.some(s => url.includes(s));
  return res.json({ url, verdict: isSuspicious ? 'phishing' : 'safe' });
});

app.listen(PORT, ()=> console.log(`Server started on http://localhost:${PORT}`));

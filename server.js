const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '2mb' }));

// Security & CORS Headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Serve Static Assets from /public
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint for Render
app.get('/healthz', (req, res) => {
  res.status(200).json({
    status: 'ok',
    platform: 'CI Codes v3.0 Enterprise',
    founder: 'Chiragpala Naik MD',
    timestamp: new Date().toISOString()
  });
});

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 CI Codes v3.0 Server Live on Port ${PORT}`);
  console.log(`👤 Founder & MD: Chiragpala Naik MD`);
  console.log(`====================================================`);
});

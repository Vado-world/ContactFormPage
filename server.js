const express = require('express');
const path = require('path');
const app = express();

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Allow form submissions (if you have a form)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Example route for form
app.post('/contact', (req, res) => {
  console.log(req.body);
  res.send('Form received');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
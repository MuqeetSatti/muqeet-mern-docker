const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send('Hello from Muqeet API 🚀');
});

// ✅ only one listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


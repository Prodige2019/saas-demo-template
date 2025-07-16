const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.get('/api/user', (req, res) => {
  res.json({ name: 'Demo User' });
});

app.listen(PORT, () => console.log('SaaS demo backend running on port', PORT));

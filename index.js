const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors')


app.use(cors({
    origin: ['https://vercel.com/pranav743/crud-app'],
    methods: ["POST", "GET"],
    credentials: true
}));
app.get('/api/data', (req, res) => {
  const jsonData = {
    message: 'Hello from the server!',
    data: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ]
  };

  res.json(jsonData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

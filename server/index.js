const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors')


app.use(cors({
    origin: "*",
    methods: ["POST", "GET"],
    credentials: true
}));


app.get('/', (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Trial Server</title>
      </head>
      <body>
        <h1>Hello, this is a Trial Server</h1>
        <p>Owner: Pranav</p>
      </body>
    </html>
  `;

  // Set the Content-Type header to indicate that the response is HTML
  res.setHeader('Content-Type', 'text/html');

  // Send the HTML content as the response body
  res.send(htmlContent);
});
app.get('/api/data', (req, res) => {
  const jsonData = {
    message: 'Hello from the server!',
    data: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ]
  };

  return res.status(200).json(jsonData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

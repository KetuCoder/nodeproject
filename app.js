import express from 'express'
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Simple Node App</title>
        <style>
          body { margin: 0; font-family: Arial; }
          header { background-color: green; color: white; padding: 20px; text-align: center; }
          footer { background-color: blue; color: white; padding: 10px; position: fixed; width: 100%; bottom: 0; text-align: center; }
          main { padding: 40px; min-height: 80vh; }
        </style>
      </head>
      <body>
        <header>
          <h1>This is the Header (Green)</h1>
        </header>
        <main>
          <p>Welcome to a simple Node.js web application.</p>
        </main>
        <footer>
          <p>This is the Footer (Blue)</p>
        </footer>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});

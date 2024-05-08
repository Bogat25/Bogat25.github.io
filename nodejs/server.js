const express = require('express');
const app = express();
const path = require('path');

// Közvetlenül a fő könyvtárban vannak a statikus fájlok (HTML, JS, CSS)
app.use(express.static(path.join(__dirname, 'main')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main/index.html'));
  
});

app.get('/getip', function(req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send(ip);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

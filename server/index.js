const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
var cors = require('cors')
// Configure multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());
// Enable All Cross origin requests
app.use(cors())


const users = [
  { id: 1, email: 'admin@one.com', password: '1234', type: 0 },
  { id: 2, email: 'spoc@one.com', password: '1234', type: 1 },
  { id: 3, email: 'exe@one.com', password: '1234', type: 2 }
];

app.get('/', (req, res) => {
  res.status(401).json({ message: 'Invalid API' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Simulate database query
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
      res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
  
});

// Handle POST request to '/upload' endpoint
app.post('/upload', upload.single('image'), (req, res) => {
  try {
    const { file, body } = req;

    // Access image data
    const imageData = file.buffer; // Image data in binary format

    // Access location data
    const latitude = body.latitude;
    const longitude = body.longitude;

    // Send a response
    res.status(200).json({ message: 'Upload successful', imageData, latitude, longitude });
  } catch (error) {
    console.error('Error handling upload:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

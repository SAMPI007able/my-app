const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());
// Enable All Cross origin requests
app.use(cors())

// Sample user data (for demonstration purposes only)
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
  setTimeout(() => {
    if (user) {
      res.json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }, 2000)
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

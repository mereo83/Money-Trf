const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const port = 5000;

// Use bodyParser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., HTML, CSS, etc.)
app.use(express.static(__dirname));

// Initialize express-session and configure it
app.use(session({
  secret: 'your-secret-key', // Change this to a strong and secret key
  resave: false,
  saveUninitialized: true,
}));

// Use cookie-parser middleware to handle cookies
app.use(cookieParser());

// Route to handle form submission
app.post('/transfer_money', (req, res) => {
  const amount = req.body.amount;
  const to = req.body.to;

  // Simulate a money transfer (for learning purposes)
  const result = simulateMoneyTransfer(amount, to);

  // Set a session variable to track the result
  req.session.transferResult = result;

  res.send(result);
});

// Route to retrieve and display the session variable
app.get('/result', (req, res) => {
  const transferResult = req.session.transferResult || 'No result available.';
  res.send(`Money Transfer Result: ${transferResult}`);
});

// Function to simulate a money transfer
function simulateMoneyTransfer(amount, to) {
  // In a real-world scenario, you would implement the actual money transfer logic here
  // For this example, we'll just return a message
  return `Transferred $${amount} to ${to}`;
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

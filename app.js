const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Use bodyParser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., HTML, CSS, etc.)
app.use(express.static(__dirname));

// Route to handle form submission
app.post('/transfer_money', (req, res) => {
  const amount = req.body.amount;
  const to = req.body.to;

  // Simulate a money transfer (for learning purposes)
  const result = simulateMoneyTransfer(amount, to);

  res.send(result);
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

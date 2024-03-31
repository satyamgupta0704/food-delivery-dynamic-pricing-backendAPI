const express = require('express');
const bodyParser = require('body-parser');
const pricingRoutes = require('./routes/pricing');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());

// Root route handler
app.get('/', (req, res) => {
  res.send('Food Delivery API is running');
});

app.use('/api/pricing', pricingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
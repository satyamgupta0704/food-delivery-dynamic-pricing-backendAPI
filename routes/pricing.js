// routes/pricing.js
const express = require('express');
const PricingService = require('../services/pricingService');

const router = express.Router();

router.post('/calculate', async (req, res) => {
  try {
    const { zone, organizationId, totalDistance, itemType } = req.body;

    const totalPrice = await PricingService.calculateDeliveryPrice({
      zone,
      organizationId,
      totalDistance,
      itemType,
    });

    res.json({ totalPrice });
  } catch (error) {
    const errorMessage = error.message || 'An error occurred while processing the request';
    res.status(400).json({ error: errorMessage });
  }
});

module.exports = router;
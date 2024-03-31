// services/pricingService.js
const Pricing = require('../models/Pricing');
const Item = require('../models/Item'); // Import the Item model

class PricingService {
  static async calculateDeliveryPrice(options) {
    const { zone, organizationId, totalDistance, itemType } = options;

    const pricing = await Pricing.findOne({
      where: {
        organizationId,
        zone,
        itemId: (await Item.findOne({ where: { type: itemType } })).id,
      },
    });

    if (!pricing) {
      throw new Error('Pricing not found for the given criteria');
    }

    const { baseDistanceInKm, kmPrice, fixPrice } = pricing;
    const distanceInKm = totalDistance / 1000; // Assuming totalDistance is in meters

    const totalPrice =
      distanceInKm <= baseDistanceInKm
        ? fixPrice
        : fixPrice + Math.ceil((distanceInKm - baseDistanceInKm) * kmPrice * 100);

    return totalPrice;
  }
}

module.exports = PricingService;
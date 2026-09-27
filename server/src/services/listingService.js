const Listing = require("../models/Listing");

const getListingById = async (listingId) => {
  return Listing.findById(listingId)
    .populate("amenities")
    .lean();
};

module.exports = {
  getListingById,
};
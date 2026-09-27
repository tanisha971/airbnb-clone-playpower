const listingService = require("../services/listingService");

const getListing = async (req, res, next) => {
  try {
    const listing = await listingService.getListingById(
      req.params.id
    );

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });
    }

    res.status(200).json({
      success: true,
      data: listing,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getListing,
};
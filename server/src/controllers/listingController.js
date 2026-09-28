import {
  getListingById,
} from "../services/listingService.js";

export const getListing = async (
  req,
  res
) => {
  try {
    const { listingId } = req.params;

    const listing =
      await getListingById(listingId);

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: listing,
    });
  } catch (error) {
    console.error(
      "Get listing error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch listing",
    });
  }
};
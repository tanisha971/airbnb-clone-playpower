import Listing from "../models/Listing.js";

export const getListingById = async (
  listingId
) => {
  const listing = await Listing.findOne({
    listingId,
  }).lean();

  return listing;
};

export const createOrUpdateListing = async (
  listingData
) => {
  const listing =
    await Listing.findOneAndUpdate(
      {
        listingId: listingData.listingId,
      },
      listingData,
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    ).lean();

  return listing;
};
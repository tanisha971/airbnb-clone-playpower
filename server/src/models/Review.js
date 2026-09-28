import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    listingId: {
      type: String,
      required: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
    },

    stay: String,

    date: String,

    avatar: String,

    rating: {
      type: Number,
      default: 5,
    },

    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model(
  "Review",
  reviewSchema
);

export default Review;
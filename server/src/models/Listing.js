const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const amenitySchema = new mongoose.Schema(
  {
    name: String,
    icon: String,
  },
  { _id: false }
);

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    location: {
      city: String,
      state: String,
      country: String,
    },

    description: String,

    pricePerNight: Number,

    rating: Number,

    reviewCount: Number,

    guests: Number,

    bedrooms: Number,

    beds: Number,

    bathrooms: Number,

    photos: [photoSchema],

    amenities: [amenitySchema],

    sleepingArrangements: [
      {
        room: String,
        description: String,
        image: String,
      },
    ],

    host: {
      name: String,
      image: String,
      yearsHosting: Number,
      responseRate: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Listing", listingSchema);
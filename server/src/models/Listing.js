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
  {
    _id: false,
  }
);

const locationSchema = new mongoose.Schema(
  {
    city: String,
    state: String,
    country: String,
    address: String,
    latitude: Number,
    longitude: Number,
  },
  {
    _id: false,
  }
);

const sleepingArrangementSchema = new mongoose.Schema(
  {
    room: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },
  },
  {
    _id: false,
  }
);

const hostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    yearsHosting: {
      type: Number,
      default: 0,
    },

    responseRate: {
      type: String,
      default: "",
    },

    isSuperhost: {
      type: Boolean,
      default: false,
    },
  },
  {
    _id: false,
  }
);

const ratingSchema = new mongoose.Schema(
  {
    overall: {
      type: Number,
      default: 0,
    },

    cleanliness: {
      type: Number,
      default: 0,
    },

    accuracy: {
      type: Number,
      default: 0,
    },

    checkIn: {
      type: Number,
      default: 0,
    },

    communication: {
      type: Number,
      default: 0,
    },

    location: {
      type: Number,
      default: 0,
    },

    value: {
      type: Number,
      default: 0,
    },
  },
  {
    _id: false,
  }
);

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    propertyType: {
      type: String,
      default: "Apartment",
    },

    location: {
      type: locationSchema,
      required: true,
    },

    pricePerNight: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },

    reviewCount: {
      type: Number,
      default: 0,
    },

    guests: {
      type: Number,
      default: 0,
    },

    bedrooms: {
      type: Number,
      default: 0,
    },

    beds: {
      type: Number,
      default: 0,
    },

    bathrooms: {
      type: Number,
      default: 0,
    },

    photos: {
      type: [photoSchema],
      default: [],
    },

    amenities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Amenity",
      },
    ],

    sleepingArrangements: {
      type: [sleepingArrangementSchema],
      default: [],
    },

    host: {
      type: hostSchema,
      required: true,
    },

    ratingBreakdown: {
      type: ratingSchema,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Listing", listingSchema);
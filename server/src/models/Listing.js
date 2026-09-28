import mongoose from "mongoose";

const photoSchema = new mongoose.Schema(
  {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const sleepingArrangementSchema =
  new mongoose.Schema(
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
        required: true,
      },
    },
    { _id: false }
  );

const nearbyStaySchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    price: String,
    rating: String,
  },
  { _id: false }
);

const listingSchema = new mongoose.Schema(
  {
    listingId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
    },

    propertyType: String,

    location: {
      city: String,
      state: String,
      country: String,
      exactLocationMessage: String,
    },

    guests: Number,
    bedrooms: Number,
    beds: Number,
    bathrooms: Number,

    price: {
      type: String,
      required: true,
    },

    nights: Number,

    rating: Number,
    reviewCount: Number,

    host: {
      name: String,
      image: String,
      yearsHosting: Number,
      reviews: Number,
      rating: Number,
    },

    photos: [photoSchema],

    sleepingArrangements: [
      sleepingArrangementSchema,
    ],

    amenities: [String],

    highlights: [
      {
        title: String,
        description: String,
      },
    ],

    description: {
      type: String,
      default: "",
    },

    cancellationPolicy: String,

    houseRules: [String],

    safetyAndProperty: [String],

    nearbyStays: [nearbyStaySchema],

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Listing = mongoose.model(
  "Listing",
  listingSchema
);

export default Listing;
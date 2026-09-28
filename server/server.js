import "dotenv/config";

import app from "./app.js";
import connectDB from "./src/config/db.js";
import listingData from "./src/data/listingData.js";
import {
  createOrUpdateListing,
} from "./src/services/listingService.js";

const PORT =
  process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    await createOrUpdateListing(
      listingData
    );

    console.log(
      "Listing seed completed."
    );

    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT}`
      );
    });
  } catch (error) {
    console.error(
      "Server startup failed:",
      error
    );

    process.exit(1);
  }
};

startServer();
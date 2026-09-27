const express = require("express");

const {
  getListing,
} = require("../controllers/listingController");

const router = express.Router();

router.get("/:id", getListing);

module.exports = router;
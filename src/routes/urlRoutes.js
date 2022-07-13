const express = require("express");
const UrlController = require("../controllers/urlController");

const router = express.Router();

router.post("/shortUrl", UrlController.createURL);
router.get("/:url", UrlController.redirectURL);

module.exports = router;

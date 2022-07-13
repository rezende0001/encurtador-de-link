const { Schema, model } = require("mongoose");

const urlSchema = new Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  counterViews: { type: Number, required: true, default: 0 },
});

const urls = model("urls", urlSchema);

module.exports = urls;

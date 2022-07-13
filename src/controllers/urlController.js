const Urls = require("../database/models/Url");
const shortId = require("shortid");

module.exports = class URLController {
  static createURL = async (req, res) => {
    const { originalUrl } = req.body;

    if (!originalUrl)
      return res.status(400).send({ error: "Não foi especificada a URL." });

    if (await Urls.findOne({ originalUrl: originalUrl })) {
      const urlCreated = await Urls.find({ originalUrl: originalUrl });

      return res.json(urlCreated);
    }

    const shortUrl = shortId.generate();

    const newUrl = await Urls.create({ originalUrl, shortUrl });

    res.status(201).json(newUrl);
  };

  static redirectURL = async (req, res) => {
    const { url } = req.params;

    const urlValidation = await Urls.findOne({ shortUrl: url });
    if (urlValidation) {
      await Urls.updateOne(
        { shortUrl: url },
        {
          $inc: { counterViews: 1 },
        }
      );

      return res.redirect(urlValidation.originalUrl);
    }

    return res.status(400).send({ message: "error" });
  };
};

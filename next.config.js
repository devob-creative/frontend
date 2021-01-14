const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
  env: {
    API_URI:
      process.env.NODE_ENV == "production"
        ? process.env.API_URI
        : "http://localhost:1337",
  },
};

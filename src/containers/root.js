/* global PRODUCTION */
if (PRODUCTION) {
  module.exports = require("./root.prod.js");
} else {
  module.exports = require("./root.dev.js");
}

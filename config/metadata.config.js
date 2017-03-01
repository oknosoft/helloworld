/**
 * This file override default configuration in metadata.config.default.js
 */
const metadataConfigDefault = require("./metadata.config.default")
const metadataConfig = {
  // Insert your configuration here
}

module.exports = Object.assign({}, metadataConfigDefault, metadataConfig)
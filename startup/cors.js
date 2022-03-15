const cors = require("cors");

module.exports = function(app) {
    // We've to set hostname to secure the api
    app.use(cors());
};
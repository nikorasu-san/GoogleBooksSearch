// pull sensitive data from .env
require("dotenv").config();

// export data to other files
exports.api = {
    key: process.env.GBooks
}
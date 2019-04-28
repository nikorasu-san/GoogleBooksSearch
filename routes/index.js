const path = require("path");
const router = require("express").Router();
const axios = require("axios");
const secret = require("../keys");

const gbook = secret.api.key;

// API Routes
router.route("/api/books").get(function (req, res) {
    console.log(req.body)

    // axios.get(`https://www.googleapis.com/books/v1/volumes?key=${gbook}&q=${req.body}`).then((data) => {
    //     console.log(data)
    //     res.json(data)
    // })
    //res.json




    //GET  https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
    //res.json({ yes: "queen" })
})

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

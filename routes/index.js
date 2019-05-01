const path = require("path");
const router = require("express").Router();
const axios = require("axios");
const bookQueries = require("../controller/bookController");

//const gbook = secret.api.key;

// API Routes
router.route("/api/books").post(
    function (req, res) {
        //console.log("body", req.body.data)
        //console.log(req)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.body.data}`).then((data) => {
            // console.log(data.data.items[0])
            res.json(data.data.items);
        })
    })

router.route("/api/save").post(bookQueries.create);

router.route("/saved").get(bookQueries.findAll);

router.route("/remove/:id").post(bookQueries.remove);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

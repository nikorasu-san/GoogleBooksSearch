import axios from "axios";

export default {

    getBooks: function (query) {
        let data = { data: query }
        console.log("data", data)
        return axios.post("/api/books", data);
    },

    saveBook: function (query) {
        return axios.post("/api/save", query);
    },

    getSaved: function () {
        return axios.get("/saved");
    },

    removeBook: function (id) {
        return axios.post("/remove/" + id);
    }
}
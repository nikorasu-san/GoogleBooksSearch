import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import Results from "../components/Results";


class Search extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""

    };

    render() {

        return (
            <div className="container">
                <br />
                <Jumbotron />
                <Form />
                <Results />
            </div >
        )
    }
}

export default Search
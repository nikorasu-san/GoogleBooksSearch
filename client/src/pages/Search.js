import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";


class Search extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: "",
        search: ""

    };

    // loadBooks = () => {
    //     API.getBooks().then((res) => this.setState({ books: res.data }))
    //   }

    // test
    loadBooks = (event) => {
        event.preventDefault()
        API.getBooks().then((res) => console.log(res))
    }

    handleChange = (event) => {
        const { name, value } = event.target
        console.log(event.target)
        this.setState({ [name]: value })

    }


    render() {
        console.log(this.state)
        return (
            <div className="container">
                <br />
                <Jumbotron />
                <Form onchange={this.handleChange} value={this.state.search} apiCall={this.loadBooks} />
                <Results />
            </div >
        )
    }
}

export default Search
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
        API.getBooks(this.state.search).then((res) => {
            console.log("res", res.data)
            this.setState({ books: res.data })
            console.log(this.state.books)
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target
        console.log(event.target)
        this.setState({ [name]: value })
        console.log(this.state.search)
    }



    render() {
        return (
            <div className="container">
                <br />
                <Jumbotron />
                <Form onChange={this.handleChange}
                    value={this.state.search}
                    apiCall={this.loadBooks}
                />
                <Results data={this.state.books} />
            </div >
        )
    }
}

export default Search
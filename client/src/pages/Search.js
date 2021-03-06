import React, { Component } from 'react';
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";


class Search extends Component {
    state = {
        books: [],
        search: ""

    };



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
        console.log(name, value)
        this.setState({ [name]: value })
        console.log(this.state.search)
    }

    saveBook = (book) => {
        console.log(book);
        const savedBook = {
            title: book.volumeInfo.title,
            infoLink: book.volumeInfo.infoLink,
            author: book.volumeInfo.authors.join(","),
            img: book.volumeInfo.imageLinks.smallThumbnail,
            description: book.volumeInfo.description
        }
        console.log(savedBook);
        API.saveBook(savedBook).then((res) => {
            console.log("res", res)
            //console.log("saved?")
        })
    }

    render() {
        return (
            <div>
                <Form onChange={this.handleChange}
                    value={this.state.search}
                    apiCall={this.loadBooks}

                />
                <Results
                    data={this.state.books}
                    save={this.saveBook} />
            </div >
        )
    }
}

export default Search
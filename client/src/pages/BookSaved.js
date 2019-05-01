import React, { Component } from 'react';
import Results from "../components/Results";
import API from "../utils/API";


class BookSaved extends Component {
    state = {
        books: [],
        savedPage: true
    };

    // get saved books
    componentDidMount() {
        API.getSaved().then((res) => {
            //console.log("saved res", res)
            this.setState({ books: res.data })
            console.log("state", this.state.books)
        })
    }

    loadBooks = (event) => {
        event.preventDefault()
        API.getBooks(this.state.search).then((res) => {
            console.log("res", res.data)
            this.setState({ books: res.data })
            console.log(this.state.books)
        })
    }

    removeBook = (id) => {
        console.log(id)
        API.removeBook(id).then((res) => {
            console.log(res);
            window.location.reload();
        })
    }

    render() {
        return (
            <div>
                {/* <Results
                    data={this.state.books}
                    remove={this.removeBook}
                    savedPage={this.state.savedPage} /> */}
                hello
            </div >
        )
    }
}

export default BookSaved
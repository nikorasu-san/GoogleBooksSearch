import React, { Component } from 'react';
import Results from "../components/Results";
import API from "../utils/API";


class Saved extends Component {
    state = {
        books: [],
        search: ""
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


    render() {
        return (
            <div>
                <Results
                    data={this.state.books}
                    save={this.saveBook} />
            </div >
        )
    }
}

export default Saved
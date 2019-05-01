import React from 'react';
import Button from './Button';

const Results = (props) => {
    const buttonStyle = {
        width: "100%"
    }
    return (

        <div className="card mt-4">
            <div className="card-header">
                <h5>Results</h5>
            </div>
            <div className="card-body">
                {/* If there is no data to be shown in the results section, give a message. Otherwise show cards for each book.  */}
                {!props.data.length ? (<h5 className="text-center">No Books to Display</h5>) : (
                    props.data.map((book, id) => {
                        console.log("book", book)
                        return (
                            <div key={id} className="card p-4 mb-2">
                                <div className="row">
                                    <div className="col-12 col-md-10">
                                        <h4 className="card-title">{book.title || book.volumeInfo.title}</h4>
                                        <h5>Written by {book.author || book.volumeInfo.authors}</h5>
                                    </div>
                                    <div className="col-md-2 col-12">
                                        <a target="_blank" href={book.infoLink || book.volumeInfo.infoLink} rel="noopener noreferrer"><button type="submit" className="btn btn-primary m-1" style={buttonStyle}>View</button></a>
                                        <Button savedPage={props.savedPage} save={props.save} remove={props.remove} book={book} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-3">
                                        <img src={book.img || book.volumeInfo.imageLinks.smallThumbnail} alt={book.title || book.volumeInfo.title} />
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <p className="card-text">{book.description || book.volumeInfo.description}</p>
                                    </div>
                                </div>
                            </div>)
                    }
                    )
                )}
            </div>
        </div>
    )
}

export default Results
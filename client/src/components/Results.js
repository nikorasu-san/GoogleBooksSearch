import React from 'react';

const Results = (props) => {
    console.log("result props", props.data)
    return (

        <div className="card mt-4">
            <div className="card-header">
                <h5>Results</h5>
            </div>
            <div className="card-body">
                {!props.data.length ? (<h5 className="text-center">No Books to Display</h5>) : (
                    props.data.map((book, id) => {
                        console.log("book", book)
                        return (
                            <div key={id} className="card p-4">
                                <div className="row">
                                    <div className="col-10">
                                        <h5 className="card-title">{book.title || book.volumeInfo.title}</h5>
                                    </div>
                                    <div className="col-2">
                                        <a target="_blank" href={book.infoLink || book.volumeInfo.infoLink} rel="noopener noreferrer"><button type="submit" className="btn btn-primary m-1">View</button></a>
                                        {/* <button obj={book} title={book.volumeInfo.title} infolink={book.volumeInfo.infoLink} author={book.volumeInfo.authors} img={book.volumeInfo.imageLinks.smallThumbnail} description={book.volumeInfo.description} onClick={props.save} type="submit" className="btn btn-primary m-1">Save</button> */}
                                        <button onClick={() => props.save(book)} type="submit" className="btn btn-primary m-1">Save</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h5>Written by {book.author || book.volumeInfo.authors}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <img src={book.img || book.volumeInfo.imageLinks.smallThumbnail} alt={book.title || book.volumeInfo.title} />
                                    </div>
                                    <div className="col-9">
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
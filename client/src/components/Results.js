import React from 'react';

const Results = () => {
    return (

        <div className="card mt-4">
            <div className="card-header">
                <h5>Results</h5>
            </div>
            <div className="card-body">

                <div className="card p-4">
                    <div className="row">
                        <div className="col-10">
                            <h5 className="card-title">Book Title</h5>
                        </div>
                        <div className="col-2">
                            <button type="submit" className="btn btn-primary m-1">View</button>
                            <button type="submit" className="btn btn-primary m-1">Save</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5>Written by Author</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            Image box
                        </div>
                        <div className="col-9">
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results
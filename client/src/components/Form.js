import React from 'react';

const Form = () => {
    return (

        <div className="card">
            <form>
                <div className="row">
                    <div className="col">
                        <div className="card-header">
                            <h5>Book Search</h5>

                        </div>
                        <div className="card-body">
                            <input type="text" className="form-control" placeholder="Book" />
                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
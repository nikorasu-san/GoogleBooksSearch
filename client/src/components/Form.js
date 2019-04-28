import React from 'react';

const Form = (props) => {
    console.log(props)
    return (

        <div className="card">
            <form>
                <div className="row">
                    <div className="col">
                        <div className="card-header">
                            <h5>Book Search</h5>

                        </div>
                        <div className="card-body">
                            <input onChange={props.onChange} name="search" value={props.search} type="text" className="form-control" placeholder="Book" />
                            <button onClick={props.apiCall} type="submit" className="btn btn-primary mt-3">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
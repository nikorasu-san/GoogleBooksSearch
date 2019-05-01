import React from 'react';

const Button = (props) => {
    const buttonStyle = {
        width: "100%"
    }
    // If boolean is present from the "saved" page component, show remove button. Otherwise show save button. 
    return (
        props.savedPage ? <button onClick={() => props.remove(props.book._id)} type="remove" className="btn btn-primary m-1" style={buttonStyle}>Remove</button>
            : <button onClick={() => props.save(props.book)} type="submit" className="btn btn-primary m-1" style={buttonStyle}>Save</button>

    )
}

export default Button
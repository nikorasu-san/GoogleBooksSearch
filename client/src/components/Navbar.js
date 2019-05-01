import React from 'react';

const Navbar = () => {

    const navStyle = {
        background: "skyblue"
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
            <a className="navbar-brand" href="/">Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/">Search</a>
                    <a className="nav-item nav-link" href="/saved">Save</a>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
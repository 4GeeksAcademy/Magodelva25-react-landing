import React from "react";

export const NavBar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.pageName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse lg-d-flex justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="#">{props.firstLink}</a>
                    <a className="nav-link" href="#">{props.secondLink}</a>
                    <a className="nav-link" href="#">{props.lastLink}</a>
                </div>
            </div>
            </div>
        </nav>
    );

}
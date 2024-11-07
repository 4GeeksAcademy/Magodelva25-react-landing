import React from "react";
import "./../../styles/index.css";

const navBarItems = ['About', 'Works', 'Contact'];

export const HeroSection = (props) => {
    return (
        <section className="p-5 mb-1 bg-body-tertiary rounded-4 hero-slider">
            <div className="container-fluid py-5">
                <div className="row">
                <div className="col-sm-4 col-md-9 col-lg-10">
                    <h1>{props.mainTitle}</h1>
                    </div>
                </div>
                <div className="row">
                <div className="col-xs-4 col-md-9 col-lg-10">
                    <p>{props.mainDescription}</p>
                </div>
                </div>
            </div>
        </section>
    )
}
import React from "react";
import "./../../styles/index.css";

const navBarItems = ['About', 'Works', 'Contact'];

export const HeroSection = () => {
    return (
        <section className="p-5 mb-1 bg-body-tertiary rounded-4 hero-slider">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold .fs-1">This is a Pineaple</h1>
                <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                <button className="btn btn-primary btn-lg" type="button">Example button</button>
            </div>
        </section>
    )
}
import React from "react";

export const Footer = (props) => {
    return (
        <footer className="footer"> 
        <p>{props.copyRigth}</p>
        <div className="d-flex">
            <ul className="footer-links">
                <li><a href="#"> About </a></li>
                <li><a href="#"> Work </a></li>
                <li><a href="#"> Contact </a></li>
                <li><a href="https://www.linkedin.com/in/mangodev/"> Linkedin </a></li>
                <li><a href="https://github.com/Magodelva25"> Github </a></li>
            </ul>
        </div>
        
        </footer>
    )
}
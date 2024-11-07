import React from "react";



export const ProductSection = (props) => {
    return (
        <section className="container-fluid p-0 bento-section">
            <div className="row g-4 bento-container">
                <div className="col-md-8">
                    <a href="https://github.com/Magodelva25">
                        <div className="bento-item bento-tall bg-primary">
                            <div className="card-content">
                                <h3>{props.mainCardTitle}</h3>
                                <p>{props.mainCardDescription}</p>
                            </div>
                        </div>
                    </a>    
                </div>
                <div className="col-md-4">
                    <div className="row g-4">
                        <div className="col-12">
                            <a href="https://github.com/Magodelva25">
                                <div className="bento-item bg-success">
                                    <div className="card-content">
                                        <h3>{props.secondCardTitle}</h3>
                                        <p>{props.secondCardDescription}</p>
        
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-12">
                            <a href="https://github.com/Magodelva25">
                                <div className="bento-item bg-danger">
                                    <div className="card-content">
                                        <h3>{props.thirdCardTitle}</h3>
                                        <p>{props.thirdCardDescription}</p>
                                    </div>
                                </div>
                            </a>   
                        </div>
                    </div>
                </div>
            
                <div className="col-md-4">
                    <a href="https://github.com/Magodelva25">
                        <div className="bento-item bg-warning text-dark">
                            <div className="card-content">
                                <h3>{props.fourthCardTitle}</h3>
                                <p>{props.fourthCardDescription}</p>
                            </div>
                        </div>
                    </a>    
                </div>
            
                <div className="col-md-4">
                    <a href="https://github.com/Magodelva25">
                        <div className="bento-item bg-info text-dark">
                            <div className="card-content">
                                <h3>{props.fifthCardTitle}</h3>
                                <p>{props.fifthCardDescription}</p>
                            </div>
                        </div>
                    </a>
                </div>
            
                <div className="col-md-4">
                    <a href="https://github.com/Magodelva25">
                        <div className="bento-item bg-secondary">
                            <div className="card-content">
                                <h3>{props.sixthCardTitle}</h3>
                                <p>{props.sixthCardDescription}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
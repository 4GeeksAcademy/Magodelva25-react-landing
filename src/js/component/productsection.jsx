import React from "react";


export const ProductSection = () => {
    return (
        <section className="container-fluid p-0">
            <div className="row g-4 bento-container">
                <div className="col-md-8">
                    <div className="bento-item bento-tall bg-primary">
                        <title> Esta es la primera carta</title>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="bento-item bg-success">
                                Small Item 1
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bento-item bg-danger">
                                Small Item 2
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-md-4">
                    <div className="bento-item bg-warning text-dark">
                        Medium Item 1
                    </div>
                </div>
            
                <div className="col-md-4">
                    <div className="bento-item bg-info text-dark">
                        Medium Item 2
                    </div>
                </div>
            
                <div className="col-md-4">
                    <div className="bento-item bg-secondary">
                        Medium Item 3
                    </div>
                </div>
            </div>
        </section>
    );
}
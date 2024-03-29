import React, { Component } from 'react';
import spine1 from '../../../image/spine1.jpg';
import spine2 from '../../../image/spine2.jpg';
import backpain from '../../../image/backpain.jpg';

 const ProductSlider = (props) => {
   
        return(
            <div>
                <div className="slider_title">
                    <h1>NOSSOS <span className="font_normal">TRATAMENTOS</span></h1>
                    <div className="slider_title_border"/>
                </div> {/* .slider_title */}
                <div id="productSlider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row productSlider_row">
                                <div className="col_3">
                                    <div className="productSlider_image fluid_image">
                                        <img src={spine1}/>
                                    </div> {/* .productSlider_image */}
                                </div> {/* .col */}
                                <div className="col_3">
                                    <div className="productSlider_image fluid_image">
                                        <img src={spine2}/>
                                    </div> {/* .productSlider_image */}
                                </div> {/* .col */}
                                <div className="col_3">
                                    <div className="productSlider_image fluid_image">
                                        <img src={backpain}/>
                                    </div> {/* .productSlider_image */}
                                </div> {/* .col */}
                            </div> {/* .row */}
                            <a className="carousel-control-prev productSlider_control" href="#productSlider" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon productSlider_icon" aria-hidden="true"/>
                                <span className="sr-only">Previous</span>
                            </a> {/* .carousel-prev */}
                            <a className="carousel-control-next productSlider_control" href="#productSlider" role="button" data-slide="next">
                                <span className="carousel-control-next-icon productSlider_icon" aria-hidden="true"/>
                                <span className="sr-only">Next</span>
                            </a> {/* .carousel-next */}
                        </div> {/* .carousel-item */}
                    </div> {/* .carousel-inner */}
                </div> {/* .carousel */}
            </div>
        );
    
}

export default ProductSlider;
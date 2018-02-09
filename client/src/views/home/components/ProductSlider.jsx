import React, { Component } from 'react';
import spine1 from '../../../image/spine1.jpg';
import spine2 from '../../../image/spine2.jpg';
import backpain from '../../../image/backpain.jpg';

export default class ProductSlider extends Component{
    render(){
        return(
            <div>
                <div id="productSlider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col_1">
                                    <a className="carousel-control-prev" href="#productSlider" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                        <span className="sr-only">Previous</span>
                                    </a> {/* .carousel-prev */}
                                </div> {/* .col */}
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
                                <div className="col_1">
                                    <a className="carousel-control-next" href="#productSlider" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                                        <span className="sr-only">Next</span>
                                    </a> {/* .carousel-next */}
                                </div> {/* .col */}
                            </div> {/* .row */}
                                
                        </div> {/* .carousel-item */}
                    </div> {/* .carousel-inner */}
                    
                    
                </div> {/* .carousel */}
            </div>
        );
    }
}
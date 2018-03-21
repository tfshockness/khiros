import React, { Component, PureComponent } from 'react';
import Slider1 from '../../../image/slider.jpg';

export default class MainSlider extends PureComponent{
    
    render(){
        return(
            <div className="slider_wrapper">
                <div id="maincarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={Slider1} alt="First slide"/>
                            <h1 className="carousel_text">CONHECA NOSSO TRATAMENTO DE QUIROPRAXIA</h1>
                            <h3 className="carousel_sub_text"><i className="fa fa-play-circle fa-2x"/>&nbsp;VEIA NOSSO VIDEO</h3>
                        </div> {/* .carousel-item */}
                        <div className="carousel-item">
                            <img className="d-block w-100" src={Slider1} alt="First slide"/>
                            <h1 className="carousel_text">CONHECA NOSSO TRATAMENTO DE QUIROPRAXIA</h1>
                            <h3 className="carousel_sub_text"><i className="fa fa-play-circle"/>&nbsp;VEIA NOSSO VIDEO</h3>
                        </div> {/* .carousel-item */}
                        <div className="carousel-item">
                            <img className="d-block w-100" src={Slider1} alt="First slide"/>
                            <h1 className="carousel_text">CONHECA NOSSO TRATAMENTO DE QUIROPRAXIA</h1>
                            <h3 className="carousel_sub_text"><i className="fa fa-play-circle"/>&nbsp;VEIA NOSSO VIDEO</h3>
                        </div> {/* .carousel-item */}
                    </div> {/* .carousel-inner */}
                    <a className="carousel-control-prev" href="#maincarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a> {/* .carousel-prev */}
                    <a className="carousel-control-next" href="#maincarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a> {/* .carousel-next */}
                </div> {/* .carousel */}
            </div>  // .slider_wrapper
        );
    }
}
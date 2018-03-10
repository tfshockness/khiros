import React , { Component } from 'react';
import demo1 from '../../../image/demo1.jpg';
import demo2 from '../../../image/demo2.jpg';
import demo3 from '../../../image/demo3.jpg';

export default class InfoBoxes extends Component{
    render(){
        return(
            <div>
                <div className="slider_title">
                    <h1>VIDEOS E <span className="font_normal">ARTIGOS</span></h1>
                    <div className="slider_title_border"/>
                </div> {/* .slider_title */}

                <div className="info_boxes">
                    <div className="info_box">
                        <img src={demo1}/>
                        <p className="info_box_absolute">Profile</p>
                        <h2>Farhad Agajan</h2>
                        <p>How refugees enrich their new homes with hope and grit.</p>
                    </div> {/* .info_box */}
                    <div className="info_box">
                        <img src={demo2}/>
                        <p className="info_box_absolute">Profile</p>
                        <h2>Farhad Agajan</h2>
                        <p>How refugees enrich their new homes with hope and grit.</p>
                    </div> {/* .info_box */}
                    <div className="info_box">
                        <img src={demo3}/>
                        <p className="info_box_absolute">Profile</p>
                        <h2>Farhad Agajan</h2>
                        <p>How refugees enrich their new homes with hope and grit.</p>
                    </div> {/* .info_box */}
                    <div className="info_box">
                        <img src={demo1}/>
                        <p className="info_box_absolute">Profile</p>
                        <h2>Farhad Agajan</h2>
                        <p>How refugees enrich their new homes with hope and grit.</p>
                    </div> {/* .info_box */}
                    <div className="info_box">
                        <img src={demo2}/>
                        <p className="info_box_absolute">Profile</p>
                        <h2>Farhad Agajan</h2>
                        <p>How refugees enrich their new homes with hope and grit.</p>
                    </div> {/* .info_box */}
                    <div className="info_box">
                        <img src={demo3}/>
                        <p className="info_box_absolute">Profile</p>
                        <h2>Farhad Agajan</h2>
                        <p>How refugees enrich their new homes with hope and grit.</p>
                    </div> {/* .info_box */}
                </div> {/* .info_boxes */}
            </div>
        );
    }
}
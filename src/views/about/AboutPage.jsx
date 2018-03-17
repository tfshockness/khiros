import React, { Component } from 'react';
import john from '../../image/john.png';

export default class AboutPage extends Component{
    
    render(){
        return(
            <div className="container">
                <h1 className="khiros-page-title">Our amazing team</h1>
                <div className="khiros-page-general">
                    <p className="sobre_top">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Proin euismod, purus ullamcorper gravida auctor, felis sem feugiat est, 
                        a convallis mi felis ac velit. Nulla sodales egestas ipsum, vel mattis metus 
                        sodales et. Sed et nibh pharetra, semper mauris at, placerat augue. 
                        Pellentesque condimentum scelerisque volutpat.
                    </p>
                    <div className="row justify-content-md-center">
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={john}/>
                                </div> {/* .col */}
                                <div className="col-md-6">
                                    <h1 className="team_name">John Doe</h1>
                                    <h2 className="team_position">Web Designer</h2>
                                    <p className="team_intro">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Proin euismod, purus ullamcorper gravida auctor
                                    </p>
                                </div> {/* .col */}
                            </div> {/* .row */}
                        </div> {/* .col */}

                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={john}/>
                                </div> {/* .col */}
                                <div className="col-md-6">
                                    <h1 className="team_name">John Doe</h1>
                                    <h2 className="team_position">Web Designer</h2>
                                    <p className="team_intro">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Proin euismod, purus ullamcorper gravida auctor
                                    </p>
                                </div> {/* .col */}
                            </div> {/* .row */}
                        </div> {/* .col */}
                    </div> {/* .row */}

{/* Second Row */}
                    <div className="row justify-content-md-center mt-5 mb-3">
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={john}/>
                                </div> {/* .col */}
                                <div className="col-md-6">
                                    <h1 className="team_name">John Doe</h1>
                                    <h2 className="team_position">Web Designer</h2>
                                    <p className="team_intro">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Proin euismod, purus ullamcorper gravida auctor
                                    </p>
                                </div> {/* .col */}
                            </div> {/* .row */}
                        </div> {/* .col */}

                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={john}/>
                                </div> {/* .col */}
                                <div className="col-md-6">
                                    <h1 className="team_name">John Doe</h1>
                                    <h2 className="team_position">Web Designer</h2>
                                    <p className="team_intro">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Proin euismod, purus ullamcorper gravida auctor
                                    </p>
                                </div> {/* .col */}
                            </div> {/* .row */}
                        </div> {/* .col */}
                    </div> {/* .row */}
                </div>
            </div>
        );
    }
}
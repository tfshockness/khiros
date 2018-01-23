import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogPage extends Component {

  render() {
    return (
        <div className="container">

            <div className="row post">
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 text-center">
                    <div className="post_date text-center mb-2">
                        <h3>3</h3>
                        <h6>12, 2017</h6>   
                    </div> {/* .post_date */}
                </div> {/* .col (date) */}

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
                    <div className="post_photo fluid_image">
                       <img src="https://essencevegas.com/wp-content/uploads/2017/11/essence-christmas-featured-495x400.jpg" alt="Somthing to get rid of the msg"/>
                    </div> {/* .post_photo */}
                </div> {/* .col (photo) */}

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="post_content">
                        <Link to="/blogDetail-1" className="post_title">
                            <h4>Cannabis edibles for the Christmas table</h4>
                        </Link>
                        <p>
                            Christmas will be here soon, and this year, why not make it a truly “green” Christmas – one that’s chock-full of cannabis?
                            In our Thanksgiving post, we showed you how to make cannabis-infused butter, turkey, mashed potatoes, and cranberry and orange relish sauce.
                            You can use those same recipes on Christmas Day and combine them with these new ones, starting with…
                        </p>
                        <Link to="/blogDetail-1" className="post_read_more float-right">Read More > </Link>
                    </div> {/* .post_content */}
                </div> {/* .col (content) */}
            </div> {/* .row .post */}


            <div className="row post">
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 text-center">
                    <div className="post_date text-center mb-2">
                        <h3>1</h3>
                        <h6>12, 2017</h6>   
                    </div> {/* .post_date */}
                </div> {/* .col (date) */}

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
                    <div className="post_photo fluid_image">
                       <img src="https://essencevegas.com/wp-content/uploads/2017/10/blog-workout-streatching-grid-495x400.jpg" alt="Somthing to get rid of the msg"/>
                    </div> {/* .post_photo */}
                </div> {/* .col (photo) */}

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="post_content">
                        <Link to="/blogDetail-2" className="post_title">
                            <h4>Adding CBD To Your Workout Regimen</h4>
                        </Link>
                        <p>
                            You’ve just finished a strenuous workout. Your muscles feel like hamburger meat. Maybe you’re 
                            feeling a little queasy or even full-on nauseous.
                            Sure, you can reach for those standard over-the-counter painkillers to help you through that discomfort...
                        </p>
                        <Link to="/blogDetail-2" className="post_read_more float-right">Read More > </Link>
                    </div> {/* .post_content */}
                </div> {/* .col (content) */}
            </div> {/* .row .post */}

            <div className="row post">
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 text-center">
                    <div className="post_date text-center mb-2">
                        <h3>29</h3>
                        <h6>11, 2017</h6>   
                    </div> {/* .post_date */}
                </div> {/* .col (date) */}

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
                    <div className="post_photo fluid_image">
                       <img src="https://essencevegas.com/wp-content/uploads/2017/07/cannabis-for-chronic-pain-495x400.jpg" alt="Somthing to get rid of the msg"/>
                    </div> {/* .post_photo */}
                </div> {/* .col (photo) */}

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="post_content">
                        <Link to="/blogDetail-3" className="post_title">
                            <h4>Cannabis For Chronic Pains</h4>
                        </Link>
                        <p>
                            Let’s make this super easy. Basically, diabetes is when your metabolism 
                            just doesn’t work the way it’s supposed to. There’s more than one type of diabetes, 
                            but in general, it’s characterized by high blood sugar levels...  
                        </p>
                        <Link to="/blogDetail-3" className="post_read_more float-right">Read More > </Link>
                    </div> {/* .post_content */}
                </div> {/* .col (content) */}
            </div> {/* .row .post */}


        </div>
    );
  }
}

export default BlogPage;
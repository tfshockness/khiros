import React from 'react';

const Footer = () => (
    <div>
        <footer className="footer khiros-footer">
            <div className="container mt-5 mb-4 text-center">
                <div className="row mt-3">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 footer_first_column">
                        <h6 className="footer_title font-bold"><strong>ATENDIMENTO</strong></h6>
                        <div className="footer_content">
                            <i className="fa fa-phone fa-2x mr-2"/>
                            <p className="d-inline-block mb-2 align-top mt-1">(69)3202-0285</p>
                        </div>
                    </div>
                    {/* First column */}

                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <h6 className="footer_title font-bold"><strong>FALE CONOSCO</strong></h6>
                        <div className="footer_content">
                            <i className="fa fa-comment fa-2x mr-2"/>
                            <p className="d-inline-block mb-2 align-top mt-1">Queremos saber suas<br/>criticas e sugestdes.</p>
                        </div>
                    </div>
                    {/* Second column */}

                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <h6 className="footer_title font-bold"><strong>RADES SOCIAIS</strong></h6>
                        <div className="footer_content">
                            <i className="fa fa-facebook-f fa-2x mr-2"/>
                            <i className="fa fa-instagram fa-2x mr-2"/>
                        </div>
                    </div>
                    {/* Third column */}
                </div>
                {/* .row*/}
            </div>
            {/* .container */}
        </footer>
            {/* .footer */}
          
        <div className="footer-copyright">
            <div className="container-fluid">
                Copyright© W.I. Informatica
            </div>
        </div> {/* copyright*/}
    </div>
)


export default Footer;
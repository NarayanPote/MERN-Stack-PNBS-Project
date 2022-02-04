import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var img1 = require('./../../images/banner/bnr1.jpg');
var img2 = require('./../../images/background/bg5.jpg');

class Livetelecast extends Component {
    render() {
        return (
            <>

                <Header />

                <div className="page-content bg-white">

                    <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + img1 + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Livetelecast</h1>

                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
                                        <li>Home</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="section-full content-inner" style={{ backgroundImage: "url(" + img2 + ")", backgroundSize: "100%" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 m-b30">
                                    <div className="appointment-form">
                                        <div className="section-head m-b30">
                                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/1pvfus9rD6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        
                                        </div>
                                        <div className="dzFormMsg"></div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </>
        )
    }


}

export default Livetelecast;
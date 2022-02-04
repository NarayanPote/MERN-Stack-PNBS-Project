import React, { Component } from 'react';
import Switch from "react-switch";
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

var bnr = require('./../../images/banner/bnr3.jpg');

class CardDesign extends Component {

    constructor() {
        super();
        this.state = { checked: false, checked1: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }
    handleChange1(checked1) {
        this.setState({ checked1 });
    }


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">

                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Actor Profile</h1>

                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to={'./'}>Home</Link></li>
                                        <li>Actor Profile</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="section-full content-inner">

                        <div className="showbiz">
                            <div className="row">
                                <div className="col-xl-2 col-lg-4 col-md-5 m-b30">
                                    <aside className="side-bar shop-categories sticky-top">
                                        <div className="dlab-accordion advanced-search toggle" id="accordion1">
                                            <div className="panel">
                                                <div className="acod-head">
                                                    <h5 className="acod-title">
                                                        <Link data-toggle="collapse" to="#categories">
                                                            Main
                                                        </Link>
                                                    </h5>
                                                </div>
                                                <div id="categories" className="acod-body collapse show">
                                                    <div className="acod-content">
                                                        <div className="widget_services">

                                                            <div className="dlab-tabs product-description tabs-site-button m-t30">
                                                                <ul className="nav nav-tabs">
                                                                    <li><Link data-toggle="tab" to={'/profile-sidebar'} >Personal Information</Link></li>
                                                                    <li><Link data-toggle="tab" to={'/actorintroduction'} >Introduce Yourself</Link></li>
                                                                    <li><Link data-toggle="tab" to={'/actorphysicaldes'}>Physical Description</Link></li>
                                                                    <li><Link data-toggle="tab" to={'/actorclothingmeasur'}>Clothing Measurement</Link></li>
                                                                    <li><Link data-toggle="tab" to={'/actorprofilephoto'}>Profile Photos</Link></li>
                                                                    <li><Link data-toggle="tab" to={'/actorphotogallery'}>Photo Gallery</Link></li>
                                                                    <li><Link data-toggle="tab" to={'/carddesign'} className="active">Card Design</Link></li>
                                                                    <li><Link data-toggle="tab" to={'/workexperience'} >Work Experience</Link></li>
                                                                    <li><Link data-toggle="tab" to={'/sport'}>Sport</Link></li>
                                                                    <li><Link data-toggle="tab" to={'/training'}>Training/Coaching</Link></li>
                                                                    <li><Link data-toggle="tab" to={'/languages'}>Languages</Link></li>
                                                                    <li><Link data-toggle="tab" to={'/opening'}>Current Opening</Link></li>
                                                                    <li><Link data-toggle="tab" to={'/news'}>News And Media</Link></li>
                                                                    <li><Link data-toggle="tab" to={'/messages'}>Messages</Link></li>
                                                                    <li><Link data-toggle="tab" to={'/portfoliothemes'}>Portfolio Themes</Link></li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                                <div className="col-xl-10 col-lg-8 col-md-7">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="tab-content">
                                                <form id="login" className="tab-pane active" >
                                                    <h3 className="m-b5">Comp Card Set Up</h3>
                                                    <div className="row sp15">
                                                        <div className="col-xl-9 col-lg-9 col-md-9">
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-lg-8 col-md-12">
                                                                        <div className="adv-box">
                                                                            <img src={require('./../../images/ads/compcardimg_2.jpg')} alt="" />
                                                                        </div>
                                                                        <div class="dlab-post-title">
                                                                            <h4 class="post-title">Actor Name, 25Yrs</h4>
                                                                            <h4 class="">Actor, Model, Catwalker</h4>
                                                                        </div>

                                                                        <div className="col-lg-12">
                                                                            <div className="table-responsive m-b50">
                                                                                <table className="table check-tbl">
                                                                                    <thead>
                                                                                        <tr >
                                                                                            <td>
                                                                                                <span className="bold">Height</span>
                                                                                                <br />
                                                                                                <span>185</span>
                                                                                            </td>
                                                                                            <td>
                                                                                                <span className="bold">Weight</span>
                                                                                                <br />
                                                                                                <span>185</span>
                                                                                            </td>
                                                                                            <td>
                                                                                                <span className="bold">Breast</span>
                                                                                                <br />
                                                                                                <span>79</span>
                                                                                            </td>

                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <span className="bold">Waist</span>
                                                                                                <br />
                                                                                                <span>59</span>
                                                                                            </td>
                                                                                            <td>
                                                                                                <span className="bold">Hips</span>
                                                                                                <br />
                                                                                                <span>87</span>
                                                                                            </td>
                                                                                            <td>
                                                                                                <span className="bold">Hair Color</span>
                                                                                                <br />
                                                                                                <span>blue</span>
                                                                                            </td>

                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <span className="bold">Skin</span>
                                                                                                <br />
                                                                                                <span>blue</span>
                                                                                            </td>
                                                                                            <td>
                                                                                                <span className="bold">Eye Color</span>
                                                                                                <br />
                                                                                                <span>blue</span>
                                                                                            </td>
                                                                                            <td>
                                                                                                <span className="bold">Shoe Size</span>
                                                                                                <br />
                                                                                                <span>blue</span>
                                                                                            </td>

                                                                                        </tr>


                                                                                    </thead>
                                                                                    {/* <tbody>
											<tr className="alert">
                                                <td className="product-item-totle">Height<br /><span>185</span></td>
												<td className="product-item-totle">Weight<br /><span>65</span></td>
												<td className="product-item-totle">Breast<br /><span>79</span></td>
											</tr>
                                            <tr className="alert">
                                                <td className="product-item-totle">Height<br /><span>185</span></td>
												<td className="product-item-totle">Weight<br /><span>65</span></td>
												<td className="product-item-totle">Breast<br /><span>79</span></td>
											</tr>
                                            <tr className="alert">
                                                <td className="product-item-totle">Height<br /><span>185</span></td>
												<td className="product-item-totle">Weight<br /><span>65</span></td>
												<td className="product-item-totle">Breast<br /><span>79</span></td>
											</tr>
											
										</tbody> */}
                                                                                </table>
                                                                            </div>
                                                                        </div>

                                                                    </div>


                                                                    <div className="col-lg-4 col-md-12">
                                                                        <div className="row">
                                                                            <div className="col-lg-10 col-md-10">
                                                                                <div className="adv-box">
                                                                                    <img src={require('./../../images/ads/compcardimg_3.jpg')} alt="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-lg-10 col-md-10">
                                                                                <div className="adv-box">
                                                                                    <img src={require('./../../images/ads/compcardimg_4.jpg')} alt="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-lg-10 col-md-10">
                                                                                <div className="adv-box">
                                                                                    <img src={require('./../../images/ads/compcardimg_10.jpg')} alt="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* <div className="col-lg-3 col-md-6">
								<div className="adv-box">
									<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv5.jpg')} alt="" /></Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="adv-box">
									<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv6.jpg')} alt="" /></Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="adv-box">
									<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv7.jpg')} alt="" /></Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="adv-box">
									<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv8.jpg')} alt="" /></Link>
								</div>
							</div> */}

                                                                    <div className="row">
                                                                        <div class="col-sm-3">
                                                                            <div class="adv-box">
                                                                                <img src={require('./../../images/ads/compcardimg_3.jpg')} alt="" />
                                                                            </div>

                                                                        </div>
                                                                        <div class="col-sm-3">
                                                                            <div class="adv-box">
                                                                                <img src={require('./../../images/ads/compcardimg_4.jpg')} alt="" />
                                                                            </div>

                                                                        </div>
                                                                        <div class="col-sm-3">
                                                                            <div class="adv-box">
                                                                                <img src={require('./../../images/ads/compcardimg_5.jpg')} alt="" />
                                                                            </div>

                                                                        </div>
                                                                        <div class="col-sm-3">
                                                                            <div class="adv-box">
                                                                                <img src={require('./../../images/ads/compcardimg_6.jpg')} alt="" />
                                                                            </div>

                                                                        </div>


                                                                    </div>
                                                                    {/* <div className="row sp15"> 
                                                                    <div className="col-lg-6 col-md-12">
                                                                        <div className="row">
                                                                            <div className="col-lg-6 col-md-6">
                                                                                <div className="adv-box">
                                                                                    <img src={require('./../../images/ads/nophoto.jpg')} alt="" />
                                                                                    
                                                                                </div>
                                                                                
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-6">
                                                                                <div className="adv-box">
                                                                                    <img src={require('./../../images/ads/nophoto.jpg')} alt="" />
                                                                                </div>
                                                                            </div>
                                                                            
                                                                      
                                                                        </div>
                                                                    </div>
                                                                    </div> */}

                                                                </div>
                                                            </div>

                                                        </div>


                                                        <div className="col-xl-3 col-lg-3 col-md-3" style={{ 'background-color': '#D7D7D7', 'overflowY': 'scroll', 'overflowX': 'hidden', 'height': '727px' }}>
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="adv-box">
                                                                        <img src={require('./../../images/ads/compcardimg_5.jpg')} alt="" />
                                                                    </div>
                                                                    <label style={{ 'margin-left': '150px' }}><Switch onChange={this.handleChange} checked={this.state.checked} required /></label>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="adv-box">
                                                                        <img src={require('./../../images/ads/compcardimg_6.jpg')} alt="" />
                                                                    </div>
                                                                    <label style={{ 'margin-left': '150px' }}><Switch onChange={this.handleChange1} checked1={this.state.checked1} /></label>
                                                                </div>

                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="adv-box">
                                                                        <img src={require('./../../images/ads/compcardimg_7.jpg')} alt="" />
                                                                    </div>
                                                                    <label style={{ 'margin-left': '150px' }}><Switch onChange={this.handleChange} checked={this.state.checked} /></label>
                                                                </div>

                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="adv-box">
                                                                        <img src={require('./../../images/ads/compcardimg_8.jpg')} alt="" />
                                                                    </div>
                                                                    <label style={{ 'margin-left': '150px' }}><Switch onChange={this.handleChange} checked={this.state.checked} /></label>
                                                                </div>

                                                            </div>


                                                        </div>


                                                    </div>

                                                    {/* <div className="text-left">
														<button type="submit" className="btn btnhover">SUBMIT</button>
													</div> */}

                                                </form>
                                            </div>
                                        </div>
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
export default CardDesign;
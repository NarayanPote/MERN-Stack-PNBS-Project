import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

var bnr = require('./../../images/banner/bnr3.jpg');

class ActorClothingMeasur extends Component {
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
																<li><Link data-toggle="tab" to={'/profile-sidebar'}>Personal Information</Link></li>
																<li><Link data-toggle="tab" to={'/actorintroduction'} >Introduce Yourself</Link></li>
																<li><Link data-toggle="tab" to={'/actorphysicaldes'}>Physical Description</Link></li>
																<li><Link data-toggle="tab" to={'/actorclothingmeasur'} className="active">Clothing Measurement</Link></li>
																<li><Link data-toggle="tab" to={'/actorprofilephoto'}>Profile Photos</Link></li>
																<li><Link data-toggle="tab" to={'/actorphotogallery'}>Photo Gallery</Link></li>
																<li><Link data-toggle="tab" to={'/carddesign'}>Card Design</Link></li>
																<li><Link data-toggle="tab" to={'/workexperience'}>Work Experience</Link></li>
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
													<h3 className="m-b5">Clothing Measurement(All Measurement's in inches)</h3>
													<div className="row sp15">
                                                    <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Bust/Chest </label>
																<input required="" className="form-control" placeholder="Bust/Chest" type="text" />
															</div>
														</div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Waist </label>
																<input required="" className="form-control" placeholder="Waist" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Low Waist </label>
																<input required="" className="form-control" placeholder="Low Waist" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Low Low Waist </label>
																<input required="" className="form-control" placeholder="Low Low Waist" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Hips </label>
																<input required="" className="form-control" placeholder="Hips" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Shoulder </label>
																<input required="" className="form-control" placeholder="Shoulder" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Above Bust/Chest </label>
																<input required="" className="form-control" placeholder="Above Bust/Chest" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Below Bust/Chest </label>
																<input required="" className="form-control" placeholder="Below Bust/Chest" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Dart Point </label>
																<input required="" className="form-control" placeholder="Dart Point" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Shoulder to Bust/Chest </label>
																<input required="" className="form-control" placeholder="Shoulder to Bust/Chest" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Shoulder to Waist </label>
																<input required="" className="form-control" placeholder="Shoulder to Waist" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Shoulder to Knee </label>
																<input required="" className="form-control" placeholder="Shoulder to Knee" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Shoulder to Ankle </label>
																<input required="" className="form-control" placeholder="Shoulder to Ankle" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Shoulder to Floor </label>
																<input required="" className="form-control" placeholder="Shoulder to Floor" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Trouser Lenght </label>
																<input required="" className="form-control" placeholder="Trouser Lenght" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Thigh Round </label>
																<input required="" className="form-control" placeholder="Thigh Round" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Full Sleeve </label>
																<input required="" className="form-control" placeholder="Full Sleeve" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Half Sleeve </label>
																<input required="" className="form-control" placeholder="Half Sleeve" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Elbow Length </label>
																<input required="" className="form-control" placeholder="Elbow Length" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Arm Whole </label>
																<input required="" className="form-control" placeholder="Arm Whole" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Neck Round </label>
																<input required="" className="form-control" placeholder="Neck Round" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Head Round </label>
																<input required="" className="form-control" placeholder="Head Round" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Wrist Round </label>
																<input required="" className="form-control" placeholder="Wrist Round" type="text" />
															</div>
														</div>
                                                        </div>
                                                   
													<div className="text-left">
														<button type="submit" className="btn btnhover">SUBMIT</button>
													</div>

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
export default ActorClothingMeasur;
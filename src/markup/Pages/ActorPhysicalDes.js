import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

var bnr = require('./../../images/banner/bnr3.jpg');

class ActorPhysicalDes extends Component {

	constructor(props) {
		super(props);
		this.divstatus1 = this.divstatus1.bind(this);
		this.divstatus2 = this.divstatus2.bind(this);
		this.state = {
			value1: 'no',
			value2: 'no'
		};
	}

	divstatus1 = (e) => {
		this.setState({ value1: e.target.value });
	}

	divstatus2 = (e) => {
		this.setState({ value2: e.target.value });
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
																<li><Link data-toggle="tab" to={'/profile-sidebar'}>Personal Information</Link></li>
																<li><Link data-toggle="tab" to={'/actorintroduction'} >Introduce Yourself</Link></li>
																<li><Link data-toggle="tab" to={'/actorphysicaldes'} className="active">Physical Description</Link></li>
																<li><Link data-toggle="tab" to={'/actorclothingmeasur'}>Clothing Measurement</Link></li>
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
													<h3 className="m-b5">Physical Description</h3>
													<div className="row sp15">
                                                    <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Complexion *</label>
																<div className="input-group">
																	<select className="form-control">
																		<option>Select </option>
																		<option value="">Fair </option>
																		<option value="">Wheatish</option>
                                                                        <option value="">Tan</option>
																	</select>
																</div>
															</div>
														</div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Skin *</label>
																<div className="input-group">
																	<select className="form-control">
																		<option>Select </option>
																		<option value="">Fair </option>
																		<option value="">Wheatish</option>
                                                                        <option value="">Tan</option>
																	</select>
																</div>
															</div>
														</div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Eye Color *</label>
																<div className="input-group">
																	<select className="form-control">
																		<option>Select </option>
																		<option value="">Black </option>
																		<option value="">Brown</option>
                                                                        <option value="">Green</option>
                                                                        <option value="">Blue</option>
                                                                        <option value="">Hazel</option>
																	</select>
																</div>
															</div>
														</div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Hair Color *</label>
																<div className="input-group">
																	<select className="form-control">
																		<option>Select </option>
																		<option value="">White </option>
																		<option value="">Black</option>
																	</select>
																</div>
															</div>
														</div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Physique *</label>
																<div className="input-group">
																	<select className="form-control">
                                                                        <option>Select </option>
																		<option value="">Black </option>
																		<option value="">Brown</option>
                                                                        <option value="">Green</option>
                                                                        <option value="">Blue</option>
                                                                        <option value="">Hazel</option>
																	</select>
																</div>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Height </label>
																<input required="" className="form-control" placeholder="Height" type="text" />
															</div>
														</div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Weight </label>
																<input required="" className="form-control" placeholder="Weight" type="text" />
															</div>
														</div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Bust Size </label>
																<input required="" className="form-control" placeholder="Bust Size" type="text" />
															</div>
														</div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Waist Size </label>
																<input required="" className="form-control" placeholder="Waist Size" type="text" />
															</div>
														</div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Hip Size </label>
																<input required="" className="form-control" placeholder="Hip Size" type="text" />
															</div>
														</div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Shoe Type </label>
																<div className="input-group">
																	<select className="form-control">
                                                                        <option>Select </option>
																		<option value="">Indian </option>
																		<option value="">European</option>
																	</select>
																</div>
															</div>
														</div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Shoe Size </label>
																<div className="input-group">
																	<select className="form-control">
                                                                        <option>Select </option>
																		<option value="">6 </option>
																		<option value="">7</option>
                                                                        <option value="">8</option>
                                                                        <option value="">9</option>
                                                                        <option value="">10</option>
																	</select>
																</div>
															</div>
														</div>
                                                        </div>
                                                    <h3 className="m-b5">Other Physical Details</h3>
													<div className="row sp15">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
															<div className="form-group">
																<label>Do you have tattoos ? </label>
																<div className="input-group">
																	<select className="form-control" onChange={this.divstatus1}>
                                                                        <option>Select </option>
																		<option value="yes">Yes </option>
																		<option value="no">No</option>
																	</select>
																</div>
															</div>
														</div>
														</div>

                                                       
														<div className={this.state.value1} >
														<div className="row sp15">
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Which part of body ? </label>
																<div className="input-group">
																	<select className="form-control">
                                                                        <option>Select </option>
																		<option value="">Indian </option>
																		<option value="">European</option>
																	</select>
																</div>
															</div>
														</div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Tatto Size </label>
																<div className="input-group">
																	<select className="form-control">
                                                                        <option>Select </option>
																		<option value="">Small </option>
																		<option value="">Medium</option>
                                                                        <option value="">Large</option>
																	</select>
																</div>
															</div>
														</div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>No. of tattoos </label>
																<div className="input-group">
																	<select className="form-control">
                                                                        <option>Select 1</option>
																		<option value=""> 2</option>
																		<option value="">3</option>
                                                                        <option value="">4</option>
                                                                        <option value="">5</option>
                                                                        <option value="">6</option>
																	</select>
																</div>
															</div>
														</div>
														</div></div>
														<div className="row sp15">
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Do you have any mark on your face ? </label>
																<div className="input-group">
																	<select className="form-control" onChange={this.divstatus2}>
                                                                        <option>Select </option>
																		<option value="yes">Yes </option>
																		<option value="no">No</option>
																	</select>
																</div>
															</div>
														</div>
														
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
														<div className={this.state.value2} >
															<div className="form-group">
																<label>Which type of face mark ? </label>
																<div className="input-group">
																	<select className="form-control">
                                                                        <option>Select </option>
																		<option value="">Cut Mark </option>
																		<option value="">Chicken Pox</option>
                                                                        <option value="">Pimples</option>
																	</select>
																</div>
															</div>
														</div>
														</div>
														</div>

													{/* </div> */}
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
export default ActorPhysicalDes;
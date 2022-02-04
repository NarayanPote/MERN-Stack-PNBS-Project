import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var bnr = require('./../../images/banner/bnr3.jpg');

class Profilesidebar extends Component {

	constructor(props) {
		super(props);
		this.divstatus1 = this.divstatus1.bind(this);
		this.divstatus2 = this.divstatus2.bind(this);
		this.divstatus3 = this.divstatus3.bind(this);
		this.state = {
			value1: 'no',
			value2: 'no',
			value3: 'no'
		};
	}

	divstatus1 = (e) => {
		this.setState({ value1: e.target.value });
	}

	divstatus2 = (e) => {
		this.setState({ value2: e.target.value });
	}

	divstatus3 = (e) => {
		this.setState({ value3: e.target.value });
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
																<li><Link data-toggle="tab" to={'/profile-sidebar'} className="active" >Personal Information</Link></li>
																<li><Link data-toggle="tab" to={'/actorintroduction'} >Introduce Yourself</Link></li>
																<li><Link data-toggle="tab" to={'/actorphysicaldes'}>Physical Description</Link></li>
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
													<h3 className="m-b5">Personal Information</h3>
													<div className="row sp15">
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>First Name *</label>
																<input required="" className="form-control" placeholder="First Name" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Last Name </label>
																<input required="" className="form-control" placeholder="Last Name" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Birthday *</label>
																<input required="" className="form-control" placeholder="Birthday" type="date" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Select Gender *</label>
																<div className="input-group">
																	<select className="form-control">
																		<option>Select </option>
																		<option value="male">Male </option>
																		<option value="female">Female</option>
																	</select>
																</div>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>E-Mail(The only to communicate with via showbiz) *</label>
																<input placeholder="hello@example.com" className="form-control" type="email" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Phone *</label>
																<input defaultValue="Phone" className="form-control " placeholder="Type Password" type="text" />
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Select Country *</label>
																<div className="input-group">
																	<select className="form-control">
																		<option>Select </option>
																		<option value="india">India </option>
																	</select>
																</div>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Select State *</label>
																<div className="input-group">
																	<select className="form-control">
																		<option>Select </option>
																		<option value="maharashtra">Maharashtra </option>
																	</select>
																</div>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Select City *</label>
																<div className="input-group">
																	<select className="form-control">
																		<option>Select </option>
																		<option value="pune">Pune </option>
																	</select>
																</div>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Postal Code </label>
																<input defaultValue="Postal Code" className="form-control " placeholder="Type Code" type="text" />
															</div>
														</div>
													</div>
													<h3 className="m-b5">Personal Information</h3>
													<div className="row sp15">
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Can you drive two wheeler ?</label>
																<div className="input-group">
																	<select className="form-control">
																		<option>Select </option>
																		<option value="yes">Yes </option>
																		<option value="no">No </option>
																	</select>
																</div>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Can you drive four wheeler ?</label>
																<div className="input-group">
																	<select className="form-control">
																		<option>Select </option>
																		<option value="yes">Yes </option>
																		<option value="no">No </option>
																	</select>
																</div>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Do you have valid two wheeler licence ?</label>
																<div className="input-group">
																	<select className="form-control">
																		<option>Select </option>
																		<option value="yes">Yes </option>
																		<option value="no">No </option>
																	</select>
																</div>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Do you have vliad four wheeler licence ?</label>
																<div className="input-group">
																	<select className="form-control">
																		<option>Select </option>
																		<option value="yes">Yes </option>
																		<option value="no">No </option>
																	</select>
																</div>
															</div>
														</div>
													</div>
													<h3 className="m-b5">Actor Card</h3>
													<div className="row sp15">
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Do you have actor card ?</label>
																<div className="input-group">
																	<select className="form-control" onChange={this.divstatus1}>
																		<option>Select </option>
																		<option value="yes">Yes </option>
																		<option value="no">No </option>
																	</select>
																</div>
															</div>
														</div>

														<div className="col-lg-6 col-md-6 col-sm-6 ">
															<div className={this.state.value1} >
																<div className="form-group">
																	<label>Card Number </label>
																	<input defaultValue="Card Number" className="form-control " placeholder="Card Number" type="text" />
																</div>
															</div>
														</div>
													</div>

													<h3 className="m-b5">Passpoer Details</h3>
													<div className="row sp15">
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Do you have passport ?</label>
																<div className="input-group">
																	<select className="form-control" onChange={this.divstatus2}>
																		<option>Select </option>
																		<option value="yes">Yes </option>
																		<option value="no">No </option>
																	</select>
																</div>
															</div>
														</div>
														</div>
														<div className={this.state.value2} >
														<div className="row sp15">
															<div className="col-lg-6 col-md-6 col-sm-6">
																<div className="form-group">
																	<label>Passport Number </label>
																	<input defaultValue="Passport Number" className="form-control " placeholder="Passport Number" type="text" />
																</div>
															</div>
															<div className="col-lg-6 col-md-6 col-sm-6">
																<div className="form-group">
																	<label>Place of Issue *</label>
																	<input required="" className="form-control" placeholder="Place of Issue" type="text" />
																</div>
															</div>
															<div className="col-lg-6 col-md-6 col-sm-6">
																<div className="form-group">
																	<label>Issue Date </label>
																	<input required="" className="form-control" placeholder="Issue Date" type="date" />
																</div>
															</div>
															<div className="col-lg-6 col-md-6 col-sm-6">
																<div className="form-group">
																	<label>Expiry Date </label>
																	<input required="" className="form-control" placeholder="Expiry Date" type="date" />
																</div>
															</div>
														</div></div>
														<div className="row sp15">
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Willingness to travel within country ?</label>
																<div className="input-group">
																	<select className="form-control">
																		<option>Select </option>
																		<option value="yes">Yes </option>
																		<option value="no">No </option>
																	</select>
																</div>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Willingness to travel abroad ?</label>
																<div className="input-group">
																	<select className="form-control">
																		<option>Select </option>
																		<option value="yes">Yes </option>
																		<option value="no">No </option>
																	</select>
																</div>
															</div>
														</div>
														</div>
												
													<h3 className="m-b5">Representation</h3>
													<div className="row sp15">
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Please Provide Your Representation</label>
																<div className="input-group">
																	<select className="form-control" onChange={this.divstatus3}>
																		<option>Select </option>
																		<option value="yes">Yes </option>
																		<option value="no">No </option>
																	</select>
																</div>
															</div>
														</div>
														</div>
														<div className={this.state.value3} >
														<div className="row sp15">
															<div className="col-lg-6 col-md-6 col-sm-6">
																<div className="form-group">
																	<label>Name </label>
																	<input defaultValue="name" className="form-control " placeholder="Name" type="text" />
																</div>
															</div>
															<div className="col-lg-6 col-md-6 col-sm-6">
																<div className="form-group">
																	<label>Contact Number </label>
																	<input defaultValue="number" className="form-control " placeholder="Contact Number" type="text" />
																</div>
															</div>
															<div className="col-lg-6 col-md-6 col-sm-6">
																<div className="form-group">
																	<label>Email </label>
																	<input defaultValue="email" className="form-control " placeholder="Email" type="email" />
																</div>
															</div>
															<div className="col-lg-6 col-md-6 col-sm-6">
																<div className="form-group">
																	<label>Agency Conact Number </label>
																	<input defaultValue="agencynumber" className="form-control " placeholder="Agency Number" type="text" />
																</div>
															</div>

														</div></div>
												
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
export default Profilesidebar;
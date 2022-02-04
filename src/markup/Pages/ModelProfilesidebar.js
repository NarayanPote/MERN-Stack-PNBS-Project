import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import CountryStateCity from './../Element/CountryStateCity';

var bnr = require('./../../images/banner/bnr3.jpg');

class ModelProfilesidebar extends Component {

	render() {
		return (
			<>
				<Header />

				<div className="page-content bg-white">

					<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
						<div className="container">
							<div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Model Profile</h1>

								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={'./'}>Home</Link></li>
										<li>Model Profile</li>
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
														<Link  >
															Main
														</Link>
													</h5>
												</div>
												<div id="categories" className="acod-body collapse show">
													<div className="acod-content">
														<div className="widget_services">


															<div className="dlab-tabs product-description tabs-site-button m-t30">
																<ul className="nav nav-tabs">
																	<li><Link data-toggle="tab" to={'#'} className="active" >Personal Information</Link></li>
																	{/* <li><Link data-toggle="tab" to={''} >Introduce Yourself</Link></li> */}
																	{/* <li><Link data-toggle="tab" to={'/actorphysicaldes'}>Physical Description</Link></li>
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
																<li><Link data-toggle="tab" to={'/messages'}>Messages</Link></li> */}

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

														{/* <div className="dynamic-dropdown">
															<select
																value={this.state.selectedCountry}
																onChange={this.changeCountry}
															>
																<option value="">Please select Country</option>
																{this.state.countryList.map((x, i) => {
																	return <option key={i}>{x}</option>;
																})}
															</select>
															<br />
															<select value={this.state.selectedState} onChange={this.changeState}>
																<option value="">Please select State/Province</option>
																{this.state.stateList.map((x, i) => {
																	return <option key={i}>{x}</option>;
																})}
															</select>
															<br />
															<select value={this.state.selectedCity} onChange={this.changeCity}>
																<option value="">Please select City</option>
																{this.state.cityList.map((x, i) => {
																	return <option key={i}>{x}</option>;
																})}
															</select>
														</div> */}

														<CountryStateCity />
														
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Postal Code </label>
																<input defaultValue="Postal Code" className="form-control " placeholder="Type Code" type="text" />
															</div>
														</div>
													</div>
													{/* <h3 className="m-b5">Personal Information</h3>
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
													</div> */}

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
export default ModelProfilesidebar;
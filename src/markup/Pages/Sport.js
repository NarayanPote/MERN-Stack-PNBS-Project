import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Multiselect } from "multiselect-react-dropdown";
import Select from "react-select";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

var bnr = require('./../../images/banner/bnr3.jpg');

class Sport extends Component {

	constructor(props) {
		super(props);

		this.state = { selectedOption: "" };
	}

	options = [
		{ value: "Football ", label: "Football" },
		{ value: "Cricket ", label: "Cricket " },
		{ value: "Hockey", label: "Hockey" },
		{ value: "Tennis", label: "Tennis" },
		{ value: "Volleyball ", label: "Volleyball " },
		{ value: "Table Tennis", label: "Table Tennis" },
		{ value: "Basketball", label: "Basketball" },
		{ value: "Baseball ", label: "Baseball " },
		{ value: "Rugby ", label: "Rugby " },
		{ value: "Golf", label: "Golf" }
	];

	handleChange = selectedOption => {
		this.setState({ selectedOption });
	};

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
																	<li><Link data-toggle="tab" to={'/carddesign'}>Card Design</Link></li>
																	<li><Link data-toggle="tab" to={'/workexperience'}>Work Experience</Link></li>
																	<li><Link data-toggle="tab" to={'/sport'} className="active">Sport</Link></li>
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
													<h3 className="m-b5">Sport Details</h3>
													<div className="row sp15">
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>Can You Swim ?</label>
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
																<label>Can You do Horse Riding ?</label>
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

													<div className="row sp15">
														<div className="col-lg-6 col-md-6 col-sm-6">
															<div className="form-group">
																<label>What You Play </label>
																<div className="col-lg-12 col-md-12 col-sm-12">
																	<Select 
																		isMulti
																		value={this.state.selectedOption}
																		onChange={this.handleChange}
																		options={this.options}
																	/>
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
export default Sport;
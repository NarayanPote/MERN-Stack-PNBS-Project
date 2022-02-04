	import React, { useState, useEffect } from 'react';
	import { Link, useHistory } from 'react-router-dom';
	import { useDispatch, useSelector } from 'react-redux';
	import { register } from '../actions/userActions';


	var bnr = require('./../../images/banner/bnr1.jpg');


	const data = {
		countries: [

			{
				name: "India",
				states: [
					{ name: "Maharashatra", cities: ["Pune", "Nagpur", "Mumbai", "Nashik"] }
				]
			}
		]
	};




	const Shopregister = () => {

		const [name, setName] = useState("");
		const [address, setAddress] = useState("");
		const [pincode, setPincode] = useState("");
		const [contact, setContact] = useState("");
		const [email, setEmail] = useState("");
		const [website, setWebsite] = useState("");
		const [clubregistrationnumber, setClubregistrationnumber] = useState("");
		const [yearofestabilishment, setYearofestabilishment] = useState("");
		const [trustformed, setTrustformed] = useState("");
		const [aandgregister, setAandgregister] = useState("");
		const [clublogo, setClublogo] = useState("");
		const [country, setcountry] = useState();
		const [state, setstate] = useState();
		const [city, setcity] = useState();
		const [password, setPassword] = useState("");

		const [errorMessage, setErrorMessage] = useState("");
		const [successMessage, setSuccessMessage] = useState("");

		const dispatch = useDispatch();

		const userRegister = useSelector((state) => state.userRegister);
		const { userInfo } = userRegister;

		const history = useHistory();


		const availableState = data.countries.find((c) => c.name === country);
		const availableCities = availableState?.states?.find(
			(s) => s.name === state
		);

		useEffect(() => {
			if (userInfo) {
			history.push('/shop-login');
			}
		}, [history, userInfo]);


		const handleSubmit = async (e) => {
			e.preventDefault();
			dispatch(register(name, email, password, address , country, state, city, pincode, contact, website, clubregistrationnumber, yearofestabilishment, trustformed, aandgregister, clublogo));		
		};






		return (
			<>
				{/* <Header /> */}
				<div className="page-content bg-white">
					<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
						<div className="container">
							<div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Register</h1>

								{errorMessage && (
									<span style={{ color: "red", fontWeight: 600, fontSize: 25 }}>
										{errorMessage}
									</span>
								)}
								{successMessage && (
									<span style={{ color: "green", fontWeight: 600, fontSize: 25 }}>
										{successMessage}
									</span>
								)}

								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={'./'}>Home</Link></li>
										<li>Register</li>
									</ul>
								</div>

							</div>
						</div>
					</div>
					<div className="section-full content-inner-2 shop-account">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 text-center">
									<h2 className="m-b40 m-md-b20">Club Registration</h2>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="p-a30 border-1 max-w500 m-auto radius-sm">
										<div className="tab-content">
											<form id="login" className="tab-pane active" onSubmit={handleSubmit}>
												{/* <h3 className="m-b5">Club Registration</h3> */}

												{errorMessage && (
													<span style={{ color: "red", fontWeight: 600, fontSize: 25 }}>
														{errorMessage}
													</span>
												)}
												{successMessage && (
													<span style={{ color: "green", fontWeight: 600, fontSize: 25 }}>
														{successMessage}
													</span>
												)}


												<div className="row sp15">
													<div className="col-lg-12 col-md-12 col-sm-12">
														<div className="form-group" onChange={(e) => setName(e.target.value)}>
															<label>Club Name *</label>
															<input required="" className="form-control" placeholder="Club Name" type="text" />
														</div>
													</div>
													<div className="col-lg-12 col-md-12 col-sm-12">
														<div className="form-group" onChange={(e) => setAddress(e.target.value)}>
															<label>Address </label>
															<input required="" className="form-control" placeholder="Address" type="text" />
														</div>
													</div>





													<div className="col-lg-4 col-md-4 col-sm-4">
														<div className="form-group">
															<label>Select countrie *</label>
															<div className="input-group">
																<select className="form-control" placeholder="Country"
																	value={country}
																	onChange={(e) => setcountry(e.target.value)} >
																	<option>Select </option>

																	{data.countries.map((value, key) => {
																		return (
																			<option value={value.name} key={key}>
																				{value.name}
																			</option>
																		);
																	})}


																	{/* <option value="maharashtra">Maharashtra </option> */}
																</select>
															</div>
														</div>
													</div>


													<div className="col-lg-4 col-md-4 col-sm-4">
														<div className="form-group">
															<label>Select state *</label>
															<div className="input-group">
																<select className="form-control" placeholder="State"
																	value={state}
																	onChange={(e) => setstate(e.target.value)} >
																	<option>Select </option>
																	{/* <option value="pune">Pune </option> */}

																	{availableState?.states.map((e, key) => {
																		return (
																			<option value={e.name} key={key}>
																				{e.name}
																			</option>
																		);
																	})}

																</select>
															</div>
														</div>
													</div>


													<div className="col-lg-4 col-md-4 col-sm-4">
														<div className="form-group">
															<label>Select City *</label>
															<div className="input-group">
																<select className="form-control" placeholder="City"
																	value={city}
																	onChange={(e) => setcity(e.target.value)}
																>
																	<option>Select </option>
																	{/* <option value="pune">Pune </option> */}

																	{availableCities?.cities.map((e, key) => {
																		return (
																			<option value={e.name} key={key}>
																				{e}
																			</option>
																		);
																	})}

																</select>
															</div>
														</div>
													</div>


													<div className="col-lg-6 col-md-6 col-sm-6" onChange={(e) => setPincode(e.target.value)}>
														<div className="form-group">
															<label>Pin Code *</label>
															<input required="" className="form-control" placeholder="Pin Code" type="text" />
														</div>
													</div>

													<div className="col-lg-6 col-md-6 col-sm-6" onChange={(e) => setContact(e.target.value)}>
														<div className="form-group">
															<label>Contact Number *</label>
															<input defaultValue="Phone" className="form-control " placeholder="Contact Number" type="text" />
														</div>
													</div>

													<div className="col-lg-12 col-md-12 col-sm-12" onChange={(e) => setEmail(e.target.value)}>
														<div className="form-group">
															<label>E-Mail *</label>
															<input placeholder="hello@example.com" className="form-control" type="email" />
														</div>
													</div>

													

				
													<div className="col-lg-12 col-md-12 col-sm-12" onChange={(e) => setWebsite(e.target.value)}>
														<div className="form-group">
															<label>Website *</label>
															<input required="" className="form-control" placeholder="Website" type="text" />
														</div>
													</div>

													<div className="col-lg-6 col-md-6 col-sm-6" onChange={(e) => setClubregistrationnumber(e.target.value)}>
														<div className="form-group">
															<label>Club Registration Number </label>
															<input className="form-control " placeholder="Club Registration Number" type="text" />
														</div>
													</div>

													<div className="col-lg-6 col-md-6 col-sm-6" onChange={(e) => setYearofestabilishment(e.target.value)}>
														<div className="form-group">
															<label>Year Of Establishment </label>
															<input placeholder="Year Of Establishment" className="form-control" type="text" />
														</div>
													</div>

													<div className="col-lg-12 col-md-12 col-sm-12" onChange={(e) => setTrustformed(e.target.value)}>
														<div className="form-group">
															<label>Trust Formed</label>
															<div className="input-group">
																<select className="form-control">
																	<option>Select </option>
																	<option value="yes">Yes </option>
																	<option value="no">No</option>
																</select>
															</div>
														</div>
													</div>


												</div>

												<div className="row sp15">
													<div className="col-lg-12 col-md-12 col-sm-12" onChange={(e) => setAandgregister(e.target.value)}>
														<div className="form-group">
															<label>Do you have 12 A and 80G registered :</label>
															<div className="input-group">
																<select className="form-control">
																	<option>Select </option>
																	<option value="yes">Yes </option>
																	<option value="no">No</option>
																</select>
															</div>
														</div>
													</div>
												</div>

												<div className="row sp15">
													<div className="col-lg-12 col-md-12 col-sm-12" onChange={(e) => setClublogo(e.target.value)}>
														<div className="form-group">
															<label>Club Logo :</label>
															<input placeholder="Club Logo" className="form-control" type="text" />
														</div>
													</div>
												</div>

												<div className="form-group" onChange={(e) => setPassword(e.target.value)} >
													<label>Password *</label>
													<input defaultValue="Password" className="form-control " placeholder="Type Password" type="password" />
												</div>


												<div className="row sp15">
													<div className="col-lg-12 col-md-12 col-sm-12">
														<div className="text-center">
															<button type="submit" className="btn btnhover">SUBMIT</button>
														</div>
													</div>
												</div>

											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <Footer  /> */}
			</>

		)
	}

	export default Shopregister;

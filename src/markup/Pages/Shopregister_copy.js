import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import axios from 'axios';

var bnr = require('./../../images/banner/bnr1.jpg');

const Shopregister = ( { history } )=> {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/user/register",
        { name, email, password },
        config
      );

      console.log(data);
      setErrorMessage("");
      setSuccessMessage("Successfully Registered !");
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      setErrorMessage("User Already Exists!");
      setSuccessMessage("");
    }

	history.push("/shop-login");


  };


	return(
		<>
		<Header />
			<div className="page-content bg-white">
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style= {{backgroundImage:"url(" + bnr + ")"}}>
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
								<h2 className="m-b40 m-md-b20">Create An Account</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="p-a30 border-1 max-w500 m-auto radius-sm">
									<div className="tab-content">
										<form id="login" className="tab-pane active" onSubmit={handleSubmit}>
											<h3 className="m-b5">Personal Information</h3>
											<p>If you have an account with us, please log in.</p>
											<div className="form-group" onChange={(e) => setName(e.target.value)} >
												<label>First Name *</label>
												<input required="" className="form-control" placeholder="First Name" type="text" />
											</div>
											
											<div className="form-group" onChange={(e) => setEmail(e.target.value)} >
												<label>E-Mail *</label>
												<input placeholder="hello@example.com" className="form-control" type="email" />
											</div>
											<div className="form-group" onChange={(e) => setPassword(e.target.value)} >
												<label>Password *</label>
												<input defaultValue="Password" className="form-control " placeholder="Type Password" type="password" />
											</div>
											<div className="text-left">
												<button  type="submit" className="btn btnhover">CREATE</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer  />
		</>
	
	)
}

export default  Shopregister;
 
import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
// import ImagesUploader from 'react-images-uploader';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

var bnr = require('./../../images/banner/bnr3.jpg');


const teamInfo = [
	{
		image: require('./../../images/our-team/nophoto.jpg'),
		name: 'Left Close Up',
	},
	{
		image: require('./../../images/our-team/nophoto.jpg'),
		name: 'Left 3/4 Close Up',
	},
	{
		image: require('./../../images/our-team/nophoto.jpg'),
		name: 'Front Close Up',
	},
	{
		image: require('./../../images/our-team/nophoto.jpg'),
		name: 'Right 3/4 Close Up',
		post: 'Master Chef',
	},
	{
		image: require('./../../images/our-team/nophoto.jpg'),
		name: 'Right Close Up',
	},
]

const teamInfo1 = [
	{
		image: require('./../../images/our-team/nophoto.jpg'),
		name: 'Left',
	},
	{
		image: require('./../../images/our-team/nophoto.jpg'),
		name: 'Left 3/4',
	},
	{
		image: require('./../../images/our-team/nophoto.jpg'),
		name: 'Front',
	},
	{
		image: require('./../../images/our-team/nophoto.jpg'),
		name: 'Right 3/4',
		post: 'Master Chef',
	},
	{
		image: require('./../../images/our-team/nophoto.jpg'),
		name: 'Right',
	},
]



class ActorProfilePhoto extends Component {

	constructor() {
		super();
		this.state = {
			show: false,
			show1: false
		}
	}
	handleModal() {
		this.setState({ show: !this.state.show })
	}
	handleModal1() {
		this.setState({ show1: !this.state.show1 })
	}

	handleFileUpload = event => {
		console.log(event.target.files[0].name);
	};

	downloadFile = () => {
		fetch('http://localhost:3000/react/static/media/pic1.e877f507.jpg')
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'pic1.e877f507.jpg';
					a.click();
				});
				//window.location.href = response.url;
			});
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
																	<li><Link data-toggle="tab" to={'/actorprofilephoto'} className="active">Profile Photos</Link></li>
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
													<h3 className="m-b5">Profile Photo</h3>
													<p></p>
													<div className="row sp15">
														{/* <h4 className="m-b5">Without Make up/ Photo Filters - Close up Photos</h4><br></br> */}

														{teamInfo.map((item, index) => (

															<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
																<div className="team-info text-center">
																	<h4 className="name">{item.name}</h4>
																	{/* <p className="position">{item.post}</p> */}
																</div>
																<div className="thumb" >
																	<img src={item.image} alt="" />
																	{/* <ul className="social-link">
																			<li><Link to={''}><i className="fa fa-facebook"></i></Link></li>
																			<li><Link to={''}><i className="fa fa-twitter"></i></Link></li>
																		</ul> */}
																</div>
																<div className="team-info text-center">
																	<div className="m-t20">
																		<ul className="dlab-social-icon dlab-social-icon-lg">
																			<li><Link to={''} className="fa fa-tag bg-primary mr-1" aria-hidden="true"></Link></li>
																			<li><Link onClick={() => this.refs.fileInput.click()} className="fa fa-upload bg-primary mr-1" aria-hidden="true"></Link></li>
																			<input ref="fileInput" onChange={this.handleFileUpload} type="file" style={{ display: "none" }} />
																			{/* multiple={false} */}
																			<li><Link onClick={() => this.handleModal()} className="fa fa-trash bg-primary " aria-hidden="true"></Link></li>

																		</ul>
																	</div>
																</div>


																<Modal show={this.state.show} onHide={() => this.handleModal()}>
																	<Modal.Header closeButton>Are You Sure You Want to Delete This Photo ?</Modal.Header>
																	<Modal.Body>
																		<div className="thumb" >
																			<img src={item.image} alt="" />
																		</div>
																	</Modal.Body>
																	<Modal.Footer>
																		{/* <Button onClick={() => this.handleModal()}>Close</Button> */}
																		{/* <Button onClick={() => this.handleModal()}>Yes</Button> */}
																		<button type="submit" className="btn btnhover">Yes</button>
																	</Modal.Footer>
																</Modal>

															</div>
														))}
													</div>
													<h3 className="m-b5">Complete Profile Photo</h3>
													<p></p>
													<div className="row sp15">
														{teamInfo1.map((item, index) => (

															<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
																<div className="team-info text-center">
																	<h4 className="name">{item.name}</h4>
																	{/* <p className="position">{item.post}</p> */}
																</div>
																<div className="thumb" >
																	<img src={item.image} alt="" />
																	{/* <ul className="social-link">
						<li><Link to={''}><i className="fa fa-facebook"></i></Link></li>
						<li><Link to={''}><i className="fa fa-twitter"></i></Link></li>
					</ul> */}
																</div>
																<div className="team-info text-center">
																	<div className="m-t20">
																		<ul className="dlab-social-icon dlab-social-icon-lg">
																			<li><Link to={''} className="fa fa-tag bg-primary mr-1" aria-hidden="true"></Link></li>
																			<li><Link onClick={this.downloadFile} className="fa fa-download bg-primary mr-1" download aria-hidden="true"></Link></li>
																			<li><Link onClick={() => this.handleModal1()} className="fa fa-trash bg-primary " aria-hidden="true"></Link></li>
																		{/* <a class="btn btnhover" href="/react/shop-product-details"> Info</a>
																		<a class="btn btnhover" href="/react/shop-product-details"> Download</a>
																		<a class="btn btnhover" href="/react/shop-product-details"> Delete</a> */}
																		</ul>
																	
																	</div>
																</div>


																<Modal show={this.state.show1} onHide={() => this.handleModal1()}>
																	<Modal.Header closeButton>Are You Sure You Want to Delete This Photo ?</Modal.Header>
																	<Modal.Body>
																		<div className="thumb" >
																			<img src={item.image} alt="" />
																		</div>
																	</Modal.Body>
																	<Modal.Footer>
																		{/* <Button onClick={() => this.handleModal1()}>Close</Button> */}
																		{/* <Button onClick={() => this.handleModal1()}>Yes</Button> */}
																			<button type="submit" className="btn btnhover">Yes</button>
																	</Modal.Footer>
																</Modal>

															</div>
														))}


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
export default ActorProfilePhoto;
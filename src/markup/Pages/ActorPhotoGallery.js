import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

var bnr = require('./../../images/banner/bnr3.jpg');

const teamInfo = [
	{
		image: require('./../../images/our-team/nophoto.jpg'),
		name: 'Avatar Photograph',
	},
	{
		image: require('./../../images/our-team/nophoto.jpg'),
		name: 'Photo Without Makeup',
	},
	{
		image: require('./../../images/our-team/nophoto.jpg'),
		name: 'Close up of your Face',
	}
]

// const teamInfo1 = [
// 	{
// 		image: require('./../../images/our-team/nophoto.jpg'),
// 	},
// 	{
// 		image: require('./../../images/our-team/nophoto.jpg'),
// 	},
// 	{
// 		image: require('./../../images/our-team/nophoto.jpg'),
// 	},
// 	{
// 		image: require('./../../images/our-team/nophoto.jpg'),
// 	},
// 	{
// 		image: require('./../../images/our-team/nophoto.jpg'),
// 	},
// ]


class ActorPhotoGallery extends Component {

	fileObj = [];
	fileArray = [];

	constructor() {
		super();

		this.onDrop = this.onDrop.bind(this);
		this.state = {
			show: false,
			show1: false,
			valueselect: "",
			pictures: [],
			file: [null]
		}

		this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
		this.uploadFiles = this.uploadFiles.bind(this)
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

	onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
			pictures: this.state.pictures.concat(pictureFiles)
		});
	}

	uploadMultipleFiles(e) {
		this.fileObj.push(e.target.files)
		for (let i = 0; i < this.fileObj[0].length; i++) {
			this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
		}
		this.setState({ file: this.fileArray })
	}

	uploadFiles(e) {
		e.preventDefault()
		console.log(this.state.file)
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
																	<li><Link data-toggle="tab" to={'/actorphotogallery'} className="active">Photo Gallery</Link></li>
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
													<h3 className="m-b5">Photo Gallery</h3>
													<div className="row sp15">
														{teamInfo.map((item, index) => (

															<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
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
																			<li><Link onClick={() => this.refs.fileInput.click()} className="fa fa-edit bg-primary mr-1" aria-hidden="true"></Link></li>
																			<input ref="fileInput" onChange={this.handleFileUpload} type="file" style={{ display: "none" }} />
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
																		<Button onClick={() => this.handleModal()}>Yes</Button>
																	</Modal.Footer>
																</Modal>

															</div>
														))}


													</div>
													<div className="row">
														<div className="col-lg-5 text-lg-left">
															<h3 className="m-b5">Your Photographs</h3>
														</div>
														<div class="col-lg-7 text-lg-right">
															<h3 className="m-b5" onClick={() => this.handleModal1()}>+ Add Photos</h3>
														</div>
													</div>

													<div className="row sp15">

														<div className="widget widget_gallery gallery-grid-4">
															{/* <h5 className="widget-title style-1">Your Photographs</h5> */}
															<SimpleReactLightbox>
																<SRLWrapper >
																	<ul id="lightgallery" className="lightgallery">
																		<li>
																			<div className="dlab-post-thum dlab-img-effect">
																				<a href={require('./../../images/our-team/nophoto.jpg')} className="check-km" >
																					<img src={require('./../../images/our-team/nophoto.jpg')} alt="" />
																				</a>
																			</div>
																		</li>
																		<li>
																			<div className="dlab-post-thum dlab-img-effect">
																				<a href={require('./../../images/our-team/nophoto.jpg')} className="check-km" >
																					<img src={require('./../../images/our-team/nophoto.jpg')} alt="" />
																				</a>
																			</div>
																		</li>
																		<li>
																			<div className="dlab-post-thum dlab-img-effect">
																				<a href={require('./../../images/our-team/nophoto.jpg')} className="check-km" >
																					<img src={require('./../../images/our-team/nophoto.jpg')} alt="" />
																				</a>
																			</div>
																		</li>
																		<li>
																			<div className="dlab-post-thum dlab-img-effect">
																				<a href={require('./../../images/our-team/nophoto.jpg')} className="check-km" >
																					<img src={require('./../../images/our-team/nophoto.jpg')} alt="" />
																				</a>
																			</div>
																		</li>
																		<li>
																			<div className="dlab-post-thum dlab-img-effect">
																				<a href={require('./../../images/our-team/nophoto.jpg')} className="check-km" >
																					<img src={require('./../../images/our-team/nophoto.jpg')} alt="" />
																				</a>
																			</div>
																		</li>
																		<li>
																			<div className="dlab-post-thum dlab-img-effect">
																				<a href={require('./../../images/our-team/nophoto.jpg')} className="check-km" >
																					<img src={require('./../../images/our-team/nophoto.jpg')} alt="" />
																				</a>
																			</div>
																		</li>
																		{/* <li>
										<div className="dlab-post-thum dlab-img-effect">
											<a href={require('./../../images/our-team/nophoto.jpg')} className="check-km" >		
												<img src={require('./../../images/our-team/nophoto.jpg')} alt="" /> 
											</a>
										</div>
									</li>
									<li>
										<div className="dlab-post-thum dlab-img-effect">
											<a href={require('./../../images/our-team/nophoto.jpg')} className="check-km" >		
												<img src={require('./../../images/our-team/nophoto.jpg')} alt="" /> 
											</a>
										</div>
									</li> */}
																	</ul>
																</SRLWrapper>
															</SimpleReactLightbox>
														</div>
														<Modal show={this.state.show1} onHide={() => this.handleModal1()}>
															<Modal.Header closeButton>Add</Modal.Header>
															<Modal.Body>
																<div className="col-lg-12 col-md-12 col-sm-12">
																   <div className="row sp15">
																   {(this.fileArray || []).map((url, index) => (
																       <div class="col-sm-3" key={index}>
																			<div class="adv-box multi-preview">																																	
																						<img src={url}  alt="..." />																										
																				</div>
																		
																		</div>	
																		))}

																		
																	</div>
																	<div className="form-group ">
																		<label>Upload New Photographs *</label>
																		<input type="file" onChange={this.uploadMultipleFiles} multiple={true} />
																	</div>
																	<div className="text-left">
																		<button type="submit" className="btn btnhover" onClick={this.uploadFiles}>UPLOAD</button>
																	</div>
																</div>
  
															</Modal.Body>
															{/* {/* <Modal.Footer>
																		<Button onClick={() => this.handleModal1()}>Close</Button>
																		<Button onClick={() => this.handleModal1()}>Save</Button>
																	</Modal.Footer>  */}
														</Modal>



													</div>













													{/* <div className="row sp15">
														{teamInfo1.map((item, index) => (

															<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
																<div className="team-info text-center">
																	<h4 className="name">{item.name}</h4>
																	{/* <p className="position">{item.post}</p> 
																</div>
																<div className="thumb" >
																	<img src={item.image} alt="" />
																</div>


																

															</div>
															
														))}

														<Modal show={this.state.show1} onHide={() => this.handleModal1()}>
																	<Modal.Header closeButton>Add</Modal.Header>
																	<Modal.Body>
																		<div className="col-lg-12 col-md-12 col-sm-12">
																			<div className="form-group">
																				<label>Upload New Photographs *</label>
																				<input type="file" multiple={true} />
																			</div>
																			<div className="text-left">
																				<button type="submit" className="btn btnhover">UPLOAD</button>
																			</div>
																		</div>

																	</Modal.Body>
																	{/* <Modal.Footer>
																		<Button onClick={() => this.handleModal1()}>Close</Button>
																		<Button onClick={() => this.handleModal1()}>Save</Button>
																	</Modal.Footer> 
																</Modal>
													</div> */}

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
export default ActorPhotoGallery;
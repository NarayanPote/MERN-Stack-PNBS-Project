import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';


var bnr = require('./../../images/banner/bnr3.jpg');

class WorkExperience extends Component {

    constructor(props) {

        super(props); {
            // this.onDrop = this.onDrop.bind(this);
            this.state = {
                valueselect: "",
                file: null,
                value1: 'no'
                // pictures: [],
            };
            this.divstatus1 = this.divstatus1.bind(this);
            this.uploadSingleFile = this.uploadSingleFile.bind(this)
            this.upload = this.upload.bind(this)

        }

    }


    // onDrop(pictureFiles, pictureDataURLs) {
    //     this.setState({
    //         pictures: this.state.pictures.concat(pictureFiles)
    //     });
    // } 
    divstatus1 = (e) => {
        this.setState({ value1: e.target.value });
    }

    showhide = (e) => {
        console.log(e.target.value);
        const valueselect = e.target.value;

        this.setState({ valueselect });
    };

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }

    upload(e) {
        e.preventDefault()
        console.log(this.state.file)
    }


    render() {

        let imgPreview;
        if (this.state.file) {
            imgPreview = <img src={this.state.file} alt='' />;
        }

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
                                                                    <li><Link data-toggle="tab" to={'/workexperience'} className="active">Work Experience</Link></li>
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
                                                    <h3 className="m-b5">Let the world know about your work <br></br>experience</h3>
                                                    <div className="row sp15">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                                    <label>Category *</label>
                                                                    <div className="input-group">
                                                                        <select className="form-control" onChange={this.showhide}>
                                                                            <option>Select </option>
                                                                            <option value="featuredfilm">Featured Film </option>
                                                                            <option value="shortfilm">Short Film</option>
                                                                            <option value="webseries">Web Series</option>
                                                                            <option value="documentary">Documentary</option>
                                                                            <option value="tvc">TVC</option>
                                                                            <option value="theater">Theater</option>
                                                                            <option value="actor">Actior</option>
                                                                            <option value="fashionshow">Fashion Show</option>
                                                                            <option value="musicvideo">Music Video</option>
                                                                            <option value="dubbing">Dubbing</option>
                                                                            <option value="printshoot">Print Shoot</option>
                                                                            <option value="others">Others</option>

                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {this.state.valueselect === "featuredfilm" &&
                                                                <div className="row sp15">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="form-group">
                                                                            <label>Project Name * </label>
                                                                            <input defaultValue="project name" className="form-control " placeholder="Project Name" type="text" />
                                                                        </div>
                                                                    </div>
                                                                    {/* </div>
                                                            <div className="row sp15"> */}
                                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="form-group">
                                                                            <label>Year</label>
                                                                            <div className="input-group">
                                                                                <select className="form-control">
                                                                                    <option>Select </option>
                                                                                    <option value="2001">2001</option>
                                                                                    <option value="2002">2002</option>
                                                                                    <option value="2003">2003</option>
                                                                                    <option value="2004">2004</option>
                                                                                    <option value="2005">2005</option>
                                                                                    <option value="2006">2006</option>
                                                                                    <option value="2007">2007</option>
                                                                                    <option value="2008">2008</option>
                                                                                    <option value="2009">2009</option>
                                                                                    <option value="2010">2010</option>
                                                                                    <option value="2011">2011</option>
                                                                                    <option value="2012">2012</option>
                                                                                    <option value="2013">2013</option>
                                                                                    <option value="2014">2014</option>
                                                                                    <option value="2015">2015</option>
                                                                                    <option value="2016">2016</option>
                                                                                    <option value="2017">2017</option>
                                                                                    <option value="2018">2018</option>
                                                                                    <option value="2019">2019</option>
                                                                                    <option value="2020">2020</option>
                                                                                    <option value="2021">2021</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* </div>
                                                            <div className="row sp15"> */}
                                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="form-group">
                                                                            <label>Direction</label>
                                                                            <input defaultValue="direction" className="form-control " placeholder="" type="text" />
                                                                        </div>
                                                                    </div>
                                                                    {/* </div>
                                                            <div className="row sp15"> */}
                                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="form-group">
                                                                            <label>Production House </label>
                                                                            <input defaultValue="production" className="form-control " placeholder="Project Name" type="text" />
                                                                        </div>
                                                                    </div>
                                                                    {/* </div>
                                                            <div className="row sp15"> */}
                                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="form-group">
                                                                            <label>Role</label>
                                                                            <div className="input-group">
                                                                                <select className="form-control">
                                                                                    <option>Select </option>
                                                                                    <option value="actor">Actor</option>
                                                                                    <option value="director">Director</option>
                                                                                    <option value="producer">Producer</option>
                                                                                    <option value="executiveproducer">Executive Producer</option>
                                                                                    <option value="castingdirector">Casting Director</option>
                                                                                    <option value="camera dept">Camera Department</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* </div>
                                                            <div className="row sp15"> */}
                                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="form-group">
                                                                            <label>Screen Presence </label>
                                                                            <input defaultValue="screen" className="form-control " placeholder="Project Name" type="time" />
                                                                        </div>
                                                                    </div>
                                                                    {/* </div>
                                                            <div className="row sp15"> */}
                                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="form-group">
                                                                            <label>Language</label>
                                                                            <div className="input-group">
                                                                                <select className="form-control">
                                                                                    <option>Select </option>
                                                                                    <option value="actor">Actor</option>
                                                                                    <option value="english">English</option>
                                                                                    <option value="hindi">Hindi</option>
                                                                                    <option value="marathi">Marathi</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* </div>
                                                            <div className="row sp15"> */}
                                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="form-group">
                                                                            <div class="col-sm-4">
                                                                                <div class="adv-box preview">
                                                                                    {imgPreview}
                                                                                </div>
                                                                            </div>
                                                                            <label>Character Photo *</label>
                                                                            <input type="file" className="form-control" onChange={this.uploadSingleFile} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="form-group">
                                                                            <label>YouTube Link </label>
                                                                            <input defaultValue="link" className="form-control " placeholder="YouTube Link" type="text" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="form-group">
                                                                        <input type="radio" name="publish" defaultValue="public" checked/> Public
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                        <input type="radio" name="publish" defaultValue="onlyforreg"  /> Only for registered agencies
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-left">
                                                                        <button type="submit" className="btn btnhover" >SUBMIT</button>
                                                                    </div>
                                                                </div>

                                                            }

                                                        </div>



                                                        <div className="col-md-6">
                                                            <h3 className="m-b5">Work List</h3>
                                                            <Accordion allowZeroExpanded>

                                                                <AccordionItem>
                                                                    <AccordionItemHeading>
                                                                        <AccordionItemButton>
                                                                            Feaured Film
                                                                        </AccordionItemButton>
                                                                    </AccordionItemHeading>
                                                                    <AccordionItemPanel>

                                                                        <div class="relative">
                                                                            <h5 class="m-tb10">Project Name  </h5>
                                                                            <div class="shop-item-rating">
                                                                                <span class="rating-bx"><Link onClick={this.divstatus1}>View</Link> </span>
                                                                                {/* <i className="fa fa-eye"></i>  */}
                                                                            </div>
                                                                        </div>
                                                                        <div className={this.state.value1} >
                                                                            <div className="acod-content">
                                                                                <div className="row sp15">
                                                                                    <div className="col-lg-5 col-md-6 col-sm-6">
                                                                                        <img src={require('./../../images/ads/compcardimg_2.jpg')} className="alignleft radius-md" alt="" />
                                                                                    </div>
                                                                                    <div className="col-lg-7 col-md-6 col-sm-6">
                                                                                        <div className="col-lg-12">
                                                                                            <div className="table-responsive m-b50">
                                                                                                <table className="table check-tbl">
                                                                                                    <thead>
                                                                                                        <tr >
                                                                                                            <td>
                                                                                                                <span>Project Year : </span>
                                                                                                                {/* <br />
                                                                                                <span>185</span> */}
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr >
                                                                                                            <td>
                                                                                                                <span>Production House : </span>
                                                                                                                {/* <br />
                                                                                                <span>185</span> */}
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr >
                                                                                                            <td>
                                                                                                                <span>Role :</span>
                                                                                                                {/* <br />
                                                                                                <span>185</span> */}
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr >
                                                                                                            <td>
                                                                                                                <span>Language :</span>
                                                                                                                {/* <br />
                                                                                                <span>185</span> */}
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr >
                                                                                                            <td>
                                                                                                                <span>YouTube Link :</span>
                                                                                                                {/* <br />
                                                                                                <span>185</span> */}
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    
                                                                                                    </thead>
                                                                                                </table>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                    </AccordionItemPanel>
                                                                </AccordionItem>
                                                                 <AccordionItem>
                                                                    <AccordionItemHeading>
                                                                        <AccordionItemButton>
                                                                            Short Film
                                                                        </AccordionItemButton>
                                                                    </AccordionItemHeading>
                                                                    <AccordionItemPanel>
                                                                        <p>
                                                                            In ad velit in ex nostrud dolore cupidatat consectetur
                                                                            ea in ut nostrud velit in irure cillum tempor laboris
                                                                            sed adipisicing eu esse duis nulla non.
                                                                        </p>
                                                                    </AccordionItemPanel>
                                                                </AccordionItem>
                                                                {/* <AccordionItem>
                                                                    <AccordionItemHeading>
                                                                        <AccordionItemButton>
                                                                            Web Series
                                                                        </AccordionItemButton>
                                                                    </AccordionItemHeading>
                                                                    <AccordionItemPanel>
                                                                        <p>
                                                                            In ad velit in ex nostrud dolore cupidatat consectetur
                                                                            ea in ut nostrud velit in irure cillum tempor laboris
                                                                            sed adipisicing eu esse duis nulla non.
                                                                        </p>
                                                                    </AccordionItemPanel>
                                                                </AccordionItem>
                                                                <AccordionItem>
                                                                    <AccordionItemHeading>
                                                                        <AccordionItemButton>
                                                                            Documentary
                                                                        </AccordionItemButton>
                                                                    </AccordionItemHeading>
                                                                    <AccordionItemPanel>
                                                                        <p>
                                                                            In ad velit in ex nostrud dolore cupidatat consectetur
                                                                            ea in ut nostrud velit in irure cillum tempor laboris
                                                                            sed adipisicing eu esse duis nulla non.
                                                                        </p>
                                                                    </AccordionItemPanel>
                                                                </AccordionItem>
                                                                <AccordionItem>
                                                                    <AccordionItemHeading>
                                                                        <AccordionItemButton>
                                                                            TVC
                                                                        </AccordionItemButton>
                                                                    </AccordionItemHeading>
                                                                    <AccordionItemPanel>
                                                                        <p>
                                                                            In ad velit in ex nostrud dolore cupidatat consectetur
                                                                            ea in ut nostrud velit in irure cillum tempor laboris
                                                                            sed adipisicing eu esse duis nulla non.
                                                                        </p>
                                                                    </AccordionItemPanel>
                                                                </AccordionItem>
                                                                <AccordionItem>
                                                                    <AccordionItemHeading>
                                                                        <AccordionItemButton>
                                                                            Theater
                                                                        </AccordionItemButton>
                                                                    </AccordionItemHeading>
                                                                    <AccordionItemPanel>
                                                                        <p>
                                                                            In ad velit in ex nostrud dolore cupidatat consectetur
                                                                            ea in ut nostrud velit in irure cillum tempor laboris
                                                                            sed adipisicing eu esse duis nulla non.
                                                                        </p>
                                                                    </AccordionItemPanel>
                                                                </AccordionItem>
                                                                <AccordionItem>
                                                                    <AccordionItemHeading>
                                                                        <AccordionItemButton>
                                                                            Actor
                                                                        </AccordionItemButton>
                                                                    </AccordionItemHeading>
                                                                    <AccordionItemPanel>
                                                                        <p>
                                                                            In ad velit in ex nostrud dolore cupidatat consectetur
                                                                            ea in ut nostrud velit in irure cillum tempor laboris
                                                                            sed adipisicing eu esse duis nulla non.
                                                                        </p>
                                                                    </AccordionItemPanel>
                                                                </AccordionItem>
                                                                <AccordionItem>
                                                                    <AccordionItemHeading>
                                                                        <AccordionItemButton>
                                                                            Fashioln Show
                                                                        </AccordionItemButton>
                                                                    </AccordionItemHeading>
                                                                    <AccordionItemPanel>
                                                                        <p>
                                                                            In ad velit in ex nostrud dolore cupidatat consectetur
                                                                            ea in ut nostrud velit in irure cillum tempor laboris
                                                                            sed adipisicing eu esse duis nulla non.
                                                                        </p>
                                                                    </AccordionItemPanel>
                                                                </AccordionItem>
                                                                <AccordionItem>
                                                                    <AccordionItemHeading>
                                                                        <AccordionItemButton>
                                                                            Music Video
                                                                        </AccordionItemButton>
                                                                    </AccordionItemHeading>
                                                                    <AccordionItemPanel>
                                                                        <p>
                                                                            In ad velit in ex nostrud dolore cupidatat consectetur
                                                                            ea in ut nostrud velit in irure cillum tempor laboris
                                                                            sed adipisicing eu esse duis nulla non.
                                                                        </p>
                                                                    </AccordionItemPanel>
                                                                </AccordionItem>
                                                                <AccordionItem>
                                                                    <AccordionItemHeading>
                                                                        <AccordionItemButton>
                                                                            Dubbing
                                                                        </AccordionItemButton>
                                                                    </AccordionItemHeading>
                                                                    <AccordionItemPanel>
                                                                        <p>
                                                                            In ad velit in ex nostrud dolore cupidatat consectetur
                                                                            ea in ut nostrud velit in irure cillum tempor laboris
                                                                            sed adipisicing eu esse duis nulla non.
                                                                        </p>
                                                                    </AccordionItemPanel>
                                                                </AccordionItem>
                                                                <AccordionItem>
                                                                    <AccordionItemHeading>
                                                                        <AccordionItemButton>
                                                                            Print Shoot
                                                                        </AccordionItemButton>
                                                                    </AccordionItemHeading>
                                                                    <AccordionItemPanel>
                                                                        <p>
                                                                            In ad velit in ex nostrud dolore cupidatat consectetur
                                                                            ea in ut nostrud velit in irure cillum tempor laboris
                                                                            sed adipisicing eu esse duis nulla non.
                                                                        </p>
                                                                    </AccordionItemPanel>
                                                                </AccordionItem>
                                                                <AccordionItem>
                                                                    <AccordionItemHeading>
                                                                        <AccordionItemButton>
                                                                           Others
                                                                        </AccordionItemButton>
                                                                    </AccordionItemHeading>
                                                                    <AccordionItemPanel>
                                                                        <p>
                                                                            In ad velit in ex nostrud dolore cupidatat consectetur
                                                                            ea in ut nostrud velit in irure cillum tempor laboris
                                                                            sed adipisicing eu esse duis nulla non.
                                                                        </p>
                                                                    </AccordionItemPanel>
                                                                </AccordionItem> */}
                                                            </Accordion>

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
export default WorkExperience;
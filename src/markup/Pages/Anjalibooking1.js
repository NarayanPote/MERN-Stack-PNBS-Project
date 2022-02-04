import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import axios from 'axios';

import { Form } from 'react-bootstrap';

var bnr = require('./../../images/banner/bnr1.jpg');

class Bhogbooking extends Component {


    constructor(props) {
        super(props);

        this.divstatus1 = this.divstatus1.bind(this);
        this.divstatus2 = this.divstatus2.bind(this);
        this.divstatus3 = this.divstatus3.bind(this);
        this.divstatus4 = this.divstatus4.bind(this);
        this.divstatus5 = this.divstatus5.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.day = this.day.bind(this);


     

        this.state = {
            valueselect: "",
            slot1: "",
            slot2: "",
            slot3: "",
            slot4: "",
            slot5: "",
            day: " ",
            Uslot1 : "100",
            Uslot2 : "100",
            Uslot3 : "100",
            Uslot4 : "100",
            Uslot5 : "100",
            usersCollection: [] ,
            
        };
    }


    day = (e) => {
        this.setState({ day: e.target.value });
    }


    divstatus1 = (e) => {
        this.setState({ slot1: e.target.value} );
        this.setState({ Uslot1: this.state.Uslot1 - e.target.value } );
    }
    divstatus2 = (e) => {
        this.setState({ slot2: e.target.value });
        this.setState({ Uslot2: this.state.Uslot2 - e.target.value } );
    }
    divstatus3 = (e) => {
        this.setState({ slot3: e.target.value });
        this.setState({ Uslot3: this.state.Uslot3 - e.target.value } );
    }
    divstatus4 = (e) => {
        this.setState({ slot4: e.target.value });
        this.setState({ Uslot4: this.state.Uslot4 - e.target.value } );
    }
    divstatus5 = (e) => {
        this.setState({ slot5: e.target.value });
        this.setState({ Uslot5: this.state.Uslot5 - e.target.value } );
    }

    showhide = (e) => {
        console.log(e.target.value);
        const valueselect = e.target.value;

        this.setState({ valueselect });
    };


    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            day: this.state.day,
            slot1: this.state.slot1,
            slot2: this.state.slot2,
            slot3: this.state.slot3,
            slot4: this.state.slot4,
            slot5: this.state.slot5,

        };

        axios.post('http://localhost:3000/api/anjalis1/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

            window.location.href = "/Anjalibooking1";

        this.setState({
        day: '',
        slot1: '',
        slot2: '',
        slot3: '',
        slot4: '',
        slot5: '',
       
    })
    }


    componentDidMount() {
        axios.get('http://localhost:3000/api/anjalis1')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


   

    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">



                    <div className="section-full content-inner">

                        <div className="container">
                            <form className="shop-form" onSubmit={this.onSubmit} >
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 m-b30">
                                        <h3 className="m-b5">Anjali Booking</h3><br />


                                        <div className="row sp15">
                                            <div className="col-lg-3 col-md-3 col-sm-3">
                                                <div className="form-group">
                                                    <label>Select Days *</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-sm-9">
                                                <div className="form-group">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">

                                                        <div className="input-group">
                                                            <select className="form-control" onChange={this.showhide} onClick={this.day}>
                                                                <option>Select </option>
                                                                <option value="dashami">Dashami</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                        <div className="row sp15">
                                            <div className="col-lg-3 col-md-3 col-sm-3">
                                                <div className="form-group">
                                                    <label>Select Slots *</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-sm-9">
                                                <div className="form-group">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">

                                                        {this.state.valueselect === "dashami" &&
                                                            <div className="row">
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 className="text-center">11:00 AM To 12:00 AM</h4>
                                                                            <h5 className="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot1}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" onChange={this.divstatus1}/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">12:00 AM To 01:00 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot2}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" onChange={this.divstatus2} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">01:00 PM To 02:00 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot3}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" onChange={this.divstatus3} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">02:00 PM To 03:00 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot4}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" onChange={this.divstatus4} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">03:00 PM To 04:00 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot5}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" onChange={this.divstatus5} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }



                                                        

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="text-left">
                                            <button type="submit" className="btn btnhover">Submit</button>
                                        </div>
                                    </div>

                                </div>
                            </form>


                            <div className="row sp15">
                                <div className="col-lg-3 col-md-3 col-sm-3">
                                    <div className="form-group ">
                                        <label className="form-group">&nbsp;</label>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9">
                                    <ul>
                                        <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}>Anjali is for members and their registered family members.</h5></li>
                                        <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}>Members can book Maximum 2 Slots, in case if all the family members are unable to come together.</h5></li>
                                        <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}>Members with valid registered COUPON CODE will be permitted.</h5></li>
                                        <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}>Members are requested to be present during the allotted time or else will not be allowed.</h5></li>
                                        <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}>Only number of persons registered for a particular batch will be allowed. Request not to bring any extra person along, the extra &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; person will not be allowed.</h5></li>
                                        <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}>Please make sure you reach 10-15 minutes before you booked slot.</h5></li>
                                        <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}>If for any reason you are unable to make it for Pushpanjali kindly delete your booking, so the available slot can be given to others.</h5></li>
                                        <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}>All the rights are reserved with the committee and request all the members to co-operate during this pandemic times.</h5></li>
                                    </ul>
                                </div>
                            </div>


                            <div className="dlab-divider bg-gray-dark text-gray-dark icon-center"><i className="fa fa-circle bg-white text-gray-dark"></i></div>

                            <h3>List of Anjali Booking</h3>
                            
                                <div className="row sp15">
                                     {this.state.usersCollection.map((data) => (
                                        <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                            <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                            <h4 class="btn button-lg btnhover btn-block"> {data.day}</h4>
                                                <div className="icon-content">
                                                    <h4 className="text-center">Number Of Person {data.slot1}</h4>
                                                    <h5 className="text-center"> Coupan Code</h5>
                                                    <h4 class="fc-prev-button fc-button fc-button-primary btn-block"> {Math.random().toString(36).slice(-5)} </h4>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    ))}


                                </div>



                        </div>

                    </div>

                </div>

                <Footer />
            </>
        )

    }
}

export default Bhogbooking;
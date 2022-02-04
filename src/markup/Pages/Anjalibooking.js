import React, { Component } from 'react';

 import { createAnjaliAction , listAnjalis} from '../actions/anjaliActions';

import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

import { connect } from 'react-redux';
var bnr = require('./../../images/banner/bnr1.jpg');




class Anjalibooking extends Component {


    constructor(props) {
        super(props);

        this.divstatus1 = this.divstatus1.bind(this);
        this.divstatus2 = this.divstatus2.bind(this);
        this.divstatus3 = this.divstatus3.bind(this);
        this.divstatus4 = this.divstatus4.bind(this);
        this.divstatus5 = this.divstatus5.bind(this);
        this.divstatus6 = this.divstatus6.bind(this);
        this.divstatus7 = this.divstatus7.bind(this);
        this.divstatus8 = this.divstatus8.bind(this);
        this.divstatus9 = this.divstatus9.bind(this);
        this.divstatus10 = this.divstatus10.bind(this);
        this.divstatus11 = this.divstatus11.bind(this);
        this.divstatus12 = this.divstatus12.bind(this);
        this.divstatus13 = this.divstatus13.bind(this);
        this.divstatus14 = this.divstatus14.bind(this);
        this.divstatus15 = this.divstatus15.bind(this);
        this.divstatus16 = this.divstatus16.bind(this);
        this.divstatus17 = this.divstatus17.bind(this);
        this.divstatus18 = this.divstatus18.bind(this);
        this.divstatus19 = this.divstatus19.bind(this);
        this.divstatus20 = this.divstatus20.bind(this);
        this.divstatus21 = this.divstatus21.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.day = this.day.bind(this);
        


        this.state = {
            valueselect: "",
            slot1: "",
            slot2: "",
            slot3: "",
            slot4: "",
            slot5: "",
            slot5: "",
            slot6: "",
            slot7: "",
            slot8: "",
            slot9: "",
            slot10: "",
            slot11: "",
            slot12: "",
            slot13: "",
            slot14: "",
            slot15: "",
            slot16: "",
            slot17: "",
            slot18: "",
            slot19: "",
            slot20: "",
            day: "",
            Uslot1 : "100",
            Uslot2 : "100",
            Uslot3 : "100",
            Uslot4 : "100",
            Uslot5 : "100",
            Uslot6 : "100",
            Uslot7 : "100",
            Uslot8 : "100",
            Uslot9 : "100",
            Uslot10 : "100",
            Uslot11 : "100",
            Uslot12 : "100",
            Uslot13 : "100",
            Uslot14 : "100",
            Uslot15 : "100",
            Uslot16 : "100",
            Uslot17 : "100",
            Uslot18 : "100",
            Uslot19 : "100",
            Uslot20 : "100",
           

            usersCollection: null ,
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
    divstatus6 = (e) => {
        this.setState({ slot6: e.target.value });
        this.setState({ Uslot6: this.state.Uslot6 - e.target.value } );
    }
    divstatus7 = (e) => {
        this.setState({ slot7: e.target.value });
        this.setState({ Uslot7: this.state.Uslot7 - e.target.value } );
    }
    divstatus8 = (e) => {
        this.setState({ slot8: e.target.value });
        this.setState({ Uslot8: this.state.Uslot8 - e.target.value } );
    }
    divstatus9 = (e) => {
        this.setState({ slot9: e.target.value });
        this.setState({ Uslot9: this.state.Uslot9 - e.target.value } );
    }
    divstatus10 = (e) => {
        this.setState({ slot10:  e.target.value });
        this.setState({ Uslot10: this.state.Uslot10 - e.target.value } );
    }
    divstatus11 = (e) => {
        this.setState({ slot11:  e.target.value });
        this.setState({ Uslot11: this.state.Uslot11 - e.target.value } );
    }
    divstatus12 = (e) => {
        this.setState({ slot12:  e.target.value });
        this.setState({ Uslot12: this.state.Uslot12 - e.target.value } );
    }
    divstatus13 = (e) => {
        this.setState({ slot13:  e.target.value });
        this.setState({ Uslot13: this.state.Uslot13 - e.target.value } );
    }
    divstatus14 = (e) => {
        this.setState({ slot14:  e.target.value });
        this.setState({ Uslot14: this.state.Uslot14 - e.target.value } );
    }
    divstatus15 = (e) => {
        this.setState({ slot15:  e.target.value });
        this.setState({ Uslot15: this.state.Uslot15 - e.target.value } );
    }
    divstatus16 = (e) => {
        this.setState({ slot16:  e.target.value });
        this.setState({ Uslot16: this.state.Uslot16 - e.target.value } );
    }
    divstatus17 = (e) => {
        this.setState({ slot17:  e.target.value });
        this.setState({ Uslot17: this.state.Uslot17 - e.target.value } );
    }
    divstatus18 = (e) => {
        this.setState({ slot18:  e.target.value });
        this.setState({ Uslot18: this.state.Uslot18 - e.target.value } );
    }
    divstatus19 = (e) => {
        this.setState({ slot19:  e.target.value });
        this.setState({ Uslot19: this.state.Uslot19 - e.target.value } );
    }
    divstatus20 = (e) => {
        this.setState({ slot20:  e.target.value });
        this.setState({ Uslot20: this.state.Uslot20 - e.target.value } );
    }




    showhide = (e) => {
        console.log(e.target.value);
        const valueselect = e.target.value;

        this.setState({ valueselect });
    };


    divstatus21 = () => {
        
        this.setState({ usersCollection:  Object.values(this.props.anjaliList.state) });
       
    }


     
    

    
    componentDidMount() {
        this.props.listAnjalis();
      }



    onSubmit(e){

        e.preventDefault()


        const {             
        day,
        slot1,
        slot2,
        slot3,
        slot4,
        slot5,
        slot6,
        slot7,
        slot8,
        slot9,
        slot10,
        slot11,
        slot12,
        slot13,
        slot14,
        slot15,
        slot16,
        slot17,
        slot18,
        slot19,
        slot20 } = this.state;
    
        this.props
          .createAnjaliAction( 
            day,
            slot1,
            slot2,
            slot3,
            slot4,
            slot5,
            slot6,
            slot7,
            slot8,
            slot9,
            slot10,
            slot11,
            slot12,
            slot13,
            slot14,
            slot15,
            slot16,
            slot17,
            slot18,
            slot19,
            slot20)
          .then((data) => {
            this.setState(
                
                data = {
                
                day: this.state.day,
                slot1: this.state.slot1,
                slot2: this.state.slot2,
                slot3: this.state.slot3,
                slot4: this.state.slot4,
                slot5: this.state.slot5,
                slot6: this.state.slot6,
                slot7: this.state.slot7,
                slot8: this.state.slot8,
                slot9: this.state.slot9,
                slot10: this.state.slot10,
                slot11: this.state.slot11,
                slot12: this.state.slot12,
                slot13: this.state.slot13,
                slot14: this.state.slot14,
                slot15: this.state.slot15,
                slot16: this.state.slot16,
                slot17: this.state.slot17,
                slot18: this.state.slot18,
                slot19: this.state.slot19,
                slot20: this.state.slot20,
    


                

            });

            
            console.log(data);

             window.location.href = "/Anjalibooking";
          })
          .catch((e) => {
            console.log(e);
          });
      }


      



    render() {

        // const { anjali } = this.props;
        // const { anjaliList } = this.props.;
        // console.log(anjaliList);

        return (
            <>
            
                <Header />

                <div className="page-content bg-white">



                    <div className="section-full content-inner">

                        <div className="container">
                            <form className="shop-form" onSubmit={this.onSubmit}>
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
                                                            <select className="form-control" onChange={this.showhide}  onClick={this.day} >
                                                                <option>Select </option>
                                                                <option value="sashti">Sashti </option>
                                                                <option value="saptami">Saptami</option>
                                                                <option value="ashtami">Ashtami</option>
                                                                <option value="nabami">Nabami</option>
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

                                                        {this.state.valueselect === "sashti" &&
                                                            <div className="row">
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 className="text-center">11:00 AM To 11:30 AM</h4>
                                                                            <h5 className="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot1}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus1} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">11:30 AM To 12:00 AM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot2}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus2} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">12:00 AM To 12:30 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot3}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus3} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">12:30 PM To 01:00 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot4}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus4} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">01:00 PM To 01:30 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot5}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus5} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }



                                                        {this.state.valueselect === "saptami" &&
                                                            <div className="row">
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">11:00 AM To 11:30 AM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot6}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus6} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">11:30 AM To 12:00 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot7}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus7} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">12:00 PM To 12:30 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot8}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus8} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">12:30 PM To 01:00 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot9}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus9} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">01:00 PM To 01:30 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot10}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus10} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }



                                                        {this.state.valueselect === "ashtami" &&
                                                            <div className="row">
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">11:00 AM To 11:30 AM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot11}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus11} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">11:30 AM To 12:00 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot12}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus12} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">12:00 PM To 12:30 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot13}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus13} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">12:30 PM To 01:00 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot14}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus14} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">01:00 PM To 01:30 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot15}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus15} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }




                                                        {this.state.valueselect === "nabami" &&
                                                            <div className="row">
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">11:00 AM To 11:30 AM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot16}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus16} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">11:30 AM To 12:00 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot17}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus17} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">12:00 PM To 12:30 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot18}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus18} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">12:30 PM To 01:00 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot19}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus19} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                                                        <div className="icon-content">
                                                                            <h4 class="text-center">01:00 PM To 01:30 PM</h4>
                                                                            <h5 class="text-center">Slots Available</h5>
                                                                            <h4 className="text-center"><span>{this.state.Uslot20}</span></h4>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="Number of Person" onChange={this.divstatus20} />
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
                            {/* <this.state.DummyView/> */}
                                {/* <h1> IC : {this.props.anjaliList}</h1> */}

                                


                                 <div className="row sp15">
                                     {this.state.usersCollection && this.state.usersCollection.map((data) => (
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




const mapStateToProps = (state) => {
    return {
        anjaliList: state.anjaliList,
    };
  };


export default connect(mapStateToProps, { createAnjaliAction , listAnjalis})(Anjalibooking);


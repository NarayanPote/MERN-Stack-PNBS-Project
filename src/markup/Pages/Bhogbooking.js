import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createNoteAction } from '../actions/notesActions';
import { listNotes } from '../actions/notesActions';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';


const Bhogbooking = () => {

    const [days, setDays] = useState("");
    const [pack, setPack] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");




    var amount = pack * 10;
    var coupan = Math.random().toString(36).slice(-5);


    const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const {  notes } = noteList;

//console.log(notes);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

    const history = useHistory();
    useEffect(() => {
      dispatch(listNotes());
      if (!userInfo) {
        history.push('/Bhogbooking');
      }
    }, [
      dispatch,
      history,
      userInfo,
      successCreate,
      successUpdate,
      successDelete,
    ]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!days || !pack || !amount || !coupan ) return;
        dispatch(createNoteAction(days, pack, amount, coupan));
    
        history.push('/Bhogbooking');
      };
    
      useEffect(() => {}, []);

    return (
        <>
            <Header />

            <div className="page-content bg-white">



                <div className="section-full content-inner">

                    <div className="container">
                        <form className="shop-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 m-b30">
                                    <h3 className="m-b5">Bhog Booking</h3>
                                    <div className="row sp15">
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <div className="form-group">
                                                <label>Select Days *</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-sm-9">
                                            <div className="form-group">
                                                <select required className="form-control" value={days} onChange={(e) => setDays(e.target.value)}>
                                                    <option value> Select Days</option>
                                                    <option value="sashti">Sashti</option>
                                                    <option value="saptami">Saptami</option>
                                                    <option value="ashtami">Ashtami</option>
                                                    <option value="nabami">Nabami</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row sp15">
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <div className="form-group">
                                                <label>Number of Pack *</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-sm-9">
                                            <div className="form-group">
                                                <input class="form-control" type="text" value={pack} name="vertical-spin" required data-validation-required-message="Number of pack is required" onChange={(e) => setPack(e.target.value)} />
                                                <span class="text-right mt-20">* You are entitled for max.extra packs 10 per day </span>
                                            </div>

                                        </div>
                                    </div>




                                    <div className="row sp15">
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <div className="form-group">
                                                <label>Total Amount Payable *</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <span > {amount} </span>
                                        </div>
                                    </div>

                                    <div className="text-left">
                                        <button type="submit" className="btn btnhover">Pay</button>
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
                                    <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}>Bhog bookings are for Members and their family members only.</h5></li>
                                    <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}>Bhog is free for Members and their registered family members, anything extra is chargeable at Rs. 51 per pack.</h5></li>
                                    <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}>The maximum numbers of extra packs are mentioned above.</h5></li>
                                    <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}>Bhog Bookings will be closed at mid night prior i.e. if member want to book for Saptami Bhog, 12th Oct 2021 has to book max by 11:55 pm of 11th Oct 2021, or else will not be allowed.</h5></li>
                                    <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}>Each Bhog pack will be deliver in plastic containers, and each pack will have 4 containers.</h5></li>
                                    <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}>Members are requested to bring their own carry bags. We are not providing any carry bags.</h5></li>
                                    <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}><b>In case if member are unable to collect the bhog in their allotted time, in that case the member will be allowed to collect bhog after 3:00 PM</b></h5></li>
                                    <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}><b>There is no refund.</b></h5></li>
                                    <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}><b>Only one person with the Bhog Coupon Code will be allowed.</b></h5></li>
                                    <li><h5 style={{ fontSize: '.8rem', color: '#757575' }}><b>All the rights are reserved with the committee and request all the members to co-operate during this pandemic times.</b></h5></li>
                                </ul>
                            </div>

                        </div>


                        <div className="dlab-divider bg-gray-dark text-gray-dark icon-center"><i className="fa fa-circle bg-white text-gray-dark"></i></div>

                        <h3>List of Bhog Booking</h3>
                        <div className="row sp15">

             

                        {notes && notes.map((repos) => (
                                <div className="col-lg-4 col-md-4 col-sm-4 m-b30">
                                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                                        <h4 class="btn button-lg btnhover btn-block"> {repos.days}</h4>
                                        <div className="icon-content">
                                            <h4 className="text-center"> Number Of Pack {repos.pack}</h4>
                                            <h5 className="text-center"> Coupan Code</h5>
                                            <h4 class="fc-prev-button fc-button fc-button-primary btn-block"> {Math.random().toString(36).slice(-5)} </h4>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>

                </div>

            </div >

            <Footer />
        </>
    )

}

export default Bhogbooking;
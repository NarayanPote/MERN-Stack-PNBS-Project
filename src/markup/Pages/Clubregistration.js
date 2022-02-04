import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import axios from 'axios';

var bnr = require('./../../images/banner/bnr3.jpg');


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



const PortfolioThemes = () => {

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
    const [country, setcountry] = React.useState();
    const [state, setstate] = React.useState();
    const [city, setcity] = React.useState();
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");



    const availableState = data.countries.find((c) => c.name === country);
    const availableCities = availableState?.states?.find(
        (s) => s.name === state
    );


    const handleSubmit = async (e) => {
        e.preventDefault();

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        try {
            const { data } = await axios.post(
                "/api/clubuser/registerclub",
                { name, address, country, state, city, pincode, contact, email, website, clubregistrationnumber, yearofestabilishment, trustformed, aandgregister, clublogo },
                config
            );

            console.log(data);
            setErrorMessage("");
            setSuccessMessage("Successfully Registered !");
            localStorage.setItem("user", JSON.stringify(data));
        } catch (error) {
            setErrorMessage("User Already Exists");
            setSuccessMessage("");
        }

    };


    


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

                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-5 m-b30">
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
                                                                <li><Link data-toggle="tab" to={'/sport'}>Sport</Link></li>
                                                                <li><Link data-toggle="tab" to={'/training'}>Training/Coaching</Link></li>
                                                                <li><Link data-toggle="tab" to={'/languages'}>Languages</Link></li>
                                                                <li><Link data-toggle="tab" to={'/opening'}>Current Opening</Link></li>
                                                                <li><Link data-toggle="tab" to={'/news'}>News And Media</Link></li>
                                                                <li><Link data-toggle="tab" to={'/messages'}>Messages</Link></li>
                                                                <li><Link data-toggle="tab" to={'/portfoliothemes'} >Portfolio Themes</Link></li>
                                                                <li><Link data-toggle="tab" to={'/clubregistration'} className="active">Club Registration</Link></li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-7">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="tab-content">
                                            <form id="login" className="tab-pane active" onSubmit={handleSubmit}>
                                                <h3 className="m-b5">Club Registration</h3>

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
                                                            <label>Select countries *</label>
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
                                                            <label>Select states *</label>
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


                                                    <div className="col-lg-4 col-md-4 col-sm-4" onChange={(e) => setPincode(e.target.value)}>
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

                                                    <div className="col-lg-6 col-md-6 col-sm-6" onChange={(e) => setEmail(e.target.value)}>
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
                                                            <label>Club Registration Number *</label>
                                                            <input className="form-control " placeholder="Club Registration Number" type="text" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-sm-6" onChange={(e) => setYearofestabilishment(e.target.value)}>
                                                        <div className="form-group">
                                                            <label>Year Of Establishment </label>
                                                            <input placeholder="Year Of Establishment" className="form-control" type="text" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-sm-6" onChange={(e) => setTrustformed(e.target.value)}>
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
                                                    <div className="col-lg-6 col-md-6 col-sm-6" onChange={(e) => setAandgregister(e.target.value)}>
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
                                                    <div className="col-lg-6 col-md-6 col-sm-6" onChange={(e) => setClublogo(e.target.value)}>
                                                        <div className="form-group">
                                                            <label>Club Logo :</label>
                                                            <input placeholder="Club Logo" className="form-control" type="text" />
                                                        </div>
                                                    </div>
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

            </div>

            <Footer />
        </>

    )


}
export default PortfolioThemes;
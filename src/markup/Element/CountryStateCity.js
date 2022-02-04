import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mockData from "./../Pages/Data";



class CountryStateCity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countryList: [],
            stateList: [],
            cityList: [],
            selectedCountry: "",
            selectedState: "",
            selectedCity: ""
        };

        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeCity = this.changeCity.bind(this);
    }
    componentDidMount() {
        const { data } = mockData;
        // Get all countries from data object which exists as keys
        // and set to the countrylist state
        const countryList = Object.keys(data);
        this.setState({
            countryList
        });
    }

    changeCountry(e) {
        // Based on country selection change options for state dropdown
        // and show it in result as well
        const { data } = mockData;
        const selectedCountry = e && e.target && e.target.value;
        if (selectedCountry) {
            const stateList = Object.keys(data[selectedCountry].states);
            this.setState({
                stateList,
                selectedCountry,
                cityList: []
            });
        } else {
            this.setState({
                stateList: [],
                cityList: [],
                selectedCountry: "",
                selectedState: "",
                selectedCity: ""
            });
        }
    }

    changeState(e) {
        // Based on state selection change options for city dropdown
        // and show it in result as well
        const { data } = mockData;
        const selectedState = e && e.target && e.target.value;
        if (selectedState) {
            const cityList =
                data[this.state.selectedCountry].states[selectedState].cities;
            this.setState({
                cityList,
                selectedState
            });
        } else {
            this.setState({
                cityList: [],
                selectedState: "",
                selectedCity: ""
            });
        }
    }

    changeCity(e) {
        // Based on city selection show it in result as well
        const selectedCity = e && e.target && e.target.value;
        this.setState({
            selectedCity
        });
    }

    render() {
        return (
            <>

                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                        <label>Select Country *</label>
                        <div className="input-group">
                            <select className="form-control" value={this.state.selectedCountry} onChange={this.changeCountry}>
                                <option value="">Please select Country</option>
                                {this.state.countryList.map((x, i) => {
                                    return <option key={i}>{x}</option>;
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                        <label>Select State *</label>
                        <div className="input-group">
                            <select className="form-control" value={this.state.selectedState} onChange={this.changeState}>
                                <option value="">Please select State</option>
                                {this.state.stateList.map((x, i) => {
                                    return <option key={i}>{x}</option>;
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                        <label>Select City *</label>
                        <div className="input-group">
                            <select className="form-control" value={this.state.selectedCity} onChange={this.changeCity}>
                                <option value="">Please select City</option>
                                {this.state.cityList.map((x, i) => {
                                    return <option key={i}>{x}</option>;
                                })}
                            </select>
                        </div>
                    </div>
                </div>

           </>

		)

    }
}
export default CountryStateCity;
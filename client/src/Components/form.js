import React, { Component } from 'react'
import { Multiselect } from "multiselect-react-dropdown";
import axios from "axios";
// import Server from "../../webConfig";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
export default class Form extends Component {

    constructor(props) {
		super(props);
		this.state = {
            investmentTypes: [
            {label : "Ethical Investing", value : "Ethical Investing"},
            {label : "Growth Investing", value : "Growth Investing"},
            {label : "Index Investing", value : "Index Investing"},
            {label : "Quality Investing", value : "Quality Investing"},
            {label : "Value Investing", value : "Value Investing"}
            ],
            
            selectedInvestmentTypes : [],
            amount : 5000
        };
	}

	onChange = (e) => {
		this.setState({
			amount: e.target.value,
		});
	};

    onSelect = (data) => {
        console.log("data", data)
        this.setState({
            selectedInvestmentTypes: data,
        });
        console.log('selected', this.state);
    };

    onSubmit = (e) => {
		e.preventDefault();
        if(this.state.selectedInvestmentTypes.length>2){
            swal("Alert!","You can select maximum 2 strategies", "warning")
        }else if(this.state.selectedInvestmentTypes.length<1){
            swal("Alert!","Please select minimum 1 stategy","warning")
        }else if(parseFloat(this.state.amount) < 5000){
            swal("Alert!","Please enter amount greater than $5000","warning")
        }else{
            let Strategies = []
        this.state.selectedInvestmentTypes.forEach(type => {
            Strategies.push(type.label)
        });

        const searchData = {
			Amount: this.state.amount,
            Strategies: Strategies
		};
		console.log("search criteria: ", searchData);
		// axios.defaults.withCredentials = true;
		axios
			.post(`http://127.0.0.1:5000/getData`, searchData)
			.then((response) => {
				console.log("response data from search flight is", response.data);
					this.setState({
						results:response.data
					})
					localStorage.setItem("result", JSON.stringify(response.data));
				
			})
			.catch((error) => {
				console.log("error:", error);
			});
        }
        
	};

    render() {
        if(this.state.results){
			return <Redirect to="/result"/>;	
		}
        return (
            <div class="container">
        <h1 className="title">STOCK PORTFOLIO SUGGESTION ENGINE</h1>
        <form>
            <div class="row">
                <div class="column">
                    <label for="amount">Enter your investing amount (in $) (Minimum $5000 needs to be invested)</label>
                    <input type="number" id="amount"  defaultValue={5000} min={5000} onChange={this.onChange}/>
                </div>
                
            </div>
            <div class="row">
                <div class="column">
                    <label for="investmentTypes">Select your Investment Strategy</label>
                    <Multiselect className="multi"
                                options={this.state.investmentTypes}
                                displayValue="label"
                                placeholder="Click to select"
                                onSelect={this.onSelect}
                                style={{ chips: { background: '#398AB9'  }, color:""}}
                                />
                </div>
            </div>
            <button type='submit' style={{width: "100%"}} onClick={this.onSubmit}>Submit</button>
        </form>
    </div>
        )
    }
}

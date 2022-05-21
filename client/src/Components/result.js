import React, { Component } from 'react'
import { Multiselect } from "multiselect-react-dropdown";
import invest  from "../images/invest1.png";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Cards from './cards';
import swal from "sweetalert";
export default class result extends Component {
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

    componentWillMount = () => {
      const result = JSON.parse(localStorage.getItem("result"));
      this.setState({
        results:result
      })
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


  onSubmitSearch = (e) => {
		e.preventDefault();
        if(this.state.selectedInvestmentTypes.length>2){
            swal("Opps!","Please choose maximum 2 stategies","warning")
        }else if(this.state.selectedInvestmentTypes.length<1){
            swal("Opps!","Please choose minimum 1 stategy","warning")
        }else if(parseFloat(this.state.amount) < 5000){
            swal("Opps!","Please enter amount more than $5000","warning")
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
      let details = "";
      const result = JSON.parse(localStorage.getItem("result"));
      let x = []
      if(this.state.results && this.state.results.strategiesResponse){ 
        for (let [key, value] of Object.entries(this.state.results.strategiesResponse)) {
          let o = {
            type: key,
            details: value
          }
          x.push(o)
        }
      }
      return (
            <div className="searchresults_main">
        <div
          className="w3-content w3-margin-top"
          style={{ maxWidth: "1400px" }}
        >
          <div className="w3-row-padding">
            <div className="w3-third">
            
              <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-container w3-display-container w3-padding-16">
                  
                  <br />
                  <h2>Update Search</h2>
                  <hr />
                  <form>
            <div class="row">
                <div class="column">
                    <label for="amount">Investing Amount ($) - Minimum $5000</label>
                    <input type="number" id="amount" placeholder="Your name here" defaultValue={5000} min={5000} onChange={this.onChange}/>
                </div>
                
            </div>
            <div class="row">
                <div class="column">
                    <label for="investmentTypes">Choose Investment Strategies</label>
                    <Multiselect
                                options={this.state.investmentTypes}
                                displayValue="label"
                                placeholder="Select Investment Type(s)"
                                onSelect={this.onSelect}
                                
                                style={{ chips: { background: '#009688'  }, color:"black"}}
                                />
                </div>
               
            </div>
            <button onClick={this.onSubmitSearch} type='submit'>Submit</button>
        </form>
                </div>
              </div>
              <br />
              
            </div>

            
            <div className="w3-twothird">
              <div className="w3-container w3-card w3-white w3-margin-bottom">
               
                
                {
                  
                  x.length > 0 ? x.map((strategy)=>{
                    return(
                      <Cards amountResponse={this.state.results.amountResponse} strategy={strategy}/>
                    )
                  })  
                  : null
                }
                
              </div>
             
            </div>
          </div>
        </div>
      </div>
        )
    }
}

import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import invest from "../images/invest1.png";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Cards from "./cards";
import swal from "sweetalert";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default class result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investmentTypes: [
        { label: "Ethical Investing", value: "Ethical Investing" },
        { label: "Growth Investing", value: "Growth Investing" },
        { label: "Index Investing", value: "Index Investing" },
        { label: "Quality Investing", value: "Quality Investing" },
        { label: "Value Investing", value: "Value Investing" },
      ],

      selectedInvestmentTypes: [],
      amount: 5000,
    };
  }

  componentWillMount = () => {
    const result = JSON.parse(localStorage.getItem("result"));
    this.setState({
      results: result,
    });
  };

  onChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  onSelect = (data) => {
    console.log("data", data);
    this.setState({
      selectedInvestmentTypes: data,
    });
    console.log("selected", this.state);
  };

  onSubmitSearch = (e) => {
    e.preventDefault();
    if (this.state.selectedInvestmentTypes.length > 2) {
      swal("Alert!", "You can select maximum 2 strategies", "warning");
    } else if (this.state.selectedInvestmentTypes.length < 1) {
      swal("Alert!", "Please choose atleast 1 stategy", "warning");
    } else if (parseFloat(this.state.amount) < 5000) {
      swal("Alert!", "Please enter amount greater than $5000", "warning");
    } else {
      let Strategies = [];
      this.state.selectedInvestmentTypes.forEach((type) => {
        Strategies.push(type.label);
      });

      const searchData = {
        Amount: this.state.amount,
        Strategies: Strategies,
      };
      console.log("search criteria: ", searchData);
      // axios.defaults.withCredentials = true;
      axios
        .post(`http://127.0.0.1:5000/getData`, searchData)
        .then((response) => {
          console.log("response data from search flight is", response.data);
          this.setState({
            results: response.data,
          });
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
    let x = [];
    if (this.state.results && this.state.results.strategiesResponse) {
      for (let [key, value] of Object.entries(
        this.state.results.strategiesResponse
      )) {
        let o = {
          type: key,
          details: value,
        };
        x.push(o);
      }
    }

    const data1 = {
      // labels: ['1', '2', '3', '4', '5', '6'],
      labels: ["05/16/22", "05/17/22", "05/18/22", "05/19/22", "05/20/22"],
      datasets: [
        {
          label: "Portfolio Value",
          data: [7000.0, 7083.67, 7127.22, 7090.91, 7136.08, 7247.11],
          // data: forecastData,
          fill: false,
          backgroundColor: "#003B46",
          borderColor: "#003B46",
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            beginAtZero: true,
          },
        },
      },
    };

    return (
      <div className="searchresults_main">
        <div
          className="w3-content w3-margin-top row"
          style={{ maxWidth: "1400px" }}
        >
          <div className="w3-row-padding">
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-container w3-display-container w3-padding-16">
                  <br />
                  <h2
                    className="title"
                    style={{ textAlign: "center", color: "black" }}
                  >
                    Update Search
                  </h2>
                  <hr />
                  <form>
                    <div class="row">
                      <div class="column">
                        <label for="amount">
                          Enter investment amount (in $) (Minimum $5000)
                        </label>
                        <input
                          type="number"
                          id="amount"
                          placeholder="Enter amount"
                          defaultValue={5000}
                          min={5000}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="column">
                        <label for="investmentTypes">
                          Select Investment Strategy
                        </label>
                        <Multiselect
                          options={this.state.investmentTypes}
                          displayValue="label"
                          placeholder="Click to Select"
                          onSelect={this.onSelect}
                          style={{
                            chips: { background: "#009688" },
                            color: "black",
                          }}
                        />
                      </div>
                    </div>
                    <button
                      onClick={this.onSubmitSearch}
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <br />
            </div>
            <div class="w3-twothird w3-container">
              <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-container w3-display-container w3-padding-16">
                  <br />
                  <h2
                    className="title"
                    style={{ textAlign: "center", color: "black" }}
                  >
                    Weekly Portfolio Trend
                  </h2>
                  <hr />
                  <div style={{ width: "720px", height: "236px", marginLeft: "8%" }}>
                    <Line
                      data={data1}
                      options={options}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w3-twothird row">
              <div className="w3-container w3-card w3-white w3-margin-bottom">
                {x.length > 0
                  ? x.map((strategy) => {
                      return (
                        <Cards
                          amountResponse={this.state.results.amountResponse}
                          strategy={strategy}
                        />
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

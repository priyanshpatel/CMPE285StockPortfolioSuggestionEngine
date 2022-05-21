import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import swal from "sweetalert";
export default class Cards extends Component {

    render() { 
        let details = this.props.strategy.details;
        let name = this.props.strategy.type;
        let amount = this.props.amountResponse;
        return (
            <>
            <div
                  className="w3-row-padding w3-section w3-opacity"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px black",
                    fontSize: "22px",
                  }}
                >
                  <div className="w3-col">
                    <b>{name}</b>
                  </div>
            </div>
            <hr></hr>
            
            <div class="w3-row-padding" style={{margin:"0 -16px"}}>
            <a href={"https://www.tradingview.com/symbols/"+details[0].symbol} target="_blank">
            <div class="w3-third w3-margin-bottom">
            <ul class="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
            <li class="w3-black w3-xlarge w3-padding-32">{details[0].symbol}</li>
            <li class="w3-padding-16">{details[0].companyName}</li>
            <li class="w3-padding-16"> Current Price : {details[0].latestPrice}</li>
            <li class="w3-padding-16">Change : {details[0].change}</li>
            <li class="w3-padding-16">Change (%) : {details[0].changePercent}</li>
            <li class="w3-padding-16">Amount to invest($) : {amount[0]}</li>
            </ul>
            </div>
            </a>

            <a href={"https://www.tradingview.com/symbols/"+details[1].symbol} target="_blank">
                <div class="w3-third w3-margin-bottom">
                <ul class="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                <li class="w3-teal w3-xlarge w3-padding-32">{details[1].symbol}</li>
                <li class="w3-padding-16">{details[1].companyName}</li>
                <li class="w3-padding-16"> Current Price : {details[1].latestPrice}</li>
                <li class="w3-padding-16">Change : {details[1].change}</li>
                <li class="w3-padding-16">Change (%) : {details[1].changePercent}</li>
                <li class="w3-padding-16">Amount to invest($) : {amount[1]}</li>
            </ul>
            </div>
            </a>

            <a href={"https://www.tradingview.com/symbols/"+details[2].symbol} target="_blank">
            <div class="w3-third w3-margin-bottom">
            <ul class="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
            <li class="w3-black w3-xlarge w3-padding-32">{details[2].symbol}</li>
            <li class="w3-padding-16">{details[2].companyName}</li>
            <li class="w3-padding-16"> Current Price : {details[2].latestPrice}</li>
            <li class="w3-padding-16">Change : {details[2].change}</li>
            <li class="w3-padding-16">Change (%) : {details[2].changePercent}</li>
            <li class="w3-padding-16">Amount to invest($) : {amount[2]}</li>
            </ul>
            </div>
            </a>
           
        </div>
        <hr></hr>
        </>
            
        )
    }
}

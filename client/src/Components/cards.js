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
                  className="w3-row-padding w3-section"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px black",
                    fontSize: "22px",
                  }}
                >
                  <div className="w3-col alignCenter">
                    <h2><b className='title'>{name} Stocks</b></h2>
                  </div>
            </div>
            <hr></hr>
            
            <div class="w3-row-padding" style={{margin:"0 -16px"}}>
            <a href={"https://www.tradingview.com/symbols/"+details[0].symbol} target="_blank">
            <div class="w3-third w3-margin-bottom">
            <ul class="w3-border w3-white w3-center w3-hover-opacity" style={{listStyleType: "none"}}>
            <li class="w3-black w3-xlarge w3-padding-16">{details[0].symbol}</li>
            <li class="w3-padding-16"><h3><b>{details[0].companyName}</b></h3></li>
            <table style={{width:"100%"}}>
              <tr>
       
                  <td className='detailsLeft1'><b>Open : </b></td>
                  <td className='detailsRight'> &nbsp; ${details[0].open}</td>
                  <td className='detailsLeft2'><b>Close : </b></td>
                  <td className='detailsRight'> &nbsp; ${details[0].close}</td>
           
              </tr>
              <tr>
                <td className='detailsLeft1'><b>Low : </b></td>
                <td className='detailsRight'> &nbsp; ${details[0].low}</td>
                <td className='detailsLeft2'><b>High : </b></td>
                <td className='detailsRight'> &nbsp; ${details[0].high}</td>
              </tr>
              <tr>
                <td className='detailsLeft1'><b>Latest Price : </b></td>
                <td className='detailsRight'> &nbsp; ${details[0].latestPrice}</td>
                <td className='detailsLeft2'><b>Change : </b></td>
                <td className='detailsRight'> &nbsp; ${details[0].change}</td>
              </tr>
              <tr>
                <td className='detailsLeft1'><b>Change (%) : </b></td>
                <td className='detailsRight'> &nbsp; {details[0].changePercent}%</td>
                <td className='detailsLeft2'><b>52 Week Low : </b></td>
                <td className='detailsRight'> &nbsp; ${details[0].week52Low}</td>
              </tr>
              <tr>
                <td className='detailsLeft1'><b>Amount To Invest : </b></td>
                <td className='detailsRight'> &nbsp; ${amount[0]}</td>
                <td className='detailsLeft2'><b>52 Week High : </b></td>
                <td className='detailsRight'> &nbsp; ${details[0].week52High}</td>
              </tr>
            </table>
            </ul>
            </div>
            </a>

            <a href={"https://www.tradingview.com/symbols/"+details[1].symbol} target="_blank">
                <div class="w3-third w3-margin-bottom">
                <ul class="w3-border w3-white w3-center w3-hover-opacity" style={{listStyleType: "none"}}>
                <li class="w3-blue w3-xlarge w3-padding-16">{details[1].symbol}</li>
                <li class="w3-padding-16"><h3><b>{details[1].companyName}</b></h3></li>
                <table style={{width:"100%"}}>
              <tr>
       
                  <td className='detailsLeft1'><b>Open : </b></td>
                  <td className='detailsRight'> &nbsp; ${details[1].open}</td>
                  <td className='detailsLeft2'><b>Close : </b></td>
                  <td className='detailsRight'> &nbsp; ${details[1].close}</td>
           
              </tr>
              <tr>
                <td className='detailsLeft1'><b>Low : </b></td>
                <td className='detailsRight'> &nbsp; ${details[1].low}</td>
                <td className='detailsLeft2'><b>High : </b></td>
                <td className='detailsRight'> &nbsp; ${details[1].high}</td>
              </tr>
              <tr>
                <td className='detailsLeft1'><b>Latest Price : </b></td>
                <td className='detailsRight'> &nbsp; ${details[1].latestPrice}</td>
                <td className='detailsLeft2'><b>Change : </b></td>
                <td className='detailsRight'> &nbsp; ${details[1].change}</td>
              </tr>
              <tr>
                <td className='detailsLeft1'><b>Change (%) : </b></td>
                <td className='detailsRight'> &nbsp; {details[1].changePercent}%</td>
                <td className='detailsLeft2'><b>52 Week Low : </b></td>
                <td className='detailsRight'> &nbsp; ${details[1].week52Low}</td>
              </tr>
              <tr>
                <td className='detailsLeft1'><b>Amount To Invest : </b></td>
                <td className='detailsRight'> &nbsp; ${amount[1]}</td>
                <td className='detailsLeft2'><b>52 Week High : </b></td>
                <td className='detailsRight'> &nbsp; ${details[1].week52High}</td>
              </tr>
            </table>
            </ul>
            </div>
            </a>

            <a href={"https://www.tradingview.com/symbols/"+details[2].symbol} target="_blank">
            <div class="w3-third w3-margin-bottom">
            <ul class="w3-border w3-white w3-center w3-hover-opacity" style={{listStyleType: "none"}}>
            <li class="w3-black w3-xlarge w3-padding-16">{details[2].symbol}</li>
            <li class="w3-padding-16"><h3><b>{details[2].companyName}</b></h3></li>
            <table style={{width:"100%"}}>
              <tr>
       
                  <td className='detailsLeft1'><b>Open : </b></td>
                  <td className='detailsRight'> &nbsp; ${details[2].open}</td>
                  <td className='detailsLeft2'><b>Close : </b></td>
                  <td className='detailsRight'> &nbsp; ${details[2].close}</td>
           
              </tr>
              <tr>
                <td className='detailsLeft1'><b>Low : </b></td>
                <td className='detailsRight'> &nbsp; ${details[2].low}</td>
                <td className='detailsLeft2'><b>High : </b></td>
                <td className='detailsRight'> &nbsp; ${details[2].high}</td>
              </tr>
              <tr>
                <td className='detailsLeft1'><b>Latest Price : </b></td>
                <td className='detailsRight'> &nbsp; ${details[2].latestPrice}</td>
                <td className='detailsLeft2'><b>Change : </b></td>
                <td className='detailsRight'> &nbsp; ${details[2].change}</td>
              </tr>
              <tr>
                <td className='detailsLeft1'><b>Change (%) : </b></td>
                <td className='detailsRight'> &nbsp; {details[2].changePercent}%</td>
                <td className='detailsLeft2'><b>52 Week Low : </b></td>
                <td className='detailsRight'> &nbsp; ${details[2].week52Low}</td>
              </tr>
              <tr>
                <td className='detailsLeft1'><b>Amount To Invest : </b></td>
                <td className='detailsRight'> &nbsp; ${amount[2]}</td>
                <td className='detailsLeft2'><b>52 Week High : </b></td>
                <td className='detailsRight'> &nbsp; ${details[2].week52High}</td>
              </tr>
            </table>
            </ul>
            </div>
            </a>
           
        </div>
        <hr></hr>
        </>
            
        )
    }
}

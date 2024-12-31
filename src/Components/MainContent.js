import React from "react";
export default function MainContent() {
    return (
        <div className="top-gainers-table1h">
            <div className="dropdown-container ">
                <div className="dropdown">
                    <select id="portfolioSelect">
                        <option value="">-- Select Portfolio --</option>
                        <option value="80" selected="">Memecoin</option>
                        <option value="81">AI</option>
                        <option value="97">Defi</option>
                        <option value="98">Exchange</option>
                        <option value="107">Gaming</option>
                        <option value="124">Storage</option>
                        <option value="580">RWA</option>
                        <option value="581">PolitiFi</option>
                        <option value="607">DePIN</option>
                        <option value="808">Market</option>
                    </select>
                </div>
            </div>
            <div className="desktop-view">
                <table >
                    <tbody>
                        <tr>
                            <th>
                                <button disabled="" className="btn1"> Index </button>
                            </th>

                            <th>
                                <button disabled="" className="btn"> Last 1 Day </button>
                            </th>
                            <th >
                                <button disabled="" className="btn"> Last 7 Days </button>
                            </th>
                            <th >
                                <button disabled="" className="btn"> Last 30 Days </button>
                            </th>
                            <th >
                                <button disabled="" className="btn" > Last 90 Days </button>
                            </th>
                        </tr>
                        <tr>
                            <td id="indexPerformanceLink" className="indexPerformanceLink" >
                                <a href="https://investing.crowdwisdom.live/portfolio/CW360-Exchange-Token-Index" target="_blank" rel="noreferrer">Index Performance</a>
                            </td>
                            <td id="oneDayRoi" className="tablerowcol" >-2.8%</td>
                            <td id="sevenDayRoi" className="tablerowcol" >25.9%</td>
                            <td id="thirtyDayRoi" className="tablerowcol" >56.9%</td>
                            <td id="ninetyDayRoi" className="tablerowcol">107.9%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container w3_bg">
                <div class="index-drop w3_bg">
                    <span> <p id="todayIndex" style={{ marginTop: "5px" }}></p>
                    </span>
                </div>
                <div id="chartsContainer" className="w3_bg">
                    <img src="memecoin-chart.png" alt="memecoin" className="memecoinimage" />
                </div>
            </div>

            <div className="dropdown-container1">
                <div className="dropdown1" >
                    <select id="portfolioSelect1">
                        <option value="">-- Select First Portfolio --</option>
                        <option value="80" selected="">Memecoin</option>
                        <option value="81">AI</option>
                        <option value="97">Defi</option>
                        <option value="98">Exchange</option>
                        <option value="107">Gaming</option>
                        <option value="124">Storage</option>
                        <option value="580">RWA</option>
                        <option value="581">PolitiFi</option>
                        <option value="607">DePIN</option>
                        <option value="808">Market</option>
                    </select>
                </div>
                <div className="dropdown0">
                    <select id="portfolioSelect2">
                        <option value="">-- Select Second Portfolio --</option>
                        <option value="80" selected="">Memecoin</option>
                        <option value="81">AI</option>
                        <option value="97">Defi</option>
                        <option value="98">Exchange</option>
                        <option value="107">Gaming</option>
                        <option value="124">Storage</option>
                        <option value="580">RWA</option>
                        <option value="581">PolitiFi</option>
                        <option value="607">DePIN</option>
                        <option value="808">Market</option>
                    </select>
                </div>

            </div>

            <div class="desktop-viewO" style={{ margin: "20px 10px" }}>
                <table>
                    <tbody>
                        <tr >
                            <th >
                                <button disabled="" className="btn "> Last day </button>
                            </th>
                            <th>
                                <button disabled="" className="btn "> Last 1 Day </button> </th>
                            <th >
                                <button disabled="" className="btn"> Last 7 Days </button> </th>
                            <th >
                                <button disabled="" className="btn"> Last 30 Days </button> </th>
                            <th> <button disabled="" className="btn"> Last 90 Days </button> </th>
                        </tr>
                        <tr>
                        <td id="tableportfolio1">
                            <a href="https://investing.crowdwisdom.live/portfolio/CW360-Memecoin-Index" target="_blank ">Memecoin Index Performance</a>
                        </td>
                        <td id="oneDayRoiO">-1.7%</td>
                        <td id="sevenDayRoiO">-1.9%</td>
                        <td id="thirtyDayRoiO">-15.4%</td>
                        <td id="ninetyDayRoiO" >39.2%</td>
                    </tr>
                    <tr> 
                        <td id="tableportfolio2">
                            <a href="https://investing.crowdwisdom.live/portfolio/CW360-AI-Token-Index" target="_blank" rel="noreferrer">AI Index Performance</a>
                            </td>
                             <td id="oneDayRoi1O">-2.6%</td>
                              <td id="sevenDayRoi1O" >-3.3%</td> 
                              <td id="thirtyDayRoi1O">-12.9%</td> 
                              <td id="ninetyDayRoi1O" >4.6%</td>
                               </tr>
                            </tbody>
                            </table>
            </div>
            <div class="container w3_bg">
                <div class="index-drop w3_bg">
                    <span> <p id="todayIndex" style={{ marginTop: "5px" }}></p>
                    </span>
                </div>
                <div id="chartsContainer" class="w3_bg">
                    <img src="memeai.png" alt="memeai" className="memecoinimage" />
                </div>
            </div>

            <div className="custombutton-container">
            <a href="https://investing.crowdwisdom.live/login?_gl=1*1kl11io*_ga*MzcyOTM2MDAuMTczNDk0NDcxNQ..*_ga_30MN0FE8V1*MTczNTU2NjY4NS45LjAuMTczNTU2NjY4NS42MC4wLjA." className="custom-button" style={{textDecoration:"none"}}>Crypto Influencers
            </a>
            <a href="https://investing.crowdwisdom.live/Portfolio-Gallery?_gl=1*10hyrn6*_ga*MzcyOTM2MDAuMTczNDk0NDcxNQ..*_ga_30MN0FE8V1*MTczNTU2NjY4NS45LjAuMTczNTU2NjY4NS42MC4wLjA." className="custom-button" style={{textDecoration:"none"}}>Crypto Investors
            </a>
            </div>
            </div>
            )
}

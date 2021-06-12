import React from "react"
import NDBWrapper from "../NDBWrapper"
import { Link } from "gatsby"
import distImg from "../../assets/images/homepage/news1.png"
import daiyImg from "../../assets/images/homepage/news2.png"
import fabcrImg from "../../assets/images/homepage/news3.png"

import LeftLogo from "../../assets/images/icons/leftArrow.png"
import RightLogo from "../../assets/images/icons/rightArrow.png"


const HomeNewsEventSection = ({fullWidth}) => {
  return (
    <NDBWrapper fullWidth={fullWidth}>
     

         <div className="NewsEventHead">
                <div className="lLogo"><img src={LeftLogo} alt="" /></div>
                <div className="tabCenter"><span>News</span> Event</div>
                <div className="RLogo"><img src={RightLogo} alt="" /></div>
         </div>

          <div className="NewsEvent_cards">

              <div className="NeEvBox">               
                     <img src={distImg} alt="The Financial District" />
                     <span className="eventTitle">The Financial District</span>
                     <p>U.S Firm Claims its<br></br> Nuke-Powered Diamond Battery Lasts 28,000 Years</p>
                     <span className="eventDate">Apr 4, 2021</span>
               
                 
              </div>
              <div className="NeEvBox">                 
                     <img src={daiyImg} alt="Dailymail" />

                     <span className="eventTitle">Dailymail</span>
                     <p>Radioactive DIAMOND battery powered by nuclear waste 'will run for 28,000 years' and could go on sale by 2023</p>
                     <span className="eventDate">March 31, 2021</span>

              </div>
              <div className="NeEvBox">
               
                     <img src={fabcrImg} alt="Fabcross" />
                       <span className="eventTitle">Fabcross</span>
                     <p>2万8000年作動するダイヤモンド電池の実現に向けて——核廃棄物が原料</p>
                     <span className="eventDate">Oct 22, 2021</span>
                

                 </div>

         </div>



    </NDBWrapper>
  )
}

export default HomeNewsEventSection

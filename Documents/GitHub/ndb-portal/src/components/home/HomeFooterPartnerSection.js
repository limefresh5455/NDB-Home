import React from "react"
import NDBWrapper from "../NDBWrapper"

import dailyLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/dailyMail.png"
import yahooLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/yahoo.png"
import techCrunchLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/techcrunch.png"
import forbesLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/forbes.png"
import bbcLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/bbc.png"
import orfLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/orf.png"
import techtimesLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/techTimes.png"
import fattoLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/fatto.png"
import mediumLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/medium.png"
import syfyLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/syfy.png"
import scienceTimesLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/scienceTimes.png"

import miningDotLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/miningDot.png"
import popularMechLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/popularMechanics.png"
import telegraphLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/telegraph.png"
import questFranceLogo from "../../assets/images/partnersLogos/PartnerLogosBottom/questFrance.png"

const HomeFooterPartnerSection = ({fullWidth}) => {
  return (
    <div className="partnerWrap">

      <div className="ndb-wrapper">


      <div className="Jointeam_cards">
          <div className="Clogo"><img src={dailyLogo} alt="" /></div>
          <div className="Clogo"><img src={yahooLogo} alt="" /></div>
          <div className="Clogo"><img src={techCrunchLogo} alt="" /></div>
          <div className="Clogo"><img src={forbesLogo} alt="" /></div>

          <div className="Clogo"><img src={bbcLogo} alt="" /></div>
          <div className="Clogo"><img src={orfLogo} alt="" /></div>
          <div className="Clogo"><img src={techtimesLogo} alt="" /></div>
          <div className="Clogo"><img src={fattoLogo} alt="" /></div>

          <div className="Clogo"><img src={mediumLogo} alt="" /></div>
          <div className="Clogo"><img src={syfyLogo} alt="" /></div>
          <div className="Clogo"><img src={scienceTimesLogo} alt="" /></div>
          <div className="Clogo"><img src={miningDotLogo} alt="" /></div>

          <div className="Clogo"><img src={popularMechLogo} alt="" /></div>
          <div className="Clogo"><img src={forbesLogo} alt="" /></div>
          <div className="Clogo"><img src={telegraphLogo} alt="" /></div>
          <div className="Clogo"><img src={questFranceLogo} alt="" /></div>

          
        </div>
     </div>
   </div>
    
  )
}

export default HomeFooterPartnerSection

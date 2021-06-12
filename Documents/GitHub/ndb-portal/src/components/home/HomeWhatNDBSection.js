import React from "react"
import NDBWrapper from "../NDBWrapper"
import Container from "../Container"

import techImg from "../../assets/images/icons/TECHNO.png"
import LogyImg from "../../assets/images/icons/LOGY.png"
import tradingImg from "../../assets/images/icons/trending_up.png"
import lockImg from "../../assets/images/icons/lock-alt.png"
import batteryImg from "../../assets/images/icons/batteryBolt.png"
import MidCircuit from "../../assets/images/homepage/NdbGraph.png"

const HomeWhatNDBSection = ({fullWidth}) => {
  return (
    <NDBWrapper fullWidth={fullWidth}>
      

    <div className="what_is_NDB__section1">
    <div className="whatNDBTitleTop"><img src={techImg} alt="" /></div>
      <Container>
          <span className="what_is_NDB__section1-title">What is NDB?</span>
          <p className="section-content">
            NDB Battery a battery that is selfcharging, <br></br><br></br>
            NDB is one of the earliest adopters and developers of nuclear
            voltaic cells for mid and high power applications. The self charging
            battery produces stable power by converting the energy released from
            nuclear decay into usable energy all throughout its lifetime which
            is generally many years.
          </p>

      </Container>
    <div className="whatNDBLogyLeft"><img src={LogyImg} alt="" /></div>


     <div className="whatNDBCircutMid"><img src={MidCircuit} alt="" /></div>


      <div fullWidth={fullWidth}>
        <div className="what_is_NDB_CalltoAction">
            <div className="box">
              <h3>NDB T1 Transducer</h3>
              <img src={tradingImg}></img>
              <p>Transducer that<b>can exceed the efficiency and operate at a wider power</b> output range than any similar batteries</p>
            </div>
            <div className="box">
              <h3>Lock-In System</h3>
              <img src={lockImg}></img>
              <p>Ion implantation mechanism called <b>"lock-in system" which preserves the safety</b></p>
              </div>
            <div className="box">
              <h3>rcRE system</h3>
              <img src={batteryImg}></img>
              <p>The strategic placement of the source and the NDB cells <b>optimizes</b> inelastic scattering</p>
            </div>
          </div>
      </div>
      
    </div>



    </NDBWrapper>
  )
}

export default HomeWhatNDBSection

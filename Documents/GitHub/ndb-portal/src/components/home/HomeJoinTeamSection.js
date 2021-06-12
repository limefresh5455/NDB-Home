import React from "react"
import { Link } from "gatsby"
import NDBWrapper from "../NDBWrapper"
import arrow from "../../assets/images/icons/arrow.png"

const HomeJoinTeamSection = ({fullWidth, pageName, backImg, bannerLink, JoinTitle }) => {
  let className = ""

  if (pageName) {
    className = `${pageName}__JoinBanner`
  }

  return (         
    
    <NDBWrapper fullWidth={fullWidth}>
        <div className={className}>
          {/* <div className="banner"> */}
          <div className="banner__left">
            
            <img
              src={backImg}
              className="banner__overlay"
              alt="banner background "
            />
            <div className="JTitle">"{JoinTitle}"</div>
            <Link to="" className="banner__button">
              <img src={arrow} alt="" />
              <span>{bannerLink}</span>
            </Link>
          </div>
          
          {/* </div> */}
        </div>
        </NDBWrapper>  
      
  )
}

export default HomeJoinTeamSection


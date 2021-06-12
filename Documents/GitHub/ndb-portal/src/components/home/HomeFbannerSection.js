import React from "react"
import { Link } from "gatsby"
import NDBWrapper from "../NDBWrapper"
import arrow from "../../assets/images/icons/arrow.png"

const HomeFbannerSection = ({fullWidth, pageName, backImg, bannerLink, BelieveTitle }) => {
  let className = ""

  if (pageName) {
    className = `${pageName}__FBanner`
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
            <div className="BelieveTitle">"{BelieveTitle}"</div>
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

export default HomeFbannerSection

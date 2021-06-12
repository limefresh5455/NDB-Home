import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Seo from "../components/seo"
import backImg from "../assets/images/homepage/car.svg"
import backFImg from "../assets/images/homepage/abstractUnderVideo.png"
import backDisImg from "../assets/images/homepage/videoSection.png"
import backJoinImg from "../assets/images/homepage/graphUnderPartners.png"
import HomePartnerSection from "../components/home/HomePartnerSection"
import HomeWhatNDBSection from "../components/home/HomeWhatNDBSection"
import HomeDiscoverSection from "../components/home/HomeDiscoverSection"
import HomeNewsEventSection from "../components/home/HomeNewsEventSection"
import HomeFooterPartnerSection from "../components/home/HomeFooterPartnerSection"
import HomeFbannerSection from "../components/home/HomeFbannerSection"
import HomeJoinTeamSection from "../components/home/HomeJoinTeamSection"


export default function Home() {
  return (
    <Layout>
    <Seo title="Home"/>
        <Banner pageName="home" backImg={backImg} bannerLink="Contact us" HeroTitle="Self-Charging Battery" className="homeBanner bottomSwirlImage" />
        <HomePartnerSection fullWidth />
        <HomeWhatNDBSection fullWidth />
        <HomeDiscoverSection pageName="home" backImg={backDisImg} bannerLink="Play Video" DiscoverTitle="Discover how we make lifelong self-charging batteries possible" fullWidth />       
        <HomeFbannerSection pageName="home" backImg={backFImg} bannerLink="Believe In NDB" BelieveTitle="Read more about our values and reponsibilites" fullWidth />
        <HomeNewsEventSection />
        <HomeFooterPartnerSection />
        <HomeJoinTeamSection pageName="home" backImg={backJoinImg} bannerLink="Join our team" JoinTitle="Invest In Your Abilities Join Us At NDB" fullWidth />
    </Layout>
  )
}


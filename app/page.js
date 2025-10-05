import React from "react";
import ServicesFive from "../components/ServicesFive";
import Testimonial from "@/components/sections/home2/Testimonial";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home2/Banner";
import About from "@/components/sections/home2/About";
import Services from "@/components/sections/home3/Services";
import WorkingProcess from "@/components/sections/home8/WorkingProcess";
import Chooseus from "@/components/sections/home15/Chooseus";
import PartnersMarquee from "@/components/sections/home15/Patrners";
import News from "@/components/sections/home10/News";
import ForNonProfit from "@/components/ForNonProfit";

const Home = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={11} wrapperCls="home_1">
        <Banner />
        <ServicesFive />
        <About />
        <Services />
        <ForNonProfit />
        <WorkingProcess/>
       <Testimonial />
       <Chooseus/>
        <PartnersMarquee/>
      <News/>
      </Layout>
    </>
  );
};

export default Home;

import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Cases from "@/components/sections/home1/Cases"
import Clients from "@/components/sections/home1/Clients"
import Cta from "@/components/sections/home1/Cta"
import Feature from "@/components/sections/home1/Feature"
import Features from "@/components/sections/home1/Features"
import Funfacts from "@/components/sections/home1/Funfacts"
import Map from "@/components/sections/home1/Map"
import News from "@/components/sections/home1/News"
import Pricing from "@/components/sections/home1/Pricing"
import Process from "@/components/sections/home1/Process"
import Testimonial from "@/components/sections/home1/Testimonial"
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
import Services from "@/components/sections/home2/Services"
import ServiceTen from "@/components/sections/home9/ServiceTen"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} wrapperCls="home_1">
                <Banner />
                {/* <Clients /> */}
                {/* <Features />
                <About />
                <Funfacts />
                <WhyChooseUs />
                <Cases />
                <Process />
                <Testimonial />
                <Pricing />
                <News />
                <Map />
                <Cta />
                <Feature />
                <Services />
                <ServiceTen/> */}
            </Layout>
        </>
    )
}
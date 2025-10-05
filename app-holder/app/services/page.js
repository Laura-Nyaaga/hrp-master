import Layout from "@/components/layout/Layout";
import ProfessionalServices from "./professionalServices";
import IndustriesWeServe from "./industryServed";
import Testimonials from "./testimonals";
import FeatureSection from "./features";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Our services"
        wrapperCls="home_1"
      >
        <div>
          <ProfessionalServices />
          <IndustriesWeServe />
          <Testimonials />
          <FeatureSection />
        </div>
      </Layout>
    </>
  );
}

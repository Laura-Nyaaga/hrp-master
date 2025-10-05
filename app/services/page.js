import Layout from "@/components/layout/Layout";
import ProfessionalServices from "../../components/elements/services/professionalServices";
import IndustriesWeServe from "../../components/elements/services/industryServed";
import Testimonials from "../../components/elements/services/testimonals";
import FeatureSection from "../../components/elements/services/features";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={11} wrapperCls="home_1">
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

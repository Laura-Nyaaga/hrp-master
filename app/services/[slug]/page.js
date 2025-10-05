import Layout from "@/components/layout/Layout";
import AuditSlider1 from "@/components/slider/AuditSlider1";
import ServiceTabs1 from "@/components/elements/ServiceTabs1";
import Link from "next/link";
import { notFound } from "next/navigation";
import DownloadPdf from "@/components/sections/home4/DownloadPdf";
import IndustriesWeServe from "../../../components/elements/services/industry";
import parse from "html-react-parser";
import { contentMap, services } from "@/app/utils/services";

// Lookup map
const servicesData = services?.reduce((map, svc) => {
  map[svc.slug] = { ...svc, ...contentMap[svc.slug] };
  return map;
}, {});

async function fetchServiceBySlug(slug) {
  return servicesData[slug] || null;
}
export async function generateStaticParams() {
  return services?.map((svc) => ({ slug: svc.slug }));
}

export default async function ServicePage({ params }) {
  const service = await fetchServiceBySlug(params.slug);
  if (!service) notFound();
  console.log("service", service);

  return (
    <Layout headerStyle={1} footerStyle={11} wrapperCls="home_1">
      <section className="services-details">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 content-side">
              <AuditSlider1 captions={service?.features?.slice(0, 3)} />
              <div className="row mb-5">
                <div className="col-md-5">
                  <h2>{service?.description}</h2>
                  <div className="icon">
                    <span className="flaticon-career" />
                  </div>
                </div>

                <div className="col-md-7 mb-5">
                  <div className="text"> {parse(service?.content)}</div>
                  <ul className="list">
                    {service?.bullets?.map((f, i) => (
                      <li key={i}>
                        <i className="fa fa-check" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <IndustriesWeServe industries={service?.industriesWeServe} />
              </div>

              <br />
              <br />
              <br />
              <h2>{parse(service?.services?.title)}</h2>
              <h5>{parse(service?.services?.subTitle)}</h5>
              <br />
              <ServiceTabs1
                items={service?.services?.items}
                type={service?.type}
              />
            </div>
            <aside className="col-lg-4">
              <div className="service-sidebarItems">
                <div className="widget widget_categories_two">
                  <div className="widget-content">
                    <ul className="categories-list clearfix">
                      {service?.sidebarItems?.map((i, idx) => (
                        <li key={idx}>
                          <Link href="#">
                            {" "}
                            {i} <span />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className="right-column"
                  style={{
                    backgroundImage: "url(assets/images/background/bg-12.jpg)",
                  }}
                >
                  <DownloadPdf />
                </div>
                <div
                  className="widget widget_contact"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 255, 0.4)), url('/assets/images/customerCare.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="widget-content">
                    <img
                      src="/assets/images/icons/icon-55.png"
                      alt="Contact icon"
                    />
                    <h4>Do you need any help?</h4>
                    <div className="phone-number">
                      <a href="tel:+18326300738">+1 (832) 630-0738</a>
                    </div>
                    <div className="email">
                      <Link href="mailto:support@hrpconsulting.org">
                        support@hrpconsulting.org
                      </Link>
                    </div>
                    <div className="link-btn">
                      <Link
                        href="#"
                        className="theme-btn btn-style-one text-white"
                      >
                        <span className="btn-title">CONTACT</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="feature-section-two mt-0">
        <div className="auto-container">
          <div className="row">
            {service?.footer?.map((items, idx) => (
              <div key={idx} className="col-lg-6 feature-block-two style-two">
                <div className="shape-box">
                  <div className="inner-box">
                    <div className="icon">
                      {/* You could swap icons dynamically here, too, if you like */}
                      <img
                        src={`/assets/images/icons/icon-${
                          idx === 0 ? 9 : 10
                        }.png`}
                        alt=""
                      />
                    </div>
                    <h5>{parse(items?.content)}</h5>
                    <Link href="/start-business">{items?.title}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

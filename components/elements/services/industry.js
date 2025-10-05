"use client";
import { useState } from "react";
import { industryList } from "@/app/utils/services";
export default function IndustriesWeServe({ industries }) {
  const [showAll, setShowAll] = useState(false);

  const matchedIndustries = industries?.map((name) => {
    const match = industryList.find((item) => item.title === name);
    return match || { title: name, icon: null, description: null };
  });

  const industriesToShow = showAll
    ? matchedIndustries
    : matchedIndustries.slice(0, 6);

  return (
    <section className=" bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Industries We Serve
          </h2>
          <div className="flex justify-center items-center mb-4">
            <div className="h-1 w-12 bg-blue-600 mr-1 rounded-full"></div>
            <div className="h-1 w-24 bg-blue-500 mr-1 rounded-full"></div>
            <div className="h-1 w-12 bg-blue-400 rounded-full"></div>
          </div>
          <h5 className="text-lg text-gray-600 max-w-3xl mx-auto text-start">
            We deliver solutions that drive transformation and measurable
            outcomes across diverse sectors
          </h5>
        </div>
        <br />
        <div className="row">
          {industriesToShow?.map((industry, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center"
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease ${index * 0.15}s forwards`,
                }}
              >
                <div className="mb-4 p-4 flex items-center h-20 bg-white rounded-lg">
                  {/* Icon on the left */}
                  <div className="flex-shrink-0  rounded-full p-4">
                    <span
                      className={industry.icon}
                      style={{ fontSize: "48px", color: "#3182ce" }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title on the right */}
                  <div className="ml-4">
                    <h5 className="text-2xl font-bold text-gray-800">
                      {industry.title}
                    </h5>
                  </div>
                  <br />
                  <p className="text-center">{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {industries.length > 6 && (
          <div className="text-center mt-6">
            <button
              className="btn-style-five"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Load More"}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

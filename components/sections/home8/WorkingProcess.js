import Link from "next/link";
import { Search, Settings, Play, RefreshCcw } from "lucide-react";

export default function WorkingProcess() {
  return (
    <section className="working-process-section-eight">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h6 className="home-subtitle">Our Work Process</h6>
          <h2>How We Operate</h2>
        </div>
        <div className="row">
          {/* Step 1: Discovery & Consultation */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="working-process-block-eight">
              <div className="img-holder">
                <div className="inner">
                  <Search size={48} strokeWidth={2} />
                </div>
                <div className="counting-step-box" />
              </div>
              <div className="text-holder">
                <h3>
                  <Link href="#">Discovery & Consultation</Link>
                </h3>
                <p>
                  We assess your organization’s needs, challenges, and goals
                  through an in-depth consultation.
                </p>
              </div>
            </div>
          </div>
          {/* Step 2: Tailored Strategy Development */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="working-process-block-eight text-center">
              <div className="img-holder mb-3">
                <div className="inner">
                  {" "}
                  <Settings size={48} strokeWidth={2} />
                </div>

                <div className="counting-step-box" />
              </div>
              <div className="text-holder">
                <h3>
                  <Link href="#">Tailored Strategy Development</Link>
                </h3>
                <p>
                  We craft customized solutions aligned with your mission,
                  operations, and financial objectives.
                </p>
              </div>
            </div>
          </div>
          {/* Step 3: Implementation & Execution */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="working-process-block-eight text-center">
              <div className="img-holder mb-3">
                <div className="inner">
                  <Play size={48} strokeWidth={2} />
                </div>

                <div className="counting-step-box" />
              </div>
              <div className="text-holder">
                <h3>
                  <Link href="#">Implementation & Execution</Link>
                </h3>
                <p>
                  Our experts guide you through seamless execution, ensuring
                  efficiency and compliance.
                </p>
              </div>
            </div>
          </div>
          {/* Step 4: Ongoing Support & Optimization */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="working-process-block-eight text-center">
              <div className="img-holder mb-3">
                <div className="inner">
                  <RefreshCcw size={48} strokeWidth={2} />
                </div>
                <div className="counting-step-box" />
              </div>
              <div className="text-holder">
                <h3>
                  <Link href="#">Ongoing Support & Optimization</Link>
                </h3>
                <p>
                  We continuously monitor progress, refining strategies to adapt
                  to evolving needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

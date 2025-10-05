export default function Contact() {
  return (
    <>
      <section className="contact-home-11">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row clearfix">
              <div className="col-lg-6">
                <figure className="image-box">
                  <img src="/assets/images/phone.jpg" alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <div className="contact-form-box">
                  <div className="sec-title light">
                    <h4>Get In Touch</h4>
                    <h2>Schedule Your Free Organizational Consultation</h2>
                  </div>
                  <form
                    method="post"
                    action="sendemail.php"
                    className="contact-form"
                  >
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          name="firstname"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        <textarea name="message" placeholder="Message" />
                      </div>
                      <div className="col-md-12 form-group">
                        <button
                          className="theme-btn btn-style-four"
                          type="submit"
                          name="submit-form"
                        >
                          <span className="btn-title">Submit Now</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

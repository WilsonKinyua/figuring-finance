import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMap } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  return (
    <Fragment>
      <section className="pt-5 mb-5 contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-info">
                <h1 className="line-below main-color text-uppercase">
                  Talk to us
                </h1>
                {/* <div className="contact-list-info">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <p>
                    &nbsp;
                    <a className="text-dark" href="tel:+254 757 917 741">
                      +254 757 917 741
                    </a>
                  </p>
                </div>
                <div className="contact-list-info">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <p>
                    &nbsp;
                    <a
                      className="text-dark"
                      href="mailto:info@figuringfinance.africa"
                    >
                      info@figuringfinance.africa
                    </a>
                  </p>
                </div>
                <div className="contact-list-info">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faMap} />
                  </div>
                  <p className="text-dark">
                    &nbsp;Consummate Court, Ole Dume Road, Nairobi, Kenya
                  </p>
                </div> */}
                <div className="contact-list-info">
                  <p>
                    If you have questions or would like to inquire about
                    Figuring Finance, please fill out the form and we will be
                    in touch with you as soon as possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="contact-us-form shadow p-4 border-radius mb-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name *"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email address *"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Please enter your phone *"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Your message *"
                        rows={8}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

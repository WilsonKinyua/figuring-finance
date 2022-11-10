import { Fragment } from "react";
// import landing from "../img/Figuring Finance Landing.png"
// import owner from "../img/2.jpeg";
import journey from "../img/journey.jpeg";
// import support from "../icons/support.png";
// import correct from "../icons/correct.png";
// import brave from "../icons/protest.png";
// import investments from "../icons/investments-accesibility.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <Fragment>
      <section className="homepage">
        <div className="container">
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-7">
              <div className="homepage-content mb-5 pb-5">
                <h5 className="text-uppercase">
                  GET personal finance education
                </h5>
                <h1 className="mt-3 text-capitalize">
                  Personal Finance Education Simplified
                </h1>
                <p className="mt-5">
                  We aim to provide the right personal finance education and
                  resources to guide you in figuring out your finances and
                  transforming your money till your accounts are unrecognizable.{" "}
                  <strong>
                    Get started with the free Money Revamp Roadmap
                  </strong>
                </p>
                <form className="form-guide">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <button
                        type="submit"
                        className="btn btn-primary text-uppercase"
                      >
                        Send me the guide
                      </button>
                    </div>
                  </div>
                </form>
                <div className="signature"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="purple-bg"></div>
      </section>
      <section className="assessment">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h5>FREE ASSESSMENT</h5>
              <h2 className="mt-4 mb-4">Unlock your future financial path.</h2>
              <p className="text-white">
                Take the quiz to get a shockingly accurate description of where
                you are and where to go on your journey to Financial
                Independence.
              </p>
              <Link className="btn btn-primary btn-lg mt-3 btn-bg-secondary">
                Read more{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            </div>
            <div className="col-md-7">
              <div className="img-wrapper">
                <img
                  src="https://images.pexels.com/photos/732444/pexels-photo-732444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  // src={owner}
                  alt="owner"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="journey">
        <div className="row" style={{ marginRight: "20px" }}>
          <div className="col-md-5">
            <div className="img-wrapper">
              <img src={journey} alt="Journey" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12">
                <div className="journey-content">
                  <h5 className="text-uppercase">from our founder</h5>
                  <h2 className="mt-4 mb-4">Welcome To Figuring Finance</h2>
                  <p>
                    I love to teach individuals how to do better with their
                    money, to inspire them to take that bold step and ignite
                    your financial freedom journey.
                  </p>
                  <p>
                    In a dark time in my life I found myself wondering where all
                    my money was going, I could barely save, did not understand
                    the importance of investing, felt stuck and overwhelmed.
                    This led me to invest in my own personal finance education,
                    grow my savings and investment portfolio. What began as a
                    personal journey towards financial stability for my daughter
                    and I was a catalyst for helping others take control of
                    their personal finances and build the life they want to
                    live. You may have come across our Instagram page, other
                    social media handles, or a media interview whichever way you
                    found us we are glad you are here!
                  </p>
                  <p>
                    This website was made with you in mind to help you on your
                    financial freedom journey. You will find here resources,
                    actionable tools and our services provided to help you in
                    figuring out your personal finances. This is a journey you
                    will not regret taking.
                  </p>
                  <p>
                    Taking control of your money is a powerful tool that you can
                    utilize to build the life you want through actionable steps
                    such as:
                    <ul>
                      <li>Budgeting and Tracking your Spending</li>
                      <li>Saving and Investing</li>
                      <li>Ditching debt</li>
                      <li>Building real wealth</li>
                    </ul>
                  </p>
                  {/* <Link className="btn btn-primary btn-lg mt-3">
                    Read more{" "}
                    <span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link> */}
                </div>
              </div>
            </div>
            {/* <div className="row text-center icons g-0">
              <div className="col-md-3">
                <span className="icon-wrapper">
                  <img src={support} alt="Support" />
                  <h5>Support</h5>
                </span>
              </div>
              <div className="col-md-3">
                <span className="icon-wrapper">
                  <img src={correct} alt="Sound Financial Education" />
                  <h5>Sound Financial Education</h5>
                </span>
              </div>
              <div className="col-md-3">
                <span className="icon-wrapper">
                  <img src={brave} alt="Brave" />
                  <h5>Brave</h5>
                </span>
              </div>
              <div className="col-md-3">
                <span className="icon-wrapper">
                  <img src={investments} alt="Accessibility" />
                  <h5>Accessibility</h5>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="assessment podcast">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>LISTEN TO THE PODCAST</h5>
              <h2 className="mt-4 mb-4">The Award Winning Podcast</h2>
              <h6 className="main-color text-italic">with Jamila Souffrant</h6>
              <p className="pt-3">
                Our crowd pleasing podcast will give you the courage, hope, and
                tools that you need to launch your own journey into financial
                independence. Check out the latest podcast episode and dive into
                any of the hundreds of episodes that are inspiring our community
                of journeyers. We’ve curated the top categories to get you
                started.
              </p>
            </div>
            <div className="col-md-6">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/k9LsphV9hi8"
                  title="Jam 316 Financial Clinic - 12/10/2022 (Ancient Financial wisdom)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

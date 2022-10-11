import React from "react";
// import landing from "../img/Figuring Finance Landing.png"
// import owner from "../img/2.jpeg";
import journey from "../img/journey.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <section className="homepage">
        <div className="container">
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-6">
              <div className="homepage-content mb-5 pb-5">
                <h5 className="text-uppercase">
                  GET personal finance education
                </h5>
                <h1 className="mt-3 text-capitalize">
                  Personal Finance & Education Simplified
                </h1>
                <p className="mt-5">
                  We aim to provide the right personal finance education and
                  resources to guide you in figuring out your finances and
                  transforming your money till your accounts are unrecognizable.{" "}
                  <strong>
                    Get started with the free Money Revamp Roadmap
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
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
              <Link className="btn btn-primary btn-lg mt-3">
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
        <div className="row">
          <div className="col-md-4">
            <div className="img-wrapper">
              <img src={journey} alt="Journey" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="journey-content">
              <h5 className="text-uppercase">from our founder</h5>
              <h2>Welcome To Figuring Finance</h2>
              <p>
                I love to teach individuals how to do better with their money,
                to inspire them to take that bold step and ignite your financial
                freedom journey.
              </p>
              <p>
                In a dark time in my life I found myself wondering where all my
                money was going, I could barely save, did not understand the
                importance of investing, felt stuck and overwhelmed. This led me
                to invest in my own personal finance education, grow my savings
                and investment portfolio. What began as a personal journey
                towards financial stability for my daughter and I was a catalyst
                for helping others take control of their personal finances and
                build the life they want to live
              </p>
              <Link className="btn btn-primary btn-lg">
                Read more{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

import { Fragment } from "react";
import about from "../img/about.jpeg";
// import support from "../icons/support.png";
// import correct from "../icons/correct.png";
// import brave from "../icons/protest.png";
import stand from "../img/stand.jpeg";
// import investments from "../icons/investments-accesibility.png";
import { Link } from "react-router-dom";
export default function AboutUs() {
  return (
    <Fragment>
      <section className="about-us pt-5 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="about-us-content pt-3 mt-4">
                <h5 className="text-uppercase">ABOUT</h5>
                <h1 className="mt-3 text-capitalize main-color">
                  The Journey to Launch Story
                </h1>
                <p className="mt-3">
                  Figuring Finance was founded in 2021 with the goal of helping
                  individuals learn about managing, growing, and investing their
                  money in a relatable and non-judgmental way. In the first year
                  and a half, we offered free content, and as we continued to
                  grow, we began to offer coaching programs to help those who
                  were feeling stuck and needed more guidance. It has been an
                  amazing experience to see our vision come to fruition.
                </p>
                <p className="mt-1">
                  We are here to help you on your journey to figuring out your
                  finances. We hope that our informative content, tools, and
                  resources will be valuable to you. We are rooting for you and
                  will be with you every step of the way. With dedication,
                  patience, and resilience, you can reach your financial goals
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="img-wrapper">
                <img
                  loading="lazy"
                  src={about}
                  alt="owner"
                  className="img-fluid border-radius"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="opportunities">
        <div className="bg-main">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center text-content">
                <p className="text-white">
                  Your relationship with money is shaped by your past, but it
                  doesn't have to define your future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="bg-nude-color icons-section">
        <div className="container">
          <div className="row text-center icons g-0 ">
            <div className="col-md-3">
              <span className="icon-wrapper">
                <img loading="lazy" src={support} alt="Support" />
                <h5>Support</h5>
              </span>
            </div>
            <div className="col-md-3">
              <span className="icon-wrapper">
                <img
                  loading="lazy"
                  src={correct}
                  alt="Sound Financial Education"
                />
                <h5>Sound Financial Education</h5>
              </span>
            </div>
            <div className="col-md-3">
              <span className="icon-wrapper">
                <img loading="lazy" src={brave} alt="Brave" />
                <h5>Brave</h5>
              </span>
            </div>
            <div className="col-md-3">
              <span className="icon-wrapper">
                <img loading="lazy" src={investments} alt="Accessibility" />
                <h5>Accessibility</h5>
              </span>
            </div>
          </div>
        </div>
      </section> */}
      <section className="journey the-journey-2 mt-3 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12">
                  <div className="journey-content">
                    <h2 className="mt-4 mb-4">The Journey is Far From Over</h2>
                    <p>
                      With over 135,000 dedicated Journeyers in the community,
                      our mission here at Journey to Launch is to help you
                      eliminate debt, save more money and increase your net
                      worth so that you can ultimately achieve Financial Freedom
                      & Independence.
                    </p>
                    <p>
                      We’re here to open you up to a universe where you can
                      realize what’s possible for you to reach financial
                      independence, and along the way discover financial
                      freedom.
                    </p>
                    <Link
                      to="/"
                      className="btn btn-primary btn-lg mt-3 text-uppercase"
                    >
                      join our facebook community
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="img-wrapper">
                <img src={stand} alt="Journey" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

import { Fragment } from "react";
import about from "../img/about.jpeg";
// import support from "../icons/support.png";
// import correct from "../icons/correct.png";
// import brave from "../icons/protest.png";
import stand from "../img/stand.jpeg";
// import investments from "../icons/investments-accesibility.png";
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
                    <h2 className="mb-4">The Journey is Far From Over</h2>
                    <p>
                      Money can feel overwhelming and when there is no clear way
                      to begin it can affect you mentally and even physically:
                    </p>
                    <p>
                      <strong>Financial anxiety:</strong> where you worry
                      constantly about money and feel something bad could happen
                      to your money at any given moment
                    </p>
                    <p>
                      <strong>Financial stress:</strong> According to a study
                      done in America “
                      <a
                        href="https://www.apa.org/news/press/releases/stress/2020/sia-mental-health-crisis.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="main-color"
                      >
                        Stress in America 2020: A National Mental Health Crisis
                      </a>
                      ”. 64% of adults stated that money is a major source of
                      stress in their lives.
                    </p>
                    <p>
                      According to{" "}
                      <a
                        href="https://www.menshealth.com/health/a36489551/money-stress-heart-health/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="main-color"
                      >
                        Mens Health
                      </a>{" "}
                      stated that financial stress is right up the alley of the
                      stressors that can predispose one to heart disease.
                    </p>
                    <p>
                      We at Figuring Finance care about your overall financial
                      wellness and urge you not to ignore your financial state
                      potentially causing other underlying illnesses. Let us
                      control what we can control and take that bold step to
                      change our lives.
                    </p>
                    <h6>
                      3 stages every beginner takes in figuring out their
                      personal finances:
                    </h6>
                    <ul>
                      <li>
                        <strong>Financial adulting:</strong> Something in your
                        life wakes you up to start caring about your personal
                        finances it could be moving out, handling more
                        responsibilities etc.
                      </li>
                      <li>
                        <strong>Investing in your financial literacy:</strong>{" "}
                        Making an investment of money and/or time to learn how
                        to manage your money, to learn how money, banks and
                        financial systems really work.
                      </li>
                      <li>
                        <strong>The bold step:</strong> Take the action to apply
                        what you have learnt. To change what needs to be changed
                        and do the WORK to better your money journey
                      </li>
                    </ul>
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

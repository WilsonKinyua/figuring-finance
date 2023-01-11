import { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import journey from "../img/journey.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { getTestimonies } from "../fake-backend";

export default function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const testimonies = getTestimonies();

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
                        disabled
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
            <div className="col-md-5 mt-4">
              <h2 className="mt-5 mb-4">Unlock your future financial path.</h2>
              <p className="text-white">
                Are you ready to unlock your future financial path? If so,
                congratulations on taking the first step towards a brighter
                financial future. Personal finance can seem daunting at first,
                but with the right tools and guidance, it can be a rewarding and
                empowering journey.
              </p>
            </div>
            <div className="col-md-7">
              <div className="img-wrapper">
                <img
                  src="https://images.pexels.com/photos/732444/pexels-photo-732444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="owner"
                  className="img-fluid"
                  loading="lazy"
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
              <img src={journey} alt="Journey" loading="lazy" />
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
          </div>
        </div>
      </section>
      <section className="assessment podcast">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className="mt-4 mb-4">Ancient Financial Wisdom</h2>
              <p className="pt-3">
                In this insightful talk we discussed;
                <ul>
                  <li>How do you make your money work for you?</li>
                  <li>
                    What are some common myths about some investments that hold
                    some people back?
                  </li>
                  <li>How does one know where to invest?</li>
                </ul>
              </p>
            </div>
            <div className="col-md-5">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/k9LsphV9hi8"
                  title="Jam 316 Financial Clinic - 12/10/2022 (Ancient Financial wisdom)"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  // allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonies">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mt-3 mb-3">
              <h2 className="main-color">Testimonials</h2>
            </div>
          </div>
          <div className="text-center">
            <Slider {...settings}>
              {testimonies.map((testimony) => (
                <div className="card" key={testimony.id}>
                  <div className="card-body">
                    <div className="row g-0">
                      <div className="col-md-1">
                        <FontAwesomeIcon
                          icon={faQuoteLeft}
                          className="quote-left"
                        />
                      </div>
                      <div className="col-md-11">
                        <p className="card-text">
                          <q>
                            {/* {testimony.testimony_description.length > 200
                              ? `${testimony.testimony_description.substring(
                                  0,
                                  200
                                )}...`
                              : testimony.testimony_description} */}
                            {testimony.testimony_description}
                          </q>
                        </p>
                        {/* <p>
                          <button
                            className="read-more text-capitalize"
                            data-bs-toggle="modal"
                            data-bs-target={`testimonyModal${testimony.id}`}
                          >
                            read more <FontAwesomeIcon icon={faArrowRight} />
                          </button>
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* testimonies modals */}
      {/* {testimonies.map((testimony) => (
        <div
          className="modal fade"
          id={`testimonyModal${testimony.id}`}
          tabIndex={-1}
          aria-labelledby="testimonyModalLabel"
          aria-hidden="true"
          key={testimony.id}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <q>{testimony.testimony_description}</q>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))} */}
    </Fragment>
  );
}

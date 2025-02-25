import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";
import standing from "../../img/1.jpeg";
import standing2 from "../../img/3.jpeg";
import standing3 from "../../img/4.jpeg";

export default function CorporateTraining() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  var [phone, setPhone] = useState("");

  const [error, setError] = useState<string | null>(false as any);
  const [success, setSuccess] = useState<string | null>(false as any);
  const [preloader, setPreloader] = useState<boolean>(false);

  const API_URL = "https://figuring-finance-email-notifications.vercel.app";

  const onEnrollModule = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setPreloader(true);
    if (email && name && phone) {
      try {
        const response = await axios.get(`${API_URL}/api/enrollment`, {
          params: {
            module: "Corporate Training",
            name,
            email,
            phone_number: phone,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        setSuccess(response.data.message);
      } catch (error) {
        setError("Enrollment failed.");
      } finally {
        setPreloader(false);
      }
    } else {
      setError("Please fill all the fields.");
      setPreloader(false);
    }
  };

  return (
    <div className="coaching">
      <div className="container">
        <section className="journey the-journey-2 mt-3 mb-3">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12">
                    <div className="journey-content">
                      <h3 className="mb-4">We offer corporate training and workshops</h3>
                      <p>
                        Our programs are designed to enhance employees’ financial literacy and provide them with tools to manage their finances effectively, leading to improved productivity, increased financial confidence, and a better quality of life.
                      </p>
                      <h6>Key Benefits of Financial Wellness Programs:</h6>
                      <ul>
                        <li>
                          <p>
                            <strong className="orange-color">Enhanced Productivity:</strong> Financial stress can significantly impact an employee’s focus and efficiency at work. By providing resources and education to manage personal finances, employees can reduce their financial worries, allowing them to concentrate better on their job responsibilities.</p>
                        </li>
                        <li>
                          <p>
                            <strong className="orange-color">Increased Financial Confidence:</strong> Educational initiatives, such as workshops on budgeting, debt management, and investment strategies, empower employees to take control of their financial futures. This empowerment leads to greater financial confidence and reduced stress.</p>
                        </li>
                        <li>
                          <p>
                            <strong className="orange-color">Improved Quality of Life:</strong> Financial stability is closely linked to overall well-being. Employees who feel secure in their financial situation often experience better mental and physical health, leading to a higher quality of life both inside and outside the workplace.</p>
                        </li>
                        <li>
                          <p>
                            <strong className="orange-color">Employer Advantages:</strong> Organizations that offer financial wellness programs can benefit from increased employee satisfaction and loyalty. More than eight in ten employers report that providing such programs results in more satisfied, loyal, and engaged employees, as well as greater productivity and performance.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <Carousel
                  autoPlay
                  infiniteLoop
                >
                  <div>
                    <div className="img-wrapper">
                      <img src={standing} alt="Journey" loading="lazy" />
                    </div>
                  </div>
                  <div>
                    <div className="img-wrapper">
                      <img src={standing2} alt="Journey" loading="lazy" />
                    </div>
                  </div>
                  <div>
                    <div className="img-wrapper">
                      <img src={standing3} alt="Journey" loading="lazy" />
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
            <p>
              By integrating tailored financial wellness programs into your corporate training offerings, you not only invest in your employees’ personal growth but also enhance your organization’s overall performance and workplace culture.
            </p>
            <div className="text-center">
              <Link
                to="#"
                className="btn btn-primary btn-enroll-now"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </section>
        {/* modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  How would you like to be contacted?
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {error && <div className="alert alert-danger">{error}</div>}
                {success && (
                  <div className="alert alert-success">{success}</div>
                )}
                <form onSubmit={onEnrollModule}>
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="col-form-label required"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      required
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label
                        htmlFor="email"
                        className="col-form-label required"
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        required
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="phone"
                        className="col-form-label required"
                      >
                        Phone Number:
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="form-control"
                        required
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {preloader ? "Loading..." : "Save changes"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

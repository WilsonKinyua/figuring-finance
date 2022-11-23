import {
  faBullseye,
  faLocationCrosshairs,
  faMoneyBillTransfer,
  faMound,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function OneOnOneCoaching() {
  return (
    <div className="coaching">
      <div className="container">
        <div className="row">
          <div className="col-md-12 pt-5 pb-3">
            <h1>One on One Coaching</h1>
          </div>
          <div className="col-md-6">
            <div className="card border-none mb-4 shadow-sm">
              <div className="text-center">
                <FontAwesomeIcon icon={faMoneyBillTransfer} />
              </div>
              <div className="card-body">
                <h4 className="text-center text-capitalize">
                  <span className="module">Module 1</span> - Personal Finances
                </h4>
                <ol>
                  <li>The right mindset is gold</li>
                  <li>The lifestyle "trap"</li>
                  <li>Demystifying money myths</li>
                  <li>Understanding your expenses</li>
                  <li>Differentiating assets and liabilities</li>
                  <li>Emotional spending and your triggers</li>
                  <li>Money personalities which one you are</li>
                  <li>The role of inflation and time value of money</li>
                  <li>A banking system that works</li>
                  <li>Types of capital</li>
                  <li>Ways of practicing financial discipline</li>
                  <li>Must have accounts</li>
                </ol>
              </div>
              <div className="text-center">
                <Link to="#" className="btn btn-primary btn-enroll-now">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-none mb-4 shadow-sm">
              <div className="text-center">
                <FontAwesomeIcon icon={faLocationCrosshairs} />
              </div>
              <div className="card-body">
                <h4 className="text-center text-capitalize">
                  <span className="module">Module 2</span> - Boss Budgeting
                </h4>
                <ol>
                  <li>Deep dive of the importance of budgeting</li>
                  <li>Proven budgeting methods</li>
                  <li>Debunking budgeting myths</li>
                  <li>
                    Creating a budgeting system that integrates your investing,
                    debt and savings
                  </li>
                  <li>Budgeting on an irregular income</li>
                  <li>Understanding savings and investing</li>
                  <li>The need for sinking funds</li>
                </ol>
              </div>
              <div className="text-center">
                <Link to="#" className="btn btn-primary btn-enroll-now">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-none mb-4 shadow-sm">
              <div className="text-center">
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="card-body">
                <h4 className="text-center text-capitalize">
                  <span className="module">Module 3</span> - Investing for your
                  best Life
                </h4>
                <ol>
                  <li>Time value of money</li>
                  <li>How investing works and compound interest</li>
                  <li>Difference with savings and investing</li>
                  <li>Learning how to do due diligence on investments</li>
                  <li>Unit Trusts</li>
                  <li>T-bills and bonds</li>
                  <li>Stock Market</li>
                  <li>Retirement planning</li>
                  <li>Avenue of savings</li>
                  <li>Financial and business analysis</li>
                  <li>Creating an investment plan</li>
                  <li>Tips to keep you on track with your investments</li>
                </ol>
              </div>
              <div className="text-center">
                <Link to="#" className="btn btn-primary btn-enroll-now">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-none mb-4 shadow-sm">
              <div className="text-center">
                <FontAwesomeIcon icon={faBullseye} />
              </div>
              <div className="card-body">
                <h4 className="text-center text-capitalize">
                  <span className="module">Module 4</span> - Setting And
                  Achieving Financial Goals
                </h4>
                <ol>
                  <li>Unpacking your Value-system</li>
                  <li>Knowing your why</li>
                  <li>Effective goal-setting skills</li>
                  <li>Creating your financial goals plan</li>
                  <li>Strategies to reach your financial goals</li>
                  <li>Factors to consider in financial planning</li>
                </ol>
              </div>
              <div className="text-center">
                <Link to="#" className="btn btn-primary btn-enroll-now">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-none mb-4 shadow-sm">
              <div className="text-center">
                <FontAwesomeIcon icon={faMound} />
              </div>
              <div className="card-body">
                <h4 className="text-center text-capitalize">
                  <span className="module">Module 5</span> - Debt Ditcher
                </h4>
                <ol>
                  <li>Debt repayment avenues (Strategies to deal with debt)</li>
                  <li>Understanding interest when dealing with debt</li>
                  <li>Good vs. Bad debt</li>
                  <li>Creating plan to clear debt</li>
                  <li>Prioritizing your debt</li>
                  <li>Strategies for debt pay off methods</li>
                  <li>Tips and tricks to stay out of debt</li>
                </ol>
              </div>
              <div className="text-center">
                <Link to="#" className="btn btn-primary btn-enroll-now">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

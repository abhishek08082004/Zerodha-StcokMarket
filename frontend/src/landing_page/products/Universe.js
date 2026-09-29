import React from "react";

function Universe() {
  return (
    <div className="container universe">

      {/* Heading */}
      <div className="text-center">
        <h1>The Zerodha Universe</h1>

        <p className="subtitle">
          Extend your trading and investment experience even further
          with our partner platforms
        </p>
      </div>


      {/* First Row */}
      <div className="row text-center mt-5">

        {/* Zerodha Fund House */}
        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="/images/smallcaseLogo.png"
            className="universe-logo"
            alt="Zerodha Fund House"
          />

          <p className="description">
            Our asset management venture that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
        </div>


        {/* Sensibull */}
        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="/images/streakLogo.png"
            className="universe-logo"
            alt="Sensibull"
          />

          <p className="description">
            Options trading platform that lets you create strategies,
            analyze positions, and examine data points like open interest,
            FII/DII, and more.
          </p>
        </div>


        {/* Tijori */}
        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="/images/sensibullLogo.svg"
            className="universe-logo"
            alt="Tijori"
          />

          <p className="description">
            Investment research platform that offers detailed insights
            on stocks, sectors, supply chains, and more.
          </p>
        </div>

      </div>


      {/* Second Row */}
      <div className="row text-center">

        {/* Streak */}
        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="/images/zerodhaFundhouse.png"
            className="universe-logo"
            alt="Streak"
          />

          <p className="description">
            Systematic trading platform that allows you to create and
            backtest strategies without coding.
          </p>
        </div>


        {/* Smallcase */}
        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="/images/goldenpiLogo.png"
            className="universe-logo"
            alt="Smallcase"
          />

          <p className="description">
            Thematic investing platform that helps you invest in
            diversified baskets of stocks on ETFs.
          </p>
        </div>


        {/* Ditto */}
        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="/images/dittoLogo.png"
            className="universe-logo"
            alt="Ditto"
          />

          <p className="description">
            Personalized advice on life and health insurance.
            No spam and no mis-selling.
          </p>
        </div>

      </div>


      {/* Button */}
      <div className="text-center">
        <button className="btn signup-btn">
          Sign up for free
        </button>
      </div>

    </div>
  );
}

export default Universe;
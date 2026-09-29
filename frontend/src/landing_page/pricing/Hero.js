import React from "react";


function Charges() {
  return (
    <section className="charges-section">

      <div className="container">

        {/* Header */}
        <div className="charges-header text-center mt-5">
          <h1 style={{marginTop:'120px'}}>Charges</h1>

          <p className="mt-2">
            List of all charges and taxes
          </p>
        </div>


        {/* Pricing Section */}
        <div className="row charges-row">

          {/* First Pricing */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="charge-item text-center">

              <div className="price-box">
                <span className="rupee">₹</span>
                <span className="price">0</span>
              </div>

              <h3>Free equity delivery</h3>

              <p className="fs-5">
                All equity delivery investments (NSE, BSE),
                <br />
                are absolutely free — ₹ 0 brokerage.
              </p>

            </div>
          </div>


          {/* Second Pricing */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="charge-item text-center">

              <div className="price-box">
                <span className="rupee">₹</span>
                <span className="price price-twenty">20</span>
              </div>

              <h3>Intraday and F&amp;O trades</h3>

              <p className="fs-5">
                Flat ₹ 20 or 0.03% (whichever is lower) per
                <br />
                executed order on intraday trades across
                <br />
                equity, currency, and commodity trades. Flat
                <br />
               
              </p>

            </div>
          </div>


          {/* Third Pricing */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="charge-item text-center">

              <div className="price-box">
                <span className="rupee">₹</span>
                <span className="price">0</span>
              </div>

              <h3>Free direct MF</h3>

              <p className="fs-5">
                All direct mutual fund investments are
                <br />
                absolutely free — ₹ 0 commissions &amp; DP
                <br />
                charges.
              </p>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Charges;
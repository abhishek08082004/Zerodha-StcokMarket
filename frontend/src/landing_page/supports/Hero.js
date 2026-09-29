import React from "react";


function Hero() {
  return (
    <section className="support-section">

      <div className="container">

        {/* Top Navbar */}
        <div className="row support-top mt-5">
          <div className="col-6">
            <h2>Support Portal</h2>
          </div>

          <div className="col-6 text-end">
            <a href="#track" style={{textDecoration:'none'}}>Track Tickets</a>
          </div>
        </div>


        {/* Main Content */}
        <div className="row support-content">

          {/* Left Side */}
          <div className="col-lg-7 col-md-7 col-12">

            <h1>
              Search for an answer or browse help topics
              <br />
              to create a ticket
            </h1>

            <div className="search-box">
              <input
                type="text"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
              />
            </div>


            {/* Quick Links */}
            <div className="quick-links" >

              <a href="#account" style={{textDecoration:'none'}}>Track account opening</a>

              <a href="#segment" style={{textDecoration:'none'}}>Track segment activation</a>

              <a href="#intraday" style={{textDecoration:'none'}}>Intraday margins</a>

              <a href="#kite" style={{textDecoration:'none'}}>Kite user manual</a>

            </div>

          </div>


          {/* Right Side */}
          <div className="col-lg-5 col-md-5 col-12">

            <div className="featured">

              <h2>Featured</h2>

              <ol>
                <li>
                  <a href="#takeovers" style={{textDecoration:'none'}}>
                    Current Takeovers and Delisting - January 2024
                  </a>
                </li>

                <li>
                  <a href="#leverage" style={{textDecoration:'none'}}>
                    Latest Intraday leverages - MIS &amp; CO
                  </a>
                </li>
              </ol>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
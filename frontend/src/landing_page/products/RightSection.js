import React from "react";


function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <div className="right-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-6">
            <div className="product-content">

              <h2>{productName}</h2>

              <p>{productDescription}</p>

              <a href={learnMore} className="learn">
                Learn More
                <span>→</span>
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-6">
            <div className="product-image">
              <img src={imageUrl} alt={productName} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RightSection;
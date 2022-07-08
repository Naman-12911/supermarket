import React from "react";
import SingleProductCard from "./SingleProductCard";

function OfferProductContainer() {
  return (
    <section className="product-items-slider section-padding">
      <div className="container">
        <div className="section-header">
          <h5 className="heading-design-h5">
            Best Offers View <span className="badge badge-info">20% OFF</span>
            <a className="float-right text-secondary" href="shop.html">
              View All
            </a>
          </h5>
        </div>
        <div
          className="owl-carousel owl-carousel-featured d-flex overflow-scroll"
          style={{ overflowY: "hidden", scrollbarWidth: "0px" }}
        >
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
        </div>
      </div>
    </section>
  );
}

export default OfferProductContainer;

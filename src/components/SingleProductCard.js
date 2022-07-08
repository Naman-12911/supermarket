import React from "react";
import source from "../template/img/item/1.jpg";
import { Link } from "react-router-dom";

function SingleProductCard({allproduct}) {
  return (
    <div className="item" style={{ minWidth: "223px" }}>
      <div className="product">
        <Link to={`/single/${allproduct.id}`}>
          <div className="product-header">
            <span className="badge badge-success">{allproduct.discount} OFF</span>
            <img className="img-fluid bg-secondary" src={source} alt="" />
            <span className="veg text-success mdi mdi-circle"></span>
          </div>
          <div className="product-body">
            <h5></h5>
            <h6>
              <strong>
                <span className="mdi mdi-approval"></span> Available in
              </strong>{" "}
              - {allproduct.qty} KG
            </h6>
          </div>
          <div className="product-footer">
            <button
              type="button"
              className="btn btn-secondary btn-sm float-right"
            >
              <i className="mdi mdi-cart-outline"></i> Add To Cart
            </button>
            <p className="offer-price mb-0">
              {allproduct.Selling_price} <i className="mdi mdi-tag-outline"></i>
              <br />
              <span className="regular-price">{allproduct.Cost_price}</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SingleProductCard;

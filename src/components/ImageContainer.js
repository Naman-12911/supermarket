import React from "react";

function ImageContainer() {
  return (
    <section className="offer-product bg-primary" style={{ height: "175px" }}>
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-6">
            <a href="#">
              <img className="img-fluid" src="img/ad/1.jpg" alt="" />
            </a>
          </div>
          <div className="col-md-6">
            <a href="#">
              <img className="img-fluid" src="img/ad/2.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageContainer;

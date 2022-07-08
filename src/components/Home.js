import React from "react";
import "../template/vendor/bootstrap/css/bootstrap.min.css";
import "../template/vendor/icons/css/materialdesignicons.min.css";
import "../template/vendor/select2/css/select2.min.css";
import "../template/css/osahan.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="modal fade login-modal-main" id="bd-example-modal">
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <div className="login-modal">
                <div className="row">
                  <div className="col-lg-6 pad-right-0">
                    <div className="login-modal-left"></div>
                  </div>
                  <div className="col-lg-6 pad-left-0">
                    <button
                      type="button"
                      className="close close-top-right"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="mdi mdi-close"></i>
                      </span>
                      <span className="sr-only">Close</span>
                    </button>
                    <form>
                      <div className="login-modal-right">
                        <div className="tab-content">
                          <div
                            className="tab-pane active"
                            id="login"
                            role="tabpanel"
                          >
                            <h5 className="heading-design-h5">
                              Login to your account
                            </h5>
                            <fieldset className="form-group">
                              <label>Enter Email/Mobile number</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="+91 123 456 7890"
                              />
                            </fieldset>
                            <fieldset className="form-group">
                              <label>Enter Password</label>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="********"
                              />
                            </fieldset>
                            <fieldset className="form-group">
                              <button
                                type="submit"
                                className="btn btn-lg btn-secondary btn-block"
                              >
                                Enter to your account
                              </button>
                            </fieldset>
                            <div className="login-with-sites text-center">
                              <p>or Login with your social profile:</p>
                              <button className="btn-facebook login-icons btn-lg">
                                <i className="mdi mdi-facebook"></i> Facebook
                              </button>
                              <button className="btn-google login-icons btn-lg">
                                <i className="mdi mdi-google"></i> Google
                              </button>
                              <button className="btn-twitter login-icons btn-lg">
                                <i className="mdi mdi-twitter"></i> Twitter
                              </button>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                for="customCheck1"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div
                            className="tab-pane"
                            id="register"
                            role="tabpanel"
                          >
                            <h5 className="heading-design-h5">Register Now!</h5>
                            <fieldset className="form-group">
                              <label>Enter Email/Mobile number</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="+91 123 456 7890"
                              />
                            </fieldset>
                            <fieldset className="form-group">
                              <label>Enter Password</label>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="********"
                              />
                            </fieldset>
                            <fieldset className="form-group">
                              <label>Enter Confirm Password </label>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="********"
                              />
                            </fieldset>
                            <fieldset className="form-group">
                              <button
                                type="submit"
                                className="btn btn-lg btn-secondary btn-block"
                              >
                                Create Your Account
                              </button>
                            </fieldset>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck2"
                              />
                              <label
                                className="custom-control-label"
                                for="customCheck2"
                              >
                                I Agree with <a href="#">Term and Conditions</a>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="text-center login-footer-tab">
                          <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                data-toggle="tab"
                                href="#login"
                                role="tab"
                              >
                                <i className="mdi mdi-lock"></i> LOGIN
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#register"
                                role="tab"
                              >
                                <i className="mdi mdi-pencil"></i> REGISTER
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="top-category section-padding">
        <div className="container">
          <div className="owl-carousel owl-carousel-category">
            <div className="item">
              <div className="category-item">
                <a href="shop.html">
                  <img className="img-fluid" src="img/small/1.jpg" alt="" />
                  <h6>Fruits & Vegetables</h6>
                  <p>150 Items</p>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="shop.html">
                  <img className="img-fluid" src="img/small/2.jpg" alt="" />
                  <h6>Grocery & Staples</h6>
                  <p>95 Items</p>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="shop.html">
                  <img className="img-fluid" src="img/small/3.jpg" alt="" />
                  <h6>Beverages</h6>
                  <p>65 Items</p>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="shop.html">
                  <img className="img-fluid" src="img/small/4.jpg" alt="" />
                  <h6>Home & Kitchen</h6>
                  <p>965 Items</p>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="shop.html">
                  <img className="img-fluid" src="img/small/5.jpg" alt="" />
                  <h6>Furnishing & Home Needs</h6>
                  <p>125 Items</p>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="shop.html">
                  <img className="img-fluid" src="img/small/6.jpg" alt="" />
                  <h6>Household Needs</h6>
                  <p>325 Items</p>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="shop.html">
                  <h6>Personal Care</h6>
                  <p>156 Items</p>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="shop.html">
                  <img className="img-fluid" src="img/small/8.jpg" alt="" />
                  <h6>Breakfast & Dairy</h6>
                  <p>857 Items</p>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="shop.html">
                  <img className="img-fluid" src="img/small/9.jpg" alt="" />
                  <h6>Biscuits, Snacks & Chocolates</h6>
                  <p>48 Items</p>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="shop.html">
                  <img className="img-fluid" src="img/small/10.jpg" alt="" />
                  <h6>Noodles, Sauces & Instant Food</h6>
                  <p>156 Items</p>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="shop.html">
                  <img className="img-fluid" src="img/small/11.jpg" alt="" />
                  <h6>Pet Care</h6>
                  <p>568 Items</p>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="shop.html">
                  <img className="img-fluid" src="img/small/12.jpg" alt="" />
                  <h6>Meats, Frozen & Seafood</h6>
                  <p>156 Items</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-product">
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
          <div className="owl-carousel owl-carousel-featured">
            <div className="item">
              <div className="product">
                <Link to="/single">
                  <div className="product-header">
                    <span className="badge badge-success">50% OFF</span>
                    <img className="img-fluid" src="img/item/7.jpg" alt="" />
                    <span className="veg text-success mdi mdi-circle"></span>
                  </div>
                  <div className="product-body">
                    <h5>Product Title Here</h5>
                    <h6>
                      <strong>
                        <span className="mdi mdi-approval"></span> Available in
                      </strong>{" "}
                      - 500 gm
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
                      $450.99 <i className="mdi mdi-tag-outline"></i>
                      <br />
                      <span className="regular-price">$800.99</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="product">
                <Link to="/single">
                  <div className="product-header">
                    <span className="badge badge-success">50% OFF</span>
                    <img className="img-fluid" src="img/item/8.jpg" alt="" />
                    <span className="non-veg text-danger mdi mdi-circle"></span>
                  </div>
                  <div className="product-body">
                    <h5>Product Title Here</h5>
                    <h6>
                      <strong>
                        <span className="mdi mdi-approval"></span> Available in
                      </strong>{" "}
                      - 500 gm
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
                      $450.99 <i className="mdi mdi-tag-outline"></i>
                      <br />
                      <span className="regular-price">$800.99</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="product">
                <Link to="/single">
                  <div className="product-header">
                    <span className="badge badge-success">50% OFF</span>
                    <img className="img-fluid" src="img/item/9.jpg" alt="" />
                    <span className="non-veg text-danger mdi mdi-circle"></span>
                  </div>
                  <div className="product-body">
                    <h5>Product Title Here</h5>
                    <h6>
                      <strong>
                        <span className="mdi mdi-approval"></span> Available in
                      </strong>{" "}
                      - 500 gm
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
                      $450.99 <i className="mdi mdi-tag-outline"></i>
                      <br />
                      <span className="regular-price">$800.99</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="product">
                <Link to="/single">
                  <div className="product-header">
                    <span className="badge badge-success">50% OFF</span>
                    <img className="img-fluid" src="img/item/10.jpg" alt="" />
                    <span className="veg text-success mdi mdi-circle"></span>
                  </div>
                  <div className="product-body">
                    <h5>Product Title Here</h5>
                    <h6>
                      <strong>
                        <span className="mdi mdi-approval"></span> Available in
                      </strong>{" "}
                      - 500 gm
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
                      $450.99 <i className="mdi mdi-tag-outline"></i>
                      <br />
                      <span className="regular-price">$800.99</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="product">
                <Link to="/single">
                  <div className="product-header">
                    <span className="badge badge-success">50% OFF</span>
                    <img className="img-fluid" src="img/item/11.jpg" alt="" />
                    <span className="veg text-success mdi mdi-circle"></span>
                  </div>
                  <div className="product-body">
                    <h5>Product Title Here</h5>
                    <h6>
                      <strong>
                        <span className="mdi mdi-approval"></span> Available in
                      </strong>{" "}
                      - 500 gm
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
                      $450.99 <i className="mdi mdi-tag-outline"></i>
                      <br />
                      <span className="regular-price">$800.99</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="product">
                <Link to="/single">
                  <div className="product-header">
                    <span className="badge badge-success">50% OFF</span>
                    <img className="img-fluid" src="img/item/12.jpg" alt="" />
                    <span className="veg text-success mdi mdi-circle"></span>
                  </div>
                  <div className="product-body">
                    <h5>Product Title Here</h5>
                    <h6>
                      <strong>
                        <span className="mdi mdi-approval"></span> Available in
                      </strong>{" "}
                      - 500 gm
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
                      $450.99 <i className="mdi mdi-tag-outline"></i>
                      <br />
                      <span className="regular-price">$800.99</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

{
  /* 
<!-- End Footer -->
      <!-- Copyright -->
      <section className="pt-4 pb-4 footer-bottom">
         <div className="container">
            <div className="row no-gutters">
               <div className="col-lg-6 col-sm-6">
                  <p className="mt-1 mb-0">&copy; Copyright 2020 <strong className="text-dark">Groci</strong>. All Rights Reserved<br/>
				  <small className="mt-0 mb-0">Made with <i className="mdi mdi-heart text-danger"></i> by <a href="https://askbootstrap.com/" target="_blank" className="text-primary">Ask Bootstrap</a>
                  </small>
				  </p>
               </div>
               <div className="col-lg-6 col-sm-6 text-right">
                  <img alt="osahan logo" src="img/payment_methods.png">
               </div>
            </div>
         </div>
      </section>
      <!-- End Copyright -->
      <div className="cart-sidebar">
         <div className="cart-sidebar-header">
            <h5>
               My Cart <span className="text-success">(5 item)</span> <a data-toggle="offcanvas" className="float-right" href="#"><i className="mdi mdi-close"></i>
               </a>
            </h5>
         </div>
         <div className="cart-sidebar-body">
            <div className="cart-list-product">
               <a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
               <img className="img-fluid" src="img/item/11.jpg" alt="">
               <span className="badge badge-success">50% OFF</span>
               <h5><a href="#">Product Title Here</a></h5>
               <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
               <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i> <span className="regular-price">$800.99</span></p>
            </div>
            <div className="cart-list-product">
               <a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
               <img className="img-fluid" src="img/item/7.jpg" alt="">
               <span className="badge badge-success">50% OFF</span>
               <h5><a href="#">Product Title Here</a></h5>
               <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
               <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i> <span className="regular-price">$800.99</span></p>
            </div>
            <div className="cart-list-product">
               <a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
               <img className="img-fluid" src="img/item/9.jpg" alt="">
               <span className="badge badge-success">50% OFF</span>
               <h5><a href="#">Product Title Here</a></h5>
               <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
               <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i> <span className="regular-price">$800.99</span></p>
            </div>
            <div className="cart-list-product">
               <a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
               <img className="img-fluid" src="img/item/1.jpg" alt="">
               <span className="badge badge-success">50% OFF</span>
               <h5><a href="#">Product Title Here</a></h5>
               <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
               <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i> <span className="regular-price">$800.99</span></p>
            </div>
            <div className="cart-list-product">
               <a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
               <img className="img-fluid" src="img/item/2.jpg" alt="">
               <span className="badge badge-success">50% OFF</span>
               <h5><a href="#">Product Title Here</a></h5>
               <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
               <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i> <span className="regular-price">$800.99</span></p>
            </div>
         </div>
         <div className="cart-sidebar-footer">
            <div className="cart-store-details">
               <p>Sub Total <strong className="float-right">$900.69</strong></p>
               <p>Delivery Charges <strong className="float-right text-danger">+ $29.69</strong></p>
               <h6>Your total savings <strong className="float-right text-danger">$55 (42.31%)</strong></h6>
            </div>
            <a href="checkout.html"><button className="btn btn-secondary btn-lg btn-block text-left" type="button"><span className="float-left"><i className="mdi mdi-cart-outline"></i> Proceed to Checkout </span><span className="float-right"><strong>$1200.69</strong> <span className="mdi mdi-chevron-right"></span></span></button></a>
         </div>
      </div> */
}

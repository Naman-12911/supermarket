import React,{useEffect,useState} from "react";
import "../template/vendor/bootstrap/css/bootstrap.min.css";
import "../template/vendor/icons/css/materialdesignicons.min.css";
import "../template/vendor/select2/css/select2.min.css";
import "../template/css/osahan.css";
import ai from "../Api"
import SingleProductCard from "./SingleProductCard";
import { Link } from "react-router-dom";
function Products() {
  const [allproduct, setallproduct] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const request = ai.get("product/api/product-desc/")
          .then((res) => {
            console.log(res);
            setallproduct(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        return request;
      }
      fetchData();
    }, []);
  return (
    <>
      <section className="product-items-slider section-padding">
        <div className="container">
          <div className="section-header">
            <h5 className="heading-design-h5">
              Top Savers Today{" "}
              <span className="badge badge-primary">20% OFF</span>
              <Link className="float-right text-secondary" to="/viewAll">
                View All
              </Link>
            </h5>
          </div>
          <div className="owl-carousel owl-carousel-featured d-flex overflow-scroll">
            {/* <button>Click</button> */}
            {allproduct.map((allproduct, key) => (
              <SingleProductCard allproduct={allproduct} key={key}/>
            ))}
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;

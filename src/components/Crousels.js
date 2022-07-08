import React,{useEffect,useState} from "react";
import slide from "../template/img/slider/slider1.jpg";
import "../template/vendor/bootstrap/css/bootstrap.min.css";
import "../template/vendor/icons/css/materialdesignicons.min.css";
import "../template/vendor/select2/css/select2.min.css";
import "../template/css/osahan.css";
import { Carousel } from "react-bootstrap";
import ai from "../Api"
import CarouselSingleProduct from "./CaouselSingleProduct";
function Crousels() {
  const [categoryproduct, setcategoryproduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = ai.get("product/api/category-name/")
        .then((res) => {
          console.log(res);
          setcategoryproduct(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return request;
    }
    fetchData();
  }, []);
  return (
    <section className="mx-4">
      <Carousel
        interval={2000}
        nextLabel=""
        prevLabel=""
        slide={true}
        style={{ textAlign: "center" }}
      >
        {/* <div className="owl-carousel owl-carousel-slider"> */}
        <Carousel.Item>
          <a href="shop.html">
            <img className="img-fluid" src={slide} alt="First slide" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="shop.html">
            <img className="img-fluid" src={slide} alt="First slide" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="shop.html">
            <img className="img-fluid" src={slide} alt="First slide" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="shop.html">
            <img className="img-fluid" src={slide} alt="First slide" />
          </a>
        </Carousel.Item>
        {/* </div> */}
      </Carousel>

      <section class="top-category section-padding">
        <div
          class="container  overflow-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          <div class="owl-carousel owl-carousel-category d-flex gap-2">
          {categoryproduct.map((categoryproduct, key) => (
            <CarouselSingleProduct categoryproduct={categoryproduct} key={key} />
            ))}
            
          </div>
        </div>
      </section>
    </section>
  );
}

export default Crousels;

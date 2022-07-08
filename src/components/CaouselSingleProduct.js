import React from "react";

function CaouselSingleProduct({categoryproduct,key}) {
  return (
    <>
      <div class="item">
        <div class="category-item">
          <a href="shop.html">
            <img class="img-fluid" src="img/small/1.jpg" alt="" />
            <h6>{categoryproduct.category_name}</h6>
            <p>{categoryproduct.qty}Kg</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default CaouselSingleProduct;

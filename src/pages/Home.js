import React from "react";
import Products from "../components/Products";
import ImageContainer from "../components/ImageContainer";
import Crousels from "../components/Crousels";
import OfferProductContainer from "../components/OfferProductContainer";

function Home() {
  return (
    <main>
      <Crousels />
      <Products />
      <ImageContainer />
      <OfferProductContainer />
    </main>
  );
}

export default Home;

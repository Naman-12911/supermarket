import React,{useState,useEffect} from 'react'
import SinglleProductCard from "./SingleProductCard";
import img1 from "../template/img/item/4.jpg"
import { Grid } from "@material-ui/core";
import ai from "../Api"
import { Container } from "@material-ui/core";
function ProductViewAll() {
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
<div className="container my-4" id="repeatcard">
        <div className="section-header">
            <img className="heading-design-h5" src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg' style={{height:"7rem",width:"100%"}} /> 
        </div>
      <Container>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start center"
          alignItems="flex-start"
        >
          {allproduct.map((allproduct, key) => (
            <Grid item xs={12} sm={6} md={4}>
              <SinglleProductCard allproduct={allproduct} key={key} />
            </Grid>
          ))}
        </Grid>
      </Container>  
    </div>
  )
}

export default ProductViewAll
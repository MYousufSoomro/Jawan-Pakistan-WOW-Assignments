import { Container, Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/productDetails.css";

const ProductDetails = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [rating, setRating] = useState(4.5);

  useEffect(() => {
    getDataFromFakeStoreAPI();
  }, []);

  //   console.log(params.id);

  const getDataFromFakeStoreAPI = () => {
    const data = axios.get(`https://fakestoreapi.com/products/${params.id}`);
    data.then((response) => {
      setRating(response.data.rating.rate);
      setProducts(response.data);
    });
  };

  console.log(rating);

  return (
    // <Container sx={{ p: 10 }}>
    //   <div>
    //     <h1>{products.title}</h1>
    //     <img src={products.image} alt="" height={250} />
    //     <h2>Price: ${products.price}</h2>
    //     <p>{products.description}</p>
    //     <h3>Category: {products.category}</h3>
    //   </div>
    // </Container>

    <div>
      <main className="main">
        <section className="section wrapper wrapper-section">
          <div className="container wrapper-column">
            <div className="wrapper-figure">
              <img
                src={products.image}
                className="wrapper-image"
                loading="lazy"
                alt="Sneaker"
              />
            </div>
            <div className="wrapper-content">
              <div className="wrapper-inform">
                <span className="badge badge-darken">{products.category}</span>
                <h1 className="heading-sm font-bold">{products.title}</h1>
                <p className="text-md font-regular">{products.description}</p>
              </div>
              <div className="wrapper-detail">
                <div className="price">
                  <span className="text-md font-semi">Price:</span>
                  <h3 className="text-xxl font-bold">${products.price}</h3>
                </div>
              </div>
              <div className="wrapper-action">
                <button className="btn btn-darken">Add to Cart</button>
                <button className="btn btn-neutral">
                  <Rating
                    name="half-rating-read"
                    defaultValue={rating}
                    precision={0.1}
                    readOnly
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetails;

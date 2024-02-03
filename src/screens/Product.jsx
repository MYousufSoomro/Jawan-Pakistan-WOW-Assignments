import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();

  console.log("PARAM >> ", params);

  return <h1>ID: {params.id}</h1>;
};

export default Product;

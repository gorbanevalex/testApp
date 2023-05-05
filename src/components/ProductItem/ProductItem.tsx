import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../redux/products/types";

import "./ProductItem.scss";

type Prop = {
  product: Product;
};

const ProductItem = ({ product }: Prop) => {
  const navigate = useNavigate();
  return (
    <div className="product">
      <div className="product-preview">
        <img src={product.thumbnail} alt="photo" />
      </div>
      <h2>{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <div className="product-bottom">
        <p className="product-price">{product.price} ₽</p>
        <Button
          variant="contained"
          onClick={() => navigate(`product/${product.id}`)}
        >
          Редактировать
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;

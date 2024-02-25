import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../actions/actions";
import { Rating } from "@mui/material";
import { FaHome } from "react-icons/fa";

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const selectedProductId = parseInt(productId);

  const selectedProduct = products.find(
    (prod) => prod.id === selectedProductId,
  );

  return (
    <div className="productMain">
      {selectedProduct ? (
        <div className="aboutProduct">
          <div className="aboutProdImg">
            {selectedProduct.images.map((image, index) => (
              <img key={index} src={image} alt={`${index}`} />
            ))}
          </div>

          <div className="aboutText">
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            <h5>Price: ${selectedProduct.price}</h5>
            <h5>Rating: {selectedProduct.rating}</h5>
          </div>
        </div>
      ) : (
        <div>
          <p>Product not found</p>
        </div>
      )}

      <Link to="/">
        <FaHome className="shoping" />
      </Link>

      <Rating />
    </div>
  );
};

export default Product;

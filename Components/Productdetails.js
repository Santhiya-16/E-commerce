import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Productdetails = () => {
  const { ProductId } = useParams();
  const URL = `https://dummyjson.com/products/${ProductId}`;
  const [product, setProduct] = useState(null);
 
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [ProductId]);

  return (
    <div className="container d-flex justify-content-center">
      
        {product ? (
          <div className="col-md-4 m-3">
            <div className="card bg-primary text-white">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h4>{product.title}</h4>
                <p>Brand: {product.brand}</p>
                <p>Description: {product.description}</p>
                <p>Warranty: {product.warrantyInformation || "N/A"}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>
              
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
   
  );
};

export default Productdetails;

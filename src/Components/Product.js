import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Productdetails from "./Productdetails";
import Search from "./Search";

const Product = () => {
  const URL = "https://dummyjson.com/products";
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleClick = (productId) => {
    navigate(`/.Productdetails/${productId}`);
  };
  const search = () => {
    navigate(`/.Search`);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
         <button className="btn btn-outline-dark m-3 "
          onClick={()=>search()}>
          <FontAwesomeIcon icon={faSearch} /></button>
      </div>
      <div className="row">
        {products ? (
          products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card m-3 bg-primary text-white">
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h4>{product.title}</h4>
                  <p>${product.price}</p>
                  <button className="btn btn-outline-dark text-white" onClick={() => handleClick(product.id)}>
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Product;

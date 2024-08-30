import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Productdetails from "./Productdetails";

const Product = () => {
  const URL = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleClick = (productId) => {
    navigate(`/.Productdetails/${productId}`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <input className="m-3 "
            type="text" placeholder="Search products..." value={searchTerm} onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
          <div>No products found.</div>
        )}
      </div>
    </div>
  );
};

export default Product;

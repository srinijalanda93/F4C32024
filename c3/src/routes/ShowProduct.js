import React, { useState } from "react";
import "./show-product.css";
import { useNavigate } from "react-router-dom";
const ShowProduct = ({ product }) => {
  const navigate = useNavigate();
  const [isTrunc, setIsTrunc] = useState(true);
  const toggleReadMore = () => {
    setIsTrunc(!isTrunc);
  };
  const navigateToDetails = () => {
    navigate(`item/${product.id}`);
  };
  return (
    <>
      <div className="card">
        <img
          height={280}
          src="https://picsum.photos/200?random=$%7Bpost.id%7D"
        />
        <h3 className="title">{product.title}</h3>
        <div className="btn-para-wrapper">
          <p>
            {isTrunc ? product.body.slice(0, 100) : product.body}...
            {isTrunc && <a onClick={toggleReadMore}>Read more...</a>}
            {!isTrunc && <a onClick={toggleReadMore}>Read less</a>}
          </p>
          <div onClick={navigateToDetails}>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./details.css";
import { useSelector } from "react-redux";
const Details = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);
  const { id } = useParams();
  const products = useSelector((state) => state.data);
  const filterdPost = products && products.filter((post) => post.id == id);
  console.log("data", filterdPost);

  console.log(id);
  function toggleDetails() {
    setIsActive(true);
  }
  function toggleInfo() {
    setIsActive(false);
  }
  function handleBack() {
    navigate("/");
  }
  return (
    <>
      <div className="h1-btn">
        <button onClick={handleBack} className="back-btn">
          <i class="fa-solid fa-arrow-left fa-2xl"></i>
        </button>
        <h1 className="post">Post Number #{id}</h1>
      </div>
      <div className="content">
        <div className="img-container">
          <img src="https://fastly.picsum.photos/id/1026/200/200.jpg?hmac=CWxlEHUZLgcfP2qGDrSBD-5MXHOjsY-ic-LwDigTunc" />
        </div>
        <div className="user-details">
          <div className="btn-wrapper">
            <button
              className={isActive ? "btn-active" : null}
              onClick={toggleDetails}
            >
              Details
            </button>
            <button
              className={isActive ? null : "btn-active"}
              onClick={toggleInfo}
            >
              User Info
            </button>
          </div>
          <div className="info">
            <p className={isActive ? null : "inactive"}>
              {filterdPost && filterdPost.map((post) => post.body)}
            </p>
            <p className={isActive ? "inactive" : null}>
              Post was posted by{" "}
              {filterdPost && filterdPost.map((post) => post.userId)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

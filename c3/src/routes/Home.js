import React, { useEffect, useState } from "react";
import fetchData from "../redux/fetchResults";
import { useDispatch, useSelector } from "react-redux";
import ShowProduct from "./ShowProduct";
import "./Home.css";
import Loader from "../components/Loader";
const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  console.log(loading);
  const data = useSelector((state) => state.data);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchData(dispatch);
  }, []);
  console.log(data);
  return (
    <>
      <div className="input-wrap">
        <h1>Social Media for Travellers</h1>
        <input type="text" placeholder="Search here" />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="data-wrapper">
          {data &&
            data.map((product, index) => {
              return (
                <>
                  <ShowProduct product={product} key={product.id} />
                </>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Home;

// This is the final code

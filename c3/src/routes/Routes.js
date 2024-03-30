import React from "react";
import Layout from "../../src/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
const RoutesManager = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Layout>
          <Routes>
            <Route path="" Component={Home} />
            <Route path="item/:id" Component={Details} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default RoutesManager;

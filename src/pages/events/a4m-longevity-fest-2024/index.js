import React, { use, useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import Layout from "../../../components/layout";
import Event from "../../../components/Events";
import './styles.scss';
import Slider from "react-slick";
import { graphql, useStaticQuery } from "gatsby";

const Am4LongevityFest2024 = () => {
  const location = useLocation();
  const currentDirectory = location.pathname.split("/").filter(Boolean).pop(); // Lấy ra tên cuối cùng của đường dẫn
  console.log(currentDirectory, "currentDi");

  return (
    <Layout>
      <Event direct={currentDirectory} />
    </Layout>
  )
}

export default Am4LongevityFest2024;
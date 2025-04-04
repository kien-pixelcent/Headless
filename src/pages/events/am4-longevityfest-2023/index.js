import React, { use, useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import Layout from "../../../components/layout";
import Event from "../../../components/Events";
import './styles.scss';
import Slider from "react-slick";
import { graphql, useStaticQuery } from "gatsby";

const Am4Longevityfest2023 = () => {
  const location = useLocation();
  const currentDirectory = location.pathname.split("/").filter(Boolean).pop();
  return (
    <Layout>
      <Event direct={currentDirectory} />
    </Layout>
  )
}

export default Am4Longevityfest2023;
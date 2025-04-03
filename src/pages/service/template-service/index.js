import React from "react"
import Layout from "../../../components/layout"
import FaqItem from '../../../components/FaqItem'
import ServiceAbout from '../../../components/Services/ServiceAbout'
import ServiceBenefits from '../../../components/Services/ServiceBenefits'
import ServiceFBAbout from '../../../components/Services/ServiceFBAbout'
import ServiceWhyChoose from '../../../components/Services/ServiceWhyChoose'
import './styles.scss';
import { graphql, useStaticQuery } from "gatsby";

const TemplateService = () => {
  return (
    <Layout>
      <ServiceAbout />
      <ServiceBenefits />
      <ServiceFBAbout />
      <ServiceWhyChoose />
    </Layout>
  )
}

export default TemplateService;
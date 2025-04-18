import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"


const Home = ({ data }) => {
  return (
    <Layout>
      <div id="content" className="site-content" dangerouslySetInnerHTML={{ __html: data.cms.nodeByUri.flexibleContentHtml }}></div>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query Page ($uri: String!){
    cms {
      nodeByUri(uri: $uri) {
        id
        flexibleContentHtml
      }
    }
  }
`

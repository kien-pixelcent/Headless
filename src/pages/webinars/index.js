import React from "react"
import Layout from "../../components/layout"
import AboutBanner from "../../components/AboutBanner"
import './styles.scss';
import { graphql, useStaticQuery } from "gatsby"

const Webinars = () => {
  const query = useStaticQuery(graphql`
    query MyQuery {
      cms {
        pageBy(uri: "/webinars") {
          template {
            ... on GraphCMS_Template_Webinars {
              templateName
              banner {
                backgroundImage {
                  node {
                    id
                    sourceUrl
                  }
                }
                button {
                  target
                  title
                  url
                }
                desc
                subTitle
                isShow
                title
                type
                fieldGroupName
                image {
                  node {
                    id
                    sourceUrl
                  }
                }
              }
              webinarsList {
                list {
                  desc
                  title
                  link
                  image {
                    node {
                      id
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const banner = query?.cms?.pageBy?.template?.banner;
  const data = query?.cms?.pageBy?.template?.webinarsList;
  return (
    <Layout>
      <div id="content" className="site-content">
        <div className="main-content">
          <AboutBanner title={banner?.title} description={banner?.desc} subtitle={banner?.subtitle} image={banner?.image} backgroundImage={banner?.backgroundImage} button={banner?.button} type={banner?.type} isShow={banner?.isShow} />
          <section className="section sc-webinars page-content">
            <div className="ast-container">
              <div className="webinars-lists">
                <div className="lists ast-flex">
                  {data?.list.map((item, index) => (
                    <div className="box box-webinar ast-flex flex-column-">
                      <figure className="thumb"><a href={item?.link} target="_blank"><img src={item?.image?.node?.sourceUrl} alt="Your 2025 Digital Marketing Plan" /></a></figure>
                      <h3 className="h3-title f-soleto text-black fw-500"><a href={item?.link} className="text-black" target="_blank">{item?.title}</a></h3>
                      <div className="desc f-soleto fw-300 text-black">{item?.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Webinars

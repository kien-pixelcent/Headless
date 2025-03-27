import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AboutBanner from "../../components/AboutBanner";
import Layout from "../../components/layout"
import './styles.scss';

const AboutUs = () => {
  const query = useStaticQuery(graphql`
    query {
      cms {
        themeSettings {
          themeOptionsSettings {
            socials {
              facebook
              instagram
              linkedin
              twitter
              youtube
            }
          }
        }
        pageBy(uri: "/about-us") {
          template {
            ... on GraphCMS_Template_AboutUs {
              templateName
              flexibleContent {
                flexibleContent {
                  ... on GraphCMS_FlexibleContentFlexibleContentAboutMainContentLayout {
                    content
                    fieldGroupName
                    gallery {
                      nodes {
                        id
                        sourceUrl
                      }
                    }
                    image {
                      node {
                        id
                        sourceUrl
                      }
                    }
                    title
                    button {
                      target
                      title
                      url
                    }
                  }
                  ... on GraphCMS_FlexibleContentFlexibleContentAboutOurCoreValuesLayout {
                    fieldGroupName
                    title
                    backgroundImage {
                      node {
                        id
                        sourceUrl
                      }
                    }
                    box {
                      content
                      fieldGroupName
                      title
                      icon {
                        node {
                          id
                          sourceUrl
                        }
                      }
                    }
                  }
                  ... on GraphCMS_FlexibleContentFlexibleContentAboutOurMissionLayout {
                    bottomContent
                    content
                    title
                    list {
                      fieldGroupName
                      link
                      title
                    }
                    fieldGroupName
                  }
                }
                fieldGroupName
              }
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
            }
          }
          ancestors {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  `);

  const data = query?.cms?.pageBy?.template?.flexibleContent;
  const banner = query?.cms?.pageBy?.template?.banner;
  return (
    <Layout>
      <div className="main-content">
        <AboutBanner title={banner?.title} description={banner?.desc} subtitle={banner?.subtitle} image={banner?.image} backgroundImage={banner?.backgroundImage} button={banner?.button} type={banner?.type} isShow={banner?.isShow} />
        <section className="section sc-about-main-content pt-100 pb-100">
          <div className="ast-container">
            <figure className="wcm-logo"><img src={data?.flexibleContent[0]?.image?.node?.sourceUrl} height={97} alt="Who We Are" /></figure>
            <h2 className="h2-title f-soleto fw-800 color-0659A9 fs-48">{data?.flexibleContent[0]?.title}</h2>
            {<div dangerouslySetInnerHTML={{ __html: data?.flexibleContent[0]?.content }} />}
            <div className="a-gallery ast-flex">
              {data?.flexibleContent[0]?.gallery?.nodes.map((item, index) => (
                <img key={index} src={item.sourceUrl} alt="Gallery" />
              ))}
            </div>
            {data?.flexibleContent[0]?.button && (
              <div className="sc-btn ast-flex justify-content-center">
                <a href={data?.flexibleContent[0]?.button?.url} target="_self" className="btn-bg bg-F2771A btn-size-18 fw-700">{data?.flexibleContent[0]?.button?.title}</a>
              </div>
            )}
          </div>
        </section>
        <section className="section sc-about-core-values" style={{ "background": `no-repeat center/cover url("${data?.flexibleContent[1]?.backgroundImage?.node?.sourceUrl}");` }}>
          <div className="ast-container">
            <h2 className="h2-title f-soleto fw-800 color-0659A9 fs-48 text-center">{data?.flexibleContent[1]?.title}</h2>
            <div className="boxies core-boxies ast-flex justify-content-center">
              {data?.flexibleContent[1]?.box.map((item, index) => (
                <div className="box text-center">
                  <figure><img src={item?.icon?.node?.sourceUrl} alt="CARING" /></figure>
                  <h3 className="h3-title f-soleto fw-800 color-0659A9 fs-26 mb-0 text-center">{item?.title}</h3>
                  <div className="desc f-soleto color-0659A9 text-center">{item?.content}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section sc-about-our-mission pt-100 pb-100">
          <div className="ast-container">
            <h2 className="h2-title f-soleto fw-800 color-0659A9 fs-48 text-center">{data?.flexibleContent[2]?.title}</h2>
            <div className="desc f-soleto color-000000 fs-22 text-center" dangerouslySetInnerHTML={{ __html: data?.flexibleContent[2]?.content }} ></div>
            <div className="list ast-flex justify-content-center">
              {data?.flexibleContent[2]?.list.map((item, index) => (
                <a href={item?.link} target="_self">{item?.title}</a>
              ))}
            </div>
            <div className="bottom-content f-soleto color-000000 fs-22 text-center" dangerouslySetInnerHTML={{ __html: data?.flexibleContent[2]?.bottomContent }}></div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutUs

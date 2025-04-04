import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/layout";
import AboutBanner from "../../components/AboutBanner";
import "./styles.scss"

const Mars = () => {
  const query = useStaticQuery(graphql`
    query {
      cms {
        pageBy(uri: "/our-method-mars") {
          template {
            ... on GraphCMS_Template_OurMethod {
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
                inforBox {
                  name
                  position
                }
                isInforBox
              }
              customOurMethod {
                ourMethodContent {
                  ... on GraphCMS_CustomOurMethodOurMethodContentSolutionLayout {
                    backgroundImage {
                      node {
                        sourceUrl
                      }
                    }
                    button {
                      target
                      title
                      url
                    }
                    title
                    desc
                    list {
                      icon {
                        node {
                          sourceUrl
                        }
                      }
                      title
                      desc
                    }
                  }
                  ... on GraphCMS_CustomOurMethodOurMethodContentMarContentLayout {
                    itemContent {
                      backgroundType
                      backgroundImage {
                        node {
                          sourceUrl
                        }
                      }
                      colorBackground
                      title
                      desc
                      image {
                        node {
                          sourceUrl
                        }
                      }
                      columnContent
                      bottomContent
                      isFluidButton
                      button {
                        target
                        title
                        url
                      }
                    }
                  }
                  ... on GraphCMS_CustomOurMethodOurMethodContentMarWhyChooseLayout {
                    backgroundImage {
                      node {
                        sourceUrl
                      }
                    }
                    title
                    list {
                      title
                      desc
                      icon {
                        node {
                          sourceUrl
                        }
                      }
                    }
                  }
                  ... on GraphCMS_CustomOurMethodOurMethodContentMarGrowthLayout {
                    backgroundImage {
                      node {
                        sourceUrl
                      }
                    }
                    button {
                      target
                      title
                      url
                    }
                    title
                    desc
                    growthButton {
                      url
                      title
                      target
                    }
                    image {
                      node {
                        sourceUrl
                      }
                    }
                    isFluidButton
                    item {
                      title
                    }
                    name
                    position
                    strategistDesc
                  }
                  ... on GraphCMS_CustomOurMethodOurMethodContentMarYourPracticeLayout {
                    content
                    title
                    button {
                      url
                      title
                      target
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
  const data = query?.cms?.pageBy?.template?.customOurMethod;
  const theSolution = data?.ourMethodContent[0];
  const marContent = data?.ourMethodContent[1];
  const whyChoose = data?.ourMethodContent[2];
  const marsGrowth = data?.ourMethodContent[3];
  const yourPractice = data?.ourMethodContent[4];
  console.log(marContent, "data")

  return (
    <>
      <Layout>
        <AboutBanner banner={banner} />
        <section className="section sc-method-solution">
          <div className="cus-container">
            <div className="method-solution">
              <div className="sc-header ast-flex flex-column">
                <h2 className="h2-title f-soleto fw-800 color-0659A9 mb-0 text-center">{theSolution?.title}</h2>
                <div className="desc fs-22 f-soleto fw-300 text-black text-center">{theSolution?.desc}</div>
              </div>
              <div className="method-list">
                {theSolution?.list.map((item, index) => (
                  <div ket={index} className="item item-">
                    <figure>
                      <img src={item?.icon?.node?.sourceUrl} alt="Marketing That Attracts" />
                    </figure>
                    <div className="content">
                      <h3 className="h3-title f-soleto fw-700">{item?.title}</h3>
                      <div className="desc" dangerouslySetInnerHTML={{ __html: item?.desc }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="sc-btn ast-flex justify-content-center">
                <a href={theSolution?.button?.url} target={theSolution?.button?.target} className="btn-bg bg-F2771A btn-h-72 fw-700 btn-size-26">{theSolution?.button?.title}</a>
              </div>
            </div>
          </div>
        </section>
        {marContent?.itemContent.map((item, index) => (
          <section key={index} className={`section sc-method-content sc-method-content-1 ${(index + 1) % 2 === 0 ? 'col-reverse' : ''} bg-${item?.backgroundType[0] === "default" ? item?.colorBackground : ''}`} style={{ background: `no-repeat center/cover url('${item?.backgroundImage?.node?.sourceUrl}')` }}>
            <div className="cus-container">
              <div className="sc-header ast-flex justify-content-center text-center">
                <h2 className="h2-title f-soleto fw-800 color-0659A9 mb-0">{item?.title}</h2>
                <div className="desc f-soleto fs-22 text-black">{item?.desc}</div>
              </div>
              <dic className="cols-2 ast-flex align-items-center ">
                <figure>
                  <img src={item?.image?.node?.sourceUrl} alt="Marketing: More Leads, Lower Acquisition Costs" />
                </figure>
                <div className="content text-black" dangerouslySetInnerHTML={{ __html: item?.columnContent }}></div>
              </dic>
              <div className="bottom-content f-soleto fs-22 text-black text-center" dangerouslySetInnerHTML={{ __html: item?.bottomContent }}></div>
              <div className="sc-btn ast-flex justify-content-center">
                <a href={item?.url} target={item?.target} className="btn-bg  btn-h-72 bg-F2771A btn-size-26 fw-700">{item?.button?.title}</a>
              </div>
            </div>
          </section>
        ))}
        <section className="section sc-mar-why-choose" style={{ background: `no-repeat center/cover url('${whyChoose?.backgroundImage?.node?.sourceUrl}')` }}>
          <div className="cus-container">
            <h2 className="h2-title f-soleto fw-800 color-0659A9 mb-0 text-center">{whyChoose?.title}</h2>
            <div className="list ast-flex">
              {whyChoose?.list.map((item, index) => (
                <div key={index} className="item ast-flex flex-column align-items-center text-center">
                  <h3 className="h3-title fw-800 f-soleto fs-32">{item?.title}</h3>
                  <div className="desc fw-300 f-soleto fs-22 text-black">{item?.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section sc-mar-growth position-relative" style={{ background: `no-repeat center/cover url('${marsGrowth?.backgroundImage?.node?.sourceUrl}')` }}>
          <div className="cus-container">
            <div className="col-growth-content text-white" style={{ zIndex: "1", position: "relative" }}>
              <h2 className="h2-title f-soleto fw-800 text-white mb-0">{marsGrowth?.title}</h2>
              <div className="build-growth">
                <a href="#" className="ast-flex align-items-center" target="_self">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M24.4351 19.9777C22.2323 19.7774 21.0307 22.7819 19.4286 23.5832C16.8253 24.9853 12.0191 19.9777 12.0191 19.9777C12.0191 19.9777 7.0127 15.1704 8.21424 12.5665C9.21553 10.9641 12.2194 9.76223 12.0191 7.55889C11.8189 5.55586 7.41321 -1.65506 5.21038 0.34797C0.404207 4.75464 0.00369321 6.55737 0.00369321 10.1628C-0.196564 16.3722 7.81373 24.1841 7.81373 24.1841C8.61476 24.9853 15.6238 32.1962 21.8317 31.9959C25.4364 31.9959 27.2387 31.5953 31.6443 26.788C33.6469 24.5847 26.6379 20.178 24.4351 19.9777Z" fill="#5CA4E9"></path>
                  </svg>
                  <h3 className="title fs-32 fw-800 text-white">{marsGrowth?.growthButton?.title}</h3>
                </a>
              </div>
              <div className="items ast-flex flex-column">
                {marsGrowth?.item.map((item, index) => (
                  <div key={index} className="item ast-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <path d="M13 0C5.85 0 0 5.85 0 13C0 20.15 5.85 26 13 26C20.15 26 26 20.15 26 13C26 5.85 20.15 0 13 0ZM11.5375 19.0125L4.7125 12.35L6.9875 10.075L11.375 14.4625L19.5 6.5L21.775 8.775L11.5375 19.0125Z" fill="#7EC609"></path>
                    </svg>
                    <div className="title">{item.title}</div>
                  </div>
                ))}
              </div>
              <div className="sc-btn ast-flex flex-column">
                <a href={marsGrowth?.button?.url} target={marsGrowth?.button?.target} className={`btn-bg bg-F2771A ${marsGrowth?.isFluidButton ? "btn-fluid" : ''} btn-size-26 fw-700`}>{marsGrowth?.button?.title}</a>
                <div className="disclaimer fs-22 f-soleto">{marsGrowth?.desc}</div>
              </div>
            </div>

            <div className="ast-container-fluid position-absolute px-0">
              <div className="sc-strategist ast-flex" style={{ background: `no-repeat center/cover url('${marsGrowth?.image?.node?.sourceUrl}')` }}>
                <div className="strategist-infor f-soleto text-white text-center">
                  <h3 className="fs-24 fw-700 text-white">{marsGrowth?.name}</h3>
                  <div className="position fw-700 text-uppercase">{marsGrowth?.position}</div>
                  <div className="desc">{marsGrowth?.strategistDesc}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section sc-mar-your-practice">
          <div className="cus-container">
            <h2 className="h2-title f-soleto fw-800 color-0659A9 mb-0 text-center">{yourPractice?.title}</h2>
            <div className="your-practice-content text-center f-soleto ast-flex flex-column align-items-center">
              <div dangerouslySetInnerHTML={{ __html: yourPractice?.content }}></div>
              <div className="practice-phone">
                <a href={yourPractice?.url} className="ast-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M11.8902 7.06452C11.5082 2.67052 6.92423 0.51452 6.73023 0.42652C6.54888 0.341267 6.34564 0.314029 6.14823 0.34852C0.856235 1.22652 0.0602347 4.30652 0.0282347 4.43452C-0.0153027 4.61289 -0.00837807 4.79986 0.0482346 4.97452C6.36023 24.5585 19.4782 28.1885 23.7902 29.3825C24.1222 29.4745 24.3962 29.5485 24.6042 29.6165C24.8416 29.6941 25.0995 29.6791 25.3262 29.5745C25.4582 29.5145 28.5742 28.0465 29.3362 23.2585C29.37 23.0495 29.3364 22.8352 29.2402 22.6465C29.1722 22.5145 27.5422 19.4125 23.0222 18.3165C22.8689 18.2773 22.7083 18.2759 22.5543 18.3125C22.4003 18.3491 22.2576 18.4225 22.1382 18.5265C20.7122 19.7445 18.7422 21.0425 17.8922 21.1765C12.1942 18.3905 9.01223 13.0445 8.89223 12.0305C8.82224 11.4605 10.1282 9.45852 11.6302 7.83052C11.7246 7.72806 11.7965 7.60697 11.8413 7.47504C11.8861 7.34312 11.9028 7.20328 11.8902 7.06452Z" fill="#F2771A"></path>
                  </svg>
                  <div className="call-text fs-26 fw-800">{yourPractice?.title}</div></a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Mars;
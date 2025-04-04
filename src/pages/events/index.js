import React, { use, useEffect, useState } from "react";
import Layout from "../../components/layout";
import AboutBanner from "../../components/AboutBanner";
import './styles.scss';
import Slider from "react-slick";
import { graphql, useStaticQuery } from "gatsby";

const FBAdvertising = () => {
  const query = useStaticQuery(graphql`
    query {
      cms {
        pageBy(uri: "/events") {
          template {
            ... on GraphCMS_Template_Events {
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
              eventsVideo {
                eventVideo {
                  video
                }
              }
              eventsGallery {
                galleryOfEvents {
                  nodes {
                    uri
                    ... on GraphCMS_Event {
                      id
                      title
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                      customEvent {
                        date
                        position
                        gallery {
                          nodes {
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
        }
      }
    }
  `);

  const data = query?.cms?.pageBy?.template;
  const banner = data?.banner;
  const videoScript = data?.eventsVideo?.eventVideo?.video;
  const events = data?.eventsGallery?.galleryOfEvents?.nodes;

  const [allGalleryImages, setAllGalleryImages] = useState([]);

  useEffect(() => {
    if (events) {
      const allImages = events.flatMap(event =>
        event?.customEvent?.gallery?.nodes?.map(image => image.sourceUrl) || []
      );

      setAllGalleryImages(allImages);
    }
  }, [events]);

  useEffect(() => {
    if (videoScript) {

      const script1 = document.createElement("script");
      script1.src = "https://fast.wistia.com/player.js";
      script1.async = true;
      document.body.appendChild(script1);


      const script2 = document.createElement("script");
      script2.src = "https://fast.wistia.com/embed/cxeoqwzjx0.js";
      script2.async = true;
      document.body.appendChild(script2);

      return () => {
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      };
    }

  }, [videoScript]);

  // useEffect(() => {
  //   const w_screen = window.innerWidth;

  //   if (w_screen < 999) {
  //     lightbox.option({
  //       fitImagesInViewport: true,
  //       resizeDuration: 200,
  //       wrapAround: true,
  //       albumLabel: '',
  //     });
  //   } else if (w_screen > 999 && w_screen < 1366) {
  //     lightbox.option({
  //       fitImagesInViewport: false,
  //       maxWidth: 1000,
  //       resizeDuration: 200,
  //       wrapAround: true,
  //       albumLabel: '',
  //     });
  //   } else {
  //     lightbox.option({
  //       fitImagesInViewport: false,
  //       maxHeight: 700,
  //       resizeDuration: 200,
  //       wrapAround: true,
  //       albumLabel: '',
  //     });
  //   }

  // }, []);

  const slide = {
    centerMode: false,
    slidesToShow: 2,
    variableWidth: true,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 8000,
    cssEase: 'ease',
    prevArrow: (<button class='slick-prev slick-arrow' aria-label='Pre' type='button'><svg xmlns='http://www.w3.org/2000/svg' width='14' height='30' viewBox='0 0 14 30' fill='none'><path d='M12.8052 27.9387C12.9883 28.1662 13.0909 28.4729 13.0909 28.7924C13.0909 29.112 12.9883 29.4187 12.8052 29.6462C12.7152 29.7582 12.6078 29.8472 12.4895 29.908C12.3711 29.9687 12.2441 30 12.1158 30C11.9875 30 11.8605 29.9687 11.7421 29.908C11.6238 29.8472 11.5165 29.7582 11.4265 29.6462L0.285726 15.8537C0.102646 15.6263 0 15.3196 0 15C0 14.6804 0.102646 14.3737 0.285726 14.1463L11.4265 0.353816C11.5165 0.241757 11.6238 0.152767 11.7421 0.0920242C11.8605 0.0312816 11.9875 0 12.1158 0C12.2441 0 12.3711 0.0312816 12.4895 0.0920242C12.6078 0.152767 12.7152 0.241757 12.8052 0.353816C12.9883 0.581302 13.0909 0.888005 13.0909 1.20756C13.0909 1.52711 12.9883 1.83382 12.8052 2.0613L2.64477 15.0009L12.8052 27.9387Z' fill='#0659A9' /></svg></button>),
    nextArrow: (<button class='slick-next slick-arrow' aria-label='Next' type='button'><svg xmlns='http://www.w3.org/2000/svg' width='14' height='30' viewBox='0 0 14 30' fill='none'><path d='M0.285642 2.0613C0.102562 1.83382 -8.62025e-05 1.52711 -8.61746e-05 1.20756C-8.61467e-05 0.888005 0.102562 0.581302 0.285642 0.353816C0.375669 0.241757 0.48298 0.152766 0.601328 0.0920228C0.719676 0.0312813 0.846697 -1.07042e-06 0.975 -1.0592e-06C1.1033 -1.04798e-06 1.23033 0.0312814 1.34868 0.0920228C1.46702 0.152766 1.57433 0.241757 1.66436 0.353816L12.8051 14.1463C12.9882 14.3737 13.0908 14.6804 13.0908 15C13.0908 15.3196 12.9882 15.6263 12.8051 15.8537L1.66436 29.6462C1.57433 29.7582 1.46702 29.8472 1.34867 29.908C1.23032 29.9687 1.1033 30 0.974998 30C0.846694 30 0.719673 29.9687 0.601325 29.908C0.482977 29.8472 0.375667 29.7582 0.28564 29.6462C0.102559 29.4187 -8.86141e-05 29.112 -8.85861e-05 28.7924C-8.85582e-05 28.4729 0.102559 28.1662 0.28564 27.9387L10.446 14.9991L0.285642 2.0613Z' fill='#0659A9' /></svg></button>),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          variableWidth: true,
          slidesToShow: 4,
          autoplay: true,
          autoplaySpeed: 8000,
        }
      },
      {
        breakpoint: 999,
        settings: {
          variableWidth: true,
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 8000,
        }
      },
      {
        breakpoint: 544,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 8000,
          adaptiveHeight: true
        }
      },
    ]
  };

  return (
    <Layout>
      <div className="hfeed site" id="page">
        <div id="content" className="site-content">
          <div className="main-content">
            <AboutBanner banner={banner} />
            <section className="events-video">
              <div className="ast-container">
                <div className="ast-flex justify-content-center">
                  <div className="ast-width-lg-66" dangerouslySetInnerHTML={{ __html: videoScript }}></div>
                </div>
              </div>
            </section>
            <section class="gallery-box" style={{ background: "no-repeat center/cover #0659A9 url('https://www.wellnessclinicmarketing.com/wp-content/themes/agencymarketing/assets/images/gallery-background.jpg')" }}>
              <div class="ast-container">
                <div class="col-md-12">
                  <div class="ast-full-width text-center">
                    <h2 class="text-white text-uppercase mb-2">Event Gallery</h2>
                  </div>
                  <div class="gallery-wrap">
                    <Slider {...slide} className="gallery-slider">
                      {allGalleryImages.map((item, index) => (
                        <a key={index} href={item} target="_self" data-lightbox="m_lightbox">
                          <img src={item} alt="Gallery" />
                        </a>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </section>
            <section class="section sc-events-list">
              <div class="ast-container max-w-custom mx-auto">
                <div class="event-sidebar new">
                  <h2 class="h2-title f-soleto fw-800 color-0659A9 ast-full-width text-center">Recent Events</h2>
                  <div class="list ast-flex">
                    {events.map((item, index) => (
                      <div key={index} class="item">
                        <a href={item?.uri} target="_self"><figure><img src={item?.featuredImage?.node?.sourceUrl} alt="A4M Longevity Fest 2024" /></figure></a>
                        <h3 class="h3-title">{item?.title}</h3>
                        <div class="desc">{item?.customEvent?.position} - {item?.customEvent?.date}</div>
                        <div class="sc-btn">
                          <a href={item?.uri} target="_self" class="btn-bg bg-F2771A btn-size-18 fw-700">See Event</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div >
    </Layout >
  );
};

export default FBAdvertising;
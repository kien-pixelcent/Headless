import React, { use, useEffect, useState } from "react";
import './styles.scss';
import Slider from "react-slick";
import { graphql, useStaticQuery } from "gatsby";

const Event = (direct) => {
  const query = useStaticQuery(graphql`
    query {
      cms {
        eventBy(uri: "/a4m-longevity-fest-2024") {
          id
          content
          title
          customEvent {
            date
            position
            video
            gallery {
              nodes {
                sourceUrl
              }
            }
          }
        }
      }
    }  
  `)

  const data = query?.cms?.eventBy;
  const videoScript = data?.customEvent?.video;
  const videoLink = [...videoScript.matchAll(/<script[^>]*src="([^"]+)"/g)].map(match => match[1]);

  useEffect(() => {
    if (videoScript) {

      const script1 = document.createElement("script");
      script1.src = videoLink[0];
      script1.async = true;
      document.body.appendChild(script1);


      const script2 = document.createElement("script");
      script2.src = videoLink[1];
      script2.async = true;
      document.body.appendChild(script2);

      return () => {
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      };
    }

  }, [videoScript]);

  const slide = {
    centerMode: false,
    slidesToShow: 2,
    variableWidth: true,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 8000,
    cssEase: 'ease',
    prevArrow: (<button class='slick-prev slick-arrow' aria-label='Pre' type='button'><svg xmlns='http://www.w3.org/2000/svg' width='14' height='30' viewBox='0 0 14 30' fill='#0659A9'><path d='M12.8052 27.9387C12.9883 28.1662 13.0909 28.4729 13.0909 28.7924C13.0909 29.112 12.9883 29.4187 12.8052 29.6462C12.7152 29.7582 12.6078 29.8472 12.4895 29.908C12.3711 29.9687 12.2441 30 12.1158 30C11.9875 30 11.8605 29.9687 11.7421 29.908C11.6238 29.8472 11.5165 29.7582 11.4265 29.6462L0.285726 15.8537C0.102646 15.6263 0 15.3196 0 15C0 14.6804 0.102646 14.3737 0.285726 14.1463L11.4265 0.353816C11.5165 0.241757 11.6238 0.152767 11.7421 0.0920242C11.8605 0.0312816 11.9875 0 12.1158 0C12.2441 0 12.3711 0.0312816 12.4895 0.0920242C12.6078 0.152767 12.7152 0.241757 12.8052 0.353816C12.9883 0.581302 13.0909 0.888005 13.0909 1.20756C13.0909 1.52711 12.9883 1.83382 12.8052 2.0613L2.64477 15.0009L12.8052 27.9387Z' fill='#0659A9' /></svg></button>),
    nextArrow: (<button class='slick-next slick-arrow' aria-label='Next' type='button'><svg xmlns='http://www.w3.org/2000/svg' width='14' height='30' viewBox='0 0 14 30' fill='#0659A9'><path d='M0.285642 2.0613C0.102562 1.83382 -8.62025e-05 1.52711 -8.61746e-05 1.20756C-8.61467e-05 0.888005 0.102562 0.581302 0.285642 0.353816C0.375669 0.241757 0.48298 0.152766 0.601328 0.0920228C0.719676 0.0312813 0.846697 -1.07042e-06 0.975 -1.0592e-06C1.1033 -1.04798e-06 1.23033 0.0312814 1.34868 0.0920228C1.46702 0.152766 1.57433 0.241757 1.66436 0.353816L12.8051 14.1463C12.9882 14.3737 13.0908 14.6804 13.0908 15C13.0908 15.3196 12.9882 15.6263 12.8051 15.8537L1.66436 29.6462C1.57433 29.7582 1.46702 29.8472 1.34867 29.908C1.23032 29.9687 1.1033 30 0.974998 30C0.846694 30 0.719673 29.9687 0.601325 29.908C0.482977 29.8472 0.375667 29.7582 0.28564 29.6462C0.102559 29.4187 -8.86141e-05 29.112 -8.85861e-05 28.7924C-8.85582e-05 28.4729 0.102559 28.1662 0.28564 27.9387L10.446 14.9991L0.285642 2.0613Z' fill='#0659A9' /></svg></button>),
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
    <>
      <section className="banner" style={{ background: "no-repeat center/cover #0659A9 url('https://www.wellnessclinicmarketing.com/wp-content/uploads/2025/03/default-page-banner.jpg')" }}>
        <div className="cus-container">
          <div className="ast-full-width text-center text-white">
            <h1 class="h3-title fs-36 f-soleto fw-800 text-white">{data?.title}</h1>
            <div class="desc fs-32 f-soleto fw-500">{data?.customEvent?.position}</div>
            <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
            <div class="breadcrumb">
              <a href="/events/" target="_self" class="f-soleto">Back To All Events</a>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.12115 7.00099L7.59082 12.4707L6.53016 13.5314L-0.000148582 7.00099L6.53016 0.470703L7.59082 1.53136L2.12115 7.00099Z" fill="#F0791D"></path>
              </svg>
              <span class="breadcrumb-current">{data?.title}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section sc-event-single">
        <div className="cus-container">
          <div className="sc-event-video ast-flex justify-content-center">
            <div className="ast-width-lg-66" dangerouslySetInnerHTML={{ __html: videoScript }}></div>
          </div>
          <div className="gallery-box">
            <Slider {...slide} className="gallery-slider">
              {data?.customEvent?.gallery?.nodes?.map((item, index) => (
                <a key={index} href={item?.sourceUrl} target="_self" data-lightbox="m_lightbox">
                  <img src={item?.sourceUrl} alt="Gallery" />
                </a>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Event;
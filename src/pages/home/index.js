import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Slider from "react-slick";
import HomeBanner from '../../components/HomeBanner'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ({ data }) => {
  console.log(data);
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    centerPadding: "100px",
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        arrows: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      }
    },
    ],
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 300,
    centerPadding: "100px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (<button type="button" class="slick-arrow slider-prev"> <svg width="54" height="100" viewBox="0 0 54 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M52.3223 93.129C53.0704 93.8873 53.4898 94.9096 53.4898 95.9748C53.4898 97.04 53.0704 98.0623 52.3223 98.8206C51.9544 99.1941 51.516 99.4908 51.0324 99.6933C50.5488 99.8957 50.0298 100 49.5056 100C48.9813 100 48.4623 99.8957 47.9787 99.6933C47.4951 99.4908 47.0567 99.1941 46.6888 98.8206L1.16748 52.8458C0.419413 52.0875 0 51.0652 0 50C0 48.9348 0.419413 47.9125 1.16748 47.1542L46.6888 1.17939C47.0567 0.805857 47.4951 0.509222 47.9787 0.306747C48.4623 0.104272 48.9813 0 49.5056 0C50.0298 0 50.5488 0.104272 51.0324 0.306747C51.516 0.509222 51.9544 0.805857 52.3223 1.17939C53.0704 1.93767 53.4898 2.96002 53.4898 4.0252C53.4898 5.09038 53.0704 6.11272 52.3223 6.87101L10.8066 50.0029L52.3223 93.129Z" fill="#0568B9" /> </svg> </button>),
    nextArrow: (<button type="button" class="slick-arrow slider-next"> <svg width="54" height="100" viewBox="0 0 54 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.16793 93.129C0.419865 93.8873 0.000442505 94.9096 0.000442505 95.9748C0.000442505 97.04 0.419865 98.0623 1.16793 98.8206C1.53579 99.1941 1.97426 99.4908 2.45784 99.6933C2.94141 99.8957 3.46042 100 3.98467 100C4.50892 100 5.02794 99.8957 5.51152 99.6933C5.99509 99.4908 6.43356 99.1941 6.80142 98.8206L52.3228 52.8458C53.0708 52.0875 53.4902 51.0652 53.4902 50C53.4902 48.9348 53.0708 47.9125 52.3228 47.1542L6.80142 1.17939C6.43356 0.805857 5.99509 0.509222 5.51152 0.306747C5.02794 0.104272 4.50892 0 3.98467 0C3.46042 0 2.94141 0.104272 2.45784 0.306747C1.97426 0.509222 1.53579 0.805857 1.16793 1.17939C0.419865 1.93767 0.000442505 2.96002 0.000442505 4.0252C0.000442505 5.09038 0.419865 6.11272 1.16793 6.87101L42.6836 50.0029L1.16793 93.129Z" fill="#0568B9" /> </svg> </button>),
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        arrows: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      }
    },
    ],
  };
  return (
    <Layout>
      <div id="content" className="site-content">
        <div className="main-content">
          <HomeBanner />
          <section className="section sc-experts">
            <div className="ast-container-fluid px-0">
              <h2 className="fs-22 fw-500 color-0659A9 text-center">
                WITH EXPERTISE ON:
              </h2>
              <Slider {...settings} className="experts-list ast-flex align-items-center">
                <a href="#">

                  <img src="img/botox-cosmetic.png" alt="" />
                </a>
                <a href="#">

                  <img src="img/kybella.png" alt="" />
                </a>
                <a href="#">

                  <img src="img/juvederm.png" alt="" />
                </a>
                <a href="#">

                  <img src="img/ultra-femme-360.png" alt="" />
                </a>
                <a href="#">

                  <img src="img/emsculpt.png" alt="" />
                </a>
                <a href="#">

                  <img src="img/coolsculpting.png" alt="" />
                </a>
              </Slider>
            </div>
          </section>
          <section
            className="section sc-patients"
            style={{ backgroundColor: "#F3F3F3" }}
          >
            <div className="ast-container">
              <div className="ast-flex col-patients">
                <div className="col-content ast-flex flex-column">
                  <div className="col-content-text">
                    <h3 className="fs-48 f-soletoxbold">
                      More <span>Appointments,</span> More <span>Revenue.</span>
                    </h3>
                    <div className="desc f-soleto fs-26">
                      We understand that the success of your medical practice depends
                      on a flood of new patients.
                    </div>
                  </div>
                  <div className="sc-btn">
                    <a
                      href="#"
                      target="_self"
                      className="btn-bg bg-F2771A btn-size-18 fw-700"
                    >
                      Schedule A Strategy Session
                    </a>
                  </div>
                </div>
                <div className="home-video">
                  <div
                    className="wistia_responsive_padding"
                    style={{ padding: "56.25% 0 0 0", position: "relative" }}
                  >
                    <div
                      className="wistia_responsive_wrapper"
                      style={{
                        height: "100%",
                        left: 0,
                        position: "absolute",
                        top: 0,
                        width: "100%"
                      }}
                    >
                      <div
                        className="wistia_embed wistia_async_xf7qhxzcf3 videoFoam=true seo=false"
                        style={{
                          height: "100%",
                          position: "relative",
                          width: "100%"
                        }}
                      >
                        <div
                          className="wistia_swatch"
                          style={{
                            height: "100%",
                            left: 0,
                            opacity: 0,
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            transition: "opacity 200ms",
                            width: "100%"
                          }}
                        >
                          <img
                            src="https://fast.wistia.com/embed/medias/xf7qhxzcf3/swatch"
                            style={{
                              filter: "blur(5px)",
                              height: "100%",
                              objectFit: "contain",
                              width: "100%"
                            }}
                            alt=""
                            aria-hidden="true"
                            onload="this.parentNode.style.opacity=1;"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="section sc-practice"
            style={{
              background: 'no-repeat center/cover url("img/bg-your-paractice-v2.jpg")'
            }}
          >
            <div className="ast-container">
              <h2 className="h2-title fs-48 f-soletoxbold text-white text-center">
                Your Success Strategy: Here"s The Game Plan
              </h2>
              <div className="desc text-white fs-22 text-center">
                Our tested &amp; proven Practice Accelerator Program - MAR$™ can help
                you add more cash-paying patients without wasting time &amp; money on
                ineffective marketing strategies, so you can focus building a
                successful medical practice.
              </div>
              <div className="boxies-practice-list">
                <div className="practice-item position-relative ast-flex justify-content-center">
                  <div className="inner ast-flex flex-column">
                    <img src="img/megaphone-o.svg" alt="MARKETING" />
                    <div className="practice-content f-soleto color-0659A9">
                      <h3 className="h3-title f-soletoxbold color-0659A9">
                        MARKETING
                      </h3>
                      <div className="desc f-soleto fw-500">
                        Reach More New Potential Leads
                      </div>
                    </div>
                  </div>
                </div>
                <div className="practice-item position-relative ast-flex justify-content-center">
                  <div className="inner ast-flex flex-column">
                    <img src="img/software-o.svg" alt="SOFTWARE" />
                    <div className="practice-content f-soleto color-0659A9">
                      <h3 className="h3-title f-soletoxbold color-0659A9">
                        SOFTWARE
                      </h3>
                      <div className="desc f-soleto fw-500">
                        Turn Leads into Appointments
                      </div>
                    </div>
                  </div>
                </div>
                <div className="practice-item position-relative ast-flex justify-content-center">
                  <div className="inner ast-flex flex-column">
                    <img src="img/automate-o.svg" alt="AUTOMATION" />
                    <div className="practice-content f-soleto color-0659A9">
                      <h3 className="h3-title f-soletoxbold color-0659A9">
                        AUTOMATION
                      </h3>
                      <div className="desc f-soleto fw-500">
                        Automatic Follow-Ups &amp; Reminders
                      </div>
                    </div>
                  </div>
                </div>
                <div className="practice-item position-relative ast-flex justify-content-center">
                  <div className="inner ast-flex flex-column">
                    <img src="img/AI-o.svg" alt="AI" />
                    <div className="practice-content f-soleto color-0659A9">
                      <h3 className="h3-title f-soletoxbold color-0659A9">AI</h3>
                      <div className="desc f-soleto fw-500">
                        Smart reminders for bloodwork &amp; prescriptions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-btn ast-flex justify-content-center">
                <a
                  href="#"
                  target="_self"
                  className="btn-bg bg-F2771A btn-size-18 fw-700"
                >
                  Talk To A Strategist
                </a>
              </div>
            </div>
          </section>
          <section className="section sc-get-more">
            <div className="ast-container flex-column">
              <h2 className="h2-title fs-48 f-soleto fw-800 color-00255B text-center mb-0">
                GET MORE...
              </h2>
              <div className="steps ast-flex justify-content-center align-items-center">
                <a href="#" target="_self" className="step f-soleto fw-500">
                  LEADS
                </a>
                <a href="#" target="_self" className="step f-soleto fw-500">
                  BOOKINGS
                </a>
                <a href="#" target="_self" className="step f-soleto fw-500">
                  SALES
                </a>
                <a href="#" target="_self" className="step f-soleto fw-500">
                  REVIEWS
                </a>
                <a href="#" target="_self" className="step f-soleto fw-500">
                  REPEAT PATIENTS
                </a>
              </div>
            </div>
          </section>
          <section
            className="section sc-how-we-can-help pt-100 pb-100"
            style={{
              background: 'no-repeat center/cover url("img/bg-how-we-can-help.jpg")'
            }}
          >
            <div className="ast-container">
              <div className="header-title ast-flex flex-column align-items-center text-center">
                <div className="sub-title f-soleto fs-32 fw-500 color-00255B text-uppercase">
                  Your Digital Growth Toolkit
                </div>
                <h2 className="h2-title f-soletoxbold fs-56 color-2c2c2c">
                  To Move <span>From Clicks to Patients</span>
                </h2>
              </div>
              <div className="box-circle-list position-relative">
                <div className="box-center position-absolute ast-flex justify-content-center">
                  <div className="arrow arrow-1"> </div>
                  <div className="arrow arrow-2"> </div>
                  <div className="arrow arrow-3"> </div>
                  <div className="arrow arrow-4"> </div>
                  <div className="arrow arrow-5"> </div>
                  <div className="arrow arrow-6"> </div>
                  <div className="cir-box-center ast-flex flex-column align-items-center justify-content-center">
                    <h3 className="h3-title f-soleto fw-800 text-white text-uppercase">
                      Marketing
                    </h3>
                    <div className="desc f-soleto fw-500 text-white text-uppercase text-center">
                      Essentials for Modern Clinics
                    </div>
                  </div>
                </div>
                <div className="boxies-outer position-relative ast-flex">
                  <div className="circle-box box-1">
                    <figure>

                      <img src="img/web-development.svg" alt="" />
                    </figure>
                    <h3 className="h3-title fs-26 f-soleto fw-800 color-000000 text-center">
                      Website Design
                    </h3>
                    <div className="box-content fw-300 color-000000 border-0659A9">

                      Let us help you make it perfect with a personalized website that
                      converts website visits into new patients.
                    </div>
                  </div>
                  <div className="circle-box box-2">
                    <figure>

                      <img src="img/seo.svg" alt="" />
                    </figure>
                    <h3 className="h3-title fs-26 f-soleto fw-800 color-000000 text-center">
                      Search Engine Optimization
                    </h3>
                    <div className="box-content fw-300 color-000000 border-F2771A">
                      Claim top positions on Google for search terms people use to
                      look for medical wellness treatments, clinics, and doctors.
                    </div>
                  </div>
                  <div className="circle-box box-3">
                    <figure>

                      <img src="img/crm.svg" alt="" />
                    </figure>
                    <h3 className="h3-title fs-26 f-soleto fw-800 color-000000 text-center">
                      CRM Software
                    </h3>
                    <div className="box-content fw-300 color-000000 border-0659A9">

                      Convert leads into patients with an automation technology that
                      nurtures and educates prospects about your practice and
                      services.
                    </div>
                  </div>
                  <div className="circle-box box-4">
                    <figure>

                      <img src="img/meta-ads.svg" alt="" />
                    </figure>
                    <h3 className="h3-title fs-26 f-soleto fw-800 color-000000 text-center">
                      Meta Ads
                    </h3>
                    <div className="box-content fw-300 color-000000 border-F2771A">

                      Facebook advertising is a powerful marketing strategy for a
                      medical practice looking to generate new patients for cosmetic
                      and aesthetic procedures.
                    </div>
                  </div>
                  <div className="circle-box box-5">
                    <figure>

                      <img src="img/google-ads.svg" alt="" />
                    </figure>
                    <h3 className="h3-title fs-26 f-soleto fw-800 color-000000 text-center">
                      Google Ads
                    </h3>
                    <div className="box-content fw-300 color-000000 border-0659A9">

                      There is no better way to drive interested patients to your
                      practice sooner than Google Ads. Our paid ad strategies can help
                      your practice achieve steady new patient flow.
                    </div>
                  </div>
                  <div className="circle-box box-6">
                    <figure>

                      <img src="img/google-maps.svg" alt="" />
                    </figure>
                    <h3 className="h3-title fs-26 f-soleto fw-800 color-000000 text-center">
                      Google Maps
                    </h3>
                    <div className="box-content fw-300 color-000000 border-F2771A">

                      Position your medical practice in Google Maps for people
                      searching local clinics for medical wellness providers.
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-btn ast-flex justify-content-center">
                <a
                  href="#"
                  target="_self"
                  className="btn-bg bg-F2771A btn-size-18 fw-700"
                >
                  GET STARTED NOW
                </a>
              </div>
            </div>
          </section>
          <section className="section sc-testimonials">
            <div className="ast-container">
              <h2 className="h2-title f-soleto fs-32 fw-500 color-00255B text-center text-uppercase">
                Featured Case Study
              </h2>
              <div className="blockquote text-center">
                <blockquote>
                  <p>
                    “Our average now of our monthly income has doubled. <br />
                    As a small business, it’s easier to have that growth a lot
                    quicker”
                  </p>
                </blockquote>
                <div className="author f-soleto">
                  - Cameron, Founder of Carolina Health and Wellness
                </div>
              </div>
              <div className="testimonials-list">
                <div className="item ast-flex gap-20">
                  <div className="col-video">
                    <div className="video-inner">
                      <iframe
                        width={560}
                        height={315}
                        src="https://www.youtube.com/embed/9KxbOA6-8VE?si=DLHTUIgzZOTJI-3s"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen=""
                      >

                      </iframe>
                    </div>
                  </div>
                  <div className="col-content ast-flex flex-column">
                    <div className="boxies ast-flex">
                      <div className="box">
                        <div className="testi-box-number ast-flex justify-content-center align-items-center">
                          <img src="img/monthly.svg" alt="Monthly revenue doubled" />
                          <span className="number f-soleto fw-800">2x</span>
                        </div>
                        <span className="box-text f-soleto fw-700 text-center">
                          Monthly revenue doubled
                        </span>
                      </div>
                      <div className="box">
                        <div className="testi-box-number ast-flex justify-content-center align-items-center">
                          <img
                            src="img/patient-growth.svg"
                            alt="Increase in patient growth"
                          />
                          <span className="number f-soleto fw-800">65%</span>
                        </div>
                        <span className="box-text f-soleto fw-700 text-center">
                          Increase in patient growth
                        </span>
                      </div>
                    </div>
                    <div className="testi-content">
                      <div className="tags ast-flex">
                        <a href="#">SEO</a>
                        <a href="#">PPC</a>
                        <a href="#">Automation</a>
                        <a href="#">Web Design</a>
                      </div>
                      <div className="content">
                        <h3>Results</h3>
                        <ul>
                          <li>
                            Monthly revenue doubled from $30k to an average of $75k
                          </li>
                          <li>
                            Improved online visibility and search engine rankings
                          </li>
                          <li>
                            More effective use of advertising budget with better
                            conversion rates to appointments
                          </li>
                          <li>and more…</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc f-soleto fw-500 text-center">
                Carolina Health and Wellness, specializing in men's testosterone
                therapy and medically supervised weight loss, aimed to significantly
                increase their monthly revenue and enhance their online presence.
              </div>
              <div className="sc-btn ast-flex justify-content-center">
                <a
                  href="#"
                  target="_self"
                  className="btn-bg bg-F2771A btn-size-18 fw-700"
                >
                  View Case Study
                </a>
              </div>
            </div>
          </section>
          <section
            className="section sc-how-we-do-it"
            style={{ background: 'no-repeat center/cover url("img/bg-steps.jpg")' }}
          >
            <div className="ast-container">
              <h2 className="h2-title f-soletoxbold text-white mb-0 text-center">
                3 Easy Steps to Get Started
              </h2>
              <div className="number-infor ast-flex align-items-center">
                <div className="box-number ast-flex align-items-center">
                  <div className="ast-flex align-items-center">
                    <div className="box-img">
                      <figure className="mb-0">

                        <img src="img/icon-step-1.svg" alt="" />
                      </figure>
                    </div>
                    <div className="desc f-soleto fw-800 text-white">
                      Free Consultation With A Strategist
                    </div>
                  </div>
                </div>
                <div className="box-number ast-flex align-items-center">
                  <div className="ast-flex align-items-center">
                    <div className="box-img">
                      <figure className="mb-0">

                        <img src="img/icon-step-2.svg" alt="" />
                      </figure>
                    </div>
                    <div className="desc f-soleto fw-800 text-white">
                      Activate Program
                    </div>
                  </div>
                </div>
                <div className="box-number ast-flex align-items-center">
                  <div className="ast-flex align-items-center">
                    <div className="box-img">
                      <figure className="mb-0">

                        <img src="img/icon-step-3.svg" alt="" />
                      </figure>
                    </div>
                    <div className="desc f-soleto fw-800 text-white">
                      Watch Your Practice Grow
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-btn ast-flex justify-content-center">
                <a
                  href="#"
                  target="_self"
                  className="btn-bg bg-F2771A btn-size-18 fw-700"
                >
                  Schedule Strategy Session Now
                </a>
              </div>
            </div>
          </section>
          <section
            className="section sc-specialty"
            style={{ background: 'no-repeat center/cover url("img/bg-specialty.jpg")' }}
          >
            <div className="ast-container-fluid padding-left padding-right">
              <h2 className="h2-title f-soletoxbold fs-56 color-2c2c2c text-center">
                Designed Exclusively For...
              </h2>
              <Slider {...settings2} className="specialty-list ast-flex">
                <div className="s-box-slide">
                  <div className="s-box  position-relative first">
                    <svg
                      width={144}
                      height={145}
                      viewBox="0 0 144 145"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M36.206 77.3156L66.4848 70.7025L87.784 93.7526L78.8043 123.416L48.5254 130.029L27.2263 106.979L36.206 77.3156Z"
                        fill="#F6BA8D"
                      />
                      <path
                        d="M22.6659 20.9445L52.9448 14.3314L74.2439 37.3815L65.2642 67.0447L34.9854 73.6578L13.6862 50.6077L22.6659 20.9445Z"
                        fill="#F6BA8D"
                      />
                      <path
                        d="M78.6415 37.9718L108.92 31.3587L130.22 54.4088L121.24 84.072L90.961 90.6852L69.6618 67.6351L78.6415 37.9718Z"
                        fill="#F6BA8D"
                      />
                    </svg>
                    <div className="s-box-inner">
                      <a href="#" target="_self">
                        <figure className="mb-0">
                          <img src="img/iStock-2083669345-1.jpg" alt="" />
                        </figure>
                        <div className="s-content">
                          <h3 className="h3-title f-soleto fw-700 fs-32 mb-0">
                            Med Spa
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="s-box-slide">
                  <div className="s-box  position-relative second">
                    <svg
                      width={144}
                      height={145}
                      viewBox="0 0 144 145"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M36.206 77.3156L66.4848 70.7025L87.784 93.7526L78.8043 123.416L48.5254 130.029L27.2263 106.979L36.206 77.3156Z"
                        fill="#F6BA8D"
                      />
                      <path
                        d="M22.6659 20.9445L52.9448 14.3314L74.2439 37.3815L65.2642 67.0447L34.9854 73.6578L13.6862 50.6077L22.6659 20.9445Z"
                        fill="#F6BA8D"
                      />
                      <path
                        d="M78.6415 37.9718L108.92 31.3587L130.22 54.4088L121.24 84.072L90.961 90.6852L69.6618 67.6351L78.6415 37.9718Z"
                        fill="#F6BA8D"
                      />
                    </svg>
                    <div className="s-box-inner">
                      <a href="#" target="_self">
                        <figure className="mb-0">
                          <img src="img/iStock-2163004497-2.jpg" alt="" />
                        </figure>
                        <div className="s-content">
                          <h3 className="h3-title f-soleto fw-700 fs-32 mb-0">
                            Men's Health
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="s-box-slide">
                  <div className="s-box  position-relative first">
                    <svg
                      width={144}
                      height={145}
                      viewBox="0 0 144 145"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M36.206 77.3156L66.4848 70.7025L87.784 93.7526L78.8043 123.416L48.5254 130.029L27.2263 106.979L36.206 77.3156Z"
                        fill="#F6BA8D"
                      />
                      <path
                        d="M22.6659 20.9445L52.9448 14.3314L74.2439 37.3815L65.2642 67.0447L34.9854 73.6578L13.6862 50.6077L22.6659 20.9445Z"
                        fill="#F6BA8D"
                      />
                      <path
                        d="M78.6415 37.9718L108.92 31.3587L130.22 54.4088L121.24 84.072L90.961 90.6852L69.6618 67.6351L78.6415 37.9718Z"
                        fill="#F6BA8D"
                      />
                    </svg>
                    <div className="s-box-inner">
                      <a href="#" target="_self">
                        <figure className="mb-0">
                          <img src="img/iStock-846736286.jpg" alt="" />
                        </figure>
                        <div className="s-content">
                          <h3 className="h3-title f-soleto fw-700 fs-32 mb-0">
                            Women's Health
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="s-box-slide">
                  <div className="s-box  position-relative second">
                    <svg
                      width={144}
                      height={145}
                      viewBox="0 0 144 145"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M36.206 77.3156L66.4848 70.7025L87.784 93.7526L78.8043 123.416L48.5254 130.029L27.2263 106.979L36.206 77.3156Z"
                        fill="#F6BA8D"
                      />
                      <path
                        d="M22.6659 20.9445L52.9448 14.3314L74.2439 37.3815L65.2642 67.0447L34.9854 73.6578L13.6862 50.6077L22.6659 20.9445Z"
                        fill="#F6BA8D"
                      />
                      <path
                        d="M78.6415 37.9718L108.92 31.3587L130.22 54.4088L121.24 84.072L90.961 90.6852L69.6618 67.6351L78.6415 37.9718Z"
                        fill="#F6BA8D"
                      />
                    </svg>
                    <div className="s-box-inner">
                      <a href="#" target="_self">
                        <figure className="mb-0">
                          <img src="img/iStock-957383074.jpg" alt="" />
                        </figure>
                        <div className="s-content">
                          <h3 className="h3-title f-soleto fw-700 fs-32 mb-0">
                            Medical Weight Loss
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="s-box-slide">
                  <div className="s-box  position-relative first">
                    <svg
                      width={144}
                      height={145}
                      viewBox="0 0 144 145"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M36.206 77.3156L66.4848 70.7025L87.784 93.7526L78.8043 123.416L48.5254 130.029L27.2263 106.979L36.206 77.3156Z"
                        fill="#F6BA8D"
                      />
                      <path
                        d="M22.6659 20.9445L52.9448 14.3314L74.2439 37.3815L65.2642 67.0447L34.9854 73.6578L13.6862 50.6077L22.6659 20.9445Z"
                        fill="#F6BA8D"
                      />
                      <path
                        d="M78.6415 37.9718L108.92 31.3587L130.22 54.4088L121.24 84.072L90.961 90.6852L69.6618 67.6351L78.6415 37.9718Z"
                        fill="#F6BA8D"
                      />
                    </svg>
                    <div className="s-box-inner">
                      <a href="#" target="_self">
                        <figure className="mb-0">
                          <img src="img/iStock-1652404128.jpg" alt="" />
                        </figure>
                        <div className="s-content">
                          <h3 className="h3-title f-soleto fw-700 fs-32 mb-0">
                            Anti-Aging Procedures
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </section>
          <section className="section sc-gift-book">
            <div className="ast-container">
              <div className="sc-free-gift ast-flex">
                <figure>

                  <img src="img/free-gift-img.png" alt="" width={150} height={180} />
                </figure>
                <div className="free-gift-content">
                  <h2 className="fs-36 fw-800 color-00255B">FREE GIFT!</h2>
                  <div className="desc color-00255B">
                    <p>
                      Discover proven marketing strategies to attract a flood of new
                      cash-paying patients that pay, stay, and refer in our latest
                      book “
                      <a
                        href="https://e.wellnessclinicmarketing.com/free-book/"
                        target="_blank"
                      >
                        Grow Your Medical Wellness Practice
                      </a>
                      “, an ultimate guide to marketing for hormone therapy, sexual
                      health, medical weight loss, body contouring and other
                      anti-aging procedures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Home

// export const query = graphql`
//   query Home {
//     categories {
//       nodes {
//         categoryId
//       }
//     }
//   }
// `
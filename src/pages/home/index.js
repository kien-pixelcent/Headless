import React from "react"
import Layout from "../../components/layout"

const Home = () => {

  return (
    <Layout>
      <div id="content" className="site-content">
        <div className="main-content">
          <section
            className="home-banner"
            style={{ background: 'no-repeat center/cover url("img/hero-banner-v2.png")' }}
          >
            <div className="ast-container">
              <div className="banner-title position-relative text-center">
                <img
                  src="img/badge.png"
                  alt="Badge"
                  className="img-badge position-absolute"
                />
                <div className="sub-title f-soleto fw-500 text-white">
                  MAKING IT EASY TO
                </div>
                <h1 className="h1-title f-soletoxbold text-white">
                  ACQUIRE NEW PATIENTS
                </h1>
              </div>
              <div className="banner-sep ast-flex">
                <div className="sep-left">

                  <img src="img/brush-stroke-1.svg" alt="" />
                </div>
                <div className="sep-text f-soleto fw-500 text-white">FOR</div>
                <div className="sep-right">

                  <img src="img/brush-stroke-2.svg" alt="" />
                </div>
              </div>
              <div className="banner-list ast-flex  justify-content-center">
                <a href="#" target="_self" className="link-item">
                  Hormone Optimization
                </a>
                <a href="#" target="_self" className="link-item">
                  Sexual Wellness
                </a>
                <a href="#" target="_self" className="link-item">
                  Anti-Aging Procedures
                </a>
                <a href="#" target="_self" className="link-item">
                  Medical Weight Loss
                </a>
              </div>
              <div className="banner-services text-white ast-flex justify-content-center">
                <div className="box-ser">
                  <img src="img/megaphone.svg" alt="" />
                  <span className="f-soleto fw-500">
                    MARKETING &amp; <br />
                    ADVERTISING
                  </span>
                </div>
                <div className="box-ser">
                  <img src="img/AI.svg" alt="" />
                  <span className="f-soleto fw-500">
                    AI-POWERED <br />
                    AUTOMATIONS
                  </span>
                </div>
              </div>
              <div className="banner-desc f-soleto fw-500 text-white text-center">
                GROW YOUR WELLNESS PRACTICE WITH FULL-SERVICE MARKETING, AUTOMATION,
                AND AI.
              </div>
            </div>
          </section>
          <section className="section sc-experts">
            <div className="ast-container-fluid px-0">
              <h2 className="fs-22 fw-500 color-0659A9 text-center">
                WITH EXPERTISE ON:
              </h2>
              <div className="experts-list ast-flex align-items-center">
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
              </div>
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
              <div className="specialty-list ast-flex">
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
              </div>
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

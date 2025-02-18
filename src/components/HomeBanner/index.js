

import React from "react"

const HomeBanner = () => {
  return (
    <>
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
    </>
  )
}

export default HomeBanner

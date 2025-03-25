import * as React from "react"
import "./styles.scss"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      cms {
        themeSettings {
          menuTitle
          pageTitle
          themeOptionsSettings {
            defaultLogo {
              node {
                altText
                id
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);
  const content = data.cms.themeSettings
  return (
    <header className="site-header header-main-layout-1 ast-primary-menu-enabled ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline" id="masthead">
      <div id="ast-desktop-header" data-toggle-type="dropdown">
        <div className="ast-main-header-wrap main-header-bar-wrap ">
          <div className="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item" data-section="section-primary-header-builder">
            <div className="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container" data-section="section-primary-header-builder">
              <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                  <div className="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
                    <div className="site-branding ast-site-identity">
                      <span className="site-logo-img">
                        <Link className="custom-logo-link" to="/">
                          <img width={250} height={72} src={content?.themeOptionsSettings?.defaultLogo?.node?.sourceUrl} className="custom-logo" alt="MD Marketing Agency" decoding="async" />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                  <div className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item" data-section="section-hb-menu-1">
                    <div className="ast-main-header-bar-alignment">
                      <div id="mega-menu-wrap-primary" className="mega-menu-wrap">
                        <div className="mega-menu-toggle">
                          <div className="mega-toggle-blocks-left"></div>
                          <div className="mega-toggle-blocks-center"></div>
                          <div className="mega-toggle-blocks-right">
                            <div className="mega-toggle-block mega-menu-toggle-animated-block mega-toggle-block-0" id="mega-toggle-block-0">
                              <button aria-label="Toggle Menu" className="mega-toggle-animated mega-toggle-animated-slider" type="button" aria-expanded="false">
                                <span className="mega-toggle-animated-box">
                                  <span className="mega-toggle-animated-inner"> </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <ul id="mega-menu-primary" className="mega-menu max-mega-menu mega-menu-horizontal mega-no-js" data-event="hover_intent" data-effect="fade_up" data-effect-speed={200} data-effect-mobile="disabled" data-effect-speed-mobile={0} data-mobile-force-width="false" data-second-click="go" data-document-click="collapse" data-vertical-behaviour="standard" data-breakpoint={768} data-unbind="true" data-mobile-state="collapse_all" data-mobile-direction="vertical" data-hover-intent-timeout={300} data-hover-intent-interval={100}>
                          {/* <li className="mega-two-column mega-max-w-560 mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-menu-item-30 two-column max-w-560" id="mega-menu-item-30">
                            <a className="mega-menu-link" href="#" aria-expanded="false" tabIndex={0}> Who We Help <span className="mega-indicator">
                            </span> </a>
                            <ul className="mega-sub-menu">
                              <li className="mega-menu-row" id="mega-menu-30-0">
                                <ul className="mega-sub-menu">
                                  <li className="mega-menu-column mega-menu-columns-6-of-12" id="mega-menu-30-0-0">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-4" id="mega-menu-item-media_image-4">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/img/icon-1.svg`} className="image wp-image-223  attachment-full size-full" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-35" id="mega-menu-item-35"> <a className="mega-menu-link" href="#">Medical Wellness Clinic</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-column mega-menu-columns-6-of-12" id="mega-menu-30-0-1">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-5" id="mega-menu-item-media_image-5">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/img/icon-health.svg`} className="image wp-image-224  attachment-full size-full" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-209" id="mega-menu-item-209"> <a className="mega-menu-link" href="#">Men's Health Clinic</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-row" id="mega-menu-30-1">
                                <ul className="mega-sub-menu">
                                  <li className="mega-menu-column mega-menu-columns-6-of-12" id="mega-menu-30-1-0">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-6" id="mega-menu-item-media_image-6">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/img/icon-herbs.svg`} className="image wp-image-225  attachment-full size-full" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-208" id="mega-menu-item-208"> <a className="mega-menu-link" href="#">Med Spa Marketing</a> </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-column mega-menu-columns-6-of-12" id="mega-menu-30-1-1">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-7" id="mega-menu-item-media_image-7">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/img/hexagon.svg`} className="image wp-image-226  attachment-full size-full" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-210" id="mega-menu-item-210"> <a className="mega-menu-link" href="#">Hormone Clinic</a> </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li> */}
                          <li className="mega-full-w-columns mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-menu-item-31 full-w-columns" id="mega-menu-item-31"> <a className="mega-menu-link" href="#" aria-expanded="false" tabIndex={0}>Our Services<span className="mega-indicator"> </span> </a>
                            <ul className="mega-sub-menu">
                              <li className="mega-menu-row" id="mega-menu-31-0">
                                <ul className="mega-sub-menu">
                                  <li className="mega-menu-column mega-menu-columns-5-of-12" id="mega-menu-31-0-0">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-8" id="mega-menu-item-media_image-8">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/img/improvement-1.svg`} className="image wp-image-238  attachment-full size-full" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-857" id="mega-menu-item-857"> <Link className="mega-menu-link" to="/service/website-development">Website Development</Link> </li>
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-9" id="mega-menu-item-text-9">
                                        <div className="textwidget">
                                          <p>Let us help you make it perfect with a personalized website that converts website visits into new patients.</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-column mega-menu-columns-7-of-12" id="mega-menu-31-0-1">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-9" id="mega-menu-item-media_image-9">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/img/improvement-5.svg`} className="image wp-image-239  attachment-full size-full" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-858" id="mega-menu-item-858">
                                        <Link to="/service/facebook-advertising" className="mega-menu-link" href="#">Facebook Advertising</Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-10" id="mega-menu-item-text-10">
                                        <div className="textwidget">
                                          <p>Facebook advertising is a powerful marketing strategy for a medical practice looking to generate new patients for cosmetic and aesthetic procedures.</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-row" id="mega-menu-31-1">
                                <ul className="mega-sub-menu">
                                  <li className="mega-menu-column mega-menu-columns-5-of-12" id="mega-menu-31-1-0">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-11" id="mega-menu-item-media_image-11">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/img/improvement-2.svg`} className="image wp-image-240  attachment-full size-full" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-859" id="mega-menu-item-859">
                                        <Link className="mega-menu-link" to="/service/search-engine-optimization">Search Engine Marketing</Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-11" id="mega-menu-item-text-11">
                                        <div className="textwidget">
                                          <p>Claim top positions on Google for search terms people use to look for medical wellness treatments, clinics, and doctors.</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-column mega-menu-columns-7-of-12" id="mega-menu-31-1-1">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-12" id="mega-menu-item-media_image-12">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/img/improvement-6.svg`} className="image wp-image-241  attachment-full size-full" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-860" id="mega-menu-item-860">
                                        <Link className="mega-menu-link" to="/service/lead-management">Lead Management (CRM)</Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-12" id="mega-menu-item-text-12">
                                        <div className="textwidget">
                                          <p>Convert leads into patients with an automation technology that nurtures and educates prospects about your practice and services.</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-row" id="mega-menu-31-2">
                                <ul className="mega-sub-menu">
                                  <li className="mega-menu-column mega-menu-columns-5-of-12" id="mega-menu-31-2-0">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-13" id="mega-menu-item-media_image-13">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/img/improvement-3.svg`} className="image wp-image-242  attachment-full size-full" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-861" id="mega-menu-item-861">
                                        <Link className="mega-menu-link" to="/service/google-maps-marketing">Google Maps Marketing</Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-17" id="mega-menu-item-text-17">
                                        <div className="textwidget">
                                          <p>Position your medical practice in Google Maps for people searching local clinics for medical wellness providers.</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-column mega-menu-columns-7-of-12" id="mega-menu-31-2-1">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-16" id="mega-menu-item-media_image-16">
                                        <img width={40} height={40} src={`${process.env.REACT_APP_BASE_URL}/img/icon-reputation-management.png`} className="image wp-image-864  attachment-full size-full" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-862" id="mega-menu-item-862">
                                        <Link className="mega-menu-link" to="/service/digital-reputation-management">Reputation Management</Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-15" id="mega-menu-item-text-15">
                                        <div className="textwidget">
                                          <p>How your medical practice is viewed online is a huge determining factor for success. Let us help you ensure you maintain the respected image that you have worked so hard to build.</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-row" id="mega-menu-31-3">
                                <ul className="mega-sub-menu">
                                  <li className="mega-menu-column mega-menu-columns-5-of-12" id="mega-menu-31-3-0">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-15" id="mega-menu-item-media_image-15">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/img/improvement-4.svg`} className="image wp-image-244  attachment-full size-full" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-863" id="mega-menu-item-863">
                                        <Link className="mega-menu-link" to="/service/google-advertising">Google Paid Advertising</Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-14" id="mega-menu-item-text-14">
                                        <div className="textwidget">
                                          <p>There is no better way to drive interested patients to your practice sooner than Google Ads. Our paid ad strategies can help your practice achieve steady new patient flow.</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-column mega-menu-columns-7-of-12" id="mega-menu-31-3-1"> </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-align-bottom-left mega-menu-flyout mega-menu-item-33" id="mega-menu-item-33"> <a className="mega-menu-link" href="#" tabIndex={0}>Our Method</a> </li>
                          <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-align-bottom-left mega-menu-flyout mega-menu-item-372" id="mega-menu-item-372"> <Link to="/about-us" className="mega-menu-link" aria-expanded="false" tabIndex={0}>About Us<span className="mega-indicator"> </span> </Link>
                            <ul className="mega-sub-menu">
                              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-409" id="mega-menu-item-409"> <Link className="mega-menu-link" to="/our-team">Our
                                Team</Link> </li>
                              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-408" id="mega-menu-item-408"> <Link className="mega-menu-link" to="/event">Events</Link>
                              </li>
                              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-408" id="mega-menu-item-407"> <Link className="mega-menu-link" to="/webinars">Webinars</Link>
                              </li>
                            </ul>
                          </li>
                          {/* <li className="mega-cus_header_call_text mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-align-bottom-left mega-menu-flyout mega-hide-on-mobile mega-disable-link mega-menu-item-494 cus_header_call_text" id="mega-menu-item-494"> <a className="mega-menu-link" tabIndex={0}>Call Text</a> </li> */}
                          <li className="mega-is_hide mega-btn-get-started mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-align-bottom-left mega-menu-flyout mega-menu-item-222 is_hide btn-get-started" id="mega-menu-item-222"> <a className="mega-menu-link" href="#" tabIndex={0}>Get Started</a> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-html-1" data-section="section-hb-html-1">
                    <div className="ast-header-html inner-link-style-">
                      <div className="ast-builder-html-element">
                        <div className="header-call ast-flex flex-column">
                          <div className="call-text">Have Questions?</div>
                          <p> <a href="tel:+18004017046">Call (800) 401-7046</a> </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-button-1" data-section="section-hb-button-1">
                    <div className="ast-builder-button-wrap ast-builder-button-size-default"> <a className="ast-custom-button-link" href="#" target="_self">
                      <div className="ast-custom-button">Get Started</div>
                    </a> <a className="menu-link" href="#" target="_self">Get Started</a> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ast-mobile-header" className="ast-mobile-header-wrap " data-type="dropdown">
        <div className="ast-main-header-wrap main-header-bar-wrap">
          <div className="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default" data-section="section-transparent-header">
            <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
              <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                <div className="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
                  <div className="site-branding ast-site-identity">
                    <span className="site-logo-img">
                      <a href="#" className="custom-logo-link" rel="home" aria-current="page">
                        <img width={250} height={72} src={`${process.env.REACT_APP_BASE_URL}/img/logo-1.png`} className="custom-logo" alt="MD Marketing Agency" decoding="async" />
                      </a> </span>
                  </div>
                </div>
              </div>
              <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                <div className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-html-2" data-section="section-hb-html-2">
                  <div className="ast-header-html inner-link-style-">
                    <div className="ast-builder-html-element">
                      <p> <a href="tel:8004017046" className="m-btn-call"> <button type="button" className="btn-call"> </button> </a> </p>
                    </div>
                  </div>
                </div>
                <div className="ast-builder-layout-element ast-flex site-header-focus-item" data-section="section-header-mobile-trigger">
                  <div className="ast-button-wrap">
                    <button type="button" className="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-minimal" aria-expanded="false">
                      <span className="screen-reader-text">Main Menu</span>
                      <span className="mobile-menu-toggle-icon">
                        <span aria-hidden="true" className="ahfb-svg-iconset ast-inline-flex svg-baseline"> <svg className="ast-mobile-svg ast-menu-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                          <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z">
                          </path>
                        </svg> </span> <span aria-hidden="true" className="ahfb-svg-iconset ast-inline-flex svg-baseline"> <svg className="ast-mobile-svg ast-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                          <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z">
                          </path>
                        </svg> </span> </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ast-mobile-header-content content-align-flex-start ">
          <div className="ast-builder-menu-mobile ast-builder-menu ast-builder-menu-mobile-focus-item ast-builder-layout-element site-header-focus-item" data-section="section-header-mobile-menu">
            <div className="ast-main-header-bar-alignment">
              <div className="main-header-bar-navigation">
                <nav className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" id="ast-mobile-site-navigation" aria-label="Site Navigation: Primary Menu">
                  <div className="main-navigation">
                    <ul id="ast-hf-mobile-menu" className="main-header-menu ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile ast-mega-menu-enabled">
                      <li id="menu-item-30" className="two-column max-w-560 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-30">
                        <a aria-expanded="false" href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg> </span> <span className="menu-text">Who We Help</span> <span role="application" className="dropdown-menu-toggle ast-header-navigation-arrow" tabIndex={0} aria-expanded="false" aria-label="Menu Toggle">
                            <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> </span> </a> <button className="ast-menu-toggle" aria-expanded="false"> <span className="screen-reader-text">Menu
                              Toggle</span> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                              </svg> </span> </button>
                        <ul className="sub-menu">
                          <li id="menu-item-35" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-35">
                            <a href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> <span className="menu-text">Medical Wellness
                              Clinic</span> </a>
                          </li>
                          <li id="menu-item-208" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-208">
                            <a href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> <span className="menu-text">Med Spa
                              Marketing</span> </a>
                          </li>
                          <li id="menu-item-209" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-209">
                            <a href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> <span className="menu-text">Men’s Health
                              Clinic</span> </a>
                          </li>
                          <li id="menu-item-210" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-210">
                            <a href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> <span className="menu-text">Hormone
                              Clinic</span> </a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-31" className="full-w-columns menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-31">
                        <a aria-expanded="false" href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg> </span> <span className="menu-text">Our Services</span> <span role="application" className="dropdown-menu-toggle ast-header-navigation-arrow" tabIndex={0} aria-expanded="false" aria-label="Menu Toggle">
                            <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> </span> </a> <button className="ast-menu-toggle" aria-expanded="false"> <span className="screen-reader-text">Menu
                              Toggle</span> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                              </svg> </span> </button>
                        <ul className="sub-menu">
                          <li id="menu-item-857" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-857">
                            <a href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> <span className="menu-text">Website
                              Development</span> </a>
                          </li>
                          <li id="menu-item-858" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-858">
                            <a href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> <span className="menu-text">Facebook
                              Advertising</span> </a>
                          </li>
                          <li id="menu-item-859" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-859">
                            <a href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> <span className="menu-text">Search Engine
                              Marketing</span> </a>
                          </li>
                          <li id="menu-item-860" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-860">
                            <a href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> <span className="menu-text">Lead Management
                              (CRM)</span> </a>
                          </li>
                          <li id="menu-item-861" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-861">
                            <a href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> <span className="menu-text">Google Maps
                              Marketing</span> </a>
                          </li>
                          <li id="menu-item-862" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-862">
                            <a href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> <span className="menu-text">Reputation
                              Management</span> </a>
                          </li>
                          <li id="menu-item-863" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-863">
                            <a href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> <span className="menu-text">Google Paid
                              Advertising</span> </a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-33" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-33">
                        <a href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg> </span> <span className="menu-text">Our Method</span> </a>
                      </li>
                      <li id="menu-item-372" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-372">
                        <a aria-expanded="false" href="#" className="menu-link">
                          <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                          </svg> </span> <span className="menu-text">About Us</span> <span role="application" className="dropdown-menu-toggle ast-header-navigation-arrow" tabIndex={0} aria-expanded="false" aria-label="Menu Toggle">
                            <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> </span> </a> <button className="ast-menu-toggle" aria-expanded="false"> <span className="screen-reader-text">Menu
                              Toggle</span> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                              </svg> </span></button>
                        <ul className="sub-menu">
                          <li id="menu-item-409" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-409">
                            <Link to="/our-team" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> <span className="menu-text">Our Team</span>
                            </Link>
                          </li>
                          <li id="menu-item-408" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-408">
                            <Link to="/event" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg> </span> <span className="menu-text">Events</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-494" className="cus_header_call_text menu-item menu-item-type-custom menu-item-object-custom menu-item-494">
                        <a href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg> </span> <span className="menu-text">Call Text</span> </a>
                      </li>
                      <li id="menu-item-222" className="is_hide btn-get-started menu-item menu-item-type-custom menu-item-object-custom menu-item-222">
                        <a href="#" className="menu-link"> <span className="ast-icon icon-arrow"> <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg> </span> <span className="menu-text">Get Started</span> </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

import * as React from "react"
import "./styles.scss"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const Header = () => {
  React.useEffect(() => {
    const menuTriggers = document.querySelectorAll(".mega-menu-item");

    menuTriggers.forEach((menuTrigger) => {
      const handleMouseEnter = () => {
        menuTrigger.classList.add("mega-toggle-on");
      };

      const handleMouseLeave = () => {
        menuTrigger.classList.remove("mega-toggle-on");
      };

      menuTrigger.addEventListener("mouseenter", handleMouseEnter);
      menuTrigger.addEventListener("mouseleave", handleMouseLeave);

      // Lưu lại các hàm để cleanup sau
      menuTrigger._handleMouseEnter = handleMouseEnter;
      menuTrigger._handleMouseLeave = handleMouseLeave;
    });

    return () => {
      menuTriggers.forEach((menuTrigger) => {
        menuTrigger.removeEventListener("mouseenter", menuTrigger._handleMouseEnter);
        menuTrigger.removeEventListener("mouseleave", menuTrigger._handleMouseLeave);
      });
    };
  }, []);

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
        menuItems(where: {location: PRIMARY}) {
          nodes {
            uri
            title
            url
            path
            id
            cssClasses
            label
            locations
            menuItemId
            parentDatabaseId
            childItems {
              nodes {
                label
                id
                uri
              }
            }
          }
        }
      }
    }
  `);
  const content = data.cms.themeSettings
  const menu = data.cms.menuItems
  return (
    <header className="site-header header-main-layout-1 ast-primary-menu-enabled ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline" id="masthead" itemType="https://schema.org/WPHeader" itemScope="itemscope" itemID="#masthead">
      <div id="ast-desktop-header" data-toggle-type="dropdown">
        <div className="ast-main-header-wrap main-header-bar-wrap ">
          <div className="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item" data-section="section-primary-header-builder">
            <div className="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container" data-section="section-primary-header-builder">
              <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                  <div className="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
                    <div className="site-branding ast-site-identity" itemType="https://schema.org/Organization" itemScope="itemscope">
                      <span className="site-logo-img">
                        <Link className="custom-logo-link" to="/" rel="home">
                          <img width={250} height={72} src={content?.themeOptionsSettings?.defaultLogo?.node?.sourceUrl} className="custom-logo" alt="MD Marketing Agency" decoding="async" srcSet="https://www.wellnessclinicmarketing.com/wp-content/uploads/2025/03/logo-head-250x72.png 250w, https://www.wellnessclinicmarketing.com/wp-content/uploads/2025/03/logo-head-300x87.png 300w, https://www.wellnessclinicmarketing.com/wp-content/uploads/2025/03/logo-head-1024x296.png 1024w, https://www.wellnessclinicmarketing.com/wp-content/uploads/2025/03/logo-head-768x222.png 768w, https://www.wellnessclinicmarketing.com/wp-content/uploads/2025/03/logo-head.png 1038w" sizes="(max-width: 250px) 100vw, 250px" />
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
                          <div className="mega-toggle-blocks-left" />
                          <div className="mega-toggle-blocks-center" />
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
                        <ul id="mega-menu-primary" className="mega-menu max-mega-menu mega-menu-horizontal" data-event="hover_intent" data-effect="fade_up" data-effect-speed={200} data-effect-mobile="disabled" data-effect-speed-mobile={0} data-mobile-force-width="false" data-second-click="go" data-document-click="collapse" data-vertical-behaviour="standard" data-breakpoint={768} data-unbind="true" data-mobile-state="collapse_all" data-mobile-direction="vertical" data-hover-intent-timeout={300} data-hover-intent-interval={100}>
                          <li className="mega-full-w-columns mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-menu-grid mega-align-bottom-left mega-menu-grid mega-menu-item-31 full-w-columns" id="mega-menu-item-31">
                            <a className="mega-menu-link" href="#" aria-expanded="false" tabIndex={0}>
                              Services
                              <span className="mega-indicator" aria-hidden="true"> </span>
                            </a>
                            <ul className="mega-sub-menu" role="presentation">
                              <li className="mega-menu-row" id="mega-menu-31-0">
                                <ul className="mega-sub-menu" style={{ "--columns": "12" }} role="presentation">
                                  <li className="mega-menu-column mega-menu-columns-6-of-12" style={{ "--span": "6" }} id="mega-menu-31-0-0">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-8" id="mega-menu-item-media_image-8">
                                        <img src="https://www.wellnessclinicmarketing.com/wp-content/uploads/2024/11/improvement-1.svg" className="image wp-image-238 attachment-full size-full" alt style={{ "max-width": "100%", "height": "auto" }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-857" id="mega-menu-item-857">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/website-development`}>
                                          Website Development
                                        </Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-9" id="mega-menu-item-text-9">
                                        <div className="textwidget">
                                          <p>
                                            Custom-built websites designed to attract, convert,
                                            and educate high-ticket wellness patients.
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-column mega-menu-columns-6-of-12" style={{ "--span": "6" }} id="mega-menu-31-0-1">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-9" id="mega-menu-item-media_image-9">
                                        <img src="https://www.wellnessclinicmarketing.com/wp-content/uploads/2024/11/improvement-5.svg" className="image wp-image-239 attachment-full size-full" alt style={{ "max-width": "100%", "height": "auto" }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-858" id="mega-menu-item-858">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/facebook-advertising`}>
                                          Facebook Advertising
                                        </Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-10" id="mega-menu-item-text-10">
                                        <div className="textwidget">
                                          <p>
                                            Targeted Facebook ads that drive new patient leads
                                            for aesthetics, HRT, and weight loss.
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-row" id="mega-menu-31-1">
                                <ul className="mega-sub-menu" style={{ "--columns": "12" }} role="presentation">
                                  <li className="mega-menu-column mega-menu-columns-6-of-12" style={{ "--span": "6" }} id="mega-menu-31-1-0">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-11" id="mega-menu-item-media_image-11">
                                        <img src="https://www.wellnessclinicmarketing.com/wp-content/uploads/2024/11/improvement-2.svg" className="image wp-image-240 attachment-full size-full" alt style={{ "max-width": "100%", "height": "auto" }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-859" id="mega-menu-item-859">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/search-engine-optimization`}>
                                          Search Engine Marketing
                                        </Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-11" id="mega-menu-item-text-11">
                                        <div className="textwidget">
                                          <p>
                                            Top Google rankings for keywords your ideal patients
                                            are already searching.
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-column mega-menu-columns-6-of-12" style={{ "--span": "6" }} id="mega-menu-31-1-1">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-12" id="mega-menu-item-media_image-12">
                                        <img src="https://www.wellnessclinicmarketing.com/wp-content/uploads/2024/11/improvement-6.svg" className="image wp-image-241 attachment-full size-full" alt style={{ "max-width": "100%", "height": "auto" }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-860" id="mega-menu-item-860">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/lead-management`}>
                                          Lead Management (CRM)
                                        </Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-12" id="mega-menu-item-text-12">
                                        <div className="textwidget">
                                          <p>
                                            Automated tools to capture, nurture, and convert
                                            leads into booked appointments.
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-row" id="mega-menu-31-2">
                                <ul className="mega-sub-menu" style={{ "--columns": "12" }} role="presentation">
                                  <li className="mega-menu-column mega-menu-columns-6-of-12" style={{ "--span": "6" }} id="mega-menu-31-2-0">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-13" id="mega-menu-item-media_image-13">
                                        <img src="https://www.wellnessclinicmarketing.com/wp-content/uploads/2024/11/improvement-3.svg" className="image wp-image-242 attachment-full size-full" alt style={{ "max-width": "100%", "height": "auto" }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-861" id="mega-menu-item-861">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/google-maps-marketing`}>
                                          Google Maps Marketing
                                        </Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-17" id="mega-menu-item-text-17">
                                        <div className="textwidget">
                                          <p>
                                            Rank higher locally and get found by patients
                                            searching in your area.
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-column mega-menu-columns-6-of-12" style={{ "--span": "6" }} id="mega-menu-31-2-1">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-16" id="mega-menu-item-media_image-16">
                                        <img width={40} height={40} src="https://www.wellnessclinicmarketing.com/wp-content/uploads/2024/12/icon-reputation-management.png" className="image wp-image-864 attachment-full size-full" alt style={{ "max-width": "100%", "height": "auto" }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-862" id="mega-menu-item-862">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/reputation-management`}>
                                          Reputation Management
                                        </Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-15" id="mega-menu-item-text-15">
                                        <div className="textwidget">
                                          <p>
                                            Build trust online with automated review requests
                                            and 5-star reputation strategies.
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-row" id="mega-menu-31-3">
                                <ul className="mega-sub-menu" style={{ "--columns": "12" }} role="presentation">
                                  <li className="mega-menu-column mega-menu-columns-6-of-12" style={{ "--span": "6" }} id="mega-menu-31-3-0">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-15" id="mega-menu-item-media_image-15">
                                        <img src="https://www.wellnessclinicmarketing.com/wp-content/uploads/2024/11/improvement-4.svg" className="image wp-image-244 attachment-full size-full" alt style={{ "max-width": "100%", "height": "auto" }} decoding="async" />
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-863" id="mega-menu-item-863">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/google-advertising`}>
                                          Google Paid Advertising
                                        </Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-14" id="mega-menu-item-text-14">
                                        <div className="textwidget">
                                          <p>
                                            High-converting Google Ads campaigns tailored to
                                            cash-pay medical wellness practices.
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-column mega-menu-columns-6-of-12" style={{ "--span": "6" }} id="mega-menu-31-3-1" />
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-menu-grid mega-align-bottom-left mega-menu-grid mega-menu-item-1641" id="mega-menu-item-1641">
                            <a className="mega-menu-link" href="#" aria-expanded="false" tabIndex={0}>
                              Expertise
                              <span className="mega-indicator" aria-hidden="true"> </span>
                            </a>
                            <ul className="mega-sub-menu" role="presentation">
                              <li className="mega-menu-row mega-menu-cols2-style menu-cols2-style" id="mega-menu-1641-0">
                                <ul className="mega-sub-menu" style={{ "--columns": "12" }} role="presentation">
                                  <li className="mega-menu-column mega-menu-columns-6-of-12 mega-hide-on-mobile" style={{ "--span": "6" }} id="mega-menu-1641-0-0">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-1642" id="mega-menu-item-1642">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/aesthetic-marketing`}>
                                          Aesthetics Marketing
                                        </Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-2030" id="mega-menu-item-2030">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/anti-aging-marketing`}>
                                          Anti-Aging Marketing
                                        </Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-1644" id="mega-menu-item-1644">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/medical-weight-loss-marketing`}>
                                          Medical Weight Loss Marketing
                                        </Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-1645" id="mega-menu-item-1645">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/sexual-health-marketing`}>
                                          Sexual Health Marketing
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-column mega-menu-columns-6-of-12 mega-hide-on-mobile" style={{ "--span": "6" }} id="mega-menu-1641-0-1">
                                    <ul className="mega-sub-menu">
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-1643" id="mega-menu-item-1643">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/hormone-clinic-marketing`}>
                                          Hormone Optimization Marketing
                                        </Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-2031" id="mega-menu-item-2031">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/wellness-medical-clinic-marketing`}>
                                          Medical Wellness Clinic Marketing
                                        </Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-2032" id="mega-menu-item-2032">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/mens-health-clinic-marketing`}>
                                          Men’s Health Clinic Marketing
                                        </Link>
                                      </li>
                                      <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-service mega-menu-item-2033" id="mega-menu-item-2033">
                                        <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/service/med-spa-marketing`}>
                                          Med Spa Marketing
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-2155" id="mega-menu-item-2155">
                            <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/our-method-mars`} tabIndex={0}>
                              Method
                            </Link>
                          </li>
                          <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-align-bottom-left mega-menu-flyout mega-menu-item-372" id="mega-menu-item-372">
                            <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/about-us`} aria-expanded="false" tabIndex={0}>
                              About Us
                              <span className="mega-indicator" aria-hidden="true"> </span>
                            </Link>
                            <ul className="mega-sub-menu">
                              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-409" id="mega-menu-item-409">
                                <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/our-team`}>
                                  Our Team
                                </Link>
                              </li>
                              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-408" id="mega-menu-item-408">
                                <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/events`}>
                                  Events
                                </Link>
                              </li>
                              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-941" id="mega-menu-item-941">
                                <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/webinars`}>
                                  Webinars
                                </Link>
                              </li>
                              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-942" id="mega-menu-item-942">
                                <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/podcast`}>
                                  Podcasts
                                </Link>
                              </li>
                              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-1263" id="mega-menu-item-1263">
                                <Link className="mega-menu-link" href={`${process.env.REACT_APP_BASE_URL}/blogs`}>
                                  Blogs
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-hide-mobile mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-align-bottom-left mega-menu-flyout mega-menu-item-2177 hide-mobile" id="mega-menu-item-2177">
                            <div className="header-call ast-flex flex-column">
                              <div className="call-text">Have Questions?</div>
                              <a href="tel:+18004017046"> Call (800) 401-7046 </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-html-1" data-section="section-hb-html-1">
                    <div className="ast-header-html inner-link-style-">
                      <div className="ast-builder-html-element">
                        <div className="header-call ast-flex flex-column">
                          <div className="call-text">Have Questions?</div>
                          <p>
                            <a href="tel:+18004017046"> Call&nbsp;(800) 401-7046 </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-button-1" data-section="section-hb-button-1">
                    <div className="ast-builder-button-wrap ast-builder-button-size-default">
                      <Link className="ast-custom-button-link" href={`${process.env.REACT_APP_BASE_URL}/get-started`} target="_self">
                        <div className="ast-custom-button">Get Started</div>
                      </Link>
                      <Link className="menu-link" href={`${process.env.REACT_APP_BASE_URL}/get-started`} target="_self">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ast-mobile-header" className="ast-mobile-header-wrap " data-type="dropdown">
        <div className="ast-above-header-wrap ">
          <div className="ast-above-header-bar ast-above-header site-above-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default" data-section="section-above-header-builder">
            <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
              <div className="site-header-above-section-left site-header-section ast-flex site-header-section-left">
                <div className="ast-builder-layout-element site-header-focus-item ast-header-button-2" data-section="section-hb-button-2">
                  <div className="ast-builder-button-wrap ast-builder-button-size-default">
                    <a className="ast-custom-button-link" href="tel:+18004017046" target="_self">
                      <div className="ast-custom-button">Call (800) 401-7046</div>
                    </a>
                    <a className="menu-link" href="tel:+18004017046" target="_self">Call (800) 401-7046</a>
                  </div>
                </div>
              </div>
              <div className="site-header-above-section-right site-header-section ast-flex ast-grid-right-section">
                <div className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-button-1" data-section="section-hb-button-1">
                  <div className="ast-builder-button-wrap ast-builder-button-size-default">
                    <a className="ast-custom-button-link" href="https://www.wellnessclinicmarketing.com/get-started-b/" target="_self">
                      <div className="ast-custom-button">Get Started</div>
                    </a>
                    <a className="menu-link" href="https://www.wellnessclinicmarketing.com/get-started-b/" target="_self">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ast-main-header-wrap main-header-bar-wrap">
          <div className="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default" data-section="section-transparent-header">
            <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
              <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                <div className="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
                  <div className="site-branding ast-site-identity" itemType="https://schema.org/Organization" itemScope="itemscope">
                    <span className="site-logo-img">
                      <Link className="custom-logo-link" to="/" rel="home">
                        <img width={250} height={72} src={content?.themeOptionsSettings?.defaultLogo?.node?.sourceUrl} className="custom-logo" alt="MD Marketing Agency" decoding="async" srcSet="https://www.wellnessclinicmarketing.com/wp-content/uploads/2025/03/logo-head-250x72.png 250w, https://www.wellnessclinicmarketing.com/wp-content/uploads/2025/03/logo-head-300x87.png 300w, https://www.wellnessclinicmarketing.com/wp-content/uploads/2025/03/logo-head-1024x296.png 1024w, https://www.wellnessclinicmarketing.com/wp-content/uploads/2025/03/logo-head-768x222.png 768w, https://www.wellnessclinicmarketing.com/wp-content/uploads/2025/03/logo-head.png 1038w" sizes="(max-width: 250px) 100vw, 250px" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                <div className="ast-builder-layout-element ast-flex site-header-focus-item" data-section="section-header-mobile-trigger">
                  <div className="ast-button-wrap">
                    <button type="button" className="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-minimal" aria-expanded="false">
                      <span className="screen-reader-text">Main Menu</span>
                      <span className="mobile-menu-toggle-icon">
                        <span aria-hidden="true" className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                          <svg className="ast-mobile-svg ast-menu-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z" /></svg></span><span aria-hidden="true" className="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg className="ast-mobile-svg ast-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" /></svg>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="ast-mobile-header-content content-align-flex-start ">
          <div className="ast-builder-menu-mobile ast-builder-menu ast-builder-menu-mobile-focus-item ast-builder-layout-element site-header-focus-item" data-section="section-header-mobile-menu">
            <div className="ast-main-header-bar-alignment"><div className="main-header-bar-navigation">
              <nav className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" id="ast-mobile-site-navigation" aria-label="Site Navigation: Primary Menu" itemType="https://schema.org/SiteNavigationElement" itemScope="itemscope">
                <div className="main-navigation">
                  <ul id="ast-hf-mobile-menu" className="main-header-menu ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile ast-mega-menu-enabled">
                    <li id="menu-item-31" className="full-w-columns menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-31">
                      <a aria-expanded="false" href="#" className="menu-link"><span className="ast-icon icon-arrow">
                        <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg>
                      </span>
                        <span className="menu-text">Services</span>
                        <span role="application" className="dropdown-menu-toggle ast-header-navigation-arrow" tabIndex={0} aria-expanded="false" aria-label="Menu Toggle"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg>
                        </span>
                        </span>
                      </a>
                      <button className="ast-menu-toggle" aria-expanded="false">
                        <span className="screen-reader-text">Menu Toggle</span><span className="ast-icon icon-arrow">
                          <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                          </svg></span></button>
                      <ul className="sub-menu">
                        <li id="menu-item-857" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-857"><a href="https://www.wellnessclinicmarketing.com/service/website-development/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Website Development</span></a></li>	<li id="menu-item-858" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-858"><a href="https://www.wellnessclinicmarketing.com/service/facebook-advertising/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Facebook Advertising</span></a></li>	<li id="menu-item-859" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-859"><a href="https://www.wellnessclinicmarketing.com/service/search-engine-optimization/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Search Engine Marketing</span></a></li>	<li id="menu-item-860" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-860"><a href="https://www.wellnessclinicmarketing.com/service/lead-management/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Lead Management (CRM)</span></a></li>	<li id="menu-item-861" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-861"><a href="https://www.wellnessclinicmarketing.com/service/google-maps-marketing/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Google Maps Marketing</span></a></li>	<li id="menu-item-862" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-862"><a href="https://www.wellnessclinicmarketing.com/service/reputation-management/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Reputation Management</span></a></li>	<li id="menu-item-863" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-863"><a href="https://www.wellnessclinicmarketing.com/service/google-advertising/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Google Paid Advertising</span></a></li></ul>
                    </li><li id="menu-item-1641" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1641"><a aria-expanded="false" href="#" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                    </svg></span><span className="menu-text">Expertise</span><span role="application" className="dropdown-menu-toggle ast-header-navigation-arrow" tabIndex={0} aria-expanded="false" aria-label="Menu Toggle"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                    </svg></span></span></a><button className="ast-menu-toggle" aria-expanded="false"><span className="screen-reader-text">Menu Toggle</span><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                    </svg></span></button>
                      <ul className="sub-menu">
                        <li id="menu-item-1642" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-1642"><a href="https://www.wellnessclinicmarketing.com/service/aesthetic-marketing/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Aesthetics Marketing</span></a></li>	<li id="menu-item-2030" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2030"><a href="https://www.wellnessclinicmarketing.com/service/anti-aging-marketing/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Anti-Aging Marketing</span></a></li>	<li id="menu-item-1644" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-1644"><a href="https://www.wellnessclinicmarketing.com/service/medical-weight-loss-marketing/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Medical Weight Loss Marketing</span></a></li>	<li id="menu-item-1645" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-1645"><a href="https://www.wellnessclinicmarketing.com/service/sexual-health-marketing/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Sexual Health Marketing</span></a></li>	<li id="menu-item-1643" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-1643"><a href="https://www.wellnessclinicmarketing.com/service/hormone-clinic-marketing/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Hormone Optimization Marketing</span></a></li>	<li id="menu-item-2031" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2031"><a href="https://www.wellnessclinicmarketing.com/service/wellness-medical-clinic-marketing/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Medical Wellness Clinic Marketing</span></a></li>	<li id="menu-item-2032" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2032"><a href="https://www.wellnessclinicmarketing.com/service/mens-health-clinic-marketing/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Men’s Health Clinic Marketing</span></a></li>	<li id="menu-item-2033" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2033"><a href="https://www.wellnessclinicmarketing.com/service/med-spa-marketing/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Med Spa Marketing</span></a></li></ul>
                    </li><li id="menu-item-2155" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2155"><a href="https://www.wellnessclinicmarketing.com/our-method-mars/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                    </svg></span><span className="menu-text">Method</span></a></li><li id="menu-item-372" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-372"><a aria-expanded="false" href="https://www.wellnessclinicmarketing.com/about-us/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                    </svg></span><span className="menu-text">About Us</span><span role="application" className="dropdown-menu-toggle ast-header-navigation-arrow" tabIndex={0} aria-expanded="false" aria-label="Menu Toggle"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                    </svg></span></span></a><button className="ast-menu-toggle" aria-expanded="false"><span className="screen-reader-text">Menu Toggle</span><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                    </svg></span></button>
                      <ul className="sub-menu">
                        <li id="menu-item-409" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-409"><a href="https://www.wellnessclinicmarketing.com/our-team/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Our Team</span></a></li>	<li id="menu-item-408" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-408"><a href="https://www.wellnessclinicmarketing.com/events/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Events</span></a></li>	<li id="menu-item-941" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-941"><a href="https://www.wellnessclinicmarketing.com/webinars/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Webinars</span></a></li>	<li id="menu-item-942" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-921 current_page_item menu-item-942"><a href="https://www.wellnessclinicmarketing.com/podcast/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Podcasts</span></a></li>	<li id="menu-item-1263" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1263"><a href="https://www.wellnessclinicmarketing.com/blogs/" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg></span><span className="menu-text">Blogs</span></a></li></ul>
                    </li><li id="menu-item-2177" className="hide-mobile menu-item menu-item-type-custom menu-item-object-custom menu-item-2177"><a href="#" className="menu-link"><span className="ast-icon icon-arrow"><svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enableBackground="new 57 35.171 26 16.043" xmlSpace="preserve">
                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                    </svg></span><span className="menu-text">Call Text</span></a></li></ul></div></nav></div></div>		</div>
        </div> */}
      </div>
    </header>
  )
}

export default Header

import * as React from "react"
// import "./styles.scss"

const Footer = () => {
  return (
    <>
      <footer className="site-footer" id="colophon">
        <div
          className="site-primary-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-3-equal ast-builder-grid-row-tablet-3-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack"
          data-section="section-primary-footer-builder"
        >
          <div className="ast-builder-grid-row-container-inner">
            <div className="ast-builder-footer-grid-columns site-primary-footer-inner-wrap ast-builder-grid-row">
              <div className="site-footer-primary-section-1 site-footer-section site-footer-section-1">
                <aside
                  className="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner"
                  data-section="sidebar-widgets-footer-widget-2"
                  aria-label="Footer Widget 2"
                >
                  <section id="media_image-3" className="widget widget_media_image">

                    <a href="#">

                      <img
                        width={210}
                        height={60}
                        src={`${process.env.REACT_APP_BASE_URL}/img/footer-logo.png`}
                        className="image wp-image-50  attachment-full size-full"
                        alt=""
                        style={{ maxWidth: "100%", height: "auto" }}
                        decoding="async"
                        loading="lazy"
                      />
                    </a>
                  </section>
                  <section id="text-3" className="widget widget_text">
                    <div className="textwidget">
                      <p>
                        The Complete Patient Acquisition Solution For Cash-Based
                        Medical Practices Offering Sexual Wellness and Hormones
                        Optimization Services
                      </p>
                    </div>
                  </section>
                </aside>
              </div>
              <div className="site-footer-primary-section-2 site-footer-section site-footer-section-2">
                <aside
                  className="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner"
                  data-section="sidebar-widgets-footer-widget-3"
                  aria-label="Footer Widget 3"
                >
                  <section id="text-5" className="widget widget_text">
                    <h2 className="widget-title">Working Hours</h2>
                    <div className="textwidget">
                      <div className="schedule">
                        <div className="item">
                          <div className="day">Monday to Friday</div>
                          <div className="time">10:00am-6:00pm</div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="text-6" className="widget widget_text">
                    <h2 className="widget-title">Connect with Us</h2>
                    <div className="textwidget">
                      <div className="ast-flex socials">
                        <a
                          className="fb"
                          href="https://www.facebook.com/medicalwellnessmarketing"
                          target="_blank"
                        >

                          <img
                            decoding="async"
                            src={`${process.env.REACT_APP_BASE_URL}/img/socials/icon-fb.svg`}
                            alt=""
                          />
                        </a>
                        <a
                          className="youtube"
                          href="https://www.youtube.com/@wellnessclinicmarketing6974"
                          target="_blank"
                        >

                          <img
                            decoding="async"
                            src={`${process.env.REACT_APP_BASE_URL}/img/socials/icon-youtube.svg`}
                            alt=""
                          />
                        </a>
                        <a className="twitter" href="javascript://" target="_blank">

                          <img
                            decoding="async"
                            src={`${process.env.REACT_APP_BASE_URL}/img/socials/icon-twitter.svg`}
                            alt=""
                          />
                        </a>
                        <a
                          className="instagram"
                          href="https://www.instagram.com/alekseysidorenkov"
                          target="_blank"
                        >

                          <img
                            decoding="async"
                            src={`${process.env.REACT_APP_BASE_URL}/img/socials/icon-ig.svg`}
                            alt=""
                          />
                        </a>
                        <a
                          className="linkedin"
                          href="https://www.linkedin.com/company/medical-marketing-agency/posts/?feedView=all"
                          target="_blank"
                        >

                          <img
                            decoding="async"
                            src={`${process.env.REACT_APP_BASE_URL}/img/socials/icon-linkedin.svg`}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </section>
                </aside>
              </div>
              <div className="site-footer-primary-section-3 site-footer-section site-footer-section-3">
                <aside
                  className="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner"
                  data-section="sidebar-widgets-footer-widget-4"
                  aria-label="Footer Widget 4"
                >
                  <section id="text-7" className="widget widget_text">
                    <h2 className="widget-title">Find Us</h2>
                    <div className="textwidget">
                      <div className="footer-address">

                        <a
                          className="text-underline"
                          href="#"
                          target="_blank"
                          rel="noopener"
                        >
                          1470 Biscayne Blvd, Miami, FL 33132
                        </a>
                      </div>
                    </div>
                  </section>
                  <section id="text-19" className="widget widget_text">
                    <div className="textwidget">
                      <div className="ast-flex gap-20">

                        <a className="btn-bg bg-F2771A btn-size-16 fw-600" href="#">
                          FREE ASSESSMENT
                        </a>
                        <img
                          loading="lazy"
                          decoding="async"
                          className="alignnone size-full wp-image-38"
                          src={`${process.env.REACT_APP_BASE_URL}/img/a4m-logo.png`}
                          alt=""
                          width={62}
                          height={60}
                        />
                      </div>
                    </div>
                  </section>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div
          className="site-below-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-full ast-builder-grid-row-tablet-full ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack"
          data-section="section-below-footer-builder"
        >
          <div className="ast-builder-grid-row-container-inner">
            <div className="ast-builder-footer-grid-columns site-below-footer-inner-wrap ast-builder-grid-row">
              <div className="site-footer-below-section-1 site-footer-section site-footer-section-1">
                <div
                  className="ast-builder-layout-element ast-flex site-footer-focus-item ast-footer-copyright"
                  data-section="section-footer-builder"
                >
                  <div className="ast-footer-copyright">
                    <p>
                      © 2025 All rights reserved | MD Marketing Agency |
                      <a href="#" target="_self">
                        Privacy Policy
                      </a>
                      |
                      <a href="#" target="_self">
                        Contact Us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer

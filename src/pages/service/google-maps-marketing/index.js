import React from "react"
import Layout from "../../../components/layout"
import FaqItem from '../../../components/FaqItem'
import './styles.scss';

const GoogleMapMarketing = () => {

  return (
    <Layout>
      <div className="hfeed site" id="page">
        <div id="content" className="site-content">
          <div className="main-content">
            <section className="section service-banner" style={{ "background": "no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/uploads/2024/12/google-maps-banner.webp')" }}>
              <style dangerouslySetInnerHTML={{ __html: "\n                        .cols2-banner .ast-container {\n                            z-index: 2;\n                        }\n                        .cols2-banner .ast-container-fluid {\n                            width: 100%;\n                            height: 100%;\n                            top: 0px;\n                        }\n                        .cols2-banner .col-img {\n                            width: 45%;\n                            float: right;\n                        }\n                        .col-banner-wrapper {\n                            justify-content: flex-start;\n                        }\n                        .col-banner-content {\n                            max-width: 718px;\n                        }\n                        .col-banner-content .sep img {\n                            max-width: 624px;\n                        }\n                        @media only screen and (max-width:767px) {\n                            .cols2-banner .ast-container-fluid {\n                                display: none;\n                            }\n                            div.col-banner-content {\n                                max-width: 100%;\n                            }\n                        }\n                        @media only screen and (max-width:1199.98px) {\n                            .col-banner-content .sep img {\n                                max-width: 100%;\n                            }\n                        }\n                        @media only screen and (max-width:1400px) {\n                            .col-banner-content {\n                                max-width: 50%;\n                            }\n                            .cols2-banner .col-img {\n                                width: 40%;\n                            }\n                        }\n                        " }} />
              <div className="cols2-banner position-relative">
                <div className="ast-container position-relative">
                  <div className="banner-wrapper col-banner-wrapper ast-flex">
                    <div className="service-banner-content col-banner-content">
                      <h2 className="sub-title f-soleto fw-700 text-white">Google Maps Marketing for Medical Practices:</h2>
                      <div className="sep"><img src="https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/sep-brush-full.svg" alt /></div>
                      <h1 className="h1-title f-soleto fw-800 text-white mb-0">Get Found Locally</h1>
                      <div className="desc f-soleto fw-500 text-white">Position your medical practice prominently on Google
                        Maps to attract more local patients.
                      </div>
                      <div className="sc-btn">
                        <a href="https://agencysite.bwpsites.com/contact/" target="_self" className="btn-bg bg-F2771A btn-size-26 fw-700">Schedule a Strategy Session</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ast-container-fluid position-absolute">
                  <div className="col-img">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/google-maps.png" alt />
                  </div>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                    .service-about {\n                        padding: 100px 0px;\n                        background: no-repeat bottom/cover #fff url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/bg-mask-2.webp');\n                    }\n                    .service-about .cols-2 {\n                        padding-bottom: 60px;\n                        border-bottom: 2px solid #D4D1D1;\n                        gap: 35px;\n                    }\n                    .service-about .cols-2 figure {\n                        width: 584px;\n                    }\n                    .service-about .cols-2 .col-content {\n                        flex: 1;\n                    }\n                    .title-list {\n                        margin-top: 30px;\n                    }\n                    .col-content p {\n                        color: #000;\n                    }\n                    .circle-list {\n                        gap: 77px calc(100% - (433px * 2));\n                        align-items: stretch;\n                    }\n                    .circle-item {\n                        flex: 0 0 auto;\n                        max-width: 433px;\n                        position: relative;\n                    }\n                    .circle-item:after {\n                        content: \"\";\n                        display: inline-block;\n                        height: 114px;\n                        width: 87px;\n                        position: absolute;\n                    }\n                    .circle-item-3:after,\n                    .circle-item-2:after {\n                        background: no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/arrow-orange.png');\n                    }\n                    .circle-item-1:after,\n                    .circle-item-4:after {\n                    \n                        background: no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/arrow-orange-2.png');\n                    }\n                    .circle-item-1:after {\n                        bottom: 30px;\n                        right: -117px;\n                        transform: rotate(-15deg);\n                    }\n                    .circle-item-2:after {\n                        bottom: 30px;\n                        left: -117px;\n                        transform: rotate(-165deg);\n                    }\n                    .circle-item-3:after {\n                        top: -50px;\n                        right: 0px;\n                    }\n                    .circle-item-4:after {\n                        top: -50px;\n                        left: 0px;\n                        transform: rotate(180deg);\n                    }\n                    .features-google-maps .circle-item-3 {\n                        margin-right: -142px;\n                    }\n                    .features-google-maps .circle-item-4 {\n                        margin-left: -142px;\n                    }\n                    .features-google-maps .circle-item .inner {\n                        justify-content: stretch;\n                    }\n                    .circle-item figure {\n                        width: 100%;\n                        height: 100px;\n                        margin-bottom: 12px;\n                    }\n                    .circle-item--content {\n                        display: flex;\n                        align-items: stretch;\n                        border: 1px dashed #0659A9;\n                        background: #fff;\n                        border-radius: 20px;\n                        padding: 24px 18px;\n                    }\n                    .circle-item h2 {\n                        font-size: 26px;\n                        line-height: 1.24;\n                        margin-bottom: 24px;\n                        color: #000;\n                    }\n                    .circle-item--content .content p {\n                        font-weight: 300;\n                        font-size: 20px;\n                        line-height: 1.5;\n                        color: #000;\n                    }\n                    .sep-curve-line {\n                        text-align: center;\n                        margin: 18px 0px;\n                    }\n                    .item-2 figure {\n                        order: 2;\n                    }\n                    .item-2 .content {\n                        order: 1;\n                    }\n                    .google-maps-about .feature-center {\n                        max-width: 174px;\n                        width: 100%;\n                        height: 174px;\n                        border-radius: 100%;\n                        border: 10px solid #227AD0;\n                        background: #0659A9;\n                        top: 40%;\n                        left: 50%;\n                        transform: translate(-50%, -50%);\n                    }\n                    .feature-center .center {\n                        gap: 4px;\n                    }\n                    .center-title {\n                        font-size: 26px;\n                        line-height: 32px;\n                    }\n                    .center-sub-title {\n                        font-size: 18px;\n                        line-height: 26px;\n                    }\n                    @media only screen and (max-width:767.98px) {\n                        .service-about .cols-2 figure {\n                            width: 100% !important;\n                        }\n                        .feature-center {\n                            display: none;\n                        }\n                        .circle-item:after {\n                            content: none;\n                        }\n                        .circle-list {\n                            gap: 30px;\n                        }\n                        div.circle-item {\n                            max-width: 100% !important;\n                        }\n                    }\n                    @media only screen and (max-width:999.98px) {\n                        .features-google-maps .circle-list {\n                            gap: 30px !important;\n                            justify-content: center !important;\n                        }\n                        .feature-center {\n                            display: none;\n                        }\n                        .circle-item:after {\n                            content: none;\n                        }\n                        .features-google-maps div.circle-item {\n                            max-width: 433px;\n                        }\n                        .features-google-maps div.circle-item-3 {\n                            margin-right: 0px;\n                        }\n                        .features-google-maps div.circle-item-4 {\n                            margin-left: 0px;\n                        }\n                    }\n                    @media only screen and (max-width:1199.98px) {\n                        .service-about .cols-2 figure {\n                            width: 40%;\n                        }\n                    }\n                    @media only screen and (min-width:1000px) and (max-width:1100px) {\n                        .features-google-maps .feature-center {\n                            top: 45% !important;\n                        }\n                        .center-title {\n                            font-size: 20px;\n                            line-height: 1.5;\n                        }\n                        .center-sub-title {\n                            font-size: 16px;\n                            line-height: 1.5;\n                        }\n                        .features-google-maps .circle-item:after {\n                            width: calc(87px * 0.7);\n                            height: calc(114px * 0.7);\n                        }\n                        .features-google-maps div.circle-item {\n                            max-width: 280px;\n                        }\n                        .features-google-maps div.circle-list {\n                            gap: 77px calc(100% - (280px * 2));\n                        }\n                        .features-google-maps .circle-item-3 {\n                            margin-right: -100px;\n                        }\n                        .features-google-maps .circle-item-4 {\n                            margin-left: -100px;\n                        }\n                        div.circle-item-1:after {\n                            bottom: 0px;\n                            right: -92px;\n                        }\n                        div.circle-item-3:after {\n                            right: 0px;\n                            top: -20px;\n                        }\n                        div.circle-item-2:after {\n                            left: -92px;\n                            bottom: 0px;\n                        }\n                        div.circle-item-4:after {\n                            left: 0px;\n                            top: -20px;\n                        }\n                    }\n                    @media only screen and (max-width:1280px) {\n                        .features-google-maps .feature-center {\n                            top: 50%;\n                        }\n                        .features-google-maps .circle-item {\n                            max-width: 360px;\n                        }\n                        .features-google-maps .circle-list {\n                            gap: 77px calc(100% - (360px * 2));\n                        }\n                        .features-google-maps .circle-item-3 {\n                            margin-right: -100px;\n                        }\n                        .features-google-maps .circle-item-4 {\n                            margin-left: -100px;\n                        }\n                        .circle-item-1:after {\n                            right: -110px !important;\n                        }\n                        .circle-item-2:after {\n                            left: -110px !important;\n                        }\n                        .circle-item-3:after {\n                            top: 0px;\n                            right: -30px !important;\n                        }\n                        .circle-item-4:after {\n                            top: 0px;\n                            left: -30px !important;\n                        }\n                    }\n                    @media only screen and (max-width:1366px) {\n                    \n                        .features-google-maps .feature-center {\n                            top: 45% !important;\n                        }\n                        .features-google-maps .circle-item:after {\n                            width: calc(87px * 0.7);\n                            height: calc(114px * 0.7);\n                        }\n                        .circle-item-1:after {\n                            right: -80px;\n                        }\n                        .circle-item-2:after {\n                            left: -80px;\n                        }\n                        .circle-item-3:after {\n                            top: 0px;\n                            right: 30px;\n                        }\n                        .circle-item-4:after {\n                            top: 0px;\n                            left: 30px;\n                        }\n                    }\n                    " }} />
            <section className="section service-about google-maps-about">
              <div className="ast-container">
                <div className="cols-2 ast-flex flex-wrap align-items-center">
                  <figure className="mb-0">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/google-maps-1.png" alt />
                  </figure>
                  <div className="col-content f-soleto fs-22">
                    <p>Google Maps marketing is essential for any medical practice looking to dominate local searches. With
                      the rise of “near me” searches, optimizing your Google My Business profile is one of the most
                      effective ways to attract new patients.</p>
                  </div>
                </div>
                <h2 className="h2-title title-list f-soleto fw-800 color-0659A9 mb-0 text-center">Benefits of Google Maps Marketing
                  <br />for Your Practice:</h2>
                <div className="features features-google-maps position-relative">
                  <div className="list circle-list ast-flex justify-content-center">
                    <div className="circle-item r-circle-1 circle-item-1 ">
                      <div className="inner ast-flex flex-column align-items-center text-center">
                        <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/local-search.png" alt="Instant Visibility" /></figure>
                        <h2 className="f-soleto fw-700">Instant Visibility</h2>
                        <div className="circle-item--content circle-item--content-1">
                          <div className="content f-soleto">
                            <p>Appear at the top of local searches when patients search for medical services near
                              them.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="circle-item r-circle-1 circle-item-2 ">
                      <div className="inner ast-flex flex-column align-items-center text-center">
                        <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/credible.png" alt="Improved Patient Trust" /></figure>
                        <h2 className="f-soleto fw-700">Improved Patient Trust</h2>
                        <div className="circle-item--content circle-item--content-1">
                          <div className="content f-soleto">
                            <p>With visible ratings and reviews, potential patients will see your credibility before
                              making contact.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="circle-item r-circle-2 circle-item-3 ">
                      <div className="inner ast-flex flex-column align-items-center text-center">
                        <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/seo.png" alt="Enhanced SEO" /></figure>
                        <h2 className="f-soleto fw-700">Enhanced SEO</h2>
                        <div className="circle-item--content circle-item--content-2">
                          <div className="content f-soleto">
                            <p>A well-optimized Google My Business listing boosts your overall search engine
                              ranking.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="circle-item r-circle-2 circle-item-4 ">
                      <div className="inner ast-flex flex-column align-items-center text-center">
                        <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/website.png" alt="Centralized Marketing" /></figure>
                        <h2 className="f-soleto fw-700">Centralized Marketing</h2>
                        <div className="circle-item--content circle-item--content-2">
                          <div className="content f-soleto">
                            <p>Google Maps integrates with your other marketing efforts, providing a cohesive online
                              presence.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feature-center position-absolute ast-flex align-items-center justify-content-center">
                    <div className="center ast-flex justify-content-center">
                      <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/icon-address.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                    .service-benefits {\n                        padding: 100px 0px;\n                    }\n                    .service-benefits .h2-title {\n                        margin-bottom: 14px;\n                    }\n                    .benefit-list {\n                        display: flex;\n                        flex-wrap: wrap;\n                        gap: 30px;\n                        margin-top: 60px;\n                    }\n                    .w-box {\n                        width: calc((100% - 60px)/3);\n                    }\n                    .w-box figure {\n                        overflow: hidden;\n                        height: 247px;\n                        border-radius: 20px;\n                    }\n                    .w-box .inner {\n                        gap: 24px;\n                    }\n                    .w-box img {\n                        object-fit: cover;\n                        width: 100%;\n                        height: 100%;\n                    }\n                    .w-box h3 {\n                        margin-bottom: 0px;\n                        font-size: 24px;\n                        line-height: 36px;\n                        margin-bottom: 12px;\n                    }\n                    .service-benefits .bottom-content {\n                        margin-top: 50px;\n                    }\n                    .service-benefits .bottom-content p {\n                        font-size: 24px;\n                        line-height: 36px;\n                    }\n                    .service-benefits .sc-btn {\n                        margin-top: 50px;\n                    }\n                    .service-benefits .sc-btn a {\n                        max-width: 800px;\n                        padding-left: 64px;\n                        padding-right: 64px;\n                    }\n                    .w-100 {\n                        width: 100% !important;\n                    }\n                    @media only screen and (max-width:544px) {\n                        div.w-box {\n                            width: 100% !important;\n                            max-width: 100% !important;\n                        }\n                        .service-benefits .sc-btn a {\n                            padding-left: 20px;\n                            padding-right: 20px;\n                        }\n                    }\n                    @media only screen and (max-width:767px) {\n                        .service-benefits {\n                            padding: 40px 0px;\n                        }\n                        .benefit-list {\n                            flex-direction: column;\n                            align-items: center;\n                        }\n                        div.w-box {\n                            width: 100%;\n                            max-width: 435px;\n                        }\n                        .w-box h3 {\n                            font-size: 18px;\n                            line-height: normal;\n                        }\n                        .service-benefits .sc-btn {\n                            margin-top: 24px;\n                        }\n                    }\n                    @media only screen and (max-width:1199.98px) {\n                        .service-benefits .desc {\n                            font-size: 24px !important;\n                        }\n                        .benefit-list {\n                            gap: 20px;\n                            margin-top: 30px;\n                        }\n                        .w-box {\n                            width: calc((100% - 40px)/3);\n                        }\n                        .w-box figure {\n                            height: auto;\n                        }\n                        .w-box h3 {\n                            margin-bottom: 0px;\n                        }\n                        .w-box h3,\n                        .service-benefits .bottom-content p {\n                            font-size: 20px;\n                            line-height: normal;\n                        }\n                        .service-benefits .desc {\n                            font-size: 18px !important;\n                        }\n                    \n                    }\n                    " }} />
            <section className="section service-benefits" style={{ "background": "no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/uploads/2024/12/bg-sec3-googe-maps.webp')" }}>
              <div className="ast-container">
                <h2 className="h2-title fs-48 f-soletoxbold text-white text-center">Why Google Maps Marketing Matters:</h2>
                <div className="benefit-list">
                  <div className="w-box position-relative ast-flex justify-content-center">
                    <div className="inner ast-flex flex-column text-center">
                      <h3 className="h3-title f-soleto fw-700 text-white">Increased Local <br />Visibility</h3>
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/Increased-Local-Visibility.png" alt="Increased Local <br>Visibility" /></figure>
                      <div className="desc f-soleto fs-22 text-white">Google Maps marketing ensures your practice is easy to
                        find by local patients who are searching for services you offer.
                      </div>
                    </div>
                  </div>
                  <div className="w-box position-relative ast-flex justify-content-center">
                    <div className="inner ast-flex flex-column text-center">
                      <h3 className="h3-title f-soleto fw-700 text-white">Stronger Online <br />Reputation</h3>
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/Stronger-Online-Reputation.png" alt="Stronger Online <br>Reputation" /></figure>
                      <div className="desc f-soleto fs-22 text-white">Google Maps listings prominently display patient
                        reviews, helping you build trust and credibility.
                      </div>
                    </div>
                  </div>
                  <div className="w-box position-relative ast-flex justify-content-center">
                    <div className="inner ast-flex flex-column text-center">
                      <h3 className="h3-title f-soleto fw-700 text-white">Improved SEO and Local <br />Search Rankings</h3>
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/Improved-SEO-and-Local-Search-Rankings.png" alt="Improved SEO and Local <br>Search Rankings" /></figure>
                      <div className="desc f-soleto fs-22 text-white">Your Google Maps profile contributes directly to your
                        overall SEO strategy, driving more traffic to your site.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-content f-soleto text-center text-white">
                </div>
                <div className="sc-btn ast-flex justify-content-center">
                  <a href="https://agencysite.bwpsites.com/contact/" target="_self" className="btn-bg bg-F2771A btn-size-18 fw-700 ">Schedule Your Strategy Session</a>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                    .service-faq {\n                        padding: 100px 0px 120px;\n                        background: no-repeat top center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/bg-faqs.jpg');\n                    }\n                    .faq-list {\n                        display: flex;\n                        flex-direction: column;\n                        gap: 30px;\n                        margin-top: 60px;\n                    }\n                    .faq-item {\n                        cursor: pointer;\n                        padding: 24px 75px 26px 26px;\n                        background: #EAF7FF;\n                        border: 2px solid #D8E7F0;\n                        border-radius: 10px;\n                        transition: 1s linear;\n                        transition-duration: 1s;\n                    }\n                    .faq-item:after {\n                        content: \"\";\n                        display: inline-block;\n                        background: no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/arrow-right-blue.svg');\n                        width: 14px;\n                        height: 26px;\n                        position: absolute;\n                        top: 30px;\n                        right: 25px;\n                        transition-duration: 1s;\n                    }\n                    .faq-item .title {}\n                    .faq-item .content {\n                        display: none;\n                        margin-top: 15px;\n                        height: 0px;\n                    }\n                    .faq-item .content p {\n                        font-family: 'Soleto';\n                        font-size: 20px;\n                        line-height: 32px;\n                        color: #000;\n                    }\n                    .faq-item.active:after {\n                        transform: rotate(90deg);\n                    }\n                    .faq-item.active .content {\n                        display: block;\n                        height: 100%;\n                    }\n                    @media (max-width:767px) {\n                        .service-faq {\n                            padding: 40px 0px;\n                        }\n                        .faq-list {\n                            margin-top: 24px;\n                        }\n                    }\n                    @media (max-width:1199px) {\n                        .service-faq {\n                            padding: 60px 0px;\n                        }\n                    }\n                    " }} />
            <section className="section service-faq">
              <div className="ast-container">
                <h2 className="h2-title f-soleto fw-800 color-0659A9 text-center">FAQ: Google Maps Marketing for Medical Practices
                </h2>
                <div className="faq-list">
                  <FaqItem title="What is Google Maps Marketing?" description="Google Maps Marketing involves optimizing your Google My Business profile to ensure your practice shows up in local search results. This helps prospective patients find you when searching for medical services near them." />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default GoogleMapMarketing

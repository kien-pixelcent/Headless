import React from "react"
import Layout from "../../../components/layout"
import FaqItem from '../../../components/FaqItem'
import './styles.scss';

const SearchEngine = () => {

  return (
    <Layout>
      <div className="hfeed site" id="page">
        <div id="content" className="site-content">
          <div className="main-content">
            <section className="section service-banner" style={{ "background": "no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/uploads/2024/12/search-engine-banner.jpg')" }}>
              <img className="bg-img-left bg-bottom-left" src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/seo1.jpg" alt />
              <img className="bg-img-right bg-bottom-right" src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/seo2.png" alt />
              <div className="ast-container">
                <div className="banner-wrapper banner-wrapper-type-3 ast-flex justify-content-center">
                  <div className="service-banner-content banner-content-3 text-center">
                    <h2 className="sub-title f-soleto fw-700 text-white">Search Engine Optimization (SEO) for Medical Wellness
                      Practices:</h2>
                    <div className="sep"><img src="https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/sep-brush-full.svg" alt /></div>
                    <h1 className="h1-title f-soleto fw-800 text-white mb-0">Rank Higher on Google</h1>
                    <div className="desc f-soleto fw-500 text-white">Ensure your medical practice ranks high on Google for
                      relevant search terms.</div>
                    <div className="sc-btn justify-content-center">
                      <a href="https://agencysite.bwpsites.com/contact/" target="_self" className="btn-bg bg-F2771A btn-size-26 fw-700">Schedule a Strategy Session</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                    .service-about {\n                        padding: 100px 0px;\n                        background: no-repeat bottom/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/bg-service-sec2.jpg');\n                    }\n                    .service-about .cols-2 {\n                        padding-bottom: 60px;\n                        border-bottom: 2px solid #D4D1D1;\n                        gap: 35px;\n                    }\n                    .service-about .cols-2 figure {\n                        width: 584px;\n                    }\n                    .service-about .cols-2 .col-content {\n                        flex: 1;\n                    }\n                    .title-list {\n                        margin-top: 30px;\n                    }\n                    .service-about .list {\n                        margin: 80px 0px 0px;\n                    }\n                    .col-content p {\n                        color: #000;\n                    }\n                    .circle-list {\n                        gap: 115px calc(100% - (433px * 2));\n                        align-items: stretch;\n                    }\n                    .circle-item {\n                        flex: 0 0 auto;\n                        max-width: 433px;\n                        position: relative;\n                    }\n                    .circle-item:after {\n                        content: \"\";\n                        display: inline-block;\n                        width: 103px;\n                        height: 74px;\n                        position: absolute;\n                    }\n                    .circle-item-3:after,\n                    .circle-item-2:after {\n                        background: no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/s-arrow-orange.png');\n                    }\n                    .circle-item-1:after,\n                    .circle-item-4:after {\n                    \n                        background: no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/s-arrow-orange-2.png');\n                    }\n                    .circle-item-1:after {\n                        bottom: 0px;\n                        right: -133px;\n                    }\n                    .circle-item-2:after {\n                        bottom: 0px;\n                        left: -133px;\n                    }\n                    .circle-item-3:after {\n                        top: -74px;\n                        right: 10%;\n                    }\n                    .circle-item-4:after {\n                        top: -74px;\n                        left: 10%;\n                    }\n                    .features-search-engine .circle-item-3 {\n                        margin-right: -180px;\n                    }\n                    .features-search-engine .circle-item-4 {\n                        margin-left: -180px;\n                    }\n                    .features-search-engine .circle-item .inner {\n                        justify-content: stretch;\n                    }\n                    .circle-item figure {\n                        width: 100%;\n                        height: 100px;\n                        margin-bottom: 12px;\n                    }\n                    .circle-item--content {\n                        display: flex;\n                        align-items: stretch;\n                        border: 1px dashed #0659A9;\n                        background: #fff;\n                        border-radius: 20px;\n                        padding: 24px 18px;\n                    }\n                    .circle-item h2 {\n                        font-size: 26px;\n                        line-height: 1.24;\n                        margin-bottom: 24px;\n                        color: #000;\n                    }\n                    .circle-item--content .content p {\n                        font-weight: 300;\n                        font-size: 20px;\n                        line-height: 1.5;\n                        color: #000;\n                    }\n                    .sep-curve-line {\n                        text-align: center;\n                        margin: 18px 0px;\n                    }\n                    .item-2 figure {\n                        order: 2;\n                    }\n                    .item-2 .content {\n                        order: 1;\n                    }\n                    .feature-center {\n                        max-width: 221px;\n                        height: 221px;\n                        border-radius: 100%;\n                        border: 10px solid #227AD0;\n                        background: #0659A9;\n                        top: 40%;\n                        left: 50%;\n                        transform: translate(-50%, -50%);\n                    }\n                    .feature-center .center {\n                        gap: 4px;\n                    }\n                    .center-title {\n                        font-size: 26px;\n                        line-height: 32px;\n                    }\n                    .center-sub-title {\n                        font-size: 18px;\n                        line-height: 26px;\n                    }\n                    @media only screen and (max-width:767.98px) {\n                        .service-about .cols-2 figure {\n                            width: 100% !important;\n                        }\n                        .feature-center {\n                            display: none;\n                        }\n                        .circle-item:after {\n                            content: none;\n                        }\n                        .circle-list {\n                            gap: 30px;\n                        }\n                    \n                        div.circle-item {\n                            max-width: 100% !important;\n                        }\n                    }\n                    @media only screen and (max-width:999.98px) {\n                        .features-search-engine .circle-list {\n                            gap: 30px !important;\n                            justify-content: center !important;\n                        }\n                        .feature-center {\n                            display: none;\n                        }\n                        .circle-item:after {\n                            content: none;\n                        }\n                        .features-search-engine div.circle-item {\n                            max-width: 433px;\n                        }\n                        .features-search-engine div.circle-item-3 {\n                            margin-right: 0px;\n                        }\n                        .features-search-engine div.circle-item-4 {\n                            margin-left: 0px;\n                        }\n                    }\n                    @media only screen and (max-width:1199.98px) {\n                        .service-about .cols-2 figure {\n                            width: 40%;\n                            }\n                        }\n                        @media only screen and (min-width:1000px) and (max-width:1100px) {\n                            .feature-center {\n                                max-width: 160px;\n                                height: 160px;\n                                top: 45%;\n                            }\n                            .center-title {\n                                font-size: 20px;\n                                line-height: 1.5;\n                            }\n                            .center-sub-title {\n                                font-size: 16px;\n                                line-height: 1.5;\n                            }\n                            .features-search-engine .circle-item:after {\n                                width: calc(103px * 0.7);\n                                height: calc(74px * 0.7);\n                            }\n                            .features-search-engine div.circle-item {\n                                max-width: 280px;\n                            }\n                            .features-search-engine div.circle-list {\n                                gap: 115px calc(100% - (280px * 2));\n                            }\n                            .features-search-engine .circle-item-3 {\n                                margin-right: -100px;\n                            }\n                            .features-search-engine .circle-item-4 {\n                                margin-left: -100px;\n                            }\n                            .circle-item-1:after {\n                                bottom: 0px;\n                                right: -92px;\n                            }\n                            .circle-item-3:after {\n                                right: 0px;\n                                top: -20px;\n                            }\n                            .circle-item-2:after {\n                                left: -92px;\n                                bottom: 0px;\n                            }\n                            .circle-item-4:after {\n                                left: 0px;\n                                top: -20px;\n                            }\n                        }\n                        @media only screen and (max-width:1200px) {\n                            .features-search-engine .circle-item {\n                                max-width: 320px;\n                            }\n                            .features-search-engine .circle-list {\n                                gap: 115px calc(100% - (320px * 2));\n                            }\n                            .features-search-engine .circle-item-3 {\n                                margin-right: -100px;\n                            }\n                            .features-search-engine .circle-item-4 {\n                                margin-left: -100px;\n                            }\n                            .circle-item-1:after {\n                                right: -103px;\n                            }\n                            .circle-item-2:after {\n                                left: -103px;\n                            }\n                            .circle-item-3:after {\n                                top: 0px;\n                                right: 0px;\n                            }\n                            .circle-item-4:after {\n                                top: 0px;\n                                left: 0px;\n                            }\n                        }\n                        @media only screen and (max-width:1400px) {\n                            .feature-center {\n                                top: 50%;\n                            }\n                            .circle-item {\n                                max-width: 340px;\n                            }\n                            .circle-list {\n                                gap: 115px calc(100% - (340px * 2));\n                            }\n                            .features-search-engine .circle-item-3 {\n                                margin-right: -100px;\n                            }\n                            .features-search-engine .circle-item-4 {\n                                margin-left: -100px;\n                            }\n                            .circle-item-3:after {\n                                top: 0px;\n                                right: -10%;\n                            }\n                            .circle-item-4:after {\n                                top: 0px;\n                                left: -10%;\n                            }\n                        }\n                    " }} />
            <section className="section service-about search-engine-about">
              <div className="ast-container">
                <div className="cols-2 ast-flex flex-wrap align-items-center">
                  <figure className="mb-0">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/seo-img.png" alt />
                  </figure>
                  <div className="col-content f-soleto fs-22">
                    <p>Search Engine Optimization (SEO) is the backbone of digital marketing for medical practices. By
                      optimizing your website for search engines, you increase your chances of being found by patients
                      actively searching for services you offer. Our SEO strategies are proven to deliver measurable
                      results.</p>
                  </div>
                </div>
                <h2 className="h2-title title-list f-soleto fw-800 color-0659A9 mb-0 text-center">What SEO for Medical Practices
                  Includes:</h2>
                <div className="features features-search-engine position-relative">
                  <div className="list circle-list ast-flex justify-content-center">
                    <div className="circle-item r-circle-1 circle-item-1 ">
                      <div className="inner ast-flex flex-column align-items-center text-center">
                        <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/speed.svg" alt="Advanced Website Optimization" /></figure>
                        <h2 className="f-soleto fw-700">Advanced Website Optimization</h2>
                        <div className="circle-item--content circle-item--content-1">
                          <div className="content f-soleto">
                            <p>Your website’s technical setup, speed, and structure are optimized to ensure
                              better visibility on Google.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="circle-item r-circle-1 circle-item-2 ">
                      <div className="inner ast-flex flex-column align-items-center text-center">
                        <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/target.svg" alt="Targeted Keyword Selection" /></figure>
                        <h2 className="f-soleto fw-700">Targeted Keyword Selection</h2>
                        <div className="circle-item--content circle-item--content-1">
                          <div className="content f-soleto">
                            <p>We focus on keywords that your ideal patients are searching for, ensuring
                              high-quality leads.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="circle-item r-circle-2 circle-item-3 ">
                      <div className="inner ast-flex flex-column align-items-center text-center">
                        <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/copywrite.svg" alt="Medical SEO Copywriting" /></figure>
                        <h2 className="f-soleto fw-700">Medical SEO Copywriting</h2>
                        <div className="circle-item--content circle-item--content-2">
                          <div className="content f-soleto">
                            <p>Content that is specifically tailored to the medical wellness industry to improve
                              rankings and engage potential patients.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="circle-item r-circle-2 circle-item-4 ">
                      <div className="inner ast-flex flex-column align-items-center text-center">
                        <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/local-seo.svg" alt="Local SEO" /></figure>
                        <h2 className="f-soleto fw-700">Local SEO</h2>
                        <div className="circle-item--content circle-item--content-2">
                          <div className="content f-soleto">
                            <p>Our SEO strategy ensures that your practice is prominently featured in local search
                              results, driving more local patients to your clinic.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feature-center position-absolute ast-flex align-items-center">
                    <div className="center ast-flex justify-content-center">
                      <h3 className="center-title f-soleto fw-800 text-white text-center">SEO</h3>
                      <div className="center-sub-title f-soleto fw-500 text-white text-center">FOR MEDICAL PRACTICES</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                        .service-content {\n                            padding: 85px 0px 100px;\n                        }\n                        .content-item {\n                            gap: 80px;\n                        }\n                        .content-item:not(:last-child) {\n                            padding-bottom: 80px;\n                            margin-bottom: 100px;\n                            border-bottom: 2px solid #D4D1D1;\n                        }\n                        .content-item .col-img {\n                            width: 579px;\n                        }\n                        .content-item .col-content {\n                            flex: 1;\n                        }\n                        .content-item:nth-child(even) figure {\n                            order: 2;\n                        }\n                        .content-item:nth-child(even) .col-content {\n                            order: 1;\n                        }\n                        .content-item .col-content .h2-title {\n                            margin-bottom: 20px;\n                        }\n                        .content-item .col-content p {\n                            color: #000;\n                        }\n                        .content-item .col-content ul {\n                            list-style: none;\n                            padding: 0px;\n                            margin: 0px;\n                        }\n                        .list-with-icon li {\n                            align-items: center;\n                        }\n                        .list-with-icon li:not(:last-child) {\n                            margin-bottom: 26px;\n                        }\n                        .list-with-icon li,\n                        .service-content .cirle-list li {\n                            display: flex;\n                            gap: 14px;\n                            font-family: 'Soleto';\n                            font-size: 22px;\n                            line-height: 1.5;\n                            color: #000;\n                        }\n                        .list-with-icon li figure {\n                            flex: 0 0 auto;\n                            width: 84px;\n                            height: 84px;\n                            overflow: hidden;\n                        }\n                        .list-with-icon li figure img {\n                            object-fit: cover;\n                        }\n                        .service-content .cirle-list li:not(:last-child) {\n                            margin-bottom: 30px;\n                        }\n                        .service-content .cirle-list li:before {\n                            content: \"\";\n                            display: inline-block;\n                            position: relative;\n                            flex: 0 0 auto;\n                            width: 22px;\n                            height: 22px;\n                            margin-top: 5px;\n                            background: no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/cirle-check-green.svg');\n                        }\n                        @media only screen and (max-width:767.98px) {\n                            .content-item {\n                                gap: 24px;\n                            }\n                            .content-item:not(:last-child) {\n                                padding-bottom: 40px;\n                                margin-bottom: 40px;\n                            }\n                            .content-item .col-img {\n                                width: 100% !important;\n                            }\n                            .content-item:nth-child(even) figure {\n                                order: 1;\n                            }\n                            .content-item:nth-child(even) .col-content {\n                                order: 2;\n                            }\n                            .list-with-icon li,\n                            .service-content .cirle-list li,\n                            .content-item .col-content p {\n                                font-size: 18px;\n                            }\n                        }\n                        @media only screen and (max-width:1199.98px) {\n                            .content-item {\n                                gap: 24px;\n                            }\n                            .content-item .col-content .h2-title {\n                                font-size: 30px;\n                            }\n                            .content-item .col-img {\n                                width: 40%;\n                            }\n                            .content-item .list-with-icon li figure {\n                                width: 60px;\n                                height: 60px;\n                            }\n                        }\n                    " }} />
            <section className="section service-content" style={{ "background": "no-repeat bottom/cover url('https://agencysite.bwpsites.com/wp-content/uploads/2024/12/bg-service-content.webp')" }}>
              <div className="ast-container">
                <div className="cols-2 content-item content-item-1 ast-flex flex-wrap align-items-center">
                  <figure className="col-img mb-0">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/why-seo-matters-img.png" alt="Why SEO Matters for Your Medical Practice:" />
                  </figure>
                  <div className="col-content f-soleto fs-22">
                    <h2 className="h2-title f-soleto fw-800 color-0659A9">Why SEO Matters for Your Medical Practice:</h2>
                    <div className="content">
                      <ul className="list-with-icon">
                        <li>
                          <figure>
                            <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/seo-icon-1.svg" alt />
                          </figure>
                          <div className="list--content">Increased Visibility: SEO ensures that when patients search for
                            services like yours, your practice is easy to find.</div>
                        </li>
                        <li>
                          <figure>
                            <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/seo-icon-2.svg" alt />
                          </figure>
                          <div className="list--content">Long-Term Results: Unlike paid advertising, SEO provides
                            long-lasting organic visibility.</div>
                        </li>
                        <li>
                          <figure>
                            <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/seo-icon-3.svg" alt />
                          </figure>
                          <div className="list--content">Higher Conversion Rates: With optimized content, your website is
                            more likely to convert visitors into patients.</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="cols-2 content-item content-item-2 ast-flex flex-wrap align-items-center">
                  <figure className="col-img mb-0">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/investing-img.png" alt="By investing in your website’s visibility, you’ll:" />
                  </figure>
                  <div className="col-content f-soleto fs-22">
                    <h2 className="h2-title f-soleto fw-800 color-0659A9">By investing in your website’s visibility, you’ll:
                    </h2>
                    <div className="content">
                      <ul className="cirle-list">
                        <li>Attract more local patients actively searching for your services.</li>
                        <li>Outrank competitors in your area.</li>
                        <li>Build long-term growth and stability for your practice.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="cols-2 content-item content-item-3 ast-flex flex-wrap align-items-center">
                  <figure className="col-img mb-0">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/stay-ahead-img.png" alt="Stay Ahead of the Competition" />
                  </figure>
                  <div className="col-content f-soleto fs-22">
                    <h2 className="h2-title f-soleto fw-800 color-0659A9">Stay Ahead of the Competition</h2>
                    <div className="content">
                      <p>Keeping your clinic’s website above the competition takes consistent effort and expertise. That’s
                        why our SEO specialists work proactively to maintain and improve your rankings, ensuring your
                        practice stays visible and accessible to patients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                        .service-cta {\n                            padding: 100px 0px;\n                        }\n                        .cta-wrapper {\n                            max-width: 1130px;\n                            margin: 0px auto;\n                        }\n                        .cta-wrapper .h2-title {\n                            margin-bottom: 18px;\n                        }\n                        .cta-wrapper .desc p:is(:last-child) {\n                            margin-bottom: 0px;\n                        }\n                        .cta-wrapper .sc-btn {\n                            margin-top: 40px;\n                        }\n                        .cta-wrapper .sc-btn a {\n                            padding-left: 64px;\n                            padding-right: 64px;\n                        }\n                        @media (max-width:767.98px) {\n                            .service-cta {\n                                padding: 40px 0px;\n                            }\n                            .cta-wrapper .sc-btn a {\n                                padding-left: 20px;\n                                padding-right: 20px;\n                            }\n                        }\n                        @media (max-width:1199.98px) {\n                            .service-cta {\n                                padding: 60px 0px;\n                            }\n                            .cta-wrapper .h2-title {\n                                font-size: 30px;\n                            }\n                            .cta-wrapper .desc {\n                                font-size: 20px !important;\n                            }\n                        }\n                    " }} />
            <section className="section service-cta" style={{ "background": "no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/uploads/2024/12/bg-cta.webp')" }}>
              <div className="ast-container">
                <div className="cta-wrapper ast-flex flex-column align-items-center text-center">
                  <h2 className="h2-title f-soleto fw-800 text-white">Let Your Patients Find You First.</h2>
                  <div className="desc fs-24 f-soleto text-white">
                    <p><strong>Take the first step toward dominating your local search results. Schedule your strategy
                      session today, and we’ll create a personalized SEO plan tailored to your clinic and its
                      goals.</strong></p>
                  </div>
                  <div className="sc-btn ast-flex justify-content-center">
                    <a href="https://agencysite.bwpsites.com/contact/" target="_self" className="btn-bg bg-F2771A btn-size-26 fw-700">Schedule Your Strategy Session</a>
                  </div>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                        .service-faq {\n                            padding: 100px 0px 120px;\n                            background: no-repeat top center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/bg-faqs.jpg');\n                        }\n                        .faq-list {\n                            display: flex;\n                            flex-direction: column;\n                            gap: 30px;\n                            margin-top: 60px;\n                        }\n                        .faq-item {\n                            cursor: pointer;\n                            padding: 24px 75px 26px 26px;\n                            background: #EAF7FF;\n                            border: 2px solid #D8E7F0;\n                            border-radius: 10px;\n                            transition: 1s linear;\n                            transition-duration: 1s;\n                        }\n                        .faq-item:after {\n                            content: \"\";\n                            display: inline-block;\n                            background: no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/arrow-right-blue.svg');\n                            width: 14px;\n                            height: 26px;\n                            position: absolute;\n                            top: 30px;\n                            right: 25px;\n                            transition-duration: 1s;\n                        }\n                        .faq-item .title {}\n                        .faq-item .content {\n                            display: none;\n                            margin-top: 15px;\n                            height: 0px;\n                        }\n                        .faq-item .content p {\n                            font-family: 'Soleto';\n                            font-size: 20px;\n                            line-height: 32px;\n                            color: #000;\n                        }\n                        .faq-item.active:after {\n                            transform: rotate(90deg);\n                        }\n                        .faq-item.active .content {\n                            display: block;\n                            height: 100%;\n                        }\n                        @media (max-width:767px) {\n                            .service-faq {\n                                padding: 40px 0px;\n                            }\n                            .faq-list {\n                                margin-top: 24px;\n                            }\n                        }\n                        @media (max-width:1199px) {\n                            .service-faq {\n                                padding: 60px 0px;\n                            }\n                        }\n                    " }} />
            <section className="section service-faq">
              <div className="ast-container">
                <h2 className="h2-title f-soleto fw-800 color-0659A9 text-center">Frequently Asked Questions</h2>
                <div className="faq-list">
                  <FaqItem title="Why is SEO crucial for my medical practice?" description="SEO helps your practice rank higher on search engines, ensuring that patients find your services when searching for relevant treatments." />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SearchEngine

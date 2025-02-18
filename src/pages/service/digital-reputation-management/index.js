import React from "react"
import Layout from "../../../components/layout"
import FaqItem from '../../../components/FaqItem'
import './styles.scss';

const DigitalReputationManagement = () => {

  return (
    <Layout>
      <div className="hfeed site" id="page">
        <div id="content" className="site-content">
          <div className="main-content">
            <section className="section service-banner" style={{ "background": "no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/uploads/2024/12/reputation-management-banner-2.jpg')" }}>
              <div className="cols2-banner position-relative">
                <div className="ast-container position-relative">
                  <div className="banner-wrapper col-banner-wrapper ast-flex">
                    <div className="service-banner-content col-banner-content">
                      <h1 className="h1-title f-soleto fw-800 text-white mb-0">Reputation Management</h1>
                      <div className="sep"><img src="https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/sep-brush-full.svg" alt /></div>
                      <h2 className="sub-title f-soleto fw-700 text-white">for Medical Practices</h2>
                      <div className="desc f-soleto fw-500 text-white">Your online reputation plays a crucial role in
                        attracting new patients. Let us help you maintain a respected image that reflects your
                        practice's true value.</div>
                      <div className="sc-btn">
                        <a href="https://agencysite.bwpsites.com/contact/" target="_self" className="btn-bg bg-F2771A btn-size-26 fw-700">Schedule a Strategy Session</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ast-container-fluid position-absolute">
                  <div className="col-img">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/reputation-management-1.png" alt />
                  </div>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                    .service-about {\n                        padding: 100px 0px;\n                        background: no-repeat bottom/cover #fff url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/bg-mask-2.webp');\n                    }\n                    .service-about .cols-2 {\n                        padding-bottom: 60px;\n                        border-bottom: 2px solid #D4D1D1;\n                        gap: 35px;\n                    }\n                    .service-about .cols-2 figure {\n                        width: 584px;\n                    }\n                    .service-about .cols-2 .col-content {\n                        flex: 1;\n                    }\n                    .reputation-about .col-content h2 {\n                        font-family: 'Soleto';\n                        font-weight: 700;\n                        font-size: 30px;\n                        line-height: 1.2;\n                        color: #0659A9;\n                    }\n                    .features-reputation {\n                        margin-top: 48px;\n                    }\n                    .title-list {\n                        margin-top: 30px;\n                    }\n                    .col-content p {\n                        color: #000;\n                    }\n                    .circle-list {\n                        gap: 77px calc(100% - (433px * 2));\n                        align-items: stretch;\n                    }\n                    .circle-item {\n                        flex: 0 0 auto;\n                        max-width: 433px;\n                        position: relative;\n                    }\n                    .circle-item:after {\n                        content: \"\";\n                        display: inline-block;\n                        height: 66px;\n                        width: 511px;\n                        position: absolute;\n                        background-size: 100% 100%;\n                        background-repeat: no-repeat;\n                    \n                    }\n                    .circle-item-2:after,\n                    .circle-item-4:after {\n                        background-image: url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/curve-line-2.png');\n                    }\n                    .circle-item-1:after,\n                    .circle-item-3:after {\n                    \n                        background-image: url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/curve-line-1.png');\n                    }\n                    .circle-item-1:after {\n                        top: 70px;\n                        right: calc(-100% - 40px);\n                        transform: rotate(3deg);\n                    }\n                    .circle-item-2:after {\n                        bottom: -66px;\n                        left: calc(-100% - 80px);\n                    \n                    }\n                    .circle-item-3:after {\n                        width: 486px;\n                        top: 20px;\n                        right: calc(-100% + 40px);\n                        transform: rotate(3deg);\n                    }\n                    .circle-item-4:after {\n                        content: none;\n                    }\n                    .features-reputation .circle-item-3 {\n                        margin-right: -90px;\n                    }\n                    .features-reputation .circle-item-4 {\n                        margin-left: -90px;\n                    }\n                    .features-reputation .circle-item .inner {\n                        justify-content: stretch;\n                    }\n                    .circle-item figure {\n                        width: 100%;\n                        height: 100px;\n                        margin-bottom: 12px;\n                    }\n                    .circle-item--content {\n                        display: flex;\n                        align-items: stretch;\n                        border: 1px dashed #0659A9;\n                        background: #fff;\n                        border-radius: 20px;\n                        padding: 24px 18px;\n                    }\n                    .circle-item h2 {\n                        font-size: 26px;\n                        line-height: 1.24;\n                        margin-bottom: 24px;\n                        color: #000;\n                    }\n                    .circle-item--content .content p {\n                        font-weight: 300;\n                        font-size: 20px;\n                        line-height: 1.5;\n                        color: #000;\n                    }\n                    .sep-curve-line {\n                        text-align: center;\n                        margin: 18px 0px;\n                    }\n                    .item-2 figure {\n                        order: 2;\n                    }\n                    .item-2 .content {\n                        order: 1;\n                    }\n                    .reputation-about .feature-center {\n                        max-width: 221px;\n                        width: 100%;\n                        height: 221px;\n                        border-radius: 100%;\n                        border: 10px solid #227AD0;\n                        background: #0659A9;\n                        top: 148px;\n                        left: 50%;\n                        transform: translate(-50%, 0%);\n                    }\n                    .feature-center .center {\n                        gap: 4px;\n                    }\n                    .reputation-about .center-title {\n                        font-size: 24px;\n                        line-height: 1.5;\n                    }\n                    .reputation-about .center-sub-title {\n                        font-size: 18px;\n                        line-height: 1.5;\n                    }\n                    @media only screen and (max-width:767.98px) {\n                        .service-about .cols-2 figure {\n                            width: 100% !important;\n                        }\n                        .feature-center {\n                            display: none;\n                        }\n                        .circle-item:after {\n                            content: none;\n                        }\n                        .circle-list {\n                            gap: 30px;\n                        }\n                        div.circle-item {\n                            max-width: 100% !important;\n                        }\n                    }\n                    @media only screen and (max-width:999.98px) {\n                        .features-reputation .circle-list {\n                            gap: 30px !important;\n                            justify-content: center !important;\n                        }\n                        .feature-center {\n                            display: none;\n                        }\n                        .circle-item:after {\n                            content: none;\n                        }\n                        .features-reputation div.circle-item {\n                            max-width: 433px;\n                        }\n                        .features-reputation div.circle-item-3 {\n                            margin-right: 0px;\n                        }\n                        .features-reputation div.circle-item-4 {\n                            margin-left: 0px;\n                        }\n                    }\n                    @media only screen and (max-width:1199.98px) {\n                        .service-about .cols-2 figure {\n                            width: 40%;\n                        }\n                    \n                    }\n                    @media only screen and (min-width:1000px) and (max-width:1100px) {\n                        .features-reputation div.circle-item {\n                            max-width: 280px;\n                        }\n                        .features-reputation div.circle-list {\n                            gap: 77px calc(100% - (280px * 2));\n                        }\n                        .features-reputation .circle-item-3 {\n                            margin-right: -40px;\n                        }\n                        .features-reputation .circle-item-4 {\n                            margin-left: -40px;\n                        }\n                        .circle-item-1:after {\n                            top: 40px !important;\n                            right: calc(-511px * 0.9) !important;\n                        }\n                        .circle-item-2:after {\n                            bottom: -49px !important;\n                            left: calc(-511px * 0.9) !important;\n                        }\n                        .features-reputation div.circle-item-3:after {\n                            right: calc(-486px * 0.9) !important;\n                        }\n                    }\n                    @media only screen and (max-width:1280px) {\n                        .features-reputation .circle-item-3 {\n                            margin-right: -40px;\n                        }\n                        .features-reputation .circle-item-4 {\n                            margin-left: -40px;\n                        }\n                        .features-reputation .circle-item {\n                            max-width: 360px;\n                        }\n                        .features-reputation .circle-list {\n                            gap: 77px calc(100% - (360px * 2));\n                        }\n                        .circle-item-1:after {\n                            top: 40px !important;\n                        }\n                        .circle-item-2:after {\n                            bottom: -49px !important;\n                        }\n                        .circle-item-3:after {\n                            width: calc(486px * 0.9) !important;\n                            right: calc(-486px * 0.9) !important;\n                        }\n                    }\n                    @media only screen and (max-width:1366px) {\n                        .features-reputation .circle-item:after {\n                            width: calc(511px * 0.9);\n                            height: calc(66px * 0.9);\n                        }\n                    }\n                    " }} />
            <section className="section service-about reputation-about">
              <div className="ast-container">
                <div className="cols-2 ast-flex flex-wrap align-items-center">
                  <figure className="mb-0">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/customer-reviews.png" alt />
                  </figure>
                  <div className="col-content f-soleto fs-26">
                    <h2>Build Trust with Positive Reviews</h2>
                    <p>A positive online reputation is essential for success. PracticeFlow’s Reputation Management
                      service helps medical practices generate and showcase positive reviews across key platforms like
                      Google, Facebook, and Yelp—where prospective patients are searching.</p>
                  </div>
                </div>
                <div className="features features-reputation position-relative">
                  <div className="list circle-list ast-flex justify-content-center">
                    <div className="circle-item r-circle-1 circle-item-1 ">
                      <div className="inner ast-flex flex-column align-items-center text-center">
                        <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/positive-reviews.png" alt="Get More Positive Reviews" /></figure>
                        <h2 className="f-soleto fw-700">Get More Positive Reviews</h2>
                        <div className="circle-item--content circle-item--content-1">
                          <div className="content f-soleto">
                            <p>We use proven strategies to help your practice secure positive reviews from satisfied
                              patients, boosting your credibility and trustworthiness online.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="circle-item r-circle-1 circle-item-2 ">
                      <div className="inner ast-flex flex-column align-items-center text-center">
                        <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/credible.png" alt="Highlight Your Best Reviews" /></figure>
                        <h2 className="f-soleto fw-700">Highlight Your Best Reviews</h2>
                        <div className="circle-item--content circle-item--content-1">
                          <div className="content f-soleto">
                            <p>We ensure that your best reviews stand out. Positive feedback is displayed
                              prominently to enhance your practice’s online presence, making it easier for
                              potential patients to see why they should choose you.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="circle-item r-circle-2 circle-item-3 ">
                      <div className="inner ast-flex flex-column align-items-center text-center">
                        <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/reviews.png" alt="Facebook, Yelp, & Google Reviews" /></figure>
                        <h2 className="f-soleto fw-700">Facebook, Yelp, &amp; Google Reviews</h2>
                        <div className="circle-item--content circle-item--content-2">
                          <div className="content f-soleto">
                            <p>Your reputation on platforms like Facebook, Yelp, and Google is a significant factor
                              in patient acquisition. Our team specializes in managing these accounts and
                              increasing high-quality reviews that matter most to search engines and prospective
                              patients.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="circle-item r-circle-2 circle-item-4 ">
                      <div className="inner ast-flex flex-column align-items-center text-center">
                        <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/monitor-reviews.png" alt="Monitor & Manage Reviews" /></figure>
                        <h2 className="f-soleto fw-700">Monitor &amp; Manage Reviews</h2>
                        <div className="circle-item--content circle-item--content-2">
                          <div className="content f-soleto">
                            <p>We monitor all reviews and comments about your practice to address negative feedback
                              quickly and professionally. We take action to ensure negative reviews don’t
                              negatively impact your visibility on Google.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feature-center position-absolute ast-flex align-items-center justify-content-center">
                    <div className="center ast-flex justify-content-center">
                      <h3 className="center-title f-soleto fw-800 text-white text-center text-uppercase mb-0">Manage Your
                        Digital Reputation</h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                    .service-cta {\n                        padding: 100px 0px;\n                    }\n                    .cta-wrapper {\n                        max-width: 1130px;\n                        margin: 0px auto;\n                    }\n                    .cta-wrapper .h2-title {\n                        margin-bottom: 18px;\n                    }\n                    .cta-wrapper .desc p:is(:last-child) {\n                        margin-bottom: 0px;\n                    }\n                    .cta-wrapper .sc-btn {\n                        margin-top: 40px;\n                    }\n                    .cta-wrapper .sc-btn a {\n                        padding-left: 64px;\n                        padding-right: 64px;\n                    }\n                    @media (max-width:767.98px) {\n                        .service-cta {\n                            padding: 40px 0px;\n                        }\n                        .cta-wrapper .sc-btn a {\n                            padding-left: 20px;\n                            padding-right: 20px;\n                        }\n                    }\n                    @media (max-width:1199.98px) {\n                        .service-cta {\n                            padding: 60px 0px;\n                        }\n                        .cta-wrapper .h2-title {\n                            font-size: 30px;\n                        }\n                        .cta-wrapper .desc {\n                            font-size: 20px !important;\n                        }\n                    }\n                    " }} />
            <section className="section service-cta" style={{ "background": "no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/uploads/2024/12/google-maps-banner-1.webp')" }}>
              <div className="ast-container">
                <div className="cta-wrapper ast-flex flex-column align-items-center text-center">
                  <h2 className="h2-title f-soleto fw-800 text-white">Why Reputation Management Matters</h2>
                  <div className="desc fs-24 f-soleto text-white">
                    <p>More than just your patients, your reputation online influences potential patients, partners, and
                      even other healthcare professionals. Don’t leave your reputation to chance. We help you shape it to
                      reflect the high standards of care your practice provides.</p>
                    <p>Let our team ensure your online presence matches the outstanding reputation you’ve built in person.
                    </p>
                    <p><strong>Contact us now to get started with Reputation Management and protect your practice’s
                      online image.</strong></p>
                  </div>
                  <div className="sc-btn ast-flex justify-content-center">
                    <a href="https://agencysite.bwpsites.com/contact/" target="_self" className="btn-bg bg-F2771A btn-size-26 fw-700">Schedule Your Strategy Session</a>
                  </div>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                    .service-faq {\n                        padding: 100px 0px 120px;\n                        background: no-repeat top center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/bg-faqs.jpg');\n                    }\n                    .faq-list {\n                        display: flex;\n                        flex-direction: column;\n                        gap: 30px;\n                        margin-top: 60px;\n                    }\n                    .faq-item {\n                        cursor: pointer;\n                        padding: 24px 75px 26px 26px;\n                        background: #EAF7FF;\n                        border: 2px solid #D8E7F0;\n                        border-radius: 10px;\n                        transition: 1s linear;\n                        transition-duration: 1s;\n                    }\n                    .faq-item:after {\n                        content: \"\";\n                        display: inline-block;\n                        background: no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/arrow-right-blue.svg');\n                        width: 14px;\n                        height: 26px;\n                        position: absolute;\n                        top: 30px;\n                        right: 25px;\n                        transition-duration: 1s;\n                    }\n                    .faq-item .title {}\n                    .faq-item .content {\n                        display: none;\n                        margin-top: 15px;\n                        height: 0px;\n                    }\n                    .faq-item .content p {\n                        font-family: 'Soleto';\n                        font-size: 20px;\n                        line-height: 32px;\n                        color: #000;\n                    }\n                    .faq-item.active:after {\n                        transform: rotate(90deg);\n                    }\n                    .faq-item.active .content {\n                        display: block;\n                        height: 100%;\n                    }\n                    @media (max-width:767px) {\n                        .service-faq {\n                            padding: 40px 0px;\n                        }\n                        .faq-list {\n                            margin-top: 24px;\n                        }\n                    }\n                    @media (max-width:1199px) {\n                        .service-faq {\n                            padding: 60px 0px;\n                        }\n                    }\n                    " }} />
            <section className="section service-faq">
              <div className="ast-container">
                <h2 className="h2-title f-soleto fw-800 color-0659A9 text-center">FAQ</h2>
                <div className="faq-list">
                  <FaqItem title="Why is my practice's online reputation important?" description="Your online reputation is often the first impression potential patients have of your practice. A strong, positive reputation builds trust and influences decisions, helping attract new patients." />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DigitalReputationManagement

import React from "react"
import Layout from "../../../components/layout"
import './styles.scss';

const WebsiteDevelopment = () => {

  return (
    <Layout>
      <div className="hfeed site" id="page">
        <div id="content" className="site-content">
          <div className="main-content">
            <section className="section service-banner" style={{ "background": "no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/uploads/2024/12/bg-web.jpg')" }}>
              <img className="bg-img-left" src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/imac.png" alt />
              <img className="bg-img-right" src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/Group-1171274937.png" alt />
              <div className="ast-container">
                <div className="banner-wrapper ast-flex justify-content-center">
                  <div className="service-banner-content banner-content-2 text-center">
                    <h2 className="sub-title f-soleto fw-700 text-white">Website Development for Medical Practices</h2>
                    <div className="sep"><img src="https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/sep-brush-full.svg" alt /></div>
                    <h1 className="h1-title f-soleto fw-800 text-white mb-0">Build a Website That Converts Patients</h1>
                    <div className="desc f-soleto fw-500 text-white">Your Practice’s First Impression Matters. Let’s Make It
                      Exceptional.</div>
                    <div className="sc-btn justify-content-center">
                      <a href="https://agencysite.bwpsites.com/contact/" target="_self" className="btn-bg bg-F2771A btn-size-26 fw-700">Schedule a Strategy Session</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                    .service-about {\n                        padding: 100px 0px;\n                        background: no-repeat bottom/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/bg-service-sec2.jpg');\n                    }\n                    .service-about .cols-2 {\n                        padding-bottom: 60px;\n                        border-bottom: 2px solid #D4D1D1;\n                        gap: 35px;\n                    }\n                    .service-about .cols-2 figure {\n                        width: 584px;\n                    }\n                    .service-about .cols-2 .col-content {\n                        flex: 1;\n                    }\n                    .title-list {\n                        margin-top: 30px;\n                    }\n                    .service-about .list {\n                        margin: 80px 0px 0px;\n                    }\n                    .col-content p {\n                        color: #000;\n                    }\n                    .circle-list {\n                        gap: 49px calc(100% - (433px * 2));\n                    }\n                    .circle-item {\n                        max-width: 433px;\n                        position: relative;\n                    }\n                    .circle-item:after {\n                        content: \"\";\n                        display: inline-block;\n                        width: 87px;\n                        height: 114px;\n                        position: absolute;\n                    }\n                    .circle-item-2:after,\n                    .circle-item-3:after {\n                        background: no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/arrow-orange.png');\n                    }\n                    .circle-item-1:after,\n                    .circle-item-4:after {\n                \n                        background: no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/arrow-orange-2.png');\n                    }\n                    .circle-item-1:after {\n                        bottom: -20px;\n                        right: -107px;\n                        transform: rotate(-20deg);\n                    }\n                    .circle-item-2:after {\n                        bottom: -20px;\n                        left: -107px;\n                        transform: rotate(200deg);\n                    }\n                    .circle-item-3:after {\n                        top: 60px;\n                        right: -107px;\n                        transform: rotate(20deg);\n                    }\n                    .circle-item-4:after {\n                        top: 60px;\n                        left: -107px;\n                        transform: rotate(160deg);\n                    }\n                    .circle-item figure {\n                        width: 100%;\n                        height: 100px;\n                        margin-bottom: 12px;\n                    }\n                    .circle-item--content {\n                        border: 1px dashed #0659A9;\n                        background: #fff;\n                        border-radius: 20px;\n                        padding: 24px 18px;\n                    }\n                    .circle-item h2 {\n                        font-size: 26px;\n                        line-height: 1.24;\n                        margin-bottom: 24px;\n                        color: #000;\n                    }\n                    .circle-item--content .content p {\n                        font-weight: 300;\n                        font-size: 20px;\n                        line-height: 1.5;\n                        color: #000;\n                    }\n                    .sep-curve-line {\n                        text-align: center;\n                        margin: 18px 0px;\n                    }\n                    .item-2 figure {\n                        order: 2;\n                    }\n                    .item-2 .content {\n                        order: 1;\n                    }\n                    .why-service {\n                        padding-top: 65px;\n                        border-top: 2px solid #D4D1D1;\n                        margin-top: 85px;\n                        gap: 80px;\n                    }\n                    .why-service figure {\n                        margin-bottom: 0px;\n                        width: 350px;\n                    }\n                    .why-service .why--content {\n                        flex: 1;\n                    }\n                    .why-service .why--content h3 {\n                        margin-bottom: 40px;\n                        font-size: 26px;\n                        line-height: normal;\n                    }\n                    .why-service .why--content .content {\n                        font-size: 26px;\n                        line-height: normal;\n                    }\n                    .feature-center {\n                        max-width: 221px;\n                        height: 221px;\n                        border-radius: 100%;\n                        border: 10px solid #227AD0;\n                        background: #0659A9;\n                        top: 50%;\n                        left: 50%;\n                        transform: translate(-50%, -50%);\n                    }\n                    .feature-center .center {\n                        gap: 4px;\n                    }\n                    .center-title {\n                        font-size: 26px;\n                        line-height: 32px;\n                    }\n                    .center-sub-title {\n                        font-size: 18px;\n                        line-height: 26px;\n                    }\n                    @media only screen and (max-width:767.98px) {\n                        .service-about .cols-2 figure {\n                            width: 100% !important;\n                        }\n                        .feature-center {\n                            display: none;\n                        }\n                        .circle-item:after {\n                            content: none;\n                        }\n                        .circle-list {\n                            gap: 30px;\n                        }\n                        div.circle-item {\n                            max-width: 100%;\n                        }\n                        .why-service figure {\n                            width: 100%;\n                            text-align: center;\n                        }\n                    }\n                    @media only screen and (max-width:999.98px) {\n                        .circle-list {\n                            gap: 30px;\n                            justify-content: center;\n                        }\n                        .feature-center {\n                            display: none;\n                        }\n                        .circle-item:after {\n                            content: none;\n                        }\n                        div.circle-item {\n                            max-width: 433px;\n                        }\n                    }\n                    @media only screen and (max-width:1199.98px) {\n                        .service-about .cols-2 figure,\n                        .why-service figure {\n                            width: 40%;\n                        }\n                    }\n                    @media only screen and (min-width:1000px) and (max-width:1100px) {\n                        .feature-center {\n                            max-width: 160px;\n                            height: 160px;\n                        }\n                        .center-title {\n                            font-size: 20px;\n                            line-height: 1.5;\n                        }\n                        .center-sub-title {\n                            font-size: 16px;\n                            line-height: 1.5;\n                        }\n                        .circle-item:after {\n                            width: 60px;\n                            height: 79px;\n                        }\n                        .circle-item {\n                            max-width: 280px;\n                        }\n                        .circle-list {\n                            gap: 49px calc(100% - (280px * 2));\n                        }\n                        .circle-item-1:after,\n                        .circle-item-3:after {\n                            right: -80px\n                        }\n                        .circle-item-2:after,\n                        .circle-item-4:after {\n                            left: -80px\n                        }\n                    }\n                    @media (max-width:1336px) {\n                        .circle-item {\n                            max-width: 320px;\n                        }\n                        .circle-list {\n                            gap: 49px calc(100% - (320px * 2));\n                        }\n                    }\n                " }} />
            <section className="section service-about website-about">
              <div className="ast-container">
                <div className="cols-2 ast-flex flex-wrap align-items-center">
                  <figure className="mb-0">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/website-img.webp" alt />
                  </figure>
                  <div className="col-content f-soleto fs-22">
                    <p>Your medical practice needs a website that not only looks great but also performs well in search
                      engines and converts visitors into loyal patients. Attract more qualified leads with a
                      well-optimized, user-friendly website tailored to your medical services.</p>
                  </div>
                </div>
                <h2 className="h2-title title-list f-soleto fw-800 color-0659A9 mb-0 text-center">Key Features of Our Medical
                  Website Development</h2>
                <div className="features position-relative">
                  <div className="list circle-list ast-flex">
                    <div className="circle-item circle-item-1 ast-flex flex-column align-items-center text-center">
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/seo.png" alt="SEO-Optimized Design" /></figure>
                      <h2 className="f-soleto fw-700">SEO-Optimized Design</h2>
                      <div className="circle-item--content">
                        <div className="content f-soleto">
                          <p>Every website we build is optimized for search engines, ensuring your practice ranks
                            higher for relevant search terms.</p>
                        </div>
                      </div>
                    </div>
                    <div className="circle-item circle-item-2 ast-flex flex-column align-items-center text-center">
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/phone.png" alt="Responsive Mobile Design" /></figure>
                      <h2 className="f-soleto fw-700">Responsive Mobile Design</h2>
                      <div className="circle-item--content">
                        <div className="content f-soleto">
                          <p>A mobile-friendly website ensures that patients can easily access your site on any
                            device.</p>
                        </div>
                      </div>
                    </div>
                    <div className="circle-item circle-item-3 ast-flex flex-column align-items-center text-center">
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/user.png" alt="Patient-Focused Experience" /></figure>
                      <h2 className="f-soleto fw-700">Patient-Focused Experience</h2>
                      <div className="circle-item--content">
                        <div className="content f-soleto">
                          <p>We design websites that make it easy for patients to find the information they need and
                            book appointments.</p>
                        </div>
                      </div>
                    </div>
                    <div className="circle-item circle-item-4 ast-flex flex-column align-items-center text-center">
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/watch.png" alt="Fast Load Times" /></figure>
                      <h2 className="f-soleto fw-700">Fast Load Times</h2>
                      <div className="circle-item--content">
                        <div className="content f-soleto">
                          <p>A slow website can hurt your rankings. We ensure that your site loads quickly for a
                            smooth user experience.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feature-center position-absolute ast-flex align-items-center">
                    <div className="center ast-flex">
                      <h3 className="center-title f-soleto fw-800 text-white text-center">WEBSITE DEVELOPMENT</h3>
                      <div className="center-sub-title f-soleto fw-500 text-white text-center">FOR MEDICAL PRACTICES</div>
                    </div>
                  </div>
                </div>
                <div className="why-service ast-flex flex-wrap align-items-center">
                  <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/question-mark.png" alt />
                  </figure>
                  <div className="why--content">
                    <h3 className="f-soleto fw-700 text-black">Why Website Development for Medical Practices Matters</h3>
                    <div className="content f-soleto text-black">A high-quality website is essential for any medical practice
                      looking to attract and retain patients. With proper optimization, your medical website will rank
                      higher in search engines, drive more traffic, and convert visitors into leads. We specialize in
                      creating websites for medical practices, ensuring they are built to convert, easy to navigate, and
                      optimized for mobile.
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                .service-benefits {\n                    padding: 100px 0px;\n                }\n                .service-benefits .h2-title {\n                    margin-bottom: 14px;\n                }\n                .benefit-list {\n                    display: flex;\n                    flex-wrap: wrap;\n                    gap: 30px;\n                    margin-top: 60px;\n                }\n                .w-box {\n                    width: calc((100% - 60px)/3);\n                }\n                .w-box figure {\n                    overflow: hidden;\n                    height: 247px;\n                    border-radius: 20px;\n                }\n                .w-box .inner {\n                    gap: 24px;\n                }\n                .w-box img {\n                    object-fit: cover;\n                    width: 100%;\n                    height: 100%;\n                }\n                .w-box h3 {\n                    margin-bottom: 0px;\n                    font-size: 24px;\n                    line-height: 36px;\n                    margin-bottom: 12px;\n                }\n                .service-benefits .bottom-content {\n                    margin-top: 50px;\n                }\n                .service-benefits .bottom-content p {\n                    font-size: 24px;\n                    line-height: 36px;\n                }\n                .service-benefits .sc-btn {\n                    margin-top: 50px;\n                }\n                .service-benefits .sc-btn a {\n                    max-width: 800px;\n                    padding-left: 64px;\n                    padding-right: 64px;\n                }\n                .w-100 {\n                    width: 100% !important;\n                }\n                @media only screen and (max-width:544px) {\n                    div.w-box {\n                        width: 100% !important;\n                        max-width: 100% !important;\n                    }\n                \n                    .service-benefits .sc-btn a {\n                        padding-left: 20px;\n                        padding-right: 20px;\n                    }\n                }\n                @media only screen and (max-width:767px) {\n                    .service-benefits {\n                        padding: 40px 0px;\n                    }\n                    .benefit-list {\n                        flex-direction: column;\n                        align-items: center;\n                    }\n                    div.w-box {\n                        width: 100%;\n                        max-width: 435px;\n                    }\n                    .w-box h3 {\n                        font-size: 18px;\n                        line-height: normal;\n                    }\n                    .service-benefits .sc-btn {\n                        margin-top: 24px;\n                    }\n                }\n                @media only screen and (max-width:1199.98px) {\n                    .service-benefits .desc {\n                        font-size: 24px !important;\n                    }\n                    .benefit-list {\n                        gap: 20px;\n                        margin-top: 30px;\n                    }\n                    .w-box {\n                        width: calc((100% - 40px)/3);\n                    }\n                    .w-box figure {\n                        height: auto;\n                    }\n                    .w-box h3 {\n                        margin-bottom: 0px;\n                    }\n                    .w-box h3,\n                    .service-benefits .bottom-content p {\n                        font-size: 20px;\n                        line-height: normal;\n                    }\n                    .service-benefits .desc {\n                        font-size: 18px !important;\n                    }\n                }\n                " }} />
            <section className="section service-benefits" style={{ "background": "no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/uploads/2024/12/bg-sec3.webp')" }}>
              <div className="ast-container">
                <h2 className="h2-title fs-48 f-soletoxbold text-white text-center">Benefits of a Professional Medical Website</h2>
                <div className="benefit-list">
                  <div className="w-box position-relative ast-flex justify-content-center">
                    <div className="inner ast-flex flex-column text-center">
                      <h3 className="h3-title f-soleto fw-700 text-white">Increase in Organic Traffic</h3>
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/iStock-2168318946-1.webp" alt="Increase in Organic Traffic" /></figure>
                      <div className="desc f-soleto fs-22 text-white">With a well-optimized site, you'll improve your search
                        engine rankings and attract more local patients.</div>
                    </div>
                  </div>
                  <div className="w-box position-relative ast-flex justify-content-center">
                    <div className="inner ast-flex flex-column text-center">
                      <h3 className="h3-title f-soleto fw-700 text-white">Improved Conversion Rates</h3>
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/iStock-1629549660-1.webp" alt="Improved Conversion Rates" /></figure>
                      <div className="desc f-soleto fs-22 text-white">A patient-centric website design increases the
                        likelihood that visitors will book appointments.</div>
                    </div>
                  </div>
                  <div className="w-box position-relative ast-flex justify-content-center">
                    <div className="inner ast-flex flex-column text-center">
                      <h3 className="h3-title f-soleto fw-700 text-white">Enhanced Trust and Credibility</h3>
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/iStock-1223992751-1.webp" alt="Enhanced Trust and Credibility" /></figure>
                      <div className="desc f-soleto fs-22 text-white"> A professional-looking, functional website establishes
                        your authority in the medical wellness space.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-content f-soleto text-center text-white">
                  <p><strong>Ready to Transform Your Clinic’s Online Presence?</strong><br />
                    Let us create a website that reflects your clinic’s values and drives real growth.</p>
                </div>
                <div className="sc-btn ast-flex justify-content-center">
                  <a href="https://agencysite.bwpsites.com/contact/" target="_self" className="btn-bg bg-F2771A btn-size-18 fw-700 w-100">Schedule a Free Website Consultation</a>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                .service-faq {\n                    padding: 100px 0px 120px;\n                    background: no-repeat top center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/bg-faqs.jpg');\n                }\n                .faq-list {\n                    display: flex;\n                    flex-direction: column;\n                    gap: 30px;\n                    margin-top: 60px;\n                }\n                .faq-item {\n                    cursor: pointer;\n                    padding: 24px 75px 26px 26px;\n                    background: #EAF7FF;\n                    border: 2px solid #D8E7F0;\n                    border-radius: 10px;\n                    transition: 1s linear;\n                    transition-duration: 1s;\n                }\n                .faq-item:after {\n                    content: \"\";\n                    display: inline-block;\n                    background: no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/arrow-right-blue.svg');\n                    width: 14px;\n                    height: 26px;\n                    position: absolute;\n                    top: 30px;\n                    right: 25px;\n                    transition-duration: 1s;\n                }\n                .faq-item .title {}\n                .faq-item .content {\n                    display: none;\n                    margin-top: 15px;\n                    height: 0px;\n                }\n                .faq-item .content p {\n                    font-family: 'Soleto';\n                    font-size: 20px;\n                    line-height: 32px;\n                    color: #000;\n                }\n                .faq-item.active:after {\n                    transform: rotate(90deg);\n                }\n                .faq-item.active .content {\n                    display: block;\n                    height: 100%;\n                }\n                \n                @media (max-width:767px) {\n                    .service-faq {\n                        padding: 40px 0px;\n                    }\n                    .faq-list {\n                        margin-top: 24px;\n                    }\n                }\n                @media (max-width:1199px) {\n                    .service-faq {\n                        padding: 60px 0px;\n                    }\n                }\n                " }} />
            <section className="section service-faq">
              <div className="ast-container">
                <h2 className="h2-title f-soleto fw-800 color-0659A9 text-center">Frequently Asked Questions</h2>
                <div className="faq-list">
                  <div className="faq-item position-relative">
                    <h3 className="title f-soleto fw-700 color-0659A9 mb-0">Why does my medical wellness clinic need a
                      professionally designed website?</h3>
                    <div className="content">
                      <p>A professionally designed website builds trust, educates patients about your services, and makes
                        it easy for them to book appointments. It’s often a patient’s first impression of your clinic,
                        and a high-quality site sets the tone for the care they can expect.</p>
                    </div>
                  </div>
                  <div className="faq-item position-relative">
                    <h3 className="title f-soleto fw-700 color-0659A9 mb-0">How long does it take to create a new website?</h3>
                    <div className="content">
                      <p>The timeline depends on the complexity of the project, but most websites can be completed within
                        6-8 weeks. We ensure a streamlined process while maintaining attention to detail.</p>
                    </div>
                  </div>
                  <div className="faq-item position-relative">
                    <h3 className="title f-soleto fw-700 color-0659A9 mb-0">Will my website be optimized for search engines?
                    </h3>
                    <div className="content">
                      <p>Yes! All of our websites are built with SEO best practices to improve your visibility on Google
                        and other search engines. We target keywords relevant to your services and location to help
                        attract patients actively searching for treatments like yours.</p>
                    </div>
                  </div>
                  <div className="faq-item position-relative">
                    <h3 className="title f-soleto fw-700 color-0659A9 mb-0">Can you redesign my existing website?</h3>
                    <div className="content">
                      <p>Absolutely! Whether you need a refresh or a complete overhaul, we’ll transform your site into a
                        modern, conversion-focused platform that reflects your clinic’s growth and expertise.</p>
                    </div>
                  </div>
                  <div className="faq-item position-relative">
                    <h3 className="title f-soleto fw-700 color-0659A9 mb-0">What happens if I need changes after the website
                      goes live?</h3>
                    <div className="content">
                      <p>We offer ongoing support and maintenance packages to ensure your website stays up to date.
                        Whether you need minor adjustments or want to add new features, we’re here to help.</p>
                    </div>
                  </div>
                  <div className="faq-item position-relative">
                    <h3 className="title f-soleto fw-700 color-0659A9 mb-0">Will my website work on mobile devices?</h3>
                    <div className="content">
                      <p>Yes, every website we create is fully responsive, meaning it’s designed to provide an excellent
                        user experience across all devices, including smartphones and tablets.</p>
                    </div>
                  </div>
                  <div className="faq-item position-relative">
                    <h3 className="title f-soleto fw-700 color-0659A9 mb-0">How do you ensure my website stands out in a
                      competitive market?</h3>
                    <div className="content">
                      <p>Our designs focus on showcasing your clinic’s unique strengths, whether that’s your team’s
                        expertise, cutting-edge treatments, or patient success stories. We also incorporate advanced SEO
                        strategies to position you ahead of competitors in search results.</p>
                    </div>
                  </div>
                  <div className="faq-item position-relative">
                    <h3 className="title f-soleto fw-700 color-0659A9 mb-0">Can you integrate online booking or patient portals
                      into the website?</h3>
                    <div className="content">
                      <p>Yes, we can seamlessly integrate features like online booking systems, patient portals, and other
                        tools to enhance convenience for both your patients and your staff.</p>
                    </div>
                  </div>
                  <div className="faq-item position-relative">
                    <h3 className="title f-soleto fw-700 color-0659A9 mb-0">What if I don’t have professional photos or content
                      for my site?</h3>
                    <div className="content">
                      <p>No problem! We can help with high-quality stock imagery, professional copywriting, and guidance
                        for creating content that aligns with your brand.</p>
                    </div>
                  </div>
                  <div className="faq-item position-relative">
                    <h3 className="title f-soleto fw-700 color-0659A9 mb-0">What’s the cost of building a new website?</h3>
                    <div className="content">
                      <p>Website costs vary depending on the scope of the project. After a consultation, we’ll provide a
                        transparent proposal tailored to your clinic’s needs and budget.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WebsiteDevelopment

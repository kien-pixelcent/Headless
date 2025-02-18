import React from "react"
import Layout from "../../../components/layout"
import FaqItem from '../../../components/FaqItem'
import './styles.scss';

const LeadManagement = () => {

  return (
    <Layout>
      <div className="hfeed site" id="page">
        <div id="content" className="site-content">
          <div className="main-content">
            <section className="section service-banner" style={{ "background": "no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/uploads/2024/12/lead-management-banner.jpg')" }}>
              <div className="cols2-banner position-relative">
                <div className="ast-container position-relative">
                  <div className="banner-wrapper col-banner-wrapper ast-flex">
                    <div className="service-banner-content col-banner-content">
                      <h2 className="sub-title f-soleto fw-700 text-white">CRM for Medical Practices:</h2>
                      <div className="sep"><img src="https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/sep-brush-full.svg" alt /></div>
                      <h1 className="h1-title f-soleto fw-800 text-white mb-0">Automate, Connect, and Grow</h1>
                      <div className="desc f-soleto fw-500 text-white">Streamline your practice's operations, convert leads
                        into patients, and enhance patient retention—all with PracticeFlow.
                      </div>
                      <div className="sc-btn">
                        <a href="https://agencysite.bwpsites.com/contact/" target="_self" className="btn-bg bg-F2771A btn-size-26 fw-700">Schedule a Strategy Session</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ast-container-fluid position-absolute">
                  <div className="col-img">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/lead-management-img.png" alt />
                  </div>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                    .lead-about {\n                        padding: 100px 0px 140px;\n                    }\n                    .content-item {\n                        gap: 80px;\n                    }\n                    .content-item:not(:last-child) {\n                        padding-bottom: 80px;\n                        margin-bottom: 80px;\n                        border-bottom: 2px solid #D4D1D1;\n                    }\n                    .content-item .col-img {\n                        width: 655px;\n                    }\n                    .content-item .col-content {\n                        flex: 1;\n                    }\n                    .content-item:nth-child(even) figure {\n                        order: 2;\n                    }\n                    .content-item:nth-child(even) .col-content {\n                        order: 1;\n                    }\n                    .content-item .col-content .h2-title {\n                        margin-bottom: 20px;\n                        font-size: 46px;\n                        line-height: 1.2;\n                    }\n                    .content-item .col-content p {\n                        color: #000;\n                    }\n                    @media only screen and (max-width:767.98px) {\n                        .lead-about {\n                            padding: 40px 0px;\n                        }\n                        .content-item {\n                            gap: 24px;\n                        }\n                        .content-item:not(:last-child) {\n                            padding-bottom: 40px;\n                            margin-bottom: 40px;\n                        }\n                        .content-item .col-img {\n                            width: 100% !important;\n                        }\n                        .content-item:nth-child(even) figure {\n                            order: 1;\n                        }\n                        .content-item:nth-child(even) .col-content {\n                            order: 2;\n                        }\n                        .content-item .col-content p {\n                            font-size: 18px;\n                        }\n                    }\n                    @media only screen and (max-width:1199.98px) {\n                        .lead-about {\n                            padding: 60px 0px;\n                        }\n                        .content-item {\n                            gap: 24px;\n                        }\n                        .content-item .col-content .h2-title {\n                            font-size: 30px;\n                        }\n                        .content-item .col-img {\n                            width: 40%;\n                        }\n                    }\n                    " }} />
            <section className="section lead-about" style={{ "background": "no-repeat bottom/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/bg-lead-about.jpg')" }}>
              <div className="ast-container">
                <div className="cols-2 content-item content-item-1 ast-flex flex-wrap align-items-center">
                  <figure className="col-img mb-0">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/lead-management-1.png" alt="Automate Your Practice’s Lead Management" />
                  </figure>
                  <div className="col-content">
                    <h2 className="h2-title f-soleto fw-800 color-0659A9">Automate Your Practice’s Lead Management</h2>
                    <div className="content f-soleto fs-22">
                      <p>PracticeFlow’s all-in-one CRM system uses automation to ensure no lead is left behind.
                        Automatically nurture leads with personalized text, email, voicemail, and Facebook messages,
                        guiding them seamlessly through their journey from interest to appointment.</p>
                    </div>
                  </div>
                </div>
                <div className="cols-2 content-item content-item-2 ast-flex flex-wrap align-items-center">
                  <figure className="col-img mb-0">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/ai-scheduling.png" alt="AI-Powered Appointment Scheduling" />
                  </figure>
                  <div className="col-content">
                    <h2 className="h2-title f-soleto fw-800 color-0659A9">AI-Powered Appointment Scheduling</h2>
                    <div className="content f-soleto fs-22">
                      <p>Our AI-driven appointment booking tool handles scheduling and inquiries, providing a seamless and
                        efficient way for leads to book appointments. Increase response times and improve booking
                        efficiency with AI that works 24/7 to engage and schedule patients automatically.</p>
                    </div>
                  </div>
                </div>
                <div className="cols-2 content-item content-item-3 ast-flex flex-wrap align-items-center">
                  <figure className="col-img mb-0">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/streamlined-bloodwork.png" alt="Centralized Communication for Easy Follow-Up" />
                  </figure>
                  <div className="col-content">
                    <h2 className="h2-title f-soleto fw-800 color-0659A9">Centralized Communication for Easy Follow-Up</h2>
                    <div className="content f-soleto fs-22">
                      <p>Keep all communications in one place. Manage text messages, emails, phone calls, and social media
                        messages directly within the platform, ensuring that you never miss an opportunity to connect
                        with patients.</p>
                    </div>
                  </div>
                </div>
                <div className="cols-2 content-item content-item-4 ast-flex flex-wrap align-items-center">
                  <figure className="col-img mb-0">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/reputation-management.png" alt="Build & Manage Your Reputation" />
                  </figure>
                  <div className="col-content">
                    <h2 className="h2-title f-soleto fw-800 color-0659A9">Build &amp; Manage Your Reputation</h2>
                    <div className="content f-soleto fs-22">
                      <p>Online reviews drive new patient trust. With PracticeFlow, request reviews with one click and
                        automatically post positive feedback to Google. Stay on top of negative reviews and address them
                        promptly, all within the CRM dashboard.</p>
                    </div>
                  </div>
                </div>
                <div className="cols-2 content-item content-item-5 ast-flex flex-wrap align-items-center">
                  <figure className="col-img mb-0">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/dashboard.png" alt="Advanced Analytics for Smarter Decisions" />
                  </figure>
                  <div className="col-content">
                    <h2 className="h2-title f-soleto fw-800 color-0659A9">Advanced Analytics for Smarter Decisions</h2>
                    <div className="content f-soleto fs-22">
                      <p>Track the ROI of your campaigns, monitor appointment rates, and measure lead conversion all from
                        our user-friendly analytics dashboard. Get the insights you need to optimize your marketing
                        efforts and improve patient acquisition.</p>
                    </div>
                  </div>
                </div>
                <div className="cols-2 content-item content-item-6 ast-flex flex-wrap align-items-center">
                  <figure className="col-img mb-0">
                    <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/ai-scheduling2.png" alt="Effortless Appointment Management" />
                  </figure>
                  <div className="col-content">
                    <h2 className="h2-title f-soleto fw-800 color-0659A9">Effortless Appointment Management</h2>
                    <div className="content f-soleto fs-22">
                      <p>Easily schedule appointments and send reminders with automated triggers. Reduce no-shows and keep
                        patient flow smooth, allowing you to focus on providing excellent care.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                    .why-choose-md {\n                        padding: 100px 0px;\n                    }\n                    .why-choose-md .h2-title {\n                        margin-bottom: 14px;\n                    }\n                    .why-md-list {\n                        display: flex;\n                        flex-wrap: wrap;\n                        gap: 30px;\n                        margin-top: 50px;\n                    }\n                    .w-box-md {\n                        width: calc((100% - 60px)/3);\n                        border: 2px dashed #FFFFFF;\n                        padding: 30px 25px;\n                        border-radius: 20px;\n                    }\n                    .w-box-md figure {\n                        overflow: hidden;\n                        height: 70px;\n                        border-radius: 20px;\n                        margin-bottom: 20px;\n                    }\n                    .w-box-md img {\n                        object-fit: cover;\n                        height: 100%;\n                    }\n                    .w-box-md h3 {\n                        margin-bottom: 0px;\n                        text-align: center;\n                        font-size: 22px;\n                        line-height: 1.5;\n                    }\n                    .w-box-md .desc {\n                        font-size: 22px;\n                        line-height: 1.5;\n                    }\n                    .why-choose-md .bottom-content {\n                        margin-top: 30px;\n                    }\n                    .why-choose-md .bottom-content h2 {\n                        font-family: 'Soleto';\n                        font-weight: 800;\n                        font-size: 48px;\n                        line-height: 1.5;\n                        color: #fff;\n                    }\n                    .why-choose-md .bottom-content p {\n                        font-family: 'Soleto';\n                        font-weight: 800;\n                        font-size: 24px;\n                        line-height: 1.5;\n                    }\n                    .why-choose-md .sc-btn {\n                        margin-top: 50px;\n                    }\n                    .why-choose-md .sc-btn a {\n                        max-width: 800px;\n                        width: 100%;\n                    }\n                    @media only screen and (max-width:544px) {\n                        div.w-box-md {\n                            width: 100% !important;\n                            max-width: 100% !important;\n                        }\n                    }\n                    @media only screen and (max-width:767px) {\n                        .why-choose-md {\n                            padding: 40px 0px;\n                        }\n                        .why-md-list {\n                            flex-direction: column;\n                            align-items: center;\n                        }\n                        div.w-box-md {\n                            width: 100%;\n                            max-width: 435px;\n                        }\n                        .w-box-md h3 {\n                            font-size: 18px;\n                            line-height: normal;\n                        }\n                        .why-choose-md .sc-btn {\n                            margin-top: 24px;\n                        }\n                    }\n                    @media only screen and (max-width:1199.98px) {\n                        .why-choose-md .desc {\n                            font-size: 24px !important;\n                        }\n                        .why-md-list {\n                            gap: 24px;\n                            margin-top: 30px;\n                        }\n                        .w-box-md {\n                            width: calc((100% - 48px)/3);\n                        }\n                        .w-box-md figure {\n                            height: auto;\n                        }\n                        .w-box-md h3,\n                        .why-choose-md .bottom-content p {\n                            font-size: 20px;\n                            line-height: normal;\n                        }\n                        .why-choose-md .bottom-content h2 {\n                            font-size: 30px;\n                            line-height: 1.2;\n                            margin-bottom: 10px;\n                        }\n                    }\n                    " }} />
            <section className="section why-choose-md" style={{ "background": "no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/uploads/2024/12/bg-why-choose-md.jpg')" }}>
              <div className="ast-container">
                <h2 className="h2-title fs-48 f-soletoxbold text-white text-center">Why Choose PracticeFlow?</h2>
                <div className="why-md-list justify-content-center">
                  <div className="w-box-md position-relative ast-flex justify-content-center">
                    <div className="inner ast-flex flex-column text-center">
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/w-AI.svg" alt="AI Appointment Scheduling:" /></figure>
                      <h3 className="h3-title f-soleto fw-700 text-white">AI Appointment Scheduling:</h3>
                      <div className="desc text-white">Automate appointment booking and inquiries with our AI-powered tool.
                      </div>
                    </div>
                  </div>
                  <div className="w-box-md position-relative ast-flex justify-content-center">
                    <div className="inner ast-flex flex-column text-center">
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/w-automate.svg" alt="Automated Lead Engagement:" /></figure>
                      <h3 className="h3-title f-soleto fw-700 text-white">Automated Lead Engagement:</h3>
                      <div className="desc text-white">Convert leads into patients automatically with text, email, and more.
                      </div>
                    </div>
                  </div>
                  <div className="w-box-md position-relative ast-flex justify-content-center">
                    <div className="inner ast-flex flex-column text-center">
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/w-message.svg" alt="Centralized Conversations: " /></figure>
                      <h3 className="h3-title f-soleto fw-700 text-white">Centralized Conversations: </h3>
                      <div className="desc text-white">Manage all communications in one platform for streamlined follow-up.
                      </div>
                    </div>
                  </div>
                  <div className="w-box-md position-relative ast-flex justify-content-center">
                    <div className="inner ast-flex flex-column text-center">
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/w-reviews.svg" alt="Reputation Management:" /></figure>
                      <h3 className="h3-title f-soleto fw-700 text-white">Reputation Management:</h3>
                      <div className="desc text-white">Request and monitor reviews with ease.
                      </div>
                    </div>
                  </div>
                  <div className="w-box-md position-relative ast-flex justify-content-center">
                    <div className="inner ast-flex flex-column text-center">
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/w-calendar.svg" alt="Appointment Scheduling:" /></figure>
                      <h3 className="h3-title f-soleto fw-700 text-white">Appointment Scheduling:</h3>
                      <div className="desc text-white">Automatically book appointments and send reminders.
                      </div>
                    </div>
                  </div>
                  <div className="w-box-md position-relative ast-flex justify-content-center">
                    <div className="inner ast-flex flex-column text-center">
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/w-dashboard.svg" alt="Advanced Analytics:" /></figure>
                      <h3 className="h3-title f-soleto fw-700 text-white">Advanced Analytics:</h3>
                      <div className="desc text-white">Track and optimize marketing efforts with ease.
                      </div>
                    </div>
                  </div>
                  <div className="w-box-md position-relative ast-flex justify-content-center">
                    <div className="inner ast-flex flex-column text-center">
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/12/w-HIPAA.svg" alt="HIPAA Compliant:" /></figure>
                      <h3 className="h3-title f-soleto fw-700 text-white">HIPAA Compliant:</h3>
                      <div className="desc text-white">Safeguard patient data with full compliance.</div>
                    </div>
                  </div>
                </div>
                <div className="bottom-content f-soleto text-center text-white">
                  <h2>Ready to streamline your medical practice?</h2>
                  <p>Contact us today to schedule a demo and see how PracticeFlow can help you grow.</p>
                </div>
                <div className="sc-btn ast-flex justify-content-center">
                  <a href="https://agencysite.bwpsites.com/contact/" target="_self" className="btn-bg bg-F2771A btn-size-18 fw-700">Schedule A Strategy Session</a>
                </div>
              </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "\n                    .service-faq {\n                        padding: 100px 0px 120px;\n                        background: no-repeat top center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/bg-faqs.jpg');\n                    }\n                    .faq-list {\n                        display: flex;\n                        flex-direction: column;\n                        gap: 30px;\n                        margin-top: 60px;\n                    }\n                    .faq-item {\n                        cursor: pointer;\n                        padding: 24px 75px 26px 26px;\n                        background: #EAF7FF;\n                        border: 2px solid #D8E7F0;\n                        border-radius: 10px;\n                        transition: 1s linear;\n                        transition-duration: 1s;\n                    }\n                    .faq-item:after {\n                        content: \"\";\n                        display: inline-block;\n                        background: no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/arrow-right-blue.svg');\n                        width: 14px;\n                        height: 26px;\n                        position: absolute;\n                        top: 30px;\n                        right: 25px;\n                        transition-duration: 1s;\n                    }\n                    .faq-item .title {}\n                    .faq-item .content {\n                        display: none;\n                        margin-top: 15px;\n                        height: 0px;\n                    }\n                    .faq-item .content p {\n                        font-family: 'Soleto';\n                        font-size: 20px;\n                        line-height: 32px;\n                        color: #000;\n                    }\n                    .faq-item.active:after {\n                        transform: rotate(90deg);\n                    }\n                    .faq-item.active .content {\n                        display: block;\n                        height: 100%;\n                    }\n                    @media (max-width:767px) {\n                        .service-faq {\n                            padding: 40px 0px;\n                        }\n                        .faq-list {\n                            margin-top: 24px;\n                        }\n                    }\n                    @media (max-width:1199px) {\n                        .service-faq {\n                            padding: 60px 0px;\n                        }\n                    }\n                    " }} />
            <section className="section service-faq">
              <div className="ast-container">
                <h2 className="h2-title f-soleto fw-800 color-0659A9 text-center">FAQ</h2>
                <div className="faq-list">
                  <FaqItem title="How does PracticeFlow help me convert leads into patients" description="PracticeFlow automates follow-ups with prospects through text, email, voicemail, and more. This helps engage leads until they’re ready to schedule an appointment, increasing conversion rates." />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LeadManagement

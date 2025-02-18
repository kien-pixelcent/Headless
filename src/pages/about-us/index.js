import React from "react"
import AboutBanner from "../../components/AboutBanner";
import Layout from "../../components/layout"
import './styles.scss';

const AboutUs = () => {

  return (
    <Layout>
      <div className="main-content">
        <AboutBanner title="About Us" description="Dedicated to Success Through Results!"/>
        <section className="section sc-about-main-content pt-100 pb-100">
          <div className="ast-container">
            <figure className="wcm-logo"><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/11/WCM-logo-1.png" height={97} alt="Who We Are" /></figure>
            <h2 className="h2-title f-soleto fw-800 color-0659A9 fs-48">Who We Are</h2>
            <p>We are based in South Florida and have a dedicated team of talented marketing professionals working for our clients to increase their practice patient-base and revenue. </p>
            <p>Our agency provides marketing services to medical wellness practices offering cash-based medical treatments to men &amp; women looking to improve their sexual performance, restore maximum hormone levels, and improve their overall wellbeing.</p>
            <p>Over the past ten years, we’ve found that digital advertising has been the single most effective medium for a medical wellness practice to generate new patients. Combined with our proprietary PatientFlow Acceleration Program, we created a proven marketing system to generate high-quality leads and cash-paying patients for our medical clients.</p>
            <div className="a-gallery ast-flex">
              <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/11/A4M-2024-1.jpg" alt="Gallery" />
              <img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/11/A4M-2024-2.jpg" alt="Gallery" />
            </div>
            <div className="sc-btn ast-flex justify-content-center">
              <a href="https://agencysite.bwpsites.com/our-team/" target="_self" className="btn-bg bg-F2771A btn-size-18 fw-700">VIew All Team Members</a>
            </div>
          </div>
        </section>
        <section className="section sc-about-core-values" style={{ "background": "no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/uploads/2024/11/bg-core-values.png')" }}>
          <div className="ast-container">
            <h2 className="h2-title f-soleto fw-800 color-0659A9 fs-48 text-center">Our Core Values</h2>
            <div className="boxies core-boxies ast-flex justify-content-center">
              <div className="box text-center">
                <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/11/caring.svg" alt="CARING" /></figure>
                <h3 className="h3-title f-soleto fw-800 color-0659A9 fs-26 mb-0 text-center">CARING</h3>
                <div className="desc f-soleto color-0659A9 text-center">We care about one thing, and one thing only: getting new patients in your clinic. That’s it. We can help you stop wasting time chasing non-desirable, low-quality “leads”, that don't show or can’t pay.</div>
              </div>
              <div className="box text-center">
                <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/11/creative.svg" alt="CREATIVE" /></figure>
                <h3 className="h3-title f-soleto fw-800 color-0659A9 fs-26 mb-0 text-center">CREATIVE</h3>
                <div className="desc f-soleto color-0659A9 text-center">We encourage and support the creativity of all team members as it always leads to an advantage for our clients, from nicer looking website, to a smarter follow-up system, or a better performing advertising campaign.</div>
              </div>
              <div className="box text-center">
                <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/11/commit.svg" alt="COMMITTED" /></figure>
                <h3 className="h3-title f-soleto fw-800 color-0659A9 fs-26 mb-0 text-center">COMMITTED</h3>
                <div className="desc f-soleto color-0659A9 text-center">We fully commit to consistently delivering on expectations, go the extra mile to get the job done, give 100% in all that we do and approach everything with a “can-do attitude”.</div>
              </div>
            </div>
          </div>
        </section>
        <section className="section sc-about-our-mission pt-100 pb-100">
          <div className="ast-container">
            <h2 className="h2-title f-soleto fw-800 color-0659A9 fs-48 text-center">Our Mission</h2>
            <div className="desc f-soleto color-000000 fs-22 text-center">
              <p>Our mission as a medical marketing company is to assist practice owners and medical professionals in their goals in helping men and women optimize their vitality so they can accomplish even more in life using advanced medical innovations such as:</p>
            </div>
            <div className="list ast-flex justify-content-center">
              <a href="#" target="_self">Hormone Optimization</a>
              <a href="#" target="_self">Sexual Wellness Treatments</a>
              <a href="#" target="_self">Other Regenerative Therapies</a>
              <a href="#" target="_self">Medical Weight Loss</a>
            </div>
            <div className="bottom-content f-soleto color-000000 fs-22 text-center">
              <p>We do this by implementing a proven Patient Acquisition System that includes advanced marketing strategies that position doctors and medical practices in front of people looking for better health care.</p>
              <p>So in the big picture, by helping medical practices service more patients, we indirectly assist many people in getting better health and longer, more productive lives.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutUs

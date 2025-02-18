import * as React from "react"
import "./styles.scss"

const AboutBanner = ({ title, description, isTwoTitle = false }) => {
  return (
    <>
      <section className="banner" style={{ "background": "no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/uploads/2024/11/default-banner.jpg')" }}>
        <div className="ast-container">
          <div className="ast-full-width ast-flex align-items-center justify-content-center banner-inner">
            <div className="banner-content ast-flex flex-column">
              <h1 className="h1-title fw-800 f-soleto text-white text-center">{title}</h1>
              {!isTwoTitle ?
                <div className="desc text-white text-center">{description}</div>
                :
                <h1 className="h1-title fw-800 f-soleto text-white text-center">{description}</h1>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutBanner

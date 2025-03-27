import * as React from "react"
import "./styles.scss"

const AboutBanner = ({ title, description, subtitle, image, backgroundImage, button, type, isShow, }) => {
  return (
    <>
      {isShow && (
        <section class="banner " style={{ background: "no-repeat center/cover url('https://www.wellnessclinicmarketing.com/wp-content/uploads/2024/11/default-banner.jpg')" }}>
          <div class="cus-container h-100">
            <div class="ast-full-width h-100 ast-flex align-items-center justify-content-center banner-inner">
              <div class="banner-content ast-flex flex-column">
                <div class="sub-title f-soleto fw-500 text-white text-center">{subtitle}</div>
                <h1 class="h1-title fw-800 f-soleto text-white text-center">{title}</h1>
                <div class="desc text-white text-center fw-500 f-soleto">{description}</div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default AboutBanner

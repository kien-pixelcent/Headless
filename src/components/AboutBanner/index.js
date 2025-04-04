import * as React from "react"
import "./styles.scss"

const AboutBanner = ({ banner }) => {
  return (
    <>
      {banner?.isShow && banner?.type[0] === "default" && (
        <section className="banner " style={{ background: `no-repeat center/cover url('${banner?.backgroundImage?.node?.sourceUrl}')` }}>
          <div className="cus-container h-100">
            <div className="ast-full-width h-100 ast-flex align-items-center justify-content-center banner-inner">
              <div className="banner-content ast-flex flex-column">
                <div className="sub-title f-soleto fw-500 text-white text-center">{banner?.subtitle}</div>
                <h1 className="h1-title fw-800 f-soleto text-white text-center">{banner?.title}</h1>
                <div className="desc text-white text-center fw-500 f-soleto">{banner?.desc}</div>
              </div>
            </div>
          </div>
        </section>
      )} {
        banner?.isShow && banner?.type[0] === "col2" && (
          <>
            <style dangerouslySetInnerHTML={{ __html: "section.custom-cols2-banner {position: relative;height: auto;padding: 0px;}div.cols2-banner .cus-container {z-index: 2;}div.cols2-banner .ast-container-fluid {width: 100%;height: 100%;top: 0px;display: flex;align-items: flex-end;justify-content: flex-end;}div.cols2-banner .col-img {width: 50%;float: right;padding-top: 1.77vw;/*34px;*/}div.cols2-banner .col-img img {border-radius: 20px;}.col-banner-wrapper {justify-content: flex-start;padding: 7.03vw 0px 8.07vw;/*135px 0px 155px;*/}.box-infor {background: #00255B;padding: 10px;width: 100%;max-width: 22.55vw;/*433px;*/bottom: 0.98vw;/*19px;*/left: 50%;transform: translateX(-50%);}@media only screen and (min-width:922px) {section.custom-cols2-banner {height: 41.45vw;/*796px;*/}div.cols2-banner .col-img {padding-right: 2.60vw;/*50px; */text-align: right;}div.cols2-banner .col-img-inner {max-width: 40.62vw;/*780px;*/margin-left: auto;}div.cols2-banner .col-img img {height: 100%;max-height: 39.63vw;/*761px;*/}div.col-banner-content {max-width: 40.41vw;/*776px;*/}div.cols2-banner .sep {margin: 0.93vw auto 0.78vw;/*18px auto 15px;*/}div.col-banner-content .sep img {max-width: 32.5vw;/*624px;*/}div.cols2-banner .h1-title {font-size: 3.38vw;/*65px;*/line-height: 1.2;}div.cols2-banner .sub-title {font-size: 2.08vw;/*40px */line-height: 1.2;}div.cols2-banner .desc {font-size: 2.08vw;/*40px */line-height: 1.2;margin-top: 1.56vw;/*30px;*/}div.cols2-banner .sc-btn {margin-top: 2.29vw;/*44px */}div.cols2-banner .sc-btn a {min-height: 3.75vw;/*72px;*/padding: 0.41vw 1.56vw;/*8px 30px;*/}}@media only screen and (max-width:922px) {div.cols2-banner .ast-container-fluid {position: relative !important;}div.cols2-banner .col-img {width: 100%;}div.cols2-banner .col-img-inner {max-width: 512px;margin: 0px auto;}.box-infor {max-width: 433px;bottom: 24px;}.box-infor h3 {font-size: 22px !important;}.box-infor .position,div.cols2-banner .sc-btn a {font-size: 18px !important;}div.col-banner-content {max-width: 100%;}div.cols2-banner .h1-title {font-size: 42px;}div.cols2-banner .sub-title {font-size: 28px;}div.cols2-banner .desc {font-size: 20px;margin-top: 12px;}div.cols2-banner .sc-btn {margin-top: 24px;}}@media only screen and max-width:768px) {div.col-banner-content {max-width: unset;order: 2;}}@media only screen and (max-width:544px) {}" }}></style>
            <section className="banner custom-cols2-banner" style={{ background: "no-repeat center/cover url('https://www.wellnessclinicmarketing.com/wp-content/uploads/2025/03/our-method-banner.png')" }}>
              <div className="cols2-banner position-relative  h-100">
                <div className="cus-container position-relative h-100">
                  <div className="banner-wrapper col-banner-wrapper ast-flex">
                    <div className="service-banner-content col-banner-content">
                      <h1 className="h1-title f-soleto fw-800 text-white mb-0">{banner?.title}</h1>
                      <div className="sep"><img src="https://www.wellnessclinicmarketing.com/wp-content/themes/agencymarketing/assets/img/sep-brush-full.svg" alt="" /></div>
                      <div className="desc f-soleto fw-500 text-white">{banner?.desc}</div>
                      <div className="sc-btn">
                        <a href={banner?.button?.url} target={banner?.button?.target} className="btn-bg bg-F2771A btn-size-26 fw-700">{banner?.button?.title}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ast-container-fluid position-absolute px-0">
                  <div className="col-img">
                    <div className="col-img-inner position-relative">
                      <img src={banner?.image?.node?.sourceUrl} alt="" />
                      {banner?.isInforBox && (
                        <div className="box-infor position-absolute text-white text-center">
                          <h3 className="f-soleto fw-800 fs-26 text-white">{banner?.inforBox?.name}</h3>
                          <div className="f-soleto fw-800 fs-22 position">{banner?.inforBox?.position}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}


    </>
  )
}

export default AboutBanner
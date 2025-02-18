import * as React from "react"
// import "./styles.scss"

const FaqItem = ({ title, description }) => {
  return (
    <>
      <div className="faq-item position-relative">
        <h3 className="title f-soleto fw-700 color-0659A9 mb-0">{title}</h3>
        <div className="content">
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default FaqItem

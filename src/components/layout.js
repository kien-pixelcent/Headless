import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/main.min.scss"
import "../styles/lightbox.min.css"
import "../styles/slick.css"
import "../styles/main.scss"
import "../styles/customStyle.scss"
import "../styles/dashicons.min.css"
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet"

const DefaultLayout = ({children}) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout

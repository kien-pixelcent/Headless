import React from "react"
import "../styles/main.min.scss"
import "../styles/lightbox.min.css"
import "../styles/slick.css"
import "../styles/main.scss"
import "../styles/customStyle.scss"
import "../styles/dashicons.min.css"
import Header from './Header'
import Footer from './Footer'

const DefaultLayout = ({children}) => {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout

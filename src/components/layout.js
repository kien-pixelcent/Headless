import React from "react"
import "../styles/main.min.scss"
import "../styles/lightbox.min.css"
import "../styles/slick.css"
import "../styles/main.scss"
import "../styles/customStyle.scss"
// import "../styles/dashicons.min.css"
import Header from './Header'
import Footer from './Footer'

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

const DefaultLayout = ({children}) => {
  return (
    <div>
      <Header />
        {children}
      <Footer />
      {AddLibrary("js/slick.min.js")}
    </div>
  )
}

export default DefaultLayout

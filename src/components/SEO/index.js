import React from "react"
import { Helmet } from "react-helmet"
import parse from 'html-react-parser';
const SEO = ({
    seoData,
}) => {
    console.log('seoData', seoData)
    if (!seoData) {
        return null
    }

    return (
        <Helmet>{parse(seoData)}</Helmet>
    )
}

export default SEO
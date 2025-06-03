import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({
    seoData,
}) => {
    if (!seoData) {
        return null
    }

    return (
        <Helmet>{seoData}</Helmet>
    )
}

export default SEO
import React from "react"
import { Helmet } from "react-helmet"
import parse from 'html-react-parser';
const SEO = ({
    seoData,
}) => {
    if (!seoData) {
        return null
    }

    return (
        <Helmet>
            {parse(seoData)}
            <link rel="icon" href="/favicon.png" sizes="32x32" />
            <link rel="icon" href="/favicon.png" sizes="192x192" />
            <link rel="apple-touch-icon" href="/favicon.png" />
            <meta name="msapplication-TileImage" content="/favicon.png" />
        </Helmet>
    )
}

export default SEO
const path = require(`path`)
const remark = require(`remark`)
const html = require(`remark-html`)
const fetch = require('node-fetch')

const WP_BASE_URL = process.env.REACT_APP_BASE_URL_SITE || 'https://agencysitestaging.mystagingwebsite.com'
const siteBaseUrl = process.env.REACT_APP_BASE_URL

async function fetchSeoData(url) {
  try {
    const response = await fetch(`${WP_BASE_URL}/wp-json/rankmath/v1/getHead?url=${encodeURIComponent(url)}`)
    const data = await response.json()

    if (data.success && data.head) {
      return parseSeoHead(data.head)
    }
    return null
  } catch (error) {
    console.error('Error fetching SEO data:', error)
    return null
  }
}

// Function để parse HTML head và extract SEO data
function parseSeoHead(headHtml) {
  const cheerio = require('cheerio')
  const $ = cheerio.load(headHtml)

  return {
    title: $('title').text() || '',
    description: $('meta[name="description"]').attr('content') || '',
    canonical: $('link[rel="canonical"]').attr('href') || '',
    ogTitle: $('meta[property="og:title"]').attr('content') || '',
    ogDescription: $('meta[property="og:description"]').attr('content') || '',
    ogImage: $('meta[property="og:image"]').attr('content') || '',
    ogUrl: $('meta[property="og:url"]').attr('content') || '',
    twitterCard: $('meta[name="twitter:card"]').attr('content') || '',
    twitterTitle: $('meta[name="twitter:title"]').attr('content') || '',
    twitterDescription: $('meta[name="twitter:description"]').attr('content') || '',
    robots: $('meta[name="robots"]').attr('content') || '',
    schemaJson: $('script[type="application/ld+json"]').html() || ''
  }
}


exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      cms {
        pages(where: {status: PUBLISH}, first: 99) {
          edges {
            node {
              id
              slug
              uri
              title
              flexibleContentHtml
              isFrontPage
              date
            }
          }
        }
        services(first: 99) {
          nodes {
            id
            slug
            uri
            title
            flexibleContentHtml
            date
          }
        }
        events(first: 99) {
          nodes {
            id
            slug
            uri
            title
            flexibleContentHtml
            date
          }
        }
        posts(first: 99) {
          nodes {
            id
            slug
            uri
            title
            flexibleContentHtml
            date
          }
        }
      }
    }
  `)


  // Duyệt và thay thế trong pages
  const pages = data.cms.pages.edges.map(({ node }) => ({
    ...node,
    flexibleContentHtml: node.flexibleContentHtml,
  }));

  // Duyệt và thay thế trong services
  const services = data.cms.services.nodes.map((node) => ({
    ...node,
    flexibleContentHtml: node.flexibleContentHtml,
  }));
  const events = data.cms.events.nodes.map((node) => ({
    ...node,
    flexibleContentHtml: node.flexibleContentHtml,
  }));
  const blogs = data.cms.posts.nodes.map((node) => ({
    ...node,
    flexibleContentHtml: node.flexibleContentHtml,
  }));

  pages.forEach(page => {
    if (!page.isFrontPage) {
      actions.createPage({
        path: page.slug,
        component: path.resolve(`./src/components/templates/dynamicPages.js`),
        context: {
          ...page
        },
      })
    }
  })
  services.forEach(service => {
    actions.createPage({
      path: `service/${service.slug}`,
      component: path.resolve(`./src/components/templates/dynamicPages.js`),
      context: {
        ...service
      },
    })
  })

  events.forEach(event => {
    actions.createPage({
      path: `events/${event.slug}`,
      component: path.resolve(`./src/components/templates/dynamicPages.js`),
      context: {
        ...event
      },
    })
  })

  blogs.forEach(blog => {
    actions.createPage({
      path: `blog/${blog.slug}`,
      component: path.resolve(`./src/components/templates/dynamicPages.js`),
      context: {
        ...blog
      },
    })
  })




  // const { createRedirect } = actions;

  // createRedirect({
  //   fromPath: '/',
  //   toPath: '/',
  //   isPermanent: true,
  //   redirectInBrowser: true,
  // });
}
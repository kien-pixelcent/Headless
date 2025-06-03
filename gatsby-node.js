const path = require(`path`)
const remark = require(`remark`)
const html = require(`remark-html`)
const fetch = require('node-fetch')



exports.createPages = async ({ actions, graphql }) => {
  const WP_BASE_URL = process.env.REACT_APP_BASE_URL_SITE || 'https://agencysitestaging.mystagingwebsite.com'

  async function fetchSeoData({ url }) {
    try {
      const response = await fetch(`https://www.wellnessclinicmarketing.com/wp-json/rankmath/v1/getHead?url=${encodeURIComponent(url)}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; GatsbyJS/4.0; +https://agencysitestaging.mystagingwebsite.com/)',
          'Accept': 'application/json',
        },
        timeout: 15000,
      })

      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        console.warn(`Non-JSON response for ${url}`)
        return null
      }

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status} for ${url}`)
        return null
      }

      const data = await response.json()
      return data.success && data.head ? data.head : null
    } catch (error) {
      console.error(`Error fetching SEO data for ${url}:`, error.message)
      return null
    }
  }


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

  // truyền seo cho home
  const homeDataSeo = await fetchSeoData({
    url: `https://www.wellnessclinicmarketing.com`,
  });

  actions.createPage({
    path: `/`,
    component: path.resolve(`./src/pages/home/index.js`), // Point đến file Home hiện tại
    context: {
      seoData: homeDataSeo // Truyền homeDataSeo vào context
    },
  });


  // Duyệt và thay thế trong pages
  const pages = await Promise.all(
    data.cms.pages.edges.map(async ({ node }) => {
      return {
        ...node,
        flexibleContentHtml: node.flexibleContentHtml,
        seoData: await fetchSeoData({
          url: `https://www.wellnessclinicmarketing.com${node.uri}`,
        }),
      }
    })
  )

  // Duyệt và thay thế trong services
  const services = await Promise.all(
    data.cms.services.nodes.map(async (node) => {
      return {
        ...node,
        flexibleContentHtml: node.flexibleContentHtml,
        seoData: await fetchSeoData({
          url: `https://www.wellnessclinicmarketing.com${node.uri}`,
        }),
      }
    })
  );

  // Duyệt và thay thế trong events
  const events = await Promise.all(
    data.cms.events.nodes.map(async (node) => {
      return {
        ...node,
        flexibleContentHtml: node.flexibleContentHtml,
        seoData: await fetchSeoData({
          url: `https://www.wellnessclinicmarketing.com${node.uri}`,
        }),
      }
    })
  );

  // Duyệt và thay thế trong posts (blogs)
  const blogs = await Promise.all(
    data.cms.posts.nodes.map(async (node) => {
      return {
        ...node,
        flexibleContentHtml: node.flexibleContentHtml,
        seoData: await fetchSeoData({
          url: `https://www.wellnessclinicmarketing.com${node.uri}`,
        }),
      }
    })
  );

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
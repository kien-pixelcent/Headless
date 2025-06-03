const path = require(`path`)
const remark = require(`remark`)
const html = require(`remark-html`)
const fetch = require('node-fetch')

const WP_BASE_URL = process.env.REACT_APP_BASE_URL_SITE || 'https://agencysitestaging.mystagingwebsite.com'
const siteBaseUrl = process.env.REACT_APP_BASE_URL

// async function fetchSeoData(url) {
//   try {
//     const apiUrl = `${WP_BASE_URL}/wp-json/rankmath/v1/getHead?url=${encodeURIComponent(url)}`;
//     console.log('Fetching SEO data from:', apiUrl);
    
//     const response = await fetch(apiUrl);
    
//     // Check if response is actually JSON
//     const contentType = response.headers.get('content-type');
//     if (!contentType || !contentType.includes('application/json')) {
//       console.error(`API returned non-JSON response (${contentType}) for URL: ${url}`);
//       console.error('Response status:', response.status);
//       const text = await response.text();
//       console.error('Response body preview:', text.substring(0, 200));
//       return null;
//     }
    
//     if (!response.ok) {
//       console.error(`HTTP ${response.status} error for SEO data request: ${url}`);
//       return null;
//     }
    
//     const data = await response.json();

//     if (data.success && data.head) {
//       console.log('SEO data fetched successfully for:', url);
//       return data.head;
//     }
    
//     console.warn('SEO data fetch unsuccessful or missing head for:', url);
//     return null;
//   } catch (error) {
//     console.error('Error fetching SEO data for URL:', url, error.message);
//     return null;
//   }
// }


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
  // const pages = data.cms.pages.edges.map(({ node }) => ({
  //   ...node,
  //   flexibleContentHtml: node.flexibleContentHtml,
  // }));
  const pages = await Promise.all(
    data.cms.pages.edges.map(async ({ node }) => {
      return {
        ...node,
        flexibleContentHtml: node.flexibleContentHtml,
      }
    })
  )

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
const path = require(`path`)
const remark = require(`remark`)
const html = require(`remark-html`)

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
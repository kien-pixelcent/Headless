const path = require(`path`)
const remark = require(`remark`)
const html = require(`remark-html`)
const dateformat = require(`dateformat`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const { makeBlogPath } = require(`./src/utils`)

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
        services {
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

  data.cms.pages.edges.forEach(page => {
    if (!page.node.isFrontPage) {
      actions.createPage({
        path: page.node.slug,
        component: path.resolve(`./src/pages/dynamicPages.js`),
        context: {
          ...page.node
        },
      })
    }
  })
  data.cms.services.nodes.forEach(service => {
    actions.createPage({
      path: `service/${service.slug}`,
      component: path.resolve(`./src/components/events/eventsDetail.js`),
      context: {
        ...service
      },
    })
  })
}

// exports.createResolvers = ({
//   actions,
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
//   reporter,
// }) => {
//   const { createNode } = actions
//   createResolvers({
//     GraphCMS_BlogPost: {
//       createdAt: {
//         type: `String`,
//         resolve(source, args, context, info) {
//           return dateformat(source.date, `fullDate`)
//         },
//       },
//       post: {
//         resolve(source, args, context, info) {
//           return remark().use(html).processSync(source.post).contents
//         },
//       },
//     },
//     GraphCMS_Asset: {
//       imageFile: {
//         type: `File`,
//         // projection: { url: true },
//         resolve(source, args, context, info) {
//           return createRemoteFileNode({
//             url: source.url,
//             cache,
//             createNode,
//             createNodeId,
//           })
//         },
//       },
//     },
//   })
// }

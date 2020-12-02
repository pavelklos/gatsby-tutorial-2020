const path = require("path")

// create pages dynamically : MUST RETURN Promise !!!
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      products: allContentfulProduct(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          slug
        }
      }
    }
  `)
  console.log("######## [graphql] GetProducts ########")
  console.log(JSON.stringify(result))
  console.log("######## template absolute path ########")
  console.log(path.resolve(`src/templates/product-template.js`))
  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/templates/product-template.js`), // absolute path
      context: {
        slug: product.slug, // props.pageContext.slug for template
      },
    })
  })
}

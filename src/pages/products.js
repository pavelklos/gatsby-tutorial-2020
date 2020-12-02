import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"
console.log("products.module.css:", styles)

// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>
const ComponentName = ({ data }) => {
  // console.log(data)
  // return <pre>{JSON.stringify(data, null, 4)}</pre>
  // const { allContentfulProduct: { nodes: { title, slug, price, image }}} = data
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log("products", products)
  return (
    <Layout>
      <h1>products</h1>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title} />
              <h3>
                {product.title} <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>more details</Link>
              <p>ID: {product.id}</p>
            </article>
          )
        })}
      </section>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        title
        info {
          info
        }
        slug
        price
        image {
          fluid(maxWidth: 2000) {
            ...GatsbyContentfulFluid
          }
        }
        id
      }
    }
  }
`

export default ComponentName

// import React, { Component } from "react"
// import Layout from "../components/Layout"
// import styles from "../components/products.module.css"
// console.log("products.module.css:", styles)

// export default class products extends Component {
//   render() {
//     return (
//       <Layout>
//         <div className={styles.page}>
//           <h1>This is our 'Products' page</h1>
//           <p className="products-text">
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
//             faucibus mi quis velit. Fusce tellus. Sed convallis magna eu sem.
//             Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.
//             Aliquam ornare wisi eu metus. In rutrum. Duis sapien nunc, commodo
//             et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant
//             morbi tristique senectus et netus et malesuada fames ac turpis
//             egestas. Suspendisse nisl. In sem justo, commodo ut, suscipit at,
//             pharetra vitae, orci.
//           </p>
//           <p className={styles.text}>
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
//             faucibus mi quis velit. Fusce tellus. Sed convallis magna eu sem.
//             Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.
//             Aliquam ornare wisi eu metus. In rutrum. Duis sapien nunc, commodo
//             et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant
//             morbi tristique senectus et netus et malesuada fames ac turpis
//             egestas. Suspendisse nisl. In sem justo, commodo ut, suscipit at,
//             pharetra vitae, orci.
//           </p>
//         </div>
//       </Layout>
//     )
//   }
// }

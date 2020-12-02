import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"

// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

const ComponentName = ({ data }) => {
  const {
    product: {
      title,
      price,
      image: { fixed },
      info: { info },
    },
  } = data
  console.log("product:", data.product)
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">back to products...</Link>
        <h1>single product : {title}</h1>
      </div>
      <section className="single-product">
        <article>
          {/* <Image fixed={data.product.image.fixed} /> */}
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>add to cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fixed(width: 400) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName

// import React from "react"

// const productTemplate = props => {
//   console.log("props:", props)
//   return (
//     <div>
//       <h1>hello from product template</h1>
//       <h2>{props.pageContext.slug}</h2>
//     </div>
//   )
// }

// export default productTemplate

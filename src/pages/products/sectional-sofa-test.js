import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"

// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>
const ComponentName = ({ data }) => {
  return (
    <Layout>
      <h1>sectional-sofa-test</h1>
      <h2>{data.product.title}</h2>
      <h2>${data.product.price}</h2>
    </Layout>
  )
}

export const query = graphql`
  {
    product: contentfulProduct(slug: { eq: "sectional-sofa" }) {
      title
      price
    }
  }
`

export default ComponentName

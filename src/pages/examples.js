import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/Layout"
import {graphql} from "gatsby"

// const examples = () => {
// const examples = (props) => {
const examples = ({data}) => {
  // console.log('props:', props)
  console.log('data:', data)
  const {site:{info:{title, author, person: {name}}}} = data
  return (
    <Layout>
      <h4>PAGE [/pages/examples.js]</h4>
      <hr/>
      <h2>[Header.js] useStaticQuery 'HOOK'</h2>
      <Header />
      <hr />
      <h2>[HeaderStatic.js] StaticQuery 'COMPONENT'</h2>
      <HeaderStatic />
      <hr />
      <h2>Page Query</h2>
      <h1>title: {title}</h1>
      <h1>name: {name}</h1>
      <h1>author: {author}</h1>
    </Layout>
  )
}

export const data = graphql`
  query SecondQuery {
    site {
      buildTime
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`

export default examples

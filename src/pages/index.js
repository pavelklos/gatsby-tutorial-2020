import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/button"

export default () => (
  <Layout>
    <h1
      style={{
        color: "crimson",
        border: "2px solid",
        backgroundColor: "lavenderblush",
        textTransform: "uppercase",
      }}
    >
      Hello from Gatsby
    </h1>
    <h1>hello world</h1>
    <ExampleButton>click me</ExampleButton>
  </Layout>
)

// export default function Home() {
//   return <div>Hello world! [{new Date().toLocaleTimeString()}]</div>
// }

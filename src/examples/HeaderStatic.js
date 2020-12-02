import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
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
    `}
    // render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
    render={data => (
      <div>
        <h1>Title: {data.site.info.title}</h1>
        <h1>Name: {data.site.info.person.name}</h1>
        <h4>Description: {data.site.info.description}</h4>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </div>
    )}
  ></StaticQuery>
)

export default ComponentName

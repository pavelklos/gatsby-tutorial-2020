import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"
console.log("blog.module.css:", styles)

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our 'Blog' page</h1>
        <p className="blog-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
          faucibus mi quis velit. Fusce tellus. Sed convallis magna eu sem.
          Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.
          Aliquam ornare wisi eu metus. In rutrum. Duis sapien nunc, commodo et,
          interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Suspendisse nisl. In sem justo, commodo ut, suscipit at, pharetra
          vitae, orci.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
          faucibus mi quis velit. Fusce tellus. Sed convallis magna eu sem.
          Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.
          Aliquam ornare wisi eu metus. In rutrum. Duis sapien nunc, commodo et,
          interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Suspendisse nisl. In sem justo, commodo ut, suscipit at, pharetra
          vitae, orci.
        </p>
      </div>
    </Layout>
  )
}

export default blog

// // [rafce] Arrow Function Export Component
// import React from 'react'
// const blog = () => {
//     return (
//         <div>rafce</div>
//     )
// }
// export default blog

// // [rfc] Functional Component
// import React from 'react'
// export default function blog() {
//     return (
//         <div>rfc</div>
//     )
// }

// // [rcc] Class Based Component
// import React, { Component } from 'react'
// export default class blog extends Component {
//     render() {
//         return (
//             <div>rcc</div>
//         )
//     }
// }

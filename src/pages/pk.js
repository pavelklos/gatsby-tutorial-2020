import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const pk = () => {
  return (
    <Layout>
      <h1>'Pavel Klos'</h1>
      <a href="/">Home Page by a.href</a>
      <br />
      <a href="https://www.gatsbyjs.com/">Gatsby Docs by a.href</a>
      <br />
      <Link to="/blog/">Blog Page by Link.to</Link>
      <br />
      <h2 className="testColor">Roboto Condensed '300' [Google Fonts]</h2>
      <h3 className="testColor">
        A, Á, B, C, Č, D, Ď, E, É, Ě, F, G, H, CH, I, Í, J, K, L, M, N, Ň, O, Ó,
        P, Q, R, Ř, S, Š, T, Ť, U, Ú, Ů, V, W, X, Y, Ý, Z, Ž
      </h3>
      <h3 className="testColor">
        a, á, b, c, č, d, ď, e, é, ě, f, g, h, ch, i, í, j, k, l, m, n, ň, o, ó,
        p, q, r, ř, s, š, t, ť, u, ú, ů, v, w, x, y, ý, z, ž
      </h3>
    </Layout>
  )
}

export default pk

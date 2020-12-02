import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/products/">Products</Link>
        </li>
        <li>
          <Link to="/products/latest">Latest Products</Link>
        </li>
        <li>
          <Link to="/products/sectional-sofa-test">Test Product</Link>
        </li>
        <li>
          <Link to="/pk/">Pavel Klos</Link>
        </li>
        <li>
          <Link to="/examples/">Examples</Link>
        </li>
        <li>
          <Link to="/images/">Images</Link>
        </li>
        <li>
          <Link to="/about/">About [404]</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

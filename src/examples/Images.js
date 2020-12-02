import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import imgDesert1 from "../images/desert-1.jpg" // REACT IMPORT IMAGE (4.32 MB)
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixedBeach1: file(relativePath: { eq: "beach-1.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluidBeach1: file(relativePath: { eq: "beach-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fixedCamera1: file(relativePath: { eq: "camera-1.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluidCamera1: file(relativePath: { eq: "camera-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fixedDesert1: file(relativePath: { eq: "desert-1.jpg" }) {
      childImageSharp {
        fixed(width: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluidDesert1: file(relativePath: { eq: "desert-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={imgDesert1} width="100%" alt="basic" />
      </article>
      <article className="single-image">
        <h3>fixed image [blur]</h3>
        <Image fixed={data.fixedDesert1.childImageSharp.fixed} alt="fixed" />
      </article>
      <article className="single-image">
        <h3>fluid image [svg]</h3>
        <Image fluid={data.fluidDesert1.childImageSharp.fluid} alt="fluid" />
        <div className="small">
          <Image fluid={data.fluidDesert1.childImageSharp.fluid} alt="small" />
        </div>
      </article>
      <article className="single-image">
        <Image fluid={data.fluidBeach1.childImageSharp.fluid} alt="fluid" />
      </article>
      <article className="single-image">
        <Image fluid={data.fluidCamera1.childImageSharp.fluid} alt="fluid" />
      </article>
    </section>
  )
}

export default Images

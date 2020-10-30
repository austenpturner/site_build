import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

const Image1 = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "annie-spratt-dWYU3i-mqEo-unsplash.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)

  if (!data?.file?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <img src={data.file.childImageSharp.fluid.src} />
}

export default Image1

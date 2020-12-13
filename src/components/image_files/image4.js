import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Image4 = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "writting.jpg" }) {
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
  };

  return <img src={data.file.childImageSharp.fluid.src} alt="writting"/>
};

export default Image4;
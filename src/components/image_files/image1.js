import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Image1 = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "coffee-shop.jpg" }) {
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

  return <img src={data.file.childImageSharp.fluid.src} alt=""/>
};

export default Image1;

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const ChatImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "placeholder-product-img.png" }) {
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

  return <img src={data.file.childImageSharp.fluid.src} aria-hidden={true}/>
};

export default ChatImg;
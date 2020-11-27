import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const ProductImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "product-img.png" }) {
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

  return <img src={data.file.childImageSharp.fluid.src} alt="product image" aria-hidden={true}/>
};

export default ProductImg;
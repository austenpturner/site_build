import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const NameLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "name-logo.png" }) {
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

  return <img src={data.file.childImageSharp.fluid.src} alt="Inscope logo"/>
};

export default NameLogo;
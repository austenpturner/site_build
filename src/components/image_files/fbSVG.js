import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const FacebookSVG = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "facebook.svg" }) {
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

  	return <img src={data.file.childImageSharp.fluid.src} alt="Facebook"/>
};

export default FacebookSVG;
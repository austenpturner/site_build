import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const FacebookColorSVG = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "facebook-color.png" }) {
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

  	return <img src={data.file.childImageSharp.fluid.src} />
};

export default FacebookColorSVG;
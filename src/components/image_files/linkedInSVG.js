import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const LinkedInSVG = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "linkedin.svg" }) {
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

  	return <img src={data.file.childImageSharp?.fluid.src} alt="LinkedIn"/>
};

export default LinkedInSVG;
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const TwitterSVG = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "twitter.svg" }) {
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

  	return <img src={data.file.childImageSharp?.fluid.src} />
};

export default TwitterSVG;
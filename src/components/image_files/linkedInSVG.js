import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const LinkedInSVG = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "linkedin.svg" }) {
				publicURL
			}
		}
	`)

  	if (!data?.file?.publicURL) {
    	return <div>Picture not found</div>
  	};

  	return <img src={data.file.publicURL} alt="LinkedIn"/>
};

export default LinkedInSVG;
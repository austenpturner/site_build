import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const FacebookColorSVG = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "facebook-color.png" }) {
				publicURL
			}
		}
	`)

  	if (!data?.file?.publicURL) {
    	return <div>Picture not found</div>
  	};

  	return <img src={data.file.publicURL} />
};

export default FacebookColorSVG;
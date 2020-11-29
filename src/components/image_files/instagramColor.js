import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const InstagramColorSVG = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "instagram-color.svg" }) {
				publicURL
			}
		}
	`)

  	if (!data?.file?.publicURL) {
    	return <div>Picture not found</div>
  	};

  	return <img src={data.file.publicURL} />
};

export default InstagramColorSVG;
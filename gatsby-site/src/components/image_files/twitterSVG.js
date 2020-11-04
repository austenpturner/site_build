import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const TwitterSVG = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "twitter.svg" }) {
				publicURL
			}
		}
	`)

  	console.log(data);

  	if (!data?.file?.publicURL) {
    	return <div>Picture not found</div>
  	};

  	return <img src={data.file.publicURL} />
};

export default TwitterSVG;
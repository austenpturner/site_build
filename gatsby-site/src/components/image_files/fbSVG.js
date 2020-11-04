import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const FacebookSVG = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "facebook.svg" }) {
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

export default FacebookSVG;
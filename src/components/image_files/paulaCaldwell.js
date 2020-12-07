import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const PaulaCaldwellImage = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "Paula-Caldwell.jpg" }) {
				publicURL
			}
		}
	`)

  	if (!data?.file?.publicURL) {
    	return <div>Picture not found</div>
  	};

  	return <img src={data.file.publicURL} />
};

export default PaulaCaldwellImage;
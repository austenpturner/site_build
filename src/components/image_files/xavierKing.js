import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const XavierKingImage = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "Xavier-King.png" }) {
				publicURL
			}
		}
	`)

  	if (!data?.file?.publicURL) {
    	return <div>Picture not found</div>
  	};

  	return <img src={data.file.publicURL} alt="Team Member"/>
};

export default XavierKingImage;
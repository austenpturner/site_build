import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const EliotSkinnerImage = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "Eliot-Skinner.jpg" }) {
				publicURL
			}
		}
	`)

  	if (!data?.file?.publicURL) {
    	return <div>Picture not found</div>
  	};

  	return <img src={data.file.publicURL} alt="Team Member"/>
};

export default EliotSkinnerImage;
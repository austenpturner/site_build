import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const AllanCaoImage = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "Allan-Cao.jpg" }) {
				publicURL
			}
		}
	`)

  	if (!data?.file?.publicURL) {
    	return <div>Picture not found</div>
  	};

  	return <img src={data.file.publicURL} />
};

export default AllanCaoImage;
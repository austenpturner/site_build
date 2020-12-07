import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const DustinJacksonImage = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "Dustin-Guy-Jackson.jpg" }) {
				publicURL
			}
		}
	`)

  	if (!data?.file?.publicURL) {
    	return <div>Picture not found</div>
  	};

  	return <img src={data.file.publicURL} />
};

export default DustinJacksonImage;
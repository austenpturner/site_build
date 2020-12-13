import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const MichaelSkinnerImage = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "Michael-Skinner.jpg" }) {
				childImageSharp {
					fluid {
					  src
					}
				}
			}
		}
	`)

  	if (!data?.file?.childImageSharp?.fluid) {
    	return <div>Picture not found</div>
  	};

  	return <img src={data.file.childImageSharp?.fluid.src} alt="Team Member"/>
};

export default MichaelSkinnerImage;
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const PaulaCaldwellImage = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "Paula-Caldwell.jpg" }) {
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

  	return <img src={data.file.childImageSharp?.fluid.src} alt="Team Memeber"/>
};

export default PaulaCaldwellImage;
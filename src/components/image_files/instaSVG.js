import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const InstragramSVG = () => {
  	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "instagram.svg" }) {
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

  	return <img src={data.file.childImageSharp.fluid.src} alt="Instagram"/>
};

export default InstragramSVG;
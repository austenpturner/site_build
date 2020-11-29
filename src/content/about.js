import Image3 from "../components/image_files/image3";
import Image4 from "../components/image_files/image4";
import FacebookColorSVG from "../components/image_files/facebookColor";
import LinkedInColorSVG from "../components/image_files/linkedInColor";
import InstagramColorSVG from "../components/image_files/instagramColor";
import FacebookSVG from "../components/image_files/fbSVG";
import LinkedInSVG from "../components/image_files/linkedInSVG";
import InstagramSVG from "../components/image_files/instaSVG";

const aboutContent = {
    bannerContent: {
        heading: "Deeply Commited",
        subheading: "We Are Driven By Values",
        info: "Inscope is a powerful sales and recruiting platform that combines messaging with human centered artificial intelligence while seamlessly integrating with your CRM or applicant tracking system.",
    },
    bannerLinks: [
        {
            "to": "/contact",
            "title": "Schedule A Demo"
        },
        {
            "to": "/contact",
            "title": "Contact Us"
        }
    ],
    listInfo: [
        {
            content: "Super Efficient"
        },
        {
            content: "Deeply Commited"
        },
        {
            content: "Highly Skilled"
        },
    ],
    sectionContent: [
        {
            num: 1,
            heading: "What is inscope.ai?",
            content: "Inscope is a powerful sales and recruiting platform that combines messaging with human centered artificial intelligence while seamlessly integrating with your CRM or applicant tracking system.",
            links: [
              {
                to: "/about",
                title: "Learn More"
              }
            ],
            imgComponent: Image3,
        },
        {
            num: 2,
            heading: "Want to join our team?",
            content: "We are a fast-growing Seattle based start-up. We would love for you to potentially join our fast-paced, deeply collaborative agile team.",
            links: [
              {
                to: "/contact",
                title: "Let's Connect"
              }
            ],
            imgComponent: Image4,
        },
    ],
    teamContent: {
        header: "Our Team",
        teamMemebers: [
            {
                imgComponent: Image4,
                name: "Mary Poppins",
                title: "Software Engineer",
                socialLinks: [
                    {
                        imgComponent: LinkedInColorSVG,
                        link: "",
                    },
                    {
                        imgComponent: FacebookColorSVG,
                        link: "",
                    },
                    {
                        imgComponent: InstagramColorSVG,
                        link: "",
                    },
                ],
            },
            {
                imgComponent: Image4,
                name: "Mary Poppins",
                title: "Software Engineer",
                socialLinks: [
                    {
                        imgComponent: LinkedInColorSVG,
                        link: "",
                    },
                    {
                        imgComponent: FacebookColorSVG,
                        link: "",
                    },
                    {
                        imgComponent: InstagramColorSVG,
                        link: "",
                    },
                ],
            },
            {
                imgComponent: Image4,
                name: "Mary Poppins",
                title: "Software Engineer",
                socialLinks: [
                    {
                        imgComponent: LinkedInColorSVG,
                        link: "",
                    },
                    {
                        imgComponent: FacebookColorSVG,
                        link: "",
                    },
                    {
                        imgComponent: InstagramColorSVG,
                        link: "",
                    },
                ],
            },
            {
                imgComponent: Image4,
                name: "Mary Poppins",
                title: "Software Engineer",
                socialLinks: [
                    {
                        imgComponent: LinkedInColorSVG,
                        link: "",
                    },
                    {
                        imgComponent: FacebookColorSVG,
                        link: "",
                    },
                    {
                        imgComponent: InstagramColorSVG,
                        link: "",
                    },
                ],
            },
        ],
    },
};

export default aboutContent;
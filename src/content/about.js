import Image3 from "../components/image_files/image3";
import Image4 from "../components/image_files/image4";
import LinkedInColorSVG from "../components/image_files/linkedInColor";
import DustinJacksonImage from "../components/image_files/dustinJackson";
import BuryHuangImage from "../components/image_files/buryHuang";
import MollyLongImage from "../components/image_files/mollyLong";
import EliotSkinnerImage from "../components/image_files/eliotSkinner";
import MichaelSkinnerImage from "../components/image_files/michaelSkinner";
import XavierKingImage from "../components/image_files/xavierKing";
import AustenTurnerImage from "../components/image_files/austenTurner";

const aboutContent = {
    bannerContent: {
        heading: "Deeply Commited",
        subheading: "We Are Driven By Values",
        info: "Inscope is a powerful sales and recruiting platform that combines messaging with human centered artificial intelligence while seamlessly integrating with your CRM or applicant tracking system.",
    },
    bannerLinks: [
        {
            "to": "/",
            "title": "Learn More"
        },
        {
            "to": "/contact",
            "title": "Get In Touch"
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
                imgComponent: MichaelSkinnerImage,
                name: "Michael Skinner",
                titles: [
                    "Founding Partner", 
                    "Memeber of Technical Staff",
                ],
                socialLinks: [
                    {
                        imgComponent: LinkedInColorSVG,
                        link: "",
                    },
                ],
            },
            {
                imgComponent: EliotSkinnerImage,
                name: "Eliot Skinner",
                titles: [
                    "Founding Partner", 
                    "Memeber of Technical Staff",
                ],
                socialLinks: [
                    {
                        imgComponent: LinkedInColorSVG,
                        link: "",
                    },
                ],
            },
            {
                imgComponent: BuryHuangImage,
                name: "Bury Huang",
                titles: [
                    "Founding Partner", 
                    "Memeber of Technical Staff",
                ],
                socialLinks: [
                    {
                        imgComponent: LinkedInColorSVG,
                        link: "",
                    },
                ],
            },
            {
                imgComponent: MollyLongImage,
                name: "Molly Long",
                titles: [
                    "Memeber of Technical Staff",
                ],
                socialLinks: [
                    {
                        imgComponent: LinkedInColorSVG,
                        link: "",
                    },
                ],
            },
            {
                imgComponent: XavierKingImage,
                name: "Xavier King",
                titles: [
                    "Memeber of Technical Staff",
                ],
                socialLinks: [
                    {
                        imgComponent: LinkedInColorSVG,
                        link: "",
                    },
                ],
            },
            {
                imgComponent: DustinJacksonImage,
                name: "Dustin Jackson",
                titles: [
                    "Memeber of Technical Staff",
                ],
                socialLinks: [
                    {
                        imgComponent: LinkedInColorSVG,
                        link: "",
                    },
                ],
            },
            {
                imgComponent: AustenTurnerImage,
                name: "Austen Turner",
                titles: [
                    "Memeber of Technical Staff",
                ],
                socialLinks: [
                    {
                        imgComponent: LinkedInColorSVG,
                        link: "",
                    },
                ],
            },
        ],
    },
};

export default aboutContent;
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
    heading: "Deeply Commited",
    subheading: "We Are Driven By Values",
    info: "Inscope is an intelligent video messaging platform designed by sales people, for sales people. Inscope gives you the tools you need to create engaging content to send to prospects, customers and clients, as well as the artificial intelligence to help you strategize how to best use it. Inscope helps you humanize every aspect of your sales cycle, helping you work more efficiently and ideally close more business.",
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
        "Super Efficient",
        "Deeply Commited",
        "Highly Skilled",
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
            // {
            //     imgComponent: MichaelSkinnerImage,
            //     name: "Michael Skinner",
            //     titles: [
            //         "Founding Partner", 
            //         "Memeber of Technical Staff",
            //     ],
            //     socialLinks: [
            //         {
            //             imgComponent: LinkedInColorSVG,
            //             link: "https://www.linkedin.com/in/therightresource/",
            //         },
            //     ],
            // },
            // {
            //     imgComponent: EliotSkinnerImage,
            //     name: "Eliot Skinner",
            //     titles: [
            //         "Founding Partner", 
            //         "Memeber of Technical Staff",
            //     ],
            //     socialLinks: [
            //         {
            //             imgComponent: LinkedInColorSVG,
            //             link: "https://www.linkedin.com/in/eskinnermusic/",
            //         },
            //     ],
            // },
            // {
            //     imgComponent: BuryHuangImage,
            //     name: "Bury Huang",
            //     titles: [
            //         "Founding Partner", 
            //         "Memeber of Technical Staff",
            //     ],
            //     socialLinks: [
            //         {
            //             imgComponent: LinkedInColorSVG,
            //             link: "https://www.linkedin.com/in/buryhuang411/",
            //         },
            //     ],
            // },
            // {
            //     imgComponent: MollyLongImage,
            //     name: "Molly Long",
            //     titles: [
            //         "Memeber of Technical Staff",
            //     ],
            //     socialLinks: [
            //         {
            //             imgComponent: LinkedInColorSVG,
            //             link: "https://www.linkedin.com/in/molly-long/",
            //         },
            //     ],
            // },
            // {
            //     imgComponent: XavierKingImage,
            //     name: "Xavier King",
            //     titles: [
            //         "Memeber of Technical Staff",
            //     ],
            //     socialLinks: [
            //         {
            //             imgComponent: LinkedInColorSVG,
            //             link: "https://www.linkedin.com/in/xavier-king/",
            //         },
            //     ],
            // },
            {
                imgComponent: DustinJacksonImage,
                name: "Dustin Jackson",
                titles: [
                    "Memeber of Technical Staff",
                ],
                socialLinks: [
                    {
                        imgComponent: LinkedInColorSVG,
                        link: "https://www.linkedin.com/in/dustinguyjackson/",
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
                        link: "https://www.linkedin.com/in/austenpturner/",
                    },
                ],
            },
        ],
    },
};

export default aboutContent;
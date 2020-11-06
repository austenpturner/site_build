import Image3 from "../components/image_files/image3";
import Image4 from "../components/image_files/image4";

const aboutContent = {
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
    ]
};

export default aboutContent;
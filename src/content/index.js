import Image1 from "../components/image_files/image1";
import Image2 from "../components/image_files/image2";

const indexContent = {
  bannerContent: {
    heading: "Close Faster",
    subheading: "With Human Centered AI.",
    info: "Inscope is a powerful sales and recruiting platform that combines messaging with human centered artificial intelligence while seamlessly integrating with your CRM or applicant tracking system.",
  },
  bannerLinks: [
    {
      to: "/contact",
      title: "Schedule A Demo"
    },
    {
      to: "/about",
      title: "About Us"
    }
  ],
    listInfo: [
        {
          content: "Get Their Attention"
        },
        {
          content: "Faster Execution"
        },
        {
          content: "Artificial Intelligence"
        },
    ],
    sectionContent: [
        {
          num: 1,
          heading: "Advanced Lead Generation",
          content: "Inscope is a powerful sales and recruiting platform that combines messaging with human centered artificial intelligence while seamlessly integrating with your CRM or applicant tracking system.",
          links: [
            {
              to: "/contact",
              title: "Schedule A Demo"
            }
          ],
          imgComponent: Image1,
        },
        {
          num: 2,
          heading: "Artificial Intelligence",
          content: "Inscope is a powerful sales and recruiting platform that combines messaging with human centered artificial intelligence while seamlessly integrating with your CRM or applicant tracking system.",
          links: [
            {
              to: "/about",
              title: "Learn More"
            }
          ],
          imgComponent: Image2,
        },
    ]
};

export default indexContent;
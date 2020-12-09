import Image1 from "../components/image_files/image1";
import Image3 from "../components/image_files/image3";

const indexContent = {
  bannerContent: {
    heading: "Close Faster",
    subheading: "With Human Centered AI.",
    info: "Inscope is a powerful sales and recruiting platform that combines messaging with human centered artificial intelligence while seamlessly integrating with your CRM or applicant tracking system.",
  },
  bannerLinks: [
    {
      to: "/about",
      title: "About Us"
    },
    {
      to: "/contact",
      title: "Get In Touch"
    },
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
          heading: "Artificial Intelligence",
          content: "Leverage artificial intelligence to maximize your sales effectiveness. Inscope uses advanced AI to help with useful metrics and targeted marketing based on actual real world responses.",
          links: [
            // {
            //   to: "/contact",
            //   title: "Schedule A Demo"
            // },
          ],
          imgComponent: Image1,
        },
        {
          num: 2,
          heading: "Sell it With Video",
          content: "Inscope gives you the ability to send video messages to your prospects easier and more efficiently than ever.",
          links: [
            // {
            //   to: "/about",
            //   title: "Learn More"
            // },
          ],
          imgComponent: Image3,
        },
    ]
};

export default indexContent;
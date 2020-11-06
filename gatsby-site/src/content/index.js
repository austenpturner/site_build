import Image1 from "../components/image_files/image1";
import Image2 from "../components/image_files/image2";

const indexContent = {
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
    bannerLinks: [
        {
          to: "/",
          title: "Schedule A Demo"
        },
        {
          to: "/about",
          title: "About Us"
        }
    ],
    sectionContent: [
        {
          num: 1,
          heading: "Advanced Lead Generation",
          content: "",
          links: [
            {
              to: "/",
              title: "Schedule A Demo"
            }
          ],
          imgComponent: Image1,
        },
        {
          num: 2,
          heading: "Artificial Intelligence",
          content: "",
          links: [
            {
              to: "/",
              title: "Learn More"
            }
          ],
          imgComponent: Image2,
        },
    ]
};

export default indexContent;
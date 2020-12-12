import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import LinkedInColorSVG from "../components/image_files/linkedInColor";

const contactContent = {
    heading: "Get In Touch",
    subheading: "Let's Connect!",
    info: "Send us a message or find us on LinkedIn to learn more.",
    contactTypes: [
        {
            icon: faEnvelope,
            type: "Email",
            info: "Send us a message",
            link: "mailto:admin@inscope.ai",
            button: "admin@inscope.ai",
        },
        {
            icon: faThumbsUp,
            type: "Social Media",
            info: "Follow us to learn more",
            link: "https://www.linkedin.com/company/inscope-ai/",
            button: LinkedInColorSVG,
        }
    ]
};

export default contactContent;
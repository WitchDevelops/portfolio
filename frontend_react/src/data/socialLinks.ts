import { BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa6";

export interface SocialLinkType {
  name: string;
  link: string;
  icon: React.ElementType;
}

export const SOCIAL_LINKS: SocialLinkType[] = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/dominika-wojewska/",
    icon: FaLinkedinIn,
  },
  {
    name: "Github",
    link: "https://github.com/WitchDevelops",
    icon: FaGithub,
  },
  {
    name: "Hashnode",
    link: "https://witchwrites.hashnode.dev/",
    icon: FaHashnode,
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/users/21059715/dominika-wojewska",
    icon: FaStackOverflow,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/DevMotherOfCats",
    icon: BsTwitter,
  },
];

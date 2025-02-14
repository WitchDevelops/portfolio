import { BsTwitter } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaHashnode } from "react-icons/fa6";
import { FaStackOverflow } from 'react-icons/fa6';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <a className="app__social-link" href="https://www.linkedin.com/in/dominika-wojewska/" target="_blank" rel="noreferrer" title="Linkedin Profile">
                <FaLinkedinIn />
            </a>
            <a className="app__social-link" href="https://github.com/WitchDevelops" target="_blank" rel="noreferrer" title="Github Profile">
                <FaGithub />
            </a>
            <a className="app__social-link" href="https://witchwrites.hashnode.dev/" target="_blank" rel="noreferrer" title="Blog on Hashnode">
                <FaHashnode />
            </a>
            <a className="app__social-link" href="https://stackoverflow.com/users/21059715/dominika-wojewska" target="_blank" rel="noreferrer" title="Stack Overflow Profile">
                <FaStackOverflow />
            </a>
            <a className="app__social-link" href="https://twitter.com/DevMotherOfCats" target="_blank" rel="noreferrer" title="Twitter">
                <BsTwitter />
            </a>
        </div>
    )
}

export default SocialMedia
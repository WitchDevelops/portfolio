import React from 'react';
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaHashnode } from "react-icons/fa6";

const SocialMedia = () => {
    return (
        <div className="app__social">
            <a className="app__social-link" href="https://twitter.com/DevMotherOfCats" target="_blank">
                <BsTwitter />
            </a>
            <a className="app__social-link" href="https://blog.mokosh.dev/" target="_blank">
                <FaHashnode />
            </a>
            <a className="app__social-link" href="https://github.com/WitchDevelops" target="_blank">
                <FaGithub />
            </a>
            <a className="app__social-link" href="https://www.linkedin.com/in/dominika-wojewska/" target="_blank">
                <FaLinkedinIn />
            </a>
        </div>
    )
}

export default SocialMedia
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  const githubUrl = process.env.REACT_APP_GITHUB_URL;
  const instagramUrl = process.env.REACT_APP_INSTA_URL;
  const linkedInUrl = process.env.REACT_APP_LINKEDIN_URL;

  return (
    <div className="flex items-center justify-center gap-6 mt-6 text-white">
      <a

        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full cursor-pointer bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <FontAwesomeIcon className="text-xl" icon={faGithub} />
      </a>
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gradient-to-r cursor-pointer from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <FontAwesomeIcon className="text-xl" icon={faInstagram} />
      </a>
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-blue-700 cursor-pointer hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
      </a>
    </div>
  );
};

export default SocialMedia;

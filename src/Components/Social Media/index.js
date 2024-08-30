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
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <button className="w-16 h-16 rounded-full cursor-pointer bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        </button>
      </a>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <button className="w-16 h-16 rounded-full bg-gradient-to-r cursor-pointer from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 transition-all duration-300 transform hover:scale-110 shadow-lg">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        </button>
      </a>
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <button className="w-16 h-16 rounded-full cursor-pointer bg-blue-700 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
        </button>
      </a>
    </div>
  );
};

export default SocialMedia;

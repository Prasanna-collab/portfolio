import React from "react";

// List of tools with their names and logos
const tools = [
  { name: "Postman", icon: "logos:postman-icon" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "GitHub", icon: "logos:github-icon" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Kubernetes", icon: "logos:kubernetes-icon" },
  { name: "Vercel", icon: "logos:vercel-icon" },
  { name: "Netlify", icon: "logos:netlify-icon" },
  { name: "Heroku", icon: "logos:heroku-icon" },
  { name: "Figma", icon: "logos:figma-icon" },
];

const Tools = () => {
  return (
    <>
      <h3 className="text-2xl text-gray-200 font-bold mb-2">Tools</h3>
      <div className="flex flex-wrap justify-center gap-6 md:justify-start">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-20 h-20 rounded-full border border-gray-300 shadow-md bg-white px-2 transition-transform transform hover:scale-110"
          >
            <img
              src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${tool.name
                .toLowerCase()
                .replace(" ", "-")}.svg`}
              alt={tool.name}
              className="w-6 h-6"
            />
            <p className=" text-xs text-center text-gray-700 font-semibold">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tools;

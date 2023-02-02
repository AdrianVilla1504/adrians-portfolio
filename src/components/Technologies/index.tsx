import React from "react";
import technologies from "../../services/technologies.json";


const Technologies = () => {
  const techs = [
    {
      id: 0,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675362222/Portfolio/Technologies/javascript_xqpydf.png",
      title: "JavaScript",
      style: "shadow-yellow-500"
    },
    {
      id: 1,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675367485/Portfolio/Technologies/typescript_kl3cyj.png",
      title: "TypeScript",
      style: "shadow-blue-600"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675362222/Portfolio/Technologies/html_woj4fh.png",
      title: "HTML",
      style: "shadow-orange-500"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675362223/Portfolio/Technologies/css_lptiic.png",
      title: "CSS",
      style: "shadow-blue-500"
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675362223/Portfolio/Technologies/react_z1unyj.png",
      title: "React",
      style: "shadow-sky-500"
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675362223/Portfolio/Technologies/nextjs_qzhkmr.png",
      title: "Next JS",
      style: "shadow-white"
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675362223/Portfolio/Technologies/tailwind_dpoz6r.png",
      title: "Tailwinds",
      style: "shadow-sky-400"
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675365060/Portfolio/Technologies/nodejs_la2qjn.png",
      title: "Node.js",
      style: "shadow-green-400"
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675364494/Portfolio/Technologies/expressjs_qrsdk3.png",
      title: "Express.js",
      style: "shadow-gray-400"

    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675365522/Portfolio/Technologies/git_a6o1uf.png",
      title: "Git",
      style: "shadow-orange-500"
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675362222/Portfolio/Technologies/gitlab_aajxaq.png",
      title: "GitLab",
      style: "shadow-orange-400"
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675362222/Portfolio/Technologies/github_ppwirt.png",
      title: "GitHub",
      style: "shadow-gray-400"
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675366314/Portfolio/Technologies/npm_nka7ll.png",
      title: "NPM",
      style: "shadow-red-400"
    },
    {
      id: 13,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675366856/Portfolio/Technologies/scrum_kp6hcc.png",
      title: "Scrum",
      style: "shadow-blue-400"
    },
    {
      id: 14,
      src: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675366314/Portfolio/Technologies/jira_g3q5dc.png",
      title: "Jira",
      style: "shadow-blue-500"
    }
  ]
  return (
    <div

      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            {technologies.title}
          </p>
          <p className="py-6">{technologies.description}</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;

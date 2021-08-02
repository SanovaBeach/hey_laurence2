import testimonial from "../assets/testimonial.png";
import blogr from "../assets/blogr.png";
import timenow from "../assets/timenow.png";
import eatsme2 from "../assets/eatsme2.png";
import filmnion2 from "../assets/filmnion2.png";
import personal2 from "../assets/personal2.png";
import fastcash from "../assets/fastcash.png";

export const projects = [
  {
    image: filmnion2,
    title: "Filmnion",
    description:
      "Filmnion is a movie and tv shows search, inspired by netflix layout and IMDB. You can search movies and tv shows, check the details, actors, and episodes.",
    skills: ["HTML", "SCSS", "React", "axios"],
    links: {
      live: "https://filmnion.netlify.app/",
      github: "https://github.com/SanovaBeach/Filmnion",
    },
  },
  {
    image: eatsme2,
    title: "EatsMe",
    description:
      "EatsMe is a food review blog I made using Contentful. It shows foods that has been reviewed, it has recommended and category of food.",
    skills: ["HTML", "SCSS", "React", "Contentful (CMS)", "axios"],
    links: {
      live: "https://eats-me.netlify.app/",
      github: "https://github.com/SanovaBeach/EatsMe",
    },
  },
  {
    image: fastcash,
    title: "FastCash",
    description:
      "FastCash is a digital-bank, mobile wallet, mobile payments, bankless app. ",
    skills: ["HTML", "styled-components"],
    links: {
      live: "https://fastcash.netlify.app/",
      github: "https://github.com/SanovaBeach/FastCash",
    },
  },
  {
    image: personal2,
    title: "Portfolio Website",
    description: "This is my personal website.",
    skills: ["HTML", "SCSS", "React"],
    links: {
      live: "https://laurencebalazo.netlify.app/",
      github: "https://github.com/SanovaBeach/personal_website",
    },
  },
  {
    image: blogr,
    title: "Blogr",
    description: "This is a challenge in Frontendmentor. ",
    skills: ["HTML", "SCSS", "React"],
    links: {
      live: "https://frontend-blogr.netlify.app/",
      github: "https://github.com/SanovaBeach/blogr",
    },
  },
  {
    image: timenow,
    title: "TimeNow",
    description:
      "This is a challenge in CodeWell. It consist of 2 pages, a homepage and a pricing page.",
    skills: ["HTML", "SCSS", "React"],
    links: {
      live: "https://codewell-timenow-1.netlify.app/",
      github: "https://github.com/SanovaBeach/timenow",
    },
  },
  {
    image: testimonial,
    title: "Testimonial Grid",
    description: "This is a challenge in Frontendmentor. Note: Not Responsive",
    skills: ["HTML", "SCSS"],
    links: {
      live: "https://sanovabeach.github.io/testimonal_grid/",
      github: "https://github.com/SanovaBeach/testimonal_grid",
    },
  },
];

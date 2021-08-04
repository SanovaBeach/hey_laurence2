import testimonial from "../assets/testimonial.png";
import blogr from "../assets/blogr2.png";
import timenow from "../assets/timenow2.png";
import eatsme2 from "../assets/eatsme.png";
import filmnion2 from "../assets/filmnion.png";
import personal2 from "../assets/personal.png";
import fastcash from "../assets/fastcash2.png";
import portfolio from "../assets/portfolio.png";
// tech stack
import git from "../assets/tech/git-icon.svg";
import html from "../assets/tech/html-5.svg";
import react from "../assets/tech/react.svg";
import sass from "../assets/tech/sass.svg";
import contentful from "../assets/tech/contentful.svg";
import styled from "../assets/tech/styled-components-1.svg";

export const projects = [
  {
    image: filmnion2,
    title: "Filmnion",
    description:
      "Filmnion is a movie and tv shows search, inspired by netflix layout and IMDB. You can search movies and tv shows, check the details, actors, and episodes.",
    skills: [html, sass, react],
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
    skills: [html, sass, react, contentful],
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
    skills: [html, styled],
    links: {
      live: "https://fastcash.netlify.app/",
      github: "https://github.com/SanovaBeach/FastCash",
    },
  },
  {
    image: personal2,
    title: "Portfolio Website V1",
    description: "This is my old personal website.",
    skills: [html, sass, react],
    links: {
      live: "https://laurencebalazo2.netlify.app/",
      github: "https://github.com/SanovaBeach/personal_website",
    },
  },
  {
    image: portfolio,
    title: "Portfolio Website V2. You are here!",
    description:
      "This is my new personal website. I used styled components here to provide for my theme-styling",
    skills: [html, styled, react],
    links: {
      live: "https://laurencebalazo.netlify.app/",
      github: "https://github.com/SanovaBeach/hey_laurence2",
    },
  },
  {
    image: blogr,
    title: "Blogr",
    description: "This is a challenge in Frontendmentor. ",
    skills: [html, sass, react],
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
    skills: [html, sass, react],
    links: {
      live: "https://codewell-timenow-1.netlify.app/",
      github: "https://github.com/SanovaBeach/timenow",
    },
  },
  {
    image: testimonial,
    title: "Testimonial Grid",
    description: "This is a challenge in Frontendmentor. Note: Not Responsive",
    skills: [html, sass],
    links: {
      live: "https://sanovabeach.github.io/testimonal_grid/",
      github: "https://github.com/SanovaBeach/testimonal_grid",
    },
  },
];

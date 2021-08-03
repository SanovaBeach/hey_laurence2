import React from "react";
import * as S from "./Projects.styles";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

const Projects = ({ projects }) => {
  return (
    <S.Wrapper>
      <S.Heading>Projects</S.Heading>
      <S.FlexContainer>
        {projects.map((project, index) => {
          const { image, title, description, skills, links } = project;
          return (
            <S.Content key={index}>
              <S.Image src={image} alt={title} />
              <S.TextWrapper>
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
                <Skills skills={skills} />
                <Links links={links} />
              </S.TextWrapper>
            </S.Content>
          );
        })}
      </S.FlexContainer>
    </S.Wrapper>
  );
};

export default Projects;

const Skills = ({ skills }) => {
  return (
    <S.SkillsWrapper>
      {skills.map((skill, index) => {
        return <img src={skill} alt="" className="skills-image" />;
      })}
    </S.SkillsWrapper>
  );
};
const Links = ({ links }) => {
  return (
    <S.LinksWrapper>
      <a href={links.live} className="live" target="_blank">
        Live <MdLiveTv />
      </a>
      <a href={links.github} className="github" target="_blank">
        Github <FaGithub />
      </a>
    </S.LinksWrapper>
  );
};

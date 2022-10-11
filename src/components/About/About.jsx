import React from "react";
import styled from "styled-components";

const StyledCont = styled.div`
  color: white;
  position: relative;
  width: 100%;
  // background-color: #28282b;
  display: flex;
  justify-content: center;
  align-items: space-between;
  padding: 3rem;
  flex-direction: column;
`;

const StyledGrid = styled.div`
  // max-width: 1000px;
  text-align: center;
  font-size: 1.2rem;
`;

const About = () => {
  return (
    <StyledCont id="about">
      <span
        className="font-face-gm"
        style={{ fontSize: "3rem", textAlign: "center", width: "100%" }}
      >
        About
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <StyledGrid className="container">
          <div style={{ textAlign: "justify" }}>
            <p style={{ paddingBottom: "1rem" }}>
              JITHack is a design and development event which takes place on Dec
              16, 2022 which will be held on-campus, the participating team gets
              24 hours to build something incredible.Whether you're totally new
              to tech & design or a seasoned pro, come spend 24 hours making
              something great with us!
            </p>

            <p>
              A competition like this aims at developing something amazing
              within a limited timeframe and also infuses work pressure among
              the participants, thus testing them beyond their limits. The most
              valuable part of any hackathon is the learning experience.
              Hackathons are great arenas for establishing bonds with
              like-minded individuals, gaining knowledge outside your comfort
              zone and learning how people can work together to achieve a common
              purpose and become a team.. Let your imagination take wings and
              fly by turning them into reality!
            </p>
          </div>
        </StyledGrid>
      </div>
    </StyledCont>
  );
};

export default About;

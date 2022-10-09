import React from "react";
import styled from "styled-components";

const Hero = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <HeroContainer className="d-flex align-items-center justify-content-center">
        <SpecailContainer>
          <span className="font-face-gm" style={{ textTransform: "none" }}>
            TechClub of JyothyIT
          </span>
          <div className="stack">
            <span className="one">JITHack 2022</span>
            <span className="two">JITHack 2022</span>
            <span className="three">JITHack 2022</span>
          </div>
          <div style={{ marginTop: "1rem", color: "#8a4ed5" }}>
            DEC 16TH - 17TH | OFFLINE
          </div>
          {/* <StyledButton>
            <div class="btn-cont">
              <a class="btn" href="#">
                Register
                <span class="line-1"></span>
                <span class="line-2"></span>
                <span class="line-3"></span>
                <span class="line-4"></span>
              </a>
            </div>
          </StyledButton> */}
          <div
            class="apply-button"
            data-hackathon-slug="YOUR-HACKATHON-SLUG"
            data-button-theme="light"
            style={{ marginTop: "20px" }}
          ></div>
          <TypeX>
            <div className="typewriter" style={{ marginTop: "2rem" }}>
              <code>
                <p>#Eat() #Code() #Dance() #Repeat()</p>
              </code>
            </div>
          </TypeX>
        </SpecailContainer>
      </HeroContainer>
    </>
  );
};

const HeroContainer = styled.div`
  background: #000;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  background: #000;
  color: #fff;
  height: 100vh;
  font-family: Arial;
`;

const SpecailContainer = styled.div`
  position: relative;
  .stack {
    display: grid;
    grid-template-columns: 1fr;
    --stacks: 3;
  }

  .one {
    --index: 1;
  }
  .two {
    --index: 2;
  }
  .three {
    --index: 3;
  }

  .stack span {
    font-weight: bold;
    grid-row-start: 1;
    grid-column-start: 1;
    font-size: 6rem;
    --stack-height: calc(100% / var(--stacks) - 14px);
    --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
    --clip-top: calc(var(--stack-height) * var(--index));
    --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
    clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
    animation: stack 340ms cubic-bezier(0.46, 0.29, 0, 1.24) 1 backwards
        calc(var(--index) * 120ms),
      glitch 2s ease infinite 2s alternate-reverse;
  }

  .stack span:nth-child(odd) {
    --glitch-translate: 8px;
  }
  .stack span:nth-child(even) {
    --glitch-translate: -8px;
  }

  @media only screen and (max-width: 600px) {
    .stack span {
      --stack-height: calc(100% / var(--stacks) - 60px);
      font-size: 4rem;
    }
  }

  @keyframes stack {
    0% {
      opacity: 0;
      transform: translateX(-50%);
      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    }
    60% {
      opacity: 0.5;
      transform: translateX(50%);
    }
    80% {
      transform: none;
      opacity: 1;
      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    100% {
      text-shadow: none;
    }
  }

  @keyframes glitch {
    0% {
      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
      transform: translate(var(--glitch-translate));
    }
    2% {
      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    4%,
    100% {
      text-shadow: none;
      transform: none;
    }
  }
`;

const TypeX = styled.div`
  position: relative;
  .typewriter p {
    color: orange;
    font-family: monospace;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid #8a4ed5; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
    margin-top: 2rem;
    width: 69%;
    // background: #fff;
  }

  @media only screen and (max-width: 600px) {
    .typewriter p {
      width: min-content;
      font-size: 0.96rem;
    }
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: min-content;
      }
    }
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 69%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;

const StyledButton = styled.div`
  .btn-cont {
    text-align: center;
    margin-top: 20px;

    .btn {
      position: relative;
      padding: 20px 70px;
      border: 1px solid white;
      border-radius: 0;
      color: white;
      text-decoration: none;
      font-size: em(18px);
      font-family: "Open Sans", sans-serif;
      text-transform: uppercase;
      letter-spacing: 2px;
      -webkit-font-smoothing: antialiased;

      &:hover {
        border: none;

        .line-1 {
          animation: move1 1500ms infinite ease;
        }

        .line-2 {
          animation: move2 1500ms infinite ease;
        }

        .line-3 {
          animation: move3 1500ms infinite ease;
        }

        .line-4 {
          animation: move4 1500ms infinite ease;
        }
      }
    }

    .line-1 {
      content: "";
      display: block;
      position: absolute;
      width: 1px;
      background-color: white;
      left: 0;
      bottom: 0;
    }
    .line-2 {
      content: "";
      display: block;
      position: absolute;
      height: 1px;
      background-color: white;
      left: 0;
      top: 0;
    }
    .line-3 {
      content: "";
      display: block;
      position: absolute;
      width: 1px;
      background-color: white;
      right: 0;
      top: 0;
    }
    .line-4 {
      content: "";
      display: block;
      position: absolute;
      height: 1px;
      background-color: white;
      right: 0;
      bottom: 0;
    }
  }

  @keyframes move1 {
    0% {
      height: 100%;
      bottom: 0;
    }
    54% {
      height: 0;
      bottom: 100%;
    }
    55% {
      height: 0;
      bottom: 0;
    }
    100% {
      height: 100%;
      bottom: 0;
    }
  }

  @keyframes move2 {
    0% {
      width: 0;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }

  @keyframes move3 {
    0% {
      height: 100%;
      top: 0;
    }
    54% {
      height: 0;
      top: 100%;
    }
    55% {
      height: 0;
      top: 0;
    }
    100% {
      height: 100%;
      top: 0;
    }
  }

  @keyframes move4 {
    0% {
      width: 0;
      right: 0;
    }
    55% {
      width: 100%;
      right: 0;
    }
    100% {
      width: 0;
      right: 100%;
    }
  }
`;

export default Hero;

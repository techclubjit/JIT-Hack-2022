import React from "react";
import styled from "styled-components";
import polygon from "../../assets/imgs/polygon.png";
import devf from "../../assets/imgs/devfolio.png";
import celonis from "../../assets/imgs/celonis.png";
import filecoin from "../../assets/imgs/filecoin.png";
import replit from "../../assets/imgs/replit.png";
import solana from "../../assets/imgs/solana.png";

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

const ImgEffect = styled.div`
  .grow img {
    transition: 1s ease;
    padding: 2rem;
  }

  .grow img:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 1s ease;
  }
`;

const Sponsor = () => {
  return (
    <>
      <StyledCont id="sponsor">
        <span
          className="font-face-gm"
          style={{
            fontSize: "3rem",
            textAlign: "center",
            color: "white",
          }}
        >
          Our Sponsors
        </span>
        <div>
          <div
            className="font-face-gm"
            style={{ textAlign: "center", fontSize: "3rem" }}
          >
            Gold
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <ImgEffect>
              <div className="grow">
                <img src={polygon} width="350px"></img>
              </div>
            </ImgEffect>
            <ImgEffect>
              <div className="grow">
                <img src={devf} width="300px"></img>
              </div>
            </ImgEffect>
            <ImgEffect>
              <div className="grow">
                <img src={celonis} width="300px"></img>
              </div>
            </ImgEffect>
          </div>
          <div
            className="font-face-gm"
            style={{ textAlign: "center", fontSize: "3rem", marginTop: "2rem" }}
          >
            Silver
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <ImgEffect>
              <div className="grow">
                <img src={filecoin} width="350px"></img>
              </div>
            </ImgEffect>
            <ImgEffect>
              <div className="grow">
                <img src={replit} width="300px"></img>
              </div>
            </ImgEffect>
            <ImgEffect>
              <div className="grow">
                <img src={solana} width="270px"></img>
              </div>
            </ImgEffect>
          </div>
        </div>
      </StyledCont>
    </>
  );
};

export default Sponsor;

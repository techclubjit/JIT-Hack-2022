import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";

const Styledspan = styled.h1`
  font-size: 3rem;
  color: white;

  @media (max-width: 600px) {
    font-size: 1.9rem;
  }
`;

function Faqs() {
  return (
    <>
      <div style={{ position: "relative", marginTop: "5rem" }}>
        <div className="d-flex align-items-center justify-content-center">
          <Styledspan className="font-face-gm" id="faqs">
            Frequenty Asked Questions
          </Styledspan>
        </div>

        <div
          style={{
            margin: `1% 10% 0% 10%`,
            backgroundColor: `white`,
            position: `relative`,
            borderRadius: `10px`,
          }}
        >
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Who can attend JITHack 2022</Accordion.Header>
              <Accordion.Body>
                The only restriction is that you must be a student! You should
                have a valid current University / College ID. Build your team
                and register.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How Much Is The Registration Fee?
              </Accordion.Header>
              <Accordion.Body>
                There is no registration fee for JITHack 2022. You can register
                on Devfolio.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How Many People Can Form a Team
              </Accordion.Header>
              <Accordion.Body>
                A team can have a maximum of 4 members and a minimum of 2
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How Long Is The Event</Accordion.Header>
              <Accordion.Body>
                The event will be held for 24 hours from 10:00 AM on 26th
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Where Will The Hackathon Be Held?
              </Accordion.Header>
              <Accordion.Body>
                The hackathon will be held offline at Jyothi Institute of
                Technology, Bangalore
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Faqs;

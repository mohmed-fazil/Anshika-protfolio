import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/photo_2025-01-31_11-28-25-removebg-preview.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Anshika Mishra</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 10, position: "relative" }}>
              {/* Image with Purple Fade Effect */}
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{
                    maxHeight: "1100px", // Increased the size
                    width: "100%", // Ensures it scales properly
                    filter: "brightness(100%)", // Adjust brightness
                    display: "block",
                    padding: "40px"
                  }}
                />
                {/* Purple Fade Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(to bottom, rgba(128, 0, 128, 0.4), rgba(0, 0, 0, 0.4))",
                    pointerEvents: "none", // Doesn't block interactions
                    borderRadius: "10px", // Optional: Add rounded corners
                  }}
                ></div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

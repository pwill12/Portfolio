import React, { useState, useEffect, useContext } from "react";
import { Container, Container as div, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Particle from "./Particles";
import pdf from "../data/WillOkechukwu001.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Button } from "@mui/material";
import { Themedark } from "./Pages";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/pwill12/Portfolio/main/src/components/data/WillOkechukwu001.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const dark = useContext(Themedark);

  const Mystyle = {
    color: dark ? 'lightblue': '#d0d6da',
    marginTop: '20px'
  }

  return (
    <div>
      <div className="container" style={Mystyle}>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative"}}>
          <Button
            variant="contained"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginBottom: "" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="contained"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginTop: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </div>
    </div>
  );
}

export default ResumeNew;

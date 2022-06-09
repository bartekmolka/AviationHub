import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Data from "../pages/Data";
import Main from "../pages/Main";
import { Routes, Router, Route } from "react-router-dom";
import * as styles from '../styles/Header.module.css';

import github from "../images/github.svg"

export default function Header() {
  return (
    <Navbar className={styles.navbar} bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className={styles.main}>AviationHub</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="secondary" href="/">Home</Nav.Link>
          <Nav.Link className="" href="/data?p=1">Dane</Nav.Link>
        </Nav>
        <Nav><Navbar.Brand href="#home">
          <a href="https://github.com/n00sek/AviationHub-serwer">
            <img
              src={github}
              width="50"
              height="50"
              alt="React Bootstrap logo"
            />
          </a>
        </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar >
  );
}

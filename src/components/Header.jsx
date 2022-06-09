import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Data from "../pages/Data";
import Main from "../pages/Main";
import { Routes, Router, Route } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="../logo.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

import { Navbar, Nav, Button } from "react-bootstrap";
// import { useState, useEffect } from "react";
import logo from "../img/logo.png";

export const Header = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" variant="light">
				<Navbar.Brand href="#">
					<img
						src={logo}
						width="200"
						height="60"
						className="d-inline align-top"
						alt="logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
						<Nav.Link href="#pricing">Contact me</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";

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
						<Nav.Link>
							<NavLink activeClassName="active" exact to="/">
								About me
							</NavLink>
						</Nav.Link>
						<Nav.Link>
							<NavLink
								activeClassName="active"
								exact
								to="/register"
							>
								Projects
							</NavLink>
						</Nav.Link>
						<Nav.Link href="#">
							{" "}
							<button>Contact me</button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

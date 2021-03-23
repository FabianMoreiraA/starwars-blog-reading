import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Container, Row } from "react-bootstrap";

import CardsList from "../component/CardsList";
import PlanetList from "../component/PlanetList";

export const Home = () => {
	return (
		<Container>
			<Row className="linea mt-5">
				<br />
				<h1 style={{ color: "white" }}>Characters</h1>
				<br />
			</Row>
			<Row>
				<div className="row flex-row flex-nowrap overflow-auto">
					<CardsList />
				</div>
			</Row>
			<Row className="linea mt-5">
				<br />
				<h1 style={{ color: "white" }}>Planets</h1>
				<br />
			</Row>
			<Row>
				<div className="row flex-row flex-nowrap overflow-auto">
					<PlanetList />
				</div>
			</Row>
		</Container>
	);
};

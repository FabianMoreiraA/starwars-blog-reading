import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Image, Card, Button, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import context from "react-bootstrap/esm/AccordionContext";

const PlanetCard = props => {
	const {
		store,
		actions: { setFavorites }
	} = useContext(Context);

	function addNameFavorites() {
		const addNameFavorites = props.data.name;
		setFavorites(store.favorites.concat(addNameFavorites));
	}

	return (
		<>
			<CardDeck>
				<Card style={{ width: "25rem" }} className="col-md-10">
					<Image
						variant="top"
						src="http://images2.wikia.nocookie.net/__cb20101017182153/es.starwars/images/9/93/Mustafar.jpg"
						fluid
					/>
					<Card.Body>
						<Card.Title>{props.data.name}</Card.Title>
						<Card.Text>
							<span>Population: {props.data.population}</span> <br />
							<span>Terrain: {props.data.terrain}</span>
						</Card.Text>
						<Link className="btn btn-outline-primary" to={"/planets/" + props.id}>
							Visit!!
						</Link>
						{"  "}
						<Button variant="outline-warning" onClick={() => addNameFavorites()}>
							{" "}
							<BsHeart />
						</Button>
					</Card.Body>
				</Card>
			</CardDeck>
		</>
	);
};

export default PlanetCard;

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Image, Card, Button, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";

const Cards = props => {
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
				<Card variant="Secondary" style={{ width: "25rem" }} className="col-md-10">
					<Image
						variant="top"
						src="https://tjn-blog-images.s3.amazonaws.com/wp-content/uploads/2015/12/19235907/star-wars-810x540.jpg"
						fluid
					/>
					<Card.Body>
						<Card.Title>{props.data.name}</Card.Title>
						<Card.Text>
							<span>Gender: {props.data.gender}</span> <br />
							<span>Hair Color: {props.data.hair_color}</span> <br />
							<span>Eye-Color: {props.data.eye_color}</span>
						</Card.Text>
						<Link className="btn btn-outline-primary" to={"/characters/" + props.id}>
							Visit!
						</Link>
						{"  "}
						<Button variant="outline-warning" onClick={() => addNameFavorites()}>
							<BsHeart />
						</Button>
					</Card.Body>
				</Card>
			</CardDeck>
		</>
	);
};

export default Cards;

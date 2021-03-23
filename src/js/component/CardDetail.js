import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { Container, Table, Image, Row } from "react-bootstrap";

import "../../styles/cardDetail.css";

const CardDetail = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	useEffect(() => {
		actions.fetchCardDetail(id);
	}, []);
	return (
		<>
			<Container>
				<Row className="mt-5 bgDetail">
					<div className="row justify-content-md-center">
						<div className="col-5">
							<Image
								src="https://www.cinemascomics.com/wp-content/uploads/2020/12/joven-luke-skywalker-960x720.jpg?mrf-size=m"
								className="img-fluid"
							/>
						</div>
						<div className="col-5 text-center">
							<h1>{store.cardDetailCharacter.name}</h1>
							<h6>
								Some quick examh6le text to build on the card title and make up the bulk of the cards
								content. This is a wider card with supporting text below as a natural lead-in to
								additional content. This card has even longer content t han the first to show that equal
								height action.
							</h6>
							<Link className="btn btn-warning" variant="outline-primary" to="/">
								Fly back home
							</Link>
						</div>
						<div className="linea1 col-10">
							<br />
							<Table style={{ color: "#FFF" }} striped bordered hover size="sm">
								<thead className="text-center">
									<tr>
										<th>Name</th>
										<th>Gender</th>
										<th>Hair Color</th>
										<th>Eye Color</th>
										<th>Heigth</th>
										<th>Mass</th>
									</tr>
								</thead>
								<tbody className="text-center">
									<tr>
										<td>{store.cardDetailCharacter.name}</td>
										<td>{store.cardDetailCharacter.gender}</td>
										<td>{store.cardDetailCharacter.hair_color}</td>
										<td>{store.cardDetailCharacter.eye_color}</td>
										<td>{store.cardDetailCharacter.height}</td>
										<td>{store.cardDetailCharacter.mass}</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>
				</Row>
			</Container>
		</>
	);
};

export default CardDetail;

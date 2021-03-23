import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { Container, Table, Image, Row } from "react-bootstrap";

import "../../styles/planetDetails.css";

const PlanetCardDetail = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	useEffect(() => {
		actions.fetchPlanetDetail(id);
	}, []);
	console.log("---Store---", store.planetDetail);

	return (
		<>
			<Container>
				<Row className="mt-5 bgDetail">
					<div className="row justify-content-md-center">
						<div className="col-5">
							<Image
								style={{ width: "25rem", height: "20rem" }}
								src="https://www.pentictonwesternnews.com/wp-content/uploads/2019/10/19074314_web1_191030-PWN-C-Tapping-TwinStarsN_ne201910278435686.jpeg"
							/>
						</div>
						<div className="col-5 text-center">
							<h1>{store.planetDetail.name}</h1>
							<p>
								Planeta desértico, sitio de la base rebelde del escuadrón Phoenix y hogar de la raza de
								hexápodos similares a arañas llamada Krykna
							</p>
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
										<th>Climate</th>
										<th>Population</th>
										<th>Orbital Period</th>
										<th>Rotation Period</th>
										<th>Diameter</th>
									</tr>
								</thead>
								<tbody className="text-center">
									<tr>
										<td>{store.planetDetail.name}</td>
										<td>{store.planetDetail.climate}</td>
										<td>{store.planetDetail.population}</td>
										<td>{store.planetDetail.orbital_period}</td>
										<td>{store.planetDetail.rotation_period}</td>
										<td>{store.planetDetail.diameter}</td>
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

export default PlanetCardDetail;

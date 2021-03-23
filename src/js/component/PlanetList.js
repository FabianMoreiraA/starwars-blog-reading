import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PlanetCard from "./PlanetCard";

const PlanetList = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{() => actions.fetchPlanetList()}
			{store.planetList.map((item, index) => (
				<PlanetCard key={index} id={++index} data={item} />
			))}
		</>
	);
};

export default PlanetList;

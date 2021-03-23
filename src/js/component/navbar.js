import React, { useContext } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { Dropdown, Image } from "react-bootstrap";

export const Navbar = () => {
	const {
		store,
		actions: { setFavorites }
	} = useContext(Context);

	function delList(index) {
		if (index > -1) {
			const filterData = store.favorites.filter(item => item !== store.favorites[index]);
			setFavorites(filterData);
		}
	}

	const styleimg = {
		maxHeight: "3rem"
	};
	return (
		<>
			<nav className="navbar navbar-dark bg-dark mb-3 px-5">
				<Link to="/">
					<img src="https://1000logos.net/wp-content/uploads/2017/06/StarWars-logo.png" style={styleimg} />
				</Link>

				<Dropdown className="ml-auto">
					<Dropdown.Toggle id="dropdown-basic" variant="warning">
						Favorites <span className="countFavorites">{store.favorites.length}</span>
					</Dropdown.Toggle>
					<Dropdown.Menu alignRight className="dropdown-menu-align-right">
						<Dropdown.Item href="">
							<div>
								<ul>
									{store.favorites.map((valor, index) => {
										return (
											<li
												key={index}
												className="listForm"
												onClick={() => {
													delList(index);
												}}>
												{valor}{" "}
												<span className="positionIcons">
													{" "}
													<FaTrashAlt />{" "}
												</span>
											</li>
										);
									})}
								</ul>
							</div>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</nav>
		</>
	);
};

import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<Link className="nav-links" to="/">
				<h3 className="nav-links">NdBR Songlist</h3>
			</Link>

			<ul className="nav-links">
				<Link className="nav-links" to="/about">
					<li>About</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;

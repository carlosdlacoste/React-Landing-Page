import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<div className="container-fluid p-0">

				<NavBar/>
			</div>
			<div className="container">
					<div className="container-fluid d-flex ">

						<Jumbotron
							title="A warm Welcome!"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
							buttonLabel="Call to action!"
						/>
					</div>
				<div className="d-md-flex justify-content-between">

					<Card
						imageUrl="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						title="Coding Life"
						text="The best code I've ever made..."
						buttonLabel="Find Out More!"
					/>
					<Card
						imageUrl="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
						title="Happy Dog"
						text="The dog became a hero after saving his human from fire!"
						buttonLabel="Find Out More!"
					/>
					<Card
						imageUrl="https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
						title="Vacation Day"
						text="I visited the best beach in the country and the weather was amazing!!"
						buttonLabel="Find Out More!"
					/>
					<Card
						imageUrl="https://images.unsplash.com/photo-1567818735868-e71b99932e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG11c3RhbmclMjBndHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
						title="My favorite car"
						text="Everyone knows how much I love this great car..."
						buttonLabel="Find Out More!"
					/>
				</div>
			</div>
			<div className="container-fluid p-0">

				<Footer/>
			</div>
		</>
	);
};

export default Home;

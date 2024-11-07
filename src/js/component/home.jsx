import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "./../../styles/index.css";

import { NavBar } from "./navbar.jsx";
import { HeroSection } from "./herosection.jsx";
import { ProductSection } from "./productsection.jsx";
import { Footer } from "./footer.jsx"; 
//create your first component

const Home = () => {
	return (
		<>
			<NavBar pageName="Piña" firstLink="About" secondLink="Work" lastLink="Contact" />
			<HeroSection />
			<ProductSection />
			<Footer />
		
		</>
	);
};

export default Home;

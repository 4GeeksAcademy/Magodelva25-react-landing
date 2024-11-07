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
			<NavBar 
				pageName="Piña" firstLink="About" secondLink="Work" lastLink="Contact" 
			/>
			
			<HeroSection 
				mainTitle="Mi primera página web" mainDescription="Utilizando React cómo método de layout, tenemos que hacer nuestra primera landing"
			/>
			
			<ProductSection 
				mainCardTitle ="Hecho con React" mainCardDescription="Probando las diferentes opciones de React"
				secondCardTitle ="Un poco de Boostrap" secondCardDescription="Utilizando componentes"
				thirdCardTitle ="Aprendiendo metodología" thirdCardDescription="React es divertido"
				fourthCardTitle ="React es importante" fourthCardDescription="nº 1 en frameworks"
				fifthCardTitle ="La importancia del responsive" fifthCardDescription="Diferentes dispositivos"
				sixthCardTitle ="Es solo el principio" sixthCardDescription="El primer proyecto"
			/>
			<Footer 
				copyRigth ="MangoDev - 2024"
			/>
		
		</>
	);
};

export default Home;

import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				<img
					className={styles.alchemy_logo}
					src="/alchemy_logo.svg"
				></img>
			</a>

			<Router>
				<NavLink to="/" className={({ isActive }) => isActive ? "menuOption active" : "menuOption"} end>Summary</NavLink>
				<NavLink to="/main" className={({ isActive }) => isActive ? "menuOption active" : "menuOption"}>Main</NavLink>
				<NavLink to="/mission" className={({ isActive }) => isActive ? "menuOption active" : "menuOption"}>Mission</NavLink>
			</Router>

			<ConnectButton />
		</nav>
	);
}

import { Link } from "react-router-dom"
// import Navbar from"./Navbar"
function Navbar() {
	return (
	<div>
	<header className="navbar-item is-fullheight">
		<section className="nav-section">
		<nav className="navbar-section is_black is_fullheight">
			<div className="section is_black">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item">
						<strong className="main">Home</strong>
					</Link>
					<Link to="/coins" className="search-bar">
						</Link>
					<Link to="/coins" className="navbar-item">
						<strong className="main">All Coins</strong>
					</Link>
					{/* <Link to="/coins" className="navbar-item">
						<strong>My Coin</strong>
					</Link> */}
				</div>
			</div>
		</nav>
		</section>
	</header>
	</div>
	)
}
export default Navbar
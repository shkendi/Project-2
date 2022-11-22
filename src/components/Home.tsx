import React from "react"
import { Link } from "react-router-dom"

function Home() {
	React.useEffect(() => {
		
	}, [])



	return (
		<><Link to="/">
		</Link>
			<div>
				<div className="title is-fullwidth is-size-1">
					<h1>Welcome to CryptoMarket</h1></div>
				<div className="Array2 is-size-3">
				<Link to="/coins">{"⬅ Go to All Coins "}</Link>
				</div>
				<div className="cripto-img is-fullwidth">
					<img src="https://img.freepik.com/premium-vector/happy-business-woman-with-winner-money-finance-profit-pop-art-comic-style_113655-630.jpg?w=1800" alt="cripto-img"/>
				</div>
			</div>
			<div>

			</div>
			<div></div>
		</>

	)

}

export default Home
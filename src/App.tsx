import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import CoinsList from "./components/CoinsList"
import ShowCoin from "./components/ShowCoin"
import Navbar from "./components/Navbar"
import Coins from "./components/Coins"
import Home from "./components/Home"
function App() {
  return <Router>
    <Navbar />
			<Routes>
				<Route path="/" element={<Home />}  />
				<Route path="/coins" element={<CoinsList name={""} symbol={""} id={0} rank={0} market_cap_usd={0} price_usd={0} price_btc={0} percent_change_24h={0} />} />
				<Route path="/coin/:coinId" element={<ShowCoin />} />
        <Route path="/" element={<Coins name={""} symbol={""} id={0} rank={0} market_cap_usd={0} price_usd={0} price_btc={0} percent_change_24h={0} />} />
		</Routes>
    
		</Router>
}

export default App

import React, { ChangeEvent, useState } from "react"
import CoinsList from "./CoinsList"
import { Link, useParams } from "react-router-dom"
import ShowCoin from "./ShowCoin"

interface ICoin {
	name: string,
	symbol: string,
	id: number,
	rank: number,
	market_cap_usd: number,
	price_usd: number,
	price_btc: number,
	percent_change_24h: number,
}

function Coins( {name, id, symbol, market_cap_usd, price_usd, price_btc, percent_change_24h}: ICoin) {
	console.log(CoinsList)
	
	return (
		<>
		<Link to={`/coin/${id}`}>
		<div className="container is-max-desktop">
  <div className="container-wrap is-full height">
    

		
			<div className="coin-items">
			<span className="card-name is-black is-size-5">Name {name}</span>
			<span className="card-symbol is-size-5 is-black">Symbol {symbol}</span>
			<span className="card-mkc-usd is-size-5">Market Cap USD {market_cap_usd}</span>
			<span className="card-price-usd is-size-5">Price USD {price_usd}</span>
			<span className="card-price-btc is-size-5">Price BTC {price_btc}</span>
			<span className="card-percent-change is-size-5">%Change 24h {percent_change_24h < 0 ? 'text-red-400' : 'text-green-400'}</span>
			{/* {coin.percent_change_24h < 0 <TrendingDown /> : <TrendingUp />} */}
			{percent_change_24h}
			</div>
			</div>
</div>	
			<hr/>
		</Link>
		</>	
	)
}

export default Coins

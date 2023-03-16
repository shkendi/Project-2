import React, { useEffect, useState } from "react"
import CoinsList from "./CoinsList"
import Navbar from "./Navbar"
import Coins from "./Coins"
import { Link, useParams } from "react-router-dom"
interface Coin {
	name: string,
	symbol: string,
	id: number,
	rank: number,
	market_cap_usd: number,
	price_usd: number,
	price_btc: number,
	percent_change_24h: number,
}

type Coins = null | Array<Coin>

function ShowCoin() {
	const [coins, setCoins] = React.useState<Array<Coin>>([])
	const { coinId } = useParams()

	async function fetchCoins() {
		const resp = await fetch(`https://api.coinlore.net/api/ticker/?id=${coinId}`)
		const coins = await resp.json()
		setCoins(coins)

		console.log("data", coins)
	}
	useEffect(() => {
		fetchCoins()
	}, [])
	console.log(coins)
	if (!coins) {
		return <div>Loading...</div>
	}


	// return <div className="card is-max-desktop">
	return <div className="card">
		<div className="card-wrap">
			<div className="container">
			</div>
			<div className="back-arrow is-size-3">
				<Link to="/">{"⬅ Back to Homepage"}</Link>
				<Link to="/coins"></Link>
			</div>
			<hr />
			{coins.map((coin: any) => {
				return <Coins
					key={coin.id}
					name={coin.name}
					symbol={coin.symbol}
					id={coin.id}
					rank={coin.rank}
					market_cap_usd={coin.market_cap_usd}
					price_usd={coin.price_usd}
					price_btc={coin.price_btc}
					percent_change_24h={coin.percent_change_24h}
				/>
			})}
		</div>
	</div>
}

export default ShowCoin


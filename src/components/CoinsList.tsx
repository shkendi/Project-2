import React, { useEffect } from "react"
import useState from "react"
import { Link, useParams } from "react-router-dom"
import Coins from "./Coins"
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

type Coin = null | Array<ICoin>

function CoinsList(coin: ICoin) {
	const [coins, setCoins] = React.useState<Array<Coin>>([])
	const [coinsList, setCoinsList] = React.useState<Array<ICoin>>([])
	const [search, setSearch] = React.useState("")
	console.log(coinsList)
	const { coinId } = useParams()


	React.useEffect(() => {
		async function fetchCoins() {
			const resp = await fetch(`https://api.coinlore.net/api/tickers/?`)
			// const resp = await fetch(`https://api.coinlore.net/api/ticker/?id=${coinId}`)
			const coins = await resp.json()
			console.log(coins)
			setCoins(coins.data)
			setCoinsList(coins)
			console.log("data", coins)
		}
		fetchCoins()
	}, [])

	if (!coins) {
		return <div>Coins Loading...</div>
	}
	function filterCoins() {
		return coins.filter((coin: any) => {
			return coin.name.toLowerCase().includes(search.toLowerCase())
		})
	}

	return (
		<section>
			<div className="placeholder">
			<input
				value={search}
				placeholder={"Search Coins..."}
				onChange={(e) => setSearch(e.target.value)}
			/>
			</div>
			{filterCoins()?.map((coin: any) => {
				return <Coins
					key={coin.id}
					name={coin.name}
					symbol={coin.symbol}
					id={coin.id}
					rank={coin.rank}
					market_cap_usd={coin.market_cap_usd}
					price_usd={coin.price_usd}
					price_btc={coin.price_btc}
					percent_change_24h={coin.percent_change_24h} />
					
			})}
		</section>
	)
}

export default CoinsList
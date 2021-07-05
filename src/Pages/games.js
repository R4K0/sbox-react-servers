import { useEffect, useState } from "react/cjs/react.development";
import GameCard from "../Components/game";
import "./games.css"


function GamesPage(){

    const [games, setGames] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch("http://localhost:3899/api/sbox/asset/find?type=gamemode", {
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            setGames( res.assets.map( asset => {
                return (
                    <GameCard title={asset.title} thumbnail={asset.thumb} updated={asset.updated}></GameCard>
                )
            }) )
        }, err => {
            console.log(err);
        }).finally( err => {
            setLoading( false )
        })
    }, [])

    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-9 gap-y-4">
            { !isLoading && games ? games : <div className="text-7xl w-max opacity-25 text-center">loading games</div> }
        </div>
    )
}

export default GamesPage;
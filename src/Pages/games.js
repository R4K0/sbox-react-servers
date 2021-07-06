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
            console.log(res);

            setGames( res.assets.map( asset => {
                return (
                    <GameCard title={asset.title} thumbnail={asset.thumb} updated={asset.updated} ident={asset.org.ident+"."+asset.ident} key={asset.ident}></GameCard>
                )
            }) )
        }, err => {
            console.log(err);
        }).finally( err => {
            setLoading( false )
        })
    }, [])

    return (
        <div className="bg-gray-900 bg-opacity-50 p-2 rounded-2xl">
            <p className="pb-4 text-2xl font-extrabold">Browsing {games?.length ?? 0} public games</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-9 gap-y-4">
                { !isLoading && games ? games : <div className="loading">loading games</div> }
            </div>
        </div>
    )
}

export default GamesPage;
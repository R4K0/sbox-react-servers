import moment from "moment";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

function InspectGame(){
    let { indent } = useParams()

    const [isLoading, setLoading] = useState(true)

    const [asset, setAsset] = useState([])

    useEffect(() => {
        fetch("http://localhost:3899/api/sbox/asset/get?id=" + indent)
        .then( res => res.json())
        .then( res => {
            setAsset( res.asset )
            console.log( res )
        }, err => {
            console.log( err )
        }).finally(() => {
            setLoading( false )
        })
    }, [])

    if (isLoading){
        return (
            <div className="loading">loading game information</div>
        )
    }

    var howLongAgo = moment.unix( asset.updated ).fromNow()

    return (
        <div className="max-w-4xl bg-gray-800 rounded-3xl p-4">
            <div className="flex">
                <div className="min-w-32 max-w-32 relative place-self-center mr-4 mb-4" style={{aspectRatio: 1/1}}>
                    <img src={asset.thumb} className="w-32 rounded-xl"></img>
                    <img src={asset.org.thumb} className="w-8 absolute rounded-xl bottom-1 right-1"></img>
                </div>

                <span className="inline-blockalign-middle">
                    <p className="text-3xl">Game information about {asset.title}</p>
                    <p className="text-xl mb-1">A game made by {asset.org.title}</p>

                    <div className="self-stretch">
                        <p className="badge">Updated {howLongAgo}</p>
                        {
                            asset.download?.type ? <a className="badge" href={asset.download.url}>Download</a> : null
                        }
                    </div>
                </span>
            </div>

            <div>
                <h1 className="text-2xl pb-2">Description</h1>

                <p className="text-base text-gray-200 whitespace-pre-wrap">{asset.description}</p>
                
            </div>
        </div>
    )
}

export default InspectGame;
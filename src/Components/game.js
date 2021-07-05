import moment from "moment"
import { Link } from "react-router-dom"
import "../Pages/games.css"

const backup = "https://files.facepunch.com/garry/5f45259e-82f6-4f03-90e0-52e16b38b0cc.png"

function GameCard( props ){
    var howLongAgo = moment.unix( props.updated ).fromNow()

    var thumbnail = props.thumbnail ? props.thumbnail : backup 

    return (
        <Link className="game-card" to={`/games/${props.ident}`}>
            <div className="game-card-thumbnail overflow-hidden relative" style={{ backgroundImage: `url(${thumbnail})`}} >
                <p className="text-center bg-black bg-opacity-40 text-xs py-1 absolute bottom-0 right-0 left-0">Updated { howLongAgo }</p>
            </div>
            <h1 className="text-center">{props.title}</h1>
        </Link>
    )
}

export default GameCard
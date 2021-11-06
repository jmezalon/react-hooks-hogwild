import { useState } from 'react';

function HogCard({ hogObj }) {
    const [tileClick, setTileClick] = useState(false)
    const [hideTile, setHideTile] = useState(false)

    const handleClick = () => {
        setTileClick(tileClick => !tileClick)
    }
    function hiddenInfo() {
        return (
            <div>
                <em><p>Specialty: {hogObj.specialty}</p></em>
                <p>Weight: {hogObj.weight}</p>
                <p>{hogObj.greased ? "greased" : "no greased"}</p>
                <strong><p>Higest Medal Achieved: {hogObj["highest medal achieved"]}</p></strong>
            </div>
        )
    } 


    return (
        // <div className="ui eight wide column">
            <div className="pigTile">
                {
                    !hideTile ? 
                        <>
                            <h3>{hogObj.name}</h3>
                            <img src={hogObj.image} alt="cute Hug" onClick={handleClick} />
                            {tileClick ? hiddenInfo() : null}
                        </> : 
                    null 
                }
                <button onClick={()=> setHideTile(!hideTile)}>{!hideTile ? "Hide piggy" : "Show piggy" }</button>
            </div>
        // </div>
    )
}

export default HogCard
import HogCard from './HogCard'

function HogsList({ hogsData }) {
    return (
        <div className="ui grid container">
            {hogsData.map(hog => <HogCard key={hog.weight} hogObj={hog} />)}
        </div>
    )
}

export default HogsList
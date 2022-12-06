import starIcon from '../images/star.png';
import kayaking from '../images/kayaking.jpeg';

const Card = (props) => {
    return (
        <div className="card">
            <img src={kayaking} className='card--img' ALT="Kayaking trip"/>
            <div className='card--stats'>
                <img src={starIcon} className = "rating-icon" ALT='Star icon'/>
                <span>5.0</span>
                <span className='grey'>(99) </span>
                <span className='grey'>Ireland</span>
            </div>
            <p className="card--heading">Daytime/Sunset Kayak Trip</p>
            <p><span className='bold'>From €35</span> / person</p>
        </div>
    )
}

export default Card;
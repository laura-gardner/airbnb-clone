import starIcon from '../images/star.png';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} className='card--img' ALT="Kayaking trip"/>
            <div className='card--stats'>
                <img src={starIcon} className = "rating-icon" ALT='Star icon'/>
                <span>{props.rating}</span>
                <span className='grey'>({props.reviewCount}) </span>
                <span className='grey'>{props.country}</span>
            </div>
            <p className="card--heading">{props.title}</p>
            <p><span className='bold'>From €{props.price}</span> / person</p>
        </div>
    )
}

export default Card;
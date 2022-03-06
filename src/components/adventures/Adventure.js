import { BsStar } from "react-icons/bs";
import { useState } from "react";
import cssClass from './Adventure.module.css';

const Adventure = ({ adventure, deleteHandler }) => {


    // Set state to toggle adventure description
    const [readMore, setReadMore] = useState(false);

    return (
        <div className={cssClass.adventureDetails}>
            <img src={ adventure.img } alt={adventure.title}/>
            <h3>&#128205;{ adventure.title }</h3>
            <p>&#127758;: { adventure.location }</p>
            {/* Toggle read more button - inline annomymous function to show opsite of what read more is set to*/}
            <button onClick={() => setReadMore(!readMore)}>View more</button>
            {/* if readMore = true show description */}
            {readMore && <p>{ adventure.description }</p>}
            <p>&#128197;: { adventure.date }</p>
            <p>Creator: {adventure.creator}</p>
            <BsStar />
            <button onClick={() => deleteHandler(adventure.id)}>Delete</button>

        </div>
    )
}

export default Adventure

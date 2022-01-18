import React from 'react'
import AdventureList from '../components/Adventure';

const Favorites = (props) => {

    const adventures = props.adventures;
    // const title = props.title;
    return (
        <section id="favourites">
        <h1>Favourites Page</h1>
            <AdventureList adventures={adventures.filter((adventure) => adventure.favorite === true)} />
        </section>
    )
}

export default Favorites
 
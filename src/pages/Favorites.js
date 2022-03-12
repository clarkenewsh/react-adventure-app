import React from 'react'
// import AdventureList from '../components/adventures/Adventure';

const Favorites = ({ adventures }) => {

    console.log(adventures);

    // const adventures = props.adventures;
    // const title = props.title;
    return (
        <section id="favorites">
        <h1>Favorites Page</h1>
         {/* <AdventureList adventures={adventures.filter((adventure) => adventure.favorite === true)} title="My Favorite Adventures"/> */}
        </section>
    )
}

export default Favorites
 
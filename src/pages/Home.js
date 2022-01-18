import React from 'react'
import AdventureList from '../components/AdventureList';

const Home = (props) => {
    const adventures = props.adventures;
    const isError = props.isError;
    const isLoading = props.isLoading;

    return (
        <section id="home">
            <h1>Home Page</h1>
            { isError && <div> { isError }</div>}
            { isLoading && <div>Loading...</div>}
            {adventures && <AdventureList adventures={adventures} title='All Adventures'/>} 
            
            
        </section>
    )
}

export default Home

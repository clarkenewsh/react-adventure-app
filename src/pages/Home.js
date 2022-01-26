import React from 'react'
import AdventureList from '../components/AdventureList';
import { useState, useEffect } from 'react';

const Home = () => {


    const [adventures, setAdventures] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(null);
      
      // Fetch api to get adventures data - async callback function
      useEffect(() => {
        // js abort controller - for uEffect clean up function
        const abortCont = new AbortController();
        fetch('http://localhost:8000/adventures', { signal: abortCont.signal })
          .then(res => {
            if(!res.ok) {
              // Throw error is server response is not ok
              throw Error('Could not load data from the resource');
            }
            return res.json(); 
          })
          // Set data to update adventures data state
          .then(data => {
            setAdventures(data);
            setIsLoading(false);
            // reset error message upon next successful fetch call
            setError(null);
          })
          //catch any thrown errors from server getting data from resource - abort unmounted component error
          .catch(err => {
            if(err.name === 'AbortError') {

            } else {
              setIsLoading(false);
              setError(err.message);
            }
          })
          // useEffect cleanup function to mitigate unmounted component when quickly changing routes - js abort controller 
          return () => abortCont.abort();
      }, []);

    return (
        <section id="home">
            <h1>Home Page</h1>
            { isError && <div> { isError }</div>}
            { isLoading && <div>Loading...</div>}
            { adventures && <AdventureList adventures={adventures} title='All Adventures'/>} 
            {/* Testing favourites logic to filter adventures with logic set to true */}
            {adventures && <AdventureList adventures={adventures.filter((adventure) => adventure.favorite === true)} title="Favorite Trips"/>} 
            
        </section>
    )
}

export default Home

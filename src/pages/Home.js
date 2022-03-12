import React from 'react'
import AdventureList from '../components/adventures/AdventureList';
import { useState, useEffect } from 'react';

const Home = () => {


    const [adventures, setAdventures] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(null);

    // Delete adventure 
    const deleteHandler = async (id) => {
      try {
        const response = await fetch(`http://localhost:8000/adventures/${id}`, {
          method: 'DELETE'
        })

        if(response.status !== 200) {
          console.log("error");
          // Throw error is server response is not ok
          throw new Error ('Could not delete adventure');
        }
        const newAdventures = adventures.filter((adventure) => adventure.id !== id);
        setAdventures(newAdventures);
        setError(null)

      } catch (error) {
        console.log(error)
        setError(error.message);
        console.log(isError)
      }

    }

    // use effect hook to load adventure data response data on page load - using [] dependency to update on load
    useEffect(() => {
    dataHandler();
  }, []);

    // Fetch adventure data
    const dataHandler = async () => {
      try {
        const response = await fetch('http://localhost:8000/adventures');
        console.log(response);

        if(response.status !== 200) {
          console.log("error");
          // Throw error is server response is not ok
          throw new Error ('Could not load data from the resource');
        }
        // parse data into json
        // Set data to update adventures data state
        const data = await response.json();
        setAdventures(data);
        setIsLoading(false);
        // reset error message upon next successful fetch call
        setError(null);
        console.log(adventures);

      } catch (error) {
        // catch errors that occur in the try - throw error message generated from the throw new Error & display to user 
        setIsLoading(false);
        setError(error.message);
        console.log(isError);
      }
    }


      
      // // Fetch api to get adventures data - async callback function - could also use async await method
      // useEffect(() => {
      //   // js abort controller - for uEffect clean up function
      //   const abortCont = new AbortController();
        
      //   fetch('http://localhost:8000/adventures', { signal: abortCont.signal })
      //     .then(responce => {
      //       if(!responce.ok) {
      //         // Throw error is server response is not ok
      //         throw Error('Could not load data from the resource');
      //       }
      //       return responce.json(); 
      //     })
      //     // Set data to update adventures data state
      //     .then(data => {
      //       setAdventures(data);
      //       setIsLoading(false);
      //       // reset error message upon next successful fetch call
      //       setError(null);
      //     })
      //     //catch any thrown errors from server getting data from resource - abort unmounted component error
      //     .catch(err => {
      //       if(err.name === 'AbortError') {

      //       } else {
      //         setIsLoading(false);
      //         setError(err.message);
      //       }
      //     })
      //     // useEffect cleanup function to mitigate unmounted component when quickly changing routes - js abort controller 
      //     return () => abortCont.abort();
      // }, []);

    return (
        <section id="home">
            { isError && <div> { isError }</div>}
            { isLoading && <div>Loading...</div>}
            {/* conditionally output adventure data only when data has been return from the useAffect fetch request */}
            { adventures && <AdventureList adventures={adventures} deleteHandler={deleteHandler} title='All Adventures'/>} 
            {/* Testing favourites logic to filter adventures with logic set to true */}
            {adventures && <AdventureList adventures={adventures.filter((adventure) => adventure.favorite === true)} title="My Favorite Adventures"/>} 
            
        </section>
    )
}

export default Home

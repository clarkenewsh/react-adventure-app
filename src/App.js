import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AdventureList from './components/AdventureList';

function App() {

  const [adventures, setAdventures] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(null);
    
    // Fetch api to get adventures data - async callback function
    useEffect(() => {
      fetch('http://localhost:8000/adventures')
        .then(res => {
          if(!res.ok) {
            // Throw error is server responce is not ok
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
        //catch any thrown errors from server getting data from resource
        .catch(err => {
          setIsLoading(false);
          setError(err.message);
        })

    }, []);

    // Delete adventure- Filter the current list of projects and if the project id is not true/visible in the list delete. use the setProjects functions to then set the newProjects list
  //   const handleDelete = (id) => {
  //   const newAdventures = adventures.filter(adventure => adventure.id !== id);
  //   setAdventures(newAdventures);
  // }


  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="main-content wrapper">
        {isError && <div> { isError }</div>}
        {isLoading && <div>Loading...</div>}
        { adventures && <AdventureList adventures={adventures} title='Upcoming Adventures'/>}
      </main>
    </div>

  );
}

export default App;

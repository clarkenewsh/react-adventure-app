import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdventureList from './components/AdventureList';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NewAdventures from './pages/NewAdventures';
import Adventure from './components/Adventure';

// Tasks
// 1 - App grid css layout - reusable CSS Grid for page, flex for components
// 2 - Page components with css for each
// 3 - UI Components with css for each
// 4 - JSON Server to store data using fetchapi & use affect to GET, POST & DELETE
// 4 - Styled Components??
// 5 - React routes & router setup - Navlinks 
// 6 - CRUD operations on adventures
// 7 - Form to create adventures
// 8 - Conditional rendering - favorites, catagories etc

function App() {

  const [adventures, setAdventures] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(null);
    
    // Fetch api to get adventures data - async callback function
    useEffect(() => {
      fetch('http://localhost:8000/adventures')
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
        {/* <Routes> */}
            {/* <Route exact path="/" element={<Home />}/> */}
            <Home isLoading={ isLoading } isError={ isError }adventures={adventures}/>
            {/* <Route path='/new-adventure'> */}
              <NewAdventures />
            {/* </Route>
            {/* <Route path='/favorites'> */}
              {/* <Favorites adventures={adventures} title="Favorite Adventures" /> */}
            {/* </Route> */}
          {/* </Routes> */}
        </main>
      </div>
  );
}

export default App;

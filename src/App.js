import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NewAdventures from './pages/NewAdventures';


// Tasks & concepts to build in to project

  // 1 - App grid css layout - reusable CSS Grid for page, flex for components
  // 2 - Page components with css for each
  // 3 - Components - Parent & child & reusing components with filtering results of the props data passed in with css for each
  // 4 - JSON Server to store data using fetchapi & use affect to GET, POST & DELETE & error handling
  // 4 - Styled Components??
  // 5 - React routes & router setup - Navlinks 
  // 6 - CRUD operations on adventures
  // 7 - Form to create adventures and event to onsubmit and onchange of input box
  // 8 - Conditional template rendering - favorites, catagories & Example loading & errors, css classes, updating/setting state. Process is to set the state up and use conditional rendering to change the state
  // 9 - Event handlers for conditional rendering using state , clicks, submit forms, toggling
  // 10 - Decide were to store the core logic and usEffects for parent/child components 
  // 11 - Stateful components including changes to state depending upon interaction.
  // 12 - Components should have a single functionality without to much complexity 
  // 13 - Local data vs server data and how to CRUD that data
  // 14 - Props - functions, data
  // 15 - State - useState, useEffect
  // 16 - Custom Hooks & reusing custom hooks - example useFetch hook
  // 17 - Store the logic of child components within the parent component i.e store logic for adventures in the home page component


function App() {

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
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/favorites' element={ <Favorites /> } />
            <Route path='/create-adventure' element={ <NewAdventures /> } />
          </Routes>
        </main>
      </div>
  );
}

export default App;

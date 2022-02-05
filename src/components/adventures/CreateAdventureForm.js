import React from 'react';
import { useState } from 'react';
import cssClass from './CreateAdventureForm.module.css';

const CreateAdventureForm = (props) => {

    const title = props.title;

    const [adventureTitle, setAdventureTitle] = useState('');
    const [adventureDescription, setAdventureDescription] = useState('');
    const [adventureDestination, setAdventureDestination] = useState('');
    const [adventureDate, setAdventureDate] = useState('');
    const [adventureCreator, setAdventureCreator] = useState('');

    const handleSubmit = (e) => {
      // prevent deafault action - page refresh on submit
      e.preventDefault();
      // create a new adventure object 
      const adventure = {
        adventureTitle,
        adventureDescription, 
        adventureDestination,
        adventureDate,
        adventureCreator
      };
      // Testing new adventure object was created
      console.log(adventure);

      // POST 

    }

  return (
    <div>
        <h1>{ title }</h1>
        {/* add submit event to the entire form instead of the button */}
        <form className={cssClass.form} onSubmit={handleSubmit}>
            <label>Adventure title</label>
            <input 
              type="text"
              name="name"
              placeholder="Enter adventure title"
              value={adventureTitle}
              // annom function with event object - onChange used to track changes within the input and update the state to set the value of the input 
              onChange={(e) => setAdventureTitle(e.target.value)}
             />
            <label>Destination</label>
            <input 
              type="text" 
              name="destination" 
              placeholder="Enter destination"
              value={adventureDestination}
              onChange={(e) => setAdventureDestination(e.target.value)}
              />
            <label>Trip Description</label>
            <input 
              type="text" 
              name="description" 
              value={adventureDescription}
              onChange={(e) => setAdventureDescription(e.target.value)}
            />
            <input type="date"/>
            <select 
            name="creator"
            value={adventureCreator}
            onChange={(e) => setAdventureCreator(e.target.value)}
            >
                <option value="Clarke">Clarke</option> 
                <option value= "Ruth">Ruth</option>     
            </select>
            <button>Submit</button>
        </form>
    </div>
  )

};

export default CreateAdventureForm;



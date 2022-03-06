import React from 'react';
import { useState } from 'react';
import cssClass from './CreateAdventureForm.module.css';

const CreateAdventureForm = ({ }) => {

    const [title, setAdventureTitle] = useState('');
    const [description, setAdventureDescription] = useState('');
    const [destination, setAdventureDestination] = useState('');
    const [date, setAdventureDate] = useState('');
    const [creator, setAdventureCreator] = useState('');

    const handleSubmit = (e) => {
      // prevent deafault action - page refresh on submit
      e.preventDefault();
      // create a new adventure object 
      const adventure = {
        title,
        description, 
        destination,
        date,
        creator
      };
      // Testing new adventure object was created
      console.log(adventure);

      // POST 
      fetch('http://localhost:8000/adventures', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adventure)
      }).then(() => {
        console.log("new blog added")
      })
    }

  return (
    <div>
        <h1>Create a new adventure</h1>
        {/* add submit event to the entire form instead of the button */}
        <form className={cssClass.form} onSubmit={handleSubmit}>
            <label>Adventure title</label>
            <input 
              type="text"
              name="name"
              placeholder="Enter adventure title"
              value={title}
              // annom function with event object - onChange used to track changes within the input and update the state to set the value of the input 
              onChange={(e) => setAdventureTitle(e.target.value)}
             />
            <label>Destination</label>
            <input 
              type="text" 
              name="destination" 
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setAdventureDestination(e.target.value)}
              />
            <label>Trip Description</label>
            <textarea 
              type="text" 
              name="description" 
              value={description}
              onChange={(e) => setAdventureDescription(e.target.value)}
            />
            <input 
              type="date"
              name="date" 
              value={date}
              onChange={(e) => setAdventureDate(e.target.value)}
            />
            <select 
            name="creator"
            value={creator}
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



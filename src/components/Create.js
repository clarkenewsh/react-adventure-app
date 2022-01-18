import React from 'react'
import {useState} from 'react'

const Create = () => {

    const [form, setForm] = useState ({
       title: "",
       description: "",
    });
    
    const onSubmit = (e) => {
        // form submission logic here 
    }

    return (
        <div>
            <h2>Create a new Adventure</h2>
            <form onClick={onSubmit}>

            </form>
        </div>
    )
}

export default Create

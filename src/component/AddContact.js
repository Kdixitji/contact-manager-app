import { useState } from "react";
import React from 'react';
import "../component/AddContactStyles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [number, setNumber] = useState("");

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);
    const handleRadioClick = () => {
        setIsActive(!isActive);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
    
        const checkNumber = contacts.find(contact => contact.number === parseInt(number));
        if (!number || !firstname || !lastname){
            return window.alert("Please enter all fields!")
        };

        if(checkNumber){
            return window.alert("Number is already registered")
        };

        const data = {
            id: contacts[contacts.length -1].id + 1,
            firstname,
            lastname,
            number,
        };

    dispatch({ type : "ADD_CONTACT", payload : data })
    window.alert("contact added successfully");
    navigate("/");
};
  return (
    <div className='container-fluid'>
        <div className='row'> 
            <div className='col'>
                <form onSubmit={handleSubmit}>
                <h1 className='addcontact'>Add Contact </h1>
                    <div className='form-group'>
                        <input type='text'
                        value={firstname}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder='First Name' 
                        className='form-control' />
                    </div>
                    <div className='form-group'>
                        <input type='text' 
                        placeholder='Last Name' 
                        value={lastname}
                        onChange={e => setLastName(e.target.value)}
                        className='form-control' />
                    </div>
                     <div className='form-group'>
                        <input type='number' 
                        value={number} 
                        onChange={e => setNumber(e.target.value)}
                        placeholder='Contact Number' 
                        className='form-control' />
                    </div>
                    <div className="radio">
                        <input
                            type="radio"
                            id="active"
                            name="active"
                            defaultChecked={isActive}
                            onClick={handleRadioClick}
                        />
                        <label htmlFor="active">Active</label>
                        <br />
                        <input
                            type="radio"
                            id="inactive"
                            name="active"
                            defaultChecked={!isActive}
                            onClick={handleRadioClick}
                        />
                        <label htmlFor="inactive">Inactive</label>
                    </div>
                    <div className='form-group'>
                        <input type='submit' placeholder='Add Contact' className='btn' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddContact;
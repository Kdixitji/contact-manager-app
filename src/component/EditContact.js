import React, { useEffect } from 'react';
import "../component/EditContactStyles.css";
import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';

const EditContact = () => {
    const {id} = useParams();
    const contacts = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const currentContact = contacts.find(
        contact => contact.id === parseInt(id)
    );
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [number, setNumber] = useState("");
    
    const [isActive, setIsActive] = useState(false);
    const handleRadioClick = () => {
        setIsActive(!isActive);
    };
    
      
    useEffect(() => {
        if (currentContact) {
            setFirstName(currentContact.firstname);
            setLastName(currentContact.lastname);
            setNumber(currentContact.number);
        }
    }, [currentContact]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const checkNumber = contacts.find(
            (contact) => contact.id !== parseInt(id) && contact.number === parseInt(number));
        
            if (!number || !firstname || !lastname){
            return window.alert("Please enter all fields!")
        };

        if(checkNumber){
            return window.alert("Number is already registered")
        };

        const data = {
            id: currentContact.id,
            firstname,
            lastname,
            number,
        };

    dispatch({ type : "UPDATE_CONTACT", payload : data })
    window.alert("contact updated successfully");
    navigate("/");
    
    return (
    <div className='container-fluid'>
        {currentContact? (
        <>
            <div className='row'> 
                <div className='col'>
                    <form onSubmit={handleSubmit}>      
                        <div className='form-group'>
                            <input type='text' 
                            value={firstname}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder='First Name' 
                            className='form-control' />
                        </div>
                        <div className='form-group'>
                            <input type='text' 
                            value={lastname}
                            onChange={e => setLastName(e.target.value)}
                            placeholder='Last Name' 
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
                            checked={isActive}
                            onClick={handleRadioClick}
                        />
                        <label htmlFor="active">Active</label>
                        <br />
                        <input
                            type="radio"
                            id="inactive"
                            name="active"
                            checked={!isActive}
                            onClick={handleRadioClick}
                        />
                        <label htmlFor="inactive">Inactive</label>
                    </div>
                    <div className='form-group'>
                        <input type='submit' placeholder='Update Contact' className='btn' />
                        <Link to="/" className='c-btn'>Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
        </>
        ) : (
            <h1 className='addcontact'>Contact with id {id} does not exist</h1>
        )};
    </div>
  );
};
} 

export default EditContact;
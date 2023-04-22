import React from 'react';
import "../component/HomeStyles.css";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteContact = (id) =>{
    dispatch({type : "DELETE_CONTACT", payload : id});
    window.alert("contact is deleted");
  };
  
  return (
    <div>
       <div className='container'>
        <div className='row'> 
          <Link to="/add" className='abtn'>
            Add Contact
          </Link>
          <div className='coll'>
            <table className='table'>
              <thead className='table-header'>
                <tr>
                  <th scope='coll'>#</th>
                  <th scope='coll'>First Name</th>
                  <th scope='coll'>Last Name</th>
                  <th scope='coll'>Number</th>
                  <th scope='coll'>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  contacts.map((contact,id) =>(
                    <tr key={id}>
                      <td>{id + 1}</td>
                      <td>{contact.firstname}</td>
                      <td>{contact.lastname}</td>
                      <td>{contact.number}</td>
                      <td>
                        <Link to={`/edit/${contact.id}`} className="ebtn">Edit</Link>
                        <button type='danger' onClick={() => deleteContact(contact.id)} className='dbtn'>Delete</button>
                      </td>
                    </tr>
                  )) 
                }
              </tbody>
            </table>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Home;
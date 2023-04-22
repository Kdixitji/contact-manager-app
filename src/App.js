import './App.css';
import React from 'react';
import NavBar from './component/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';
import Dashboard from './component/dashboard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' Component={()=><Home /> } />
        <Route path='/add' element ={<AddContact />} />
        <Route path='/edit/:Id' element={<EditContact />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

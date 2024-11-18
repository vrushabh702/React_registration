import React from 'react';
import Login from './components/login';
import { Route,Routes } from 'react-router-dom';
import Registration from './components/Registration';

// function App() {
const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
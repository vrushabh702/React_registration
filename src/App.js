import React from 'react';
import Login from './components/login';
import Registration from './components/Registration';

function App() {
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
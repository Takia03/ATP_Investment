// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeLay from './assets/Pages/HomeLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLay/>} />
      </Routes>
    </div>
  );
}

export default App;

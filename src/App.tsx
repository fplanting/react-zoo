import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { Link, Route, Routes } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import AnimalList from './components/AnimalList';
import { Animal } from './components/Animal';
import Zoo from './Zoo.png';

const App: React.FC = () => {
  return (
    <body>
      <header className='header'>
        <img src={Zoo}></img></header>
    
<div>
    <Routes>
<Route path="/Home" element={<Home />} />
<Route path="/Animals" element={<AnimalList />} />
<Route path="/Animals/:id" element={<Animal />} />
<Route path="*" element={<NotFound />} />
</Routes>
</div>
</body>
  )
}



export default App;

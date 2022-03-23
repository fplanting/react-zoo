import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import AnimalList from './components/AnimalList';
import { DisplayAnimal } from './components/DisplayAnimal';
import { NotFound } from './components/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Layout />} />
<Route path="/Animals" element={<AnimalList />} />
<Route path="/Animals/:id" element={<DisplayAnimal />} />
<Route path="*" element={<NotFound />} />
</Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

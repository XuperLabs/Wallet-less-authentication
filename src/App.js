import React from 'react';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import './App.css';
import Email from './Pages/Email';
import Pin from './Pages/Pin';
import Wallet from './Pages/Wallet';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route index element={<Email/>} />
         <Route path='/Pin' element={<Pin/>} />
         <Route path='/Wallet' element={<Wallet/>} />
        
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


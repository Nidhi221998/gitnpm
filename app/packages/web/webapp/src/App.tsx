import React from 'react'
import './App.css';
import Approute from './Routes';
import { BrowserRouter as Router} from "react-router-dom";


export default function App() {  
  return (    
      <Router>
        <Approute />
      </Router> 
  );
}


import React, { useState , useEffect} from 'react';
import './App.css';
import Header from './components/ui/Header'
import { useEffect, useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  return (
    <div className="container">
      <Header />
    </div>
  )
}

export default App;

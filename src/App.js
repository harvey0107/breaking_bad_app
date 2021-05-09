import React, { useState , useEffect} from 'react';
import './App.css';
import axios from "axios";
import Header from './components/ui/Header'
import { useEffect, useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const  result = await axios()
    }
  })
  
  return (
    <div className="container">
      <Header />
    </div>
  )
}

export default App;

import React, { useState, useEffect } from "react";
import './App.css';
import ContactCard from './ContactCard';

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=55")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setResults(data.results);
      });
  }, []);

  return (
    <div>
      {results.map((result, index) => {
        return (
          <ContactCard key={index}
            avatarUrl={result.picture.large}
            name={result.name.first + " " + result.name.last}
            email={result.email}
            age={result.dob.age} />
        )
      })}
    </div>
  )}
export default App;
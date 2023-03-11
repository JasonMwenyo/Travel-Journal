import React from "react"
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Card from "./components/Card";
import data from "./assets/data/Data";

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {cards}
    </div>

  )
}


export default App
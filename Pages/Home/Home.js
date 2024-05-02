import React from 'react';
import {useState} from 'react'
import './Home.css'
import {medicines} from '../../data.js'

function Home() {
  const [query, setQuery] = useState("")

  const setColor = (color) => {
    switch (color) {
      case "white":
        return { backgroundColor: "white" };
      case "blue":
        return { backgroundColor: "#96c2c9" };
      case "green":
        return { backgroundColor: "#cdef8d" };
      case "red":
        return { backgroundColor: "#ef8e8d" };
      case "orange":
        return { backgroundColor: "#f5e1bc" };
      case "purple":
        return { backgroundColor: "#b4a7d2" };
      case "black":
        return { backgroundColor: "black", color:"white"}
      case "yellow":
        return { backgroundColor: "yellow"}
      default:
        return { backgroundColor: "grey" };
    }
  }

  return (
    <div className='home'>
      <h1 className='homeTitle'>Medicine</h1>
      <input type="text" name="search" className='searchMedicine' placeholder="Search for medicine..." onChange={e => setQuery(e.target.value)} />
      <div className="medicines">
        <div className="medicine" style={{ backgroundColor: "grey" }}>
          <p>Level</p>
          <p>Name</p>
          <p>Type</p>
          <p>Packaging</p>
          <p>Duration</p>
        </div>
        {medicines.filter(medicine => {
          if (query === "") { return medicine; }
          else if (medicine.name.toLowerCase().includes(query.toLowerCase()) || medicine.type.toLowerCase().includes(query.toLowerCase())) {
            return medicine;
          }
          }).map((medicine) => (
          <div className="medicine" style={setColor(medicine.color)}>
            <p>{medicine.level}</p>
            <p>{medicine.name}</p>
            <p>{medicine.type}</p>
            <p>{medicine.packaging}</p>
            <p>{medicine.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home
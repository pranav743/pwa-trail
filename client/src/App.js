import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  const [data,setData] =useState(false);
  const getData = async () => {
    try {
      const res = await axios.get("https://crud-app-three-blond.vercel.app/api/data");
      console.log(res.data)
      setData(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      { data &&
        <p style={{textAlign: 'center'}}>{JSON.stringify(data)}</p>
      }
      <button onClick={getData} style={{height: '40px', width: '200px', backgroundColor: '#000', color: '#fff'}}>Get Data</button>
    </div>
  );
}

export default App;

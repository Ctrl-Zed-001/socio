import axios from 'axios';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import config from './config.json'


function App() {
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    let token = localStorage.getItem('access_token')

    if (token) {
      axios.post(`${config.api_uri}/user/login`)
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err))
    }

  }, [])
  return (
    loading ?
      <h1>Loading</h1> :
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter >
  );
}

export default App;

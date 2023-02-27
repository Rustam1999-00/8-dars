import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './pags/Register/Register'
import Login from './pags/Login/Login'
import Home from './pags/Home/Home'
import SinglePge from './pags/SinglePage/SinglePge'
import { useContext } from 'react'
import { NewContex } from './useContext/UseContxt'



function App() {
  const { securti, data } = useContext(NewContex)
  console.log(securti);

  const token = securti
  if (token) {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>

          <Route index path='Home/*' element={<Home />} >
{/* 
          <Route index element={<Navigate to={'/Twetterbady'} />} />
            <Route path='Twetterbady' element={<Twetterbady />} /> */}

          </Route>

          <Route path='/SinglePge' element={<SinglePge />} />
        </Routes>
      </div>
    )
  }
  else {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Register />} />

        </Routes>
      </div>
    )
  }
}

export default App
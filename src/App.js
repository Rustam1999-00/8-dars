import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './pags/Register/Register'
import Login from './pags/Login/Login'
import Home from './pags/Home/Home'
import SinglePge from './pags/SinglePage/SinglePge'
import { useContext } from 'react'
import { NewContex } from './useContext/UseContxt'
import { Twetterbady } from './pags/Home/Twetterbady/Twetterbady'
import Explore from './pags/Explore/Explore'
import { SingleBady } from './pags/SinglePage/SingelBady/SingleBady'
import Notifications from './pags/Notifications/Notifications'
import Messages from './pags/Messages/Messages'
import Bookmarks from './pags/Bookmarks/Bookmarks'
import Lists from './pags/Lists/Lists'
import More from './pags/More/More'
import HomeBady from './pags/Home/HomeBady/HomeBady'



function App() {
  const { securti, data } = useContext(NewContex)
  console.log(securti);

  const token = securti
  if (token) {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='HomeBady/*' element={<HomeBady />}>
            <Route index element={<Navigate to={'Twetterbady'} />} />
            <Route path='Twetterbady' element={<Twetterbady />} />
            <Route path='Explore' element={<Explore />} />
          </Route>


          {/* =================== */}
          <Route path='SinglePge/*' element={<SinglePge />} >
            <Route index element={<Navigate to={'SingleBady'} />} />
            <Route path='SingleBady' element={<SingleBady />} />
            <Route path='Explore' element={<Explore />} />
            <Route path='Notifications' element={<Notifications />} />
            <Route path='Messages' element={<Messages />} />
            <Route path='Bookmarks' element={<Bookmarks />} />
            <Route path='Lists' element={<Lists />} />
            <Route path='More' element={<More />} />
          </Route>
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
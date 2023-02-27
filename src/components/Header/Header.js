import React, { useContext } from 'react'
 

import { NewContex } from '../../useContext/UseContxt'

function Header() {

    const {moded,setMode}=useContext(NewContex)


  return (
    <div className= {`container p-5 d-flex ${moded}`}>

        <h1  className='text-lightnpm start
        '>Header</h1>
<button className='p-3 ms-auto'  onClick={(evt)=>setMode(moded === 'bg-info'?'bg-dark':'bg-info')}>{moded === 'bg-info'?'dark':'info'}</button>

    </div>
  )
}

export default Header
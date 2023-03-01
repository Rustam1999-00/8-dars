import React, { useRef } from 'react'
import TweterLogo from '../../assets/images/twitter-logo-4 1.svg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { NewContex } from '../../useContext/UseContxt'
import axios from 'axios'

export default function Login() {
  const {setDate}=useContext(NewContex)

    const navigate = useNavigate()
 const Inutphone=useRef()
 const InutPossword=useRef()

//  ==================
 const hendleSubmit=(evt)=>{
  evt.preventDefault()
  localStorage.setItem('tokens',InutPossword.current.value)
  setDate(localStorage.getItem('tokens'))
// const post =()=>{
//   axios.post('https://todo-for-n92.cyclic.app/user/login',{
//     username:Inutphone.current.value,
//     Password:InutPossword.current.value
//   },{
//     "Content-Type":"application/json"
//   }
//   )
//   .then((data)=>console.log(data)).catch((err)=>console.log(err))
// }

// post()


  
 }

  return (
    <div className='container'>
<div className='w-50  mx-auto mt-5 shadow bg-light ' style={{padding:"40px"}}>
<img className=' pt-2   mb-4' src={TweterLogo} width='40' height='33' alt='Tweter logo'/>

<h2 className='mb-4'>Log in to Twitter</h2>
<form onSubmit={hendleSubmit}>
    <input ref={Inutphone} type='emile' className='p-3 w-100 d-block mb-3 rounded' placeholder='Phone number, email address'/>
    <input ref={InutPossword} type='password' className='p-3 w-100 d-block mb-3 rounded' placeholder='Password'/>

    <button className='w-100 p-2 rounded-pill text-center text-light bg-info border-0' type='submit'>Log In</button>

<div className='d-flex'>
<button className='text-info bg-light border-0 mt-5' type='submit'>Forgot password?</button>
<button className='text-info bg-light border-0 mt-5 ms-auto d-block' onClick={()=>navigate('/Register')}>Sign up to Twitter</button>
</div>
</form>


</div>

</div>
  )
}

import React, { useRef } from 'react'
import TweterLogo from '../../assets/images/twitter-logo-4 1.svg'
import { useContext } from 'react'
import { NewContex } from '../../useContext/UseContxt'
import { useNavigate } from 'react-router-dom'

export default function Register() {
const navigete = useNavigate()
const InputName=useRef()
const {setSecurti}=useContext(NewContex)
// =======
const hendlSubmit = (evt)=>{
    evt.preventDefault()
    localStorage.setItem("token",InputName.current.value)
   setSecurti(localStorage.getItem('token'))
   navigete('/')
}


  return (
<div className='container'>
<div className='w-50  mx-auto mt-5 shadow ' style={{padding:"40px"}}>
<img className=' w-25 d-block pt-2  mx-auto mb-4' src={TweterLogo} width='40' height='33' alt='Tweter logo'/>

<h2 className='mb-4'>Create an account</h2>
<form onSubmit={hendlSubmit}>
    <input ref={InputName} type='text' className='p-3 w-100 d-block mb-3 rounded' placeholder='Name'/>
    <input type='number' className='p-3 w-100 d-block mb-3 rounded' placeholder='Phone number'/>
    <span className='text-info'>Use email</span>
    <h4>Date of birth</h4>
    <p>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
    <select className='p-2 me-3 rounded w-50'>
        <option hidden>Month</option>
        <option >Yanvar</option>
        <option >Fevral</option>
        <option >Mart</option>
        <option >Aprel</option>
        <option >May</option>
        <option >Iyun</option>
        <option >Iyul</option>
        <option >Avgust</option>
        <option >Sentiyabr</option>
        <option >Oktyabr</option>
        <option >Noyabr</option>
        <option >Dekabr</option>
    </select>
    <select className='p-2 me-3 rounded '>
        <option >Day </option>
        <option >01</option>
        <option >02</option>
        <option >03</option>
        <option >04</option>
        <option >05</option>
        <option >06</option>
        <option >07</option>
        <option >08</option>
        <option >09</option>
        <option >10</option>
        <option >11</option>
        <option >12</option>
        <option >13</option>
        <option >14</option>
        <option >15</option>
        <option >16</option>
        <option >17</option>
        <option >18</option>
        <option >19</option>
        <option >20</option>
        <option >20</option>
        <option >22</option>
        <option >23</option>
        <option >24</option>
        <option >25</option>
        <option >26</option>
        <option >27</option>
        <option >28</option>
        <option >29</option>
        <option >30</option>
        <option >31</option>
    </select>
    <select className='p-2 me-3 rounded mb-5'>
        <option hidden>Year</option>
        <option >2000</option>
        <option >2001</option>
        <option >2002</option>
        <option >2003</option>
        <option >2004</option>
        <option >2005</option>
        <option >2006</option>
        <option >2007</option>
        <option >2008</option>
        <option >2009</option>
        
        <option >2010</option>
        <option >2011</option>
        <option >2012</option>
        <option >2013</option>
        <option >2014</option>
        <option >2015</option>
        <option >2016</option>
        <option >2017</option>
        <option >2018</option>
        <option >2019</option>
        <option >2020</option>
        <option >2021</option>
        <option >2022</option>
        <option >2023</option>
    </select>
    <button className='w-100 p-2 rounded-pill text-center text-light bg-info border-0' type='submit'>Next</button>
</form>


</div>

</div>
    )
}

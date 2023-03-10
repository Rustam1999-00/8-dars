import React, { useRef, useState } from 'react'
import Star from "../../../assets/images/Star.svg"
import "./BadyStyl.css"
import Avter from "../../../assets/images/Ellipse 3.png"
import Galety from "../../../assets/images/galery.svg"
import Giff from "../../../assets/images/Giff.svg"
import Routs from "../../../assets/images/Routs.svg"
import Icons from "../../../assets/images/Icons.svg"
import Kalendar from "../../../assets/images/Kalendar.svg"
import vector from "../../../assets/images/Vector.svg"
import message from "../../../assets/images/message.svg"
import Reflishe from "../../../assets/images/Reflishe.svg"
import Like from "../../../assets/images/Like.svg"
import Export from "../../../assets/images/share.svg"
import Statistika from "../../../assets/images/statistics.svg"
// import food from "../../../assets/images/food.jpg"
import Fotogrif from "../../../assets/images/Fotogrf.png"
import Dasrurchi from "../../../assets/images/Dasrurchi.png"
import Diziner from "../../../assets/images/Diziner.png"
import ReflisheColor from "../../../assets/images/ReflisheColor.svg"
import LikeColor from "../../../assets/images/LikeColor.svg"
import { useParams } from 'react-router-dom'



export const Twetterbady = () => {

  const {id}=useParams()

  const FileRef = useRef()
  const TextRef = useRef()
  const [edit, setEdit] = useState({})
  const [todo, setTodo] = useState([
    'salom'
  ])
  const hendleChange = (evt) => {

    setEdit(evt.target.files[0]);

  }

  const hendleSubmit = (evt) => {
    evt.preventDefault()

    console.log(id);

    const data = {
      id: todo.length + 1,
      name: TextRef.current.value,
      image: window.URL.createObjectURL(edit),
      emile: 'demo@gmail.com',
      text: 'YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.'
    }

    setTodo([data,...todo ])
    TextRef.current.value = ''
  };
  console.log(todo);

  return (
    <div >
 

      <div className='d-flex align-items-center justify-content-between px-3 '>
        <h2 className='Header'>Home</h2>
        <img src={Star} width="22" height="22" alt='HeaderImg' />
      </div>
      <hr />

      <form onSubmit={hendleSubmit}>
        <div className='IconsContent px-3 pb-2'>
          <div className='d-flex align-items-center'>
            <img src={Avter} width="60" height="60" alt='avter' />
            <input ref={TextRef} className='m-0 ms-2 avter-text' type='text' placeholder='What’s happening' />
          </div>

          <div className='d-flex ms-5 mt-5 align-items-center '>
            <label>
              <img className='ms-3' src={Galety} width="20" height="20" alt='Icons' />
              <input ref={FileRef} onChange={hendleChange} className='d-none' type='file' />
            </label>
            <img className='ms-3' src={Giff} width="20" height="20" alt='Icons' />
            <img className='ms-3' src={Routs} width="20" height="20" alt='Icons' />
            <img className='ms-3' src={Icons} width="20" height="20" alt='Icons' />
            <img className='ms-3' src={Kalendar} width="20" height="20" alt='Icons' />
          </div>
          <button className='Tweet' type='submit'>Tweet</button>
        </div>
      </form>
      {/* =========================== */}
      {
        todo.map((el) => (
          <>
{el.image?
            <div className='mt-4 ps-3'>
              <div className='d-flex'>,
                <img src={Diziner} width="60" height="60" alt="klents" />
                <div className='ms-3'>
                  <h3 className='d-inline Designsta'>{el.name}</h3>
                  <span>{el.emile}</span>
                  <p className='klentsrext'>{el.text}</p>
                </div>
                <img className='d-block ms-auto mb-5 me-2' src={vector} width="" height="" alt="vector" />
              </div>
             <img className='rounded-3' src={el.image} width="633" height="453" alt='FoodImg' />
            
              <div className='ms-5 mt-3 ps-4'>
                <img className=' me-3' src={message} width="43" height="24" alt='Icons' />
                <img className='ms-5 me-3' src={Reflishe} width="43" height="24" alt='Icons' />
                <img className='ms-5 me-3' src={Like} width="43" height="24" alt='Icons' />
                <img className='ms-5 me-3' src={Export} width="24" height="24" alt='Icons' />
                <img className='ms-5' src={Statistika} width="24" height="24" alt='Icons' />
              </div>
              <hr />
            </div>:''}
          </>
        ))
      }

      <div className='mt-4 ps-3'>
        <div className='d-flex'>
          <img src={Fotogrif} width="60" height="60" alt="klents" />
          <div className='ms-3'>
            <h3 className='d-inline Designsta'>Designsta</h3>
            <span>@inner · 25m</span>
            <p className='klentsrext'>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>

          </div>
          <img className='d-block ms-auto mb-5 me-2' src={vector} width="" height="" alt="vector" />
        </div>
        <div className='ms-5 mt-3 ps-4'>
          <img className='me-3' src={message} width="43" height="24" alt='Icons' />
          <img className='ms-5 me-3' src={Reflishe} width="43" height="24" alt='Icons' />
          <img className='ms-5 me-3' src={Like} width="43" height="24" alt='Icons' />
          <img className='ms-5 me-3' src={Export} width="24" height="24" alt='Icons' />
          <img className='ms-5' src={Statistika} width="24" height="24" alt='Icons' />
        </div>

      </div>
      <hr />
      {/* ================= */}

      <div className='mt-4 ps-3'>
        <div className='d-flex'>
          <img src={Dasrurchi} width="60" height="60" alt="klents" />
          <div className='ms-3'>
            <h3 className='d-inline Designsta'>cloutexhibition</h3>
            <span>@RajLahoti · 22m</span>
            <p className='klentsrext'>YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>

          </div>
          <img className='d-block ms-auto mb-5 me-2' src={vector} width="" height="" alt="vector" />
        </div>
        <div className='ms-5 mt-3 ps-4'>
          <img className='me-3' src={message} width="43" height="24" alt='Icons' />
          <img className='ms-5 me-3' src={ReflisheColor} width="43" height="24" alt='Icons' />
          <img className='ms-5 me-3' src={LikeColor} width="43" height="24" alt='Icons' />
          <img className='ms-5 me-3' src={Export} width="24" height="24" alt='Icons' />
          <img className='ms-5' src={Statistika} width="24" height="24" alt='Icons' />
        </div>

      </div>
      <hr />
      {/* ======================================== */}
    

    </div>
  )
}

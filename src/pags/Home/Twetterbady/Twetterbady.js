import React from 'react'
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
import food from "../../../assets/images/food.jpg"
import Fotogrif from "../../../assets/images/Fotogrf.png"
import Dasrurchi from "../../../assets/images/Dasrurchi.png"
import Diziner from "../../../assets/images/Diziner.png"
import ReflisheColor from "../../../assets/images/ReflisheColor.svg"
import LikeColor from "../../../assets/images/LikeColor.svg"



export const Twetterbady = () => {
  
  return (
    <div >
      <div className='d-flex align-items-center justify-content-between px-3 '>
        <h2 className='Header'>Home</h2>
        <img src={Star} width="22" height="22" alt='HeaderImg' />
      </div>
      <hr />

      <div className='IconsContent px-3 pb-2'>
        <div className='d-flex align-items-center'>
          <img src={Avter} width="60" height="60" alt='avter' />
          <input className='m-0 ms-2 avter-text' type='text' placeholder='What’s happening'/>
        </div>

        <div className='d-flex ms-5 mt-5 '>
          <img className='ms-3' src={Galety} width="20" height="20" alt='Icons' />
          <img className='ms-3' src={Giff} width="20" height="20" alt='Icons' />
          <img className='ms-3' src={Routs} width="20" height="20" alt='Icons' />
          <img className='ms-3' src={Icons} width="20" height="20" alt='Icons' />
          <img className='ms-3' src={Kalendar} width="20" height="20" alt='Icons' />
        </div>
        <button className='Tweet'>Tweet</button>
      </div>
      {/* =========================== */}

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
      <div className='mt-4 ps-3'>
        <div className='d-flex'>
          <img src={Diziner} width="60" height="60" alt="klents" />
          <div className='ms-3'>
            <h3 className='d-inline Designsta'>CreativePhoto</h3>
            <span>@cloutexhibition · 1h</span>
            <p className='klentsrext'>Обетда..... <br />
              Кечиринглар</p>


          </div>
          <img className='d-block ms-auto mb-5 me-2' src={vector} width="" height="" alt="vector" />
        </div>
            <img src={food} width="633" height="453" alt='FoodImg'/>
        <div className='ms-5 mt-3 ps-4'>
          <img className=' me-3' src={message} width="43" height="24" alt='Icons' />
          <img className='ms-5 me-3' src={Reflishe} width="43" height="24" alt='Icons' />
          <img className='ms-5 me-3' src={Like} width="43" height="24" alt='Icons' />
          <img className='ms-5 me-3' src={Export} width="24" height="24" alt='Icons' />
          <img className='ms-5' src={Statistika} width="24" height="24" alt='Icons' />
        </div>

      </div>
      <hr />

    </div>
  )
}

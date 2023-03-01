

import React from 'react'
import "./SingleBady.css"
import Avter from "../../../assets/images/Ellipse 3.png"
import vector from "../../../assets/images/Vector.svg"
import message from "../../../assets/images/message.svg"
import Reflishe from "../../../assets/images/Reflishe.svg"
import Like from "../../../assets/images/Like.svg"
import Export from "../../../assets/images/share.svg"
import Statistika from "../../../assets/images/statistics.svg"
import ReflisheColor from "../../../assets/images/ReflisheColor.svg"
import LikeColor from "../../../assets/images/LikeColor.svg"
import VektorLeft from "../../../assets/images/VektorLeft.svg"
import BgImg from "../../../assets/images/BgImg.jpg"
import Mars from "../../../assets/images/Mars.svg"
import TelegramLink from "../../../assets/images/TelegramLink.svg"
import Bolune from "../../../assets/images/Bolune.svg"
import Kalendar2 from "../../../assets/images/Kalendar2.svg"
import VektorButton from "../../../assets/images/VektorButton.svg"
import ProfilImgBoady from "../../../assets/images/ProfilImgBoady.jpg"
import Myphoto from "../../../assets/images/My-photo.jpg"
import { NavLink, useNavigate, useParams } from 'react-router-dom'


export const SingleBady = () => {
    const {id}=useParams()
    const navigate = useNavigate()
    const localData= localStorage.getItem("token")
    console.log(id);

    return (
        <div >
            <div className='d-flex align-items-center  px-3 '>
                <button className='border-0 p-0 bg-none' style={{ background: "none" }} onClick={(evt) => navigate(-1)}>
                    <img src={VektorLeft} width="50" height="15" alt='VektorLeft' />
                </button>
                <div>
                    <h2 className='Header'>{localData}_001</h2>
                    <span>1,070 Tweets</span>
                </div>
            </div>
            <hr />

            <div className='position-relative'>
                <img onClick={id} src={BgImg} width="710" height="230" alt='bg-Img' />
                <img className='BgProfilImg' src={Myphoto} width="100" height="100" alt='avter' />
            </div>
            <button className='editButton'>Edit profile</button>
            <div className='IconsContent px-3 pb-2'>

                <h2 className='AvterName'>
                  {localData}
                </h2>
                <p className='AvterText'>@rustam_tolliboyev</p>
                <h6 >UX&UI designer at <a className='text-decoration-underline' href='https://abutech.uz/'>@abutechuz</a></h6>

                <ul className='d-flex p-0 mt-3 mb-0'>
                    <li className='d-flex align-items-senter mb-0'>
                        <img src={Mars} width="20" height="20" alt='Icons' />
                        <p className='TextLink ms-2'>Mashag’daman</p>
                    </li>
                    <li className='d-flex ps-3 align-items-senter mb-0'>
                        <img src={TelegramLink} width="20" height="20" alt='Icons' />
                        <p className='TextLink ms-2'><a href='https://t.me/boburjon_mavlonov'>t.me/boburjon_mavlonov</a></p>
                    </li>
                    <li className='d-flex ps-3 align-items-senter mb-0'>
                        <img src={Bolune} width="20" height="20" alt='Icons' />
                        <p className='TextLink ms-2'> Born November 24, 2000</p>
                    </li>
                    <li className='d-flex ps-3 align-items-senter mb-0'>
                        <img src={Kalendar2} width="20" height="20" alt='Icons' />
                        <p className='TextLink ms-2' >Joined May 2020</p>
                    </li>

                </ul>
                <div className='d-flex'>
                    <div>
                        <h5 className='d-inline'>67 </h5>
                        <span className='AvterText'>Following</span>
                    </div>
                    <div className='ms-3'>
                        <h5 className='d-inline'>67 </h5>
                        <span className='AvterText'>Following</span>
                    </div>
                </div>

                <div className='d-flex align-items-center justify-content-around mt-3'>
                    <NavLink className={({ isActive }) => isActive ? "Activ" : "NoAktive"} to={'/SinglePge'}>Tweets</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "Activ" : "NoAktive"} to={'/'}>Tweets & replies</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "Activ" : "NoAktive"} to={'/'}>Media</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "Activ" : "NoAktive"} to={'/'}>Likes</NavLink>
                </div>
            </div>
            {/* =========================== */}

            <div className='mt-4 ps-3'>
                <div className='d-flex align-items-center ms-5 mb-3'>
                    <img src={VektorButton} width="13" height="17" alt='vektorbutton' />
                    <p className='mb-0 ms-2 '>Pinned Tweet</p>
                </div>
                <div className='d-flex'>
                    <img src={Avter} width="60" height="60" alt="klents" />
                    <div className='ms-3'>
                        <h3 className='d-inline Designsta'>Bobur</h3>
                        <span>@bobur_mavlonov · Apr 1</span>
                        <p className='klentsrext'>4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim</p>

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
                    <img src={Avter} width="60" height="60" alt="klents" />
                    <div className='ms-3'>
                        <h3 className='d-inline Designsta'>Bobur</h3>
                        <span>@bobur_mavlonov · Apr 1</span>
                        <p className='klentsrext'>Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. </p>

                        <p className='klentsrext'>Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. </p>

                        <p className='klentsrext'>Gap faqat biznes trenerlar haqida emas.
                        </p>
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
                    <img src={Avter} width="60" height="60" alt="klents" />
                    <div className='ms-3'>
                        <h3 className='d-inline Designsta'>Bobur</h3>
                        <span>@bobur_mavlonov · Apr 1</span>
                        <p className='klentsrext'>A bo'pti maskamasman</p>


                    </div>
                    <img className='d-block ms-auto mb-5 me-2' src={vector} width="" height="" alt="vector" />
                </div>
                <img src={ProfilImgBoady} width="633" height="453" alt='FoodImg' />
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


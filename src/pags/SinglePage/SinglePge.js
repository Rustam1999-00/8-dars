

import React from 'react'
import { Menu } from '../../DB/db'
import Logo from '../../assets/images/twitter-logo-4 1.svg'
import "./SinglePage.css"
import vector from '../../assets/images/Vector.svg'
import search from "../../assets/images/search.svg"
import settings from '../../assets/images/settings.svg'
import Mushtary from '../../assets/images/Ellipse 5Mushtary.jpg'
import shuhrat from '../../assets/images/Ellipse 5Shuhrat.jpg'
import Myphoto from '../../assets/images/My-photo.jpg'
import Klents from "../../assets/images/klents.jpg"
import {SingleBady} from './SingelBady/SingleBady'
import { NavLink } from 'react-router-dom'



export default function SinglePge() {
    const localData= localStorage.getItem("token")

    return (
        <div className='row'>

        <div className='col-3 position-absolute sidebarLeft' style={{ padding: '31px' }} >
            <img className='w-25 mx-auto d-block ' src={Logo} width="40" height="33" alt='TwetterLogo' />
            <ul className='list-unstyled mt-5'>
                {
                    Menu.map((el) => (
                        <li className=' d-flex align-items-center mb-4 text-center offset-3'>
                           <NavLink className={({isActive}) => isActive ? ((el.Text === 'Profile'?'Active':'NoActive')) : ('NoActive') }to={el.Text==="Profile"?'/SinglePge':'/'}>
                           <img className='' src={el.Img} width="25" height='23' alt='NavbarImg' />
                            <h5 className='d-inline mb-0 ms-3 sidebarTitle'>{el.Text}</h5>
                           </NavLink>
                        </li>
                    ))
                }
            </ul>
            <button className='sidebarButton' >Tweet</button>
            <div className='d-flex align-items-center offset-3 profilcontent '>
                <img className='rounded-pill' src={Myphoto} width="50" height="50" alt='PropilImg' />
                <div className='ms-2'>
                    <h4 className='ProfilTitle'>{localData}</h4>
                    <p className='ProfilText'>@bobur_mavlonov</p>
                </div>
                <img className='ms-3' src={vector} width="17" height="4" alt='Dopdovn' />
            </div>



        </div>
        <div className='col-6  offset-3 p-0 '>

           <SingleBady/>
           
        </div>
        <div className='col-3  sidebarRight'>

            <form className='position-relative'>
                <img className='searchImg' src={search} width="" height="" alt='search'/>
                <input className='inputsearch' type='search' placeholder='Search Twitter' />

            </form>
       <img src={Klents} width="313" height="178" alt='KlentIngs'/>
            <div className='likecontent'>
                <h2 className='liketite'>
                    You might like
                </h2>
                <div className='d-flex align-items-center justify-content-between mb-4'>
                    <img className='mushtaryImg' src={Mushtary} width="50" height="50" alt='title'/>
                    <div >
                        <h4 className='Mushtariy'>
                            Mushtariy
                        </h4>
                        <p className='Mushtariytext'>@Mushtar565266</p>
                    </div>
                    <button className='Follow'>Follow</button>
                </div>
                <div className='d-flex align-items-center justify-content-between mb-4'>
                    <img className='ShuhratImg' src={shuhrat} width="50" height="50" alt='title'/>
                    <div>
                        <h4 className='Mushtariy'>
                            Shuhratbek
                        </h4>
                        <p className='Mushtariytext'>@mrshukhrat</p>
                    </div>
                    <button className='Follow'>Follow</button>
                </div>
                    <p className='Show'>Show more</p>
            </div>
            {/* ========================= */}
            <div className='righ-content'>
                <div className='d-flex align-items-center justify-content-between'>
                    <h2 className='Trends'>Trends for you</h2>
                    <img src={settings} width="21" height="21" alt='vector'/>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <p className='Germany'>Trending in Germany</p>
                    <img src={vector} width="17" height="4" alt='vector'/>
                </div>
                <div>
                    <h4 className='Revolution'>
                        Revolution
                    </h4>
                    <p className='Tweets'>
                        50.4K Tweets
                    </p>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <p className='Germany'>Trending in Germany</p>
                    <img src={vector} width="17" height="4" alt='vector'/>
                </div>
                <div>
                    <h4 className='Revolution'>
                        Revolution
                    </h4>
                    <p className='Tweets'>
                        50.4K Tweets
                    </p>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <p className='Germany'>Trending in Germany</p>
                    <img src={vector} width="17" height="4" alt='vector'/>
                </div>
                <div>
                    <h4 className='Revolution'>
                        Revolution
                    </h4>
                    <p className='Tweets'>
                        50.4K Tweets
                    </p>
                </div>
                <p className='Show'>Show more</p>
            </div>
                {/* =============== ========================================*/}
           
           
        </div>
    </div>
    )
}


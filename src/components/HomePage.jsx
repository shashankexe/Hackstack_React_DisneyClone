import React from 'react'
import Footer from './Footer'
import Moviedisp from './Moviedisp'
import Slider from './Slider'
import TitleBar from './TitleBar'
import myspaceLogo from './../assets/images/myspaceLogo.svg'
import searchLogo from './../assets/images/searchLogo.svg'
import homeLogo from './../assets/images/homeLogo.svg'
import tvLogo from './../assets/images/tvLogo.svg'
import moviesLogo from './../assets/images/moviesLogo.svg'
import sportsLogo from './../assets/images/sportsLogo.svg'
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <ul>
            <li><a href=""><img src={myspaceLogo} className="icon" /></a></li>
            <li><a href=""><img src={searchLogo} className="icon " /></a></li>
            <Link to="/"><li><img src={homeLogo} className="icon " /></li></Link>
            <Link to="/movie"><li><img src={tvLogo} className="icon " /></li></Link>
            <li><a href=""><img src={moviesLogo} className="icon " /></a></li>
            <li><a href=""><img src={sportsLogo} className="icon " /></a></li>
          </ul>
        </div>
        <div className='main_content'>
          <div className="flex flex-col w-full min-h-screen">
            <TitleBar />
            <div className='my-2 align-center'><Slider /></div> 
            <Moviedisp/>
            <div><Footer /></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomePage
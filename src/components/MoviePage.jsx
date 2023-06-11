import React from 'react'
import bgP from "./../assets/images/moviePic2.jpeg"
import titleImg from "./../assets/images/titleImage2.png"
import plusImg from "./../assets/images/plus.png"
import disneyLogo from './../assets/images/dplus.svg'
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function MoviePage() {
    return (
        <>
            <div className="w-screen h-screen relative">
                <img src={bgP} className="w-full h-full object-cover" />
            </div>
            <header className="flex justify-between px-4 w-screen absolute top-5">
                <div className="bg-neutral-900 px-4 top-0">
                    <Link to="/home"><img src={disneyLogo} className="md:w-[100px] sm:w-[60px] object-cover" /></Link>
                </div>
                <Button size="sm" className="border border-sky-1000 h-10 bg-neutral-900">
                    <span>Login</span>
                </Button>
            </header>
            <div className='absolute top-[35%] -translate-x-0 translate-y-[-50%] left-5 p-2'>
                <img src={titleImg} className="w-[500px] object-cover" />
            </div>
            <div className='flex absolute content-center top-[60%] -translate-x-0 translate-y-[-50%] left-1 p-2'>
                <button className="inline-flex w-40 mx-3 align-center items-center px-4 py-2 bg-white hover:bg-gray-300 text-black text-lg font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 fill-black " viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>
                    <span>Play</span>
                </button>
                <button className="inline-flex w-40 mx-3 border border-white items-center px-4 py-2 bg-black hover:bg-gray-900 opacity-50 text-white text-lg font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 fill-white" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>
                    <span>Trailer</span>
                </button>
                <img src={plusImg} className="h-[40px] w-[40px] opacity-70 cursor-pointer hover:fill-gray" />
            </div>
            <div className='absolute top-[70%] -translate-x-0 translate-y-[-50%] left-5 p-2'>
                <h3 className='text-xl text-white font-bold '>2010 • 1h 40m • Family, Fantasy, Animation, Action-Adventure, Musical</h3>
            </div>
            <div className='absolute top-[80%] -translate-x-0 translate-y-[-50%] left-5 p-2'>
                <h2 className='text-lg text-white'>When the kingdom's most wanted bandit is taken hostage by Rapunzel — a teen with 70 feet of golden hair </h2>
            </div>
            <div className='text-lg absolute top-[85%] -translate-x-0 translate-y-[-50%] left-5 p-2'>
                <h2 className='text-white'>who's looking to escape the tower where she's been locked away for years — the unlikely duo sets off on a hair-raising escapade.</h2>
            </div>
        </>
    )
}

export default MoviePage

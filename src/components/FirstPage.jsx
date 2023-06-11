import React from "react"
import bgPic from "./../assets/images/dis.jpg"
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function FirstPage() {
    return (
        <>
            <div className="w-screen h-screen relative">
                <img src={bgPic} className="w-full h-full object-cover" />
                <div className="relative bottom-20 content-center text-center">
                <Link to="/home"><button className="ring-4 w-1/3 text-white text-2xl bg-blue-400 hover:bg-blue-600 rounded-lg
                    px-20 py-3">Explore</button></Link>
                </div>
            </div>
            <header className="flex flex-row-reverse px-4 w-screen absolute top-5 bg-neutral-900 ">
                <Button size="sm" className="bg-slate-950 border border-sky-500">
                    <span>Login</span>
                </Button>
            </header>
        </>
    )
}

export default FirstPage
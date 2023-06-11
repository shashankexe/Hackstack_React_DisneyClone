import React from 'react'
import disneyLogo from './../assets/images/dplus.svg'
import { Button } from "@material-tailwind/react";


function TitleBar() {
  return (
    <header className="flex justify-between w-full relative bg-slate-950">
      <div className="bg-neutral-900 px-4 top-0">
        <img src={disneyLogo} className="w-[70px] object-cover" />
      </div>
      <div className="bg-neutral-900 px-5">
        <Button size="sm" className="bg-slate-950 border border-sky-500">
          <span>Login</span>
        </Button>
      </div>
    </header>
  )
}

export default TitleBar


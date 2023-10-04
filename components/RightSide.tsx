import React from 'react'

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-12 text-textLight">
        <a href="mailto:tejas.helwatkar@yahoo.com">
            <p className="text-sm rotate-90 w-80 tracking-wide text-textGreen">tejas.helwatkar@yahoo.com</p>
        </a>
        <span className= "w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  )
}

export default RightSide
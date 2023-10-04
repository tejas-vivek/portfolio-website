import React from 'react'

const Contact = () => {
  return (
    <section
    id="contact"
    className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center">
        <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
            4. Contact Me
        </p>
        <h2 className='font-titleFont text-4xl font-semibold'>Get in Touch</h2>
        <p className="max-w-[600px] text-center text-textDark">
            I am currently looking for full-time opportunities as a Full-stack Developer or Front-end Developer. Email me with any leads. 
        </p>
        <a href="mailto:tejas.helwatkar@yahoo.com">
            <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
                Say Hello
            </button>
        </a>
        </section>
  )
}

export default Contact
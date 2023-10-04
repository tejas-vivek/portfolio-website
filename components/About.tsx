import React from 'react'
import SectionTitle from './SectionTitle';
import { AiFillThunderbolt } from "react-icons/ai";
import Image from 'next/image';
import { profileImg } from '@/public/assets';

const About = () => {
    return (
        <section id="about" className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
            <SectionTitle title="About Me" titleNo="01" />
            <div className="flex flex-col lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ex itaque. Ratione illum rerum aut sint hic architecto praesentium eaque, repellat ab sit soluta, distinctio perspiciatis cupiditate saepe, a autem unde consequuntur voluptatibus animi? Mollitia nisi assumenda accusantium molestias earum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, distinctio aliquid quasi aut ex ea repellat corrupti magnam expedita quaerat,
                        <span className="text-textGreen">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, minima!
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, distinctio aliquid quasi aut ex ea repellat corrupti magnam expedita quaerat,
                        <span className="text-textGreen">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, minima!
                        </span>
                    </p>
                    <p>Here are a few technologies I have been working with recently:</p>
                    <ul className="max-w-[450px] text-md font-titleFont grid grid-cols-2 gap-2 mt-6">
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>JavaScript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>Node.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>React.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>Tailwind CSS
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>Next.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>TypeScript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>Express.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>MongoDB
                        </li>
                    </ul>
                </div>
                <div className="w-full lgl:w-1/3 mdl:w-1/2 h-80 relative group">
                    <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                        <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                            <Image className="rounded-lg h-full object-cover"
                                src={profileImg}
                                alt="profileImg"
                            />
                            <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/10 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </div>
                    <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
                </div>
            </div>
        </section>
    )
}

export default About
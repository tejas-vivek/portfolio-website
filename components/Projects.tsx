import { cloudProject, securityProject, slackClone } from "@/public/assets";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";


const Projects = () => {
    return (
        <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
            <SectionTitle title="Some of my Projects" titleNo="03" />
            <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
                {/* Project one */}
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col xl:flex-row gap-6">
                        <a className="w-full xl:w-1/2 h-auto relative group" href="https://github.com/tejas-vivek" target="_blank">
                            <div>
                                <Image className="w-full h-full object-contain" src={slackClone} alt="slackClone" />
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">Slack App Clone</h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores pariatur aut porro animi ex provident, aspernatur assumenda dicta tenetur eaque.{" "}
                                <span className="text-textDark">fhjhd</span> and then make the purchase using <span className="text-textDark">Firebase</span>
                            </p>
                            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                                <li>React JS</li>
                                <li>Firebase</li>
                                <li>Styled Components</li>
                                <li>Git</li>
                                <li>React Slick</li>
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <a href="" target="_blank" className="hover:text-textDark duration-300">
                                    <TbBrandGithub />
                                </a>
                                <a href="" target="_blank" className="hover:text-textDark duration-300">
                                    <RxOpenInNewWindow />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Two */}

                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col xl:flex-row-reverse gap-6">
                        <a className="w-full xl:w-1/2 h-auto relative group" href="https://github.com/tejas-vivek" target="_blank">
                            <div>
                                <Image className="w-full h-full object-contain" src={cloudProject} alt="slackClone" />
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">Microservices Application using Spring Boot</h3>
                            <p className="bg-[#112240] text-sm md:text-base xl:-mr-16 p-2 md:p-6 rounded-md">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores pariatur aut porro animi ex provident, aspernatur assumenda dicta tenetur eaque.{" "}
                                <span className="text-textDark">fhjhd</span> and then make the purchase using <span className="text-textDark">Firebase</span>
                            </p>
                            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                                <li>Java Spring</li>
                                <li>Kubernetes</li>
                                <li>Spring Data</li>
                                <li>Git</li>                   
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <a href="" target="_blank" className="hover:text-textDark duration-300">
                                    <TbBrandGithub />
                                </a>
                                <a href="" target="_blank" className="hover:text-textDark duration-300">
                                    <RxOpenInNewWindow />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Three */}
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col xl:flex-row gap-6">
                        <a className="w-full xl:w-1/2 h-auto relative group" href="https://github.com/tejas-vivek" target="_blank">
                            <div>
                                <Image className="w-full h-full object-contain" src={securityProject} alt="securityProject" />
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">File Transaction using RSA and Message Authentication using MD5</h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores pariatur aut porro animi ex provident, aspernatur assumenda dicta tenetur eaque.{" "}
                                <span className="text-textDark">fhjhd</span> and then make the purchase using <span className="text-textDark">Firebase</span>
                            </p>
                            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                                <li>RSA cryptosystem</li>
                                <li>MD5 Hashing</li>
                                <li>Python</li>
                                <li>Secure File Transmission</li>
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <a href="" target="_blank" className="hover:text-textDark duration-300">
                                    <TbBrandGithub />
                                </a>
                                <a href="" target="_blank" className="hover:text-textDark duration-300">
                                    <RxOpenInNewWindow />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects
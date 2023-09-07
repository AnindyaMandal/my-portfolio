"use client"
import { useState } from 'react'
import '../styles/globals.css'
import Link from 'next/link'
import ProjectCard from './ProjectCard'
import { ProjectInfo } from '@/utils/ProjectInfo'

const Nav = () => {

    const [toggleProjects, setToggleProjects] = useState(false)

    const test = () => {
        console.log("Toogle projects: " + toggleProjects)
    }

    const info : ProjectInfo = {
        name: "Posture Alert",
        description: "test",
        vid_url: "https://www.youtube.com/watch?v=5xFqm6QPP1I"
    }



    return (
        <nav className='w-full mb-16 pt-3 bg-slate-600 relative top-0 h-auto '>
            <div className='w-full justify-around bg-white grid-cols-2 '>
                <button type='button' className='black_btn_nav'>
                    Home
                </button>
                
                <button type='button' className='black_btn_nav' onClick={() => setToggleProjects((prev) => (!prev))}>
                    Projects ↓
                </button>
                {toggleProjects && (
                    <div className='dropdown'>
                        {/* TODO:
                            Find out import fs for nodejs
                            
                            */}

                        <ProjectCard {...info}/>

                        <Link 
                        href="\"
                        className='black_btn_prj'
                        >
                            VR-Therapist
                        </Link>
                        <Link 
                        href="\"
                        className='black_btn_prj'
                        >
                            Phone Unlocker
                        </Link>
                        <Link 
                        href="\"
                        className='black_btn_prj'
                        >
                            Tug Of War
                        </Link>
                        <Link 
                        href="\"
                        className='black_btn_prj'
                        >
                            Sun-Follower Hat
                        </Link>
                        <Link 
                        href="\"
                        className='black_btn_prj'
                        >
                            Hydro Homie
                        </Link>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Nav
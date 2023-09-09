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

    const postureAlertInfo : ProjectInfo = {
        name: "Posture Alert",
        description: "As the technology around us advances, the more the world we live in is evolving. Work, education, entertainment, and essentially everything we interact with is now shifting online. These shifts are leading to human beings living in a much more sedentary lifestyle weakening their core and leading to bad posture. This bad posture can lead to many problems such as back pain and spinal dysfunction. Which is why the project we chose to take on is Posture Alert. This is a device that you can attach to your chair which you spend the most amount of time on. Once attached, the sensors on the device will identify if you are slouching. If you are slouching or have bad posture the device will make noise to alert you to straighten your posture.",
        vid_url: "https://www.youtube.com/embed/5xFqm6QPP1I?si=lmGweoN65IGw57OQ"
    }

    const vrTherapistInfo : ProjectInfo = {
        name: "VR Therapist",
        description: "In this virtual app individual’s can talk to their therapist virtually. In order to do this they will need to join a room by first choosing a setting, and then send the room id to the therapist so that they can join. Once they do this the room will load in with the environment chosen and both users will be in the room itself. From there, voice proximity chat will be enabled once the users give permission to allow the program to access their microphone. Now, both the user and the therapist are free to talk and look around their surroundings in the comfort of their own home while also remaining anonymous.",
        vid_url: "https://www.youtube.com/embed/svSxHHkrLTQ?si=l_e0QSXm7bCOmAXU"
    }

    const sunHatInfo : ProjectInfo = {
        name: "Sun-Follower Hat",
        description: "A simple hat with a sunflower that always tries to face the sun or the brightest light source available to it. The sunflower is also Ukraine’s national flower and due to current world events it unfortunately does not convey happiness. Besides that, the sunflower was the perfect spring flower choice because it turns to face the sun in nature.",
        vid_url: "https://www.youtube.com/embed/HeW5_CPCoFY?si=tNOgSyr0n0ijFWxM"
    }

    const hydroHomieInfo : ProjectInfo = {
        name: "Hydro Homie",
        description: "A simple system to model my daily water intake and to motivate me to drink more. It uses a L293D motor controller to control the direction and speeds of 2 DC motors. One of the motors is hidden from view and it has a large spool of thread attached to it. When the user presses the button, it signals the hydro homie to transfer some string to the visible motor. The amount of string signifies how hydrated the user is. Pressing the button adds 750mL to the user’s water intake for the day. (750mL because my daily use water bottle is 750mL) Hydration level drops as time passes",
        vid_url: "https://www.youtube.com/embed/v7SpnMYjVSA?si=6282glVcVSxvpwef"
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
                            Find a way to delay the transition when mouseLeaveEvent happens
                            Create and add cover letter
                            Add resume under it
                            Figure out routing
                            */}

                        <ProjectCard {...postureAlertInfo}/>

                        <ProjectCard {...vrTherapistInfo}/>

                        <ProjectCard {...hydroHomieInfo}/>

                        <ProjectCard {...sunHatInfo}/>

                    </div>
                )}

            </div>
        </nav>
    )
}

export default Nav
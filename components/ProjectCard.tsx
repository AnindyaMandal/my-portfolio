"use client"

import "../styles/globals.css"
import Link from 'next/link'
import { ProjectInfo } from "@/utils/ProjectInfo"
import { useState } from "react"





const ProjectCard = (info : ProjectInfo) => {

  const [toggleExpandedCardView, setToggleExpandedCardView] = useState(false)

  // Function to change the project cards from card view to compact view
  const setToggleCSS = () => {
    if (toggleExpandedCardView) {
      return 'black_btn_card transition_time'
    }

    return 'black_btn_prj transition_time'
  }

  const waitBeforeCollapse = () => {
    setTimeout(() => {
      if (toggleExpandedCardView) {
        setToggleExpandedCardView(false)
      }
    }, 1500)
  }


  return (
    
        <div 
            className={setToggleCSS()}
            onMouseEnter={() => setToggleExpandedCardView((prev) => (!prev))}
            onMouseLeave={() => waitBeforeCollapse()}
            >
            <div>
              <h1>{info.name}</h1>  
              {toggleExpandedCardView && 
              <>
                <br></br>
                <p>{info.description}</p>
              </>
              }
            </div>
            
            {toggleExpandedCardView && 
            <div className="sm:hidden">
              <iframe className="transition_time_long" src={info.vid_url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

            </div>
            }
            
        </div>
  )
}

export default ProjectCard
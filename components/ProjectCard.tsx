import "../styles/globals.css"
import Link from 'next/link'
import { ProjectInfo } from "@/utils/ProjectInfo"

const ProjectCard = (info : ProjectInfo) => {
  return (
    
        <Link 
            href="\"
            className='black_btn_prj'
            >
            {info.name}
            <br />
            {info.vid_url}
        </Link>
  )
}

export default ProjectCard
import { useState, useEffect } from 'react'
import './ProjectsList.css'
//assets
import LikedClicado from '../../assets/like-clicado.svg'
import LikedDesclicado from '../../assets/like-desclicado.svg'
//utils
import { getApiData } from '../../services/apiServices.js'
function ProjectsList() {
    const [projects, setProjects] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }
        fetchData()
    }, [])
    return (
        <div className="projects-section" >
            <div className="projects-hero">
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            </div>
            <div className="projects-grid">
                {
                    projects ?
                        projects.map((project) => (
                            <div className="project-card d-flex jc-center al-center fd-column" key={project.id}>
                                <div className="thumb tertiary-background" style={{ backgroundImage: `url(${project.thumb})`}}></div>
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                                <img src={LikedClicado} height="20px"/>
                            </div>
                        )) 
                    : 
                    null
                }
            </div>
        </div>
    )
}
export default ProjectsList
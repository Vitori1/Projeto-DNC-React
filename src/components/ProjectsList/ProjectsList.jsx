import { useContext, useState, useEffect } from 'react'
import './ProjectsList.css'
//assets
import LikedClicado from '../../assets/like-clicado.svg'
import LikedDesclicado from '../../assets/like-desclicado.svg'
//utils
import { getApiData } from '../../services/apiServices.js'
//components
import Button from '../Button/Button.jsx'
//context
import { AppContext } from '../../contexts/AppContext.jsx'
function ProjectsList() {
    const [favProjects, setFavProject] = useState([])
    const [projects, setProjects] = useState()
    const appContext = useContext(AppContext)
    const savedFavProjects = (id) => {
            setFavProject((prevFavProjects) => {
                if (prevFavProjects.includes(id)) {
                    const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                    sessionStorage.setItem("favProjects", JSON.stringify(filterArray))
                    return prevFavProjects.filter((projectId) => projectId !== id)
                } else {
                    sessionStorage.setItem("favProjects", JSON.stringify([...prevFavProjects, id]))
                    return [...prevFavProjects, id]
                }
            })
        }
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
    useEffect(() => {
        const savedFavProjectsEffect = JSON.parse(sessionStorage.getItem("favProjects"))
        if (savedFavProjectsEffect) {
            setFavProject(savedFavProjectsEffect)
        }
    }, [])
    return (
        <div className="projects-section" >
            <div className="projects-hero">
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            <div className="projects-grid">
                {
                    projects ?
                        projects.map((project) => (
                            <div className="project-card d-flex jc-center al-center fd-column" key={project.id}>
                                <div className="thumb tertiary-background" style={{ backgroundImage: `url(${project.thumb})`}}></div>
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                                <Button buttonStyle="unstyled" onClick={savedFavProjects(project.id)}>
                                    <img src={favProjects.includes(project.id) ? LikedClicado : LikedDesclicado} height="20px"/>
                                </Button>
                                
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
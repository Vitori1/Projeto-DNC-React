import { useContext } from 'react'
import AboutText from '../components/AboutText/AboutText.jsx'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Banner from '../components/Banner/Banner.jsx'
//context
import { AppContext } from '../contexts/AppContext.jsx'
function About() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header/>
            <Banner title={appContext.languages[appContext.language].menu.about} image="fundo-about.svg"/>
            <div className="container">
               <AboutText/>
            </div>
            <Footer/>
        </>
    )
}
export default About
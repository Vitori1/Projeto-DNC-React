import AboutText from '../components/AboutText/AboutText.jsx'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Banner from '../components/Banner/Banner.jsx'
function About() {
    return (
        <>
            <Header/>
            <Banner title="About" image="fundo-about.svg"/>
            <div className="container">
               <AboutText/>
            </div>
            <Footer/>
        </>
    )
}
export default About
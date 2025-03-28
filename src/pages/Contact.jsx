import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Banner from '../components/Banner/Banner.jsx'
import ContactForm from '../components/ContactForm/ContactForm.jsx'
function Contact() {
    return (
        <>
            <Header/>
            <Banner title="Contact" image="fundo-contact.svg"/>
            <div className="container">
               <ContactForm/>
            </div>
            <Footer/>
        </>
    )
}
export default Contact
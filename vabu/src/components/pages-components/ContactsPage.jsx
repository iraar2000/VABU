import "./ContactsPage.css"
import MenuSection from '@sctcomponent/MenuSection';
import HeroSection from '@sctcomponent/HeroSection';

function ContactsPage () {
    return (
        <div className='wrapper-center-items page-container'>
            {/* menu section of the web page */}
            <MenuSection/>

            {/* hero section of the web page */}
            <HeroSection/>
        </div>
    )
}

export default ContactsPage;
import './HomePage.css'
import MenuSection from '@sctcomponent/MenuSection';
import HeroSection from '@sctcomponent/HeroSection';
import ServiceSection from '@sctcomponent/serviceSection';
import ServiceDescription from '@sctcomponent/ServiceDescription';
import WhatOurClientSaySection from '@sctcomponent/WhatOurClientSaySection';

function HomePage () {
    return (
        <div className='wrapper-center-items page-container'>

            {/* menu section of the web page */}
            <MenuSection/>

            {/* hero section of the web page */}
            <HeroSection/>

            {/* the service section of the web home page */}
            <ServiceSection/>

            {/* the service description content */}
            <ServiceDescription/>

            {/* what our client say section */}
            <WhatOurClientSaySection/>

        </div>
    );
}

export default HomePage;
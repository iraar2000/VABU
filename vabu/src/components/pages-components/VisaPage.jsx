import MenuSection from '@sctcomponent/MenuSection';
import HeroSection from '@sctcomponent/HeroSection';
import VisaServiceListing from "@sctcomponent/VisaServiceListing";
import FooterSection from "@sctcomponent/FooterSection";
import WhyChooseUsSection from '@sctcomponent/WhyChooseUsSection';

function VisaPage () {
    return (
        <div className='wrapper-center-items page-container'>
            {/* menu section of the visa page */}
            <MenuSection/>

            {/* hero section of the visa page */}
            <HeroSection/>

            {/* the listing section of the visa page */}
            <VisaServiceListing/>

            {/* the why choose us section */}
            <WhyChooseUsSection/>

            {/* the footer section of the vias page */}
            <FooterSection/>
        </div>
    )
}

export default VisaPage;
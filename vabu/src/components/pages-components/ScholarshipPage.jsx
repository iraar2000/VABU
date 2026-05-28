import MenuSection from '@sctcomponent/MenuSection';
import HeroSection from '@sctcomponent/HeroSection';
import FooterSection from "@sctcomponent/FooterSection";
import ScholarshipListingSection from '@sctcomponent/ScholarshipListingSection';
import WhyChooseUsSection from '@sctcomponent/WhyChooseUsSection';

function ScholarshipPage () {
    return (
        <div className='wrapper-center-items page-container'>
            {/* menu section of the web page */}
            <MenuSection/>

            {/* hero section of the web page */}
            <HeroSection/>

            {/* the listing section of the page */}
            <ScholarshipListingSection/>
            
            {/* the why choose us section */}
            <WhyChooseUsSection/>

            {/* the footer section */}
            <FooterSection/>
        </div>
    )
}

export default ScholarshipPage;
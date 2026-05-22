import './MenuSection.css'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MenuSection() {

    const [activeMenu, setActiveMenu] = useState(0);

    const menuList = [
        {link:"/", name:"Home"},
        {link:"/visa", name:"Visa Application"},
        {link:"/scholarships", name:"Scholarship"},
        {link:"/shipping", name:"Shipping"},
        {link:"/products", name:"Products"},
        {link:"/contacts", name:"Contact Us"},
        {link:"/aboutus", name:"About Us"}
    ]

    return (
        // the menu section
        <section className='menu' id="menu">
            <div className="menu-content">
                {/* menu logo  */}
                <Link to={"/"} className='logo-container'>
                    <div className='logo-background'>
                        <img className='company-logo' src='public/logo.png'/>
                    </div>
                </Link>

                {/* menu listing */}
                <div className='menu-page-navigator'>
                    <ul className='menu-navigation-list'>
                        {menuList.map((menu, index) => (
                            <li key={`${menu}-${index}`} className={`menu-navigation-item ${index === activeMenu? "active" : ""}`}>
                                <button className='menu-button' onClick={() => setActiveMenu(index)}>
                                    <Link to={`${menu.link}`}>{menu.name}</Link>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* the links to the social media accounts of the company */}
            <div className='menu-socialmedia-link'>
                <ul className='socialmedia-link-list'>
                    {/* whatsapp link */}
                    <li className='socialmedia-link'>
                        <SocialIcon url="https://www.wa.me/250" network='whatsapp' style={{height:30, width:30, color: "black"}}/>
                    </li>
                    {/* facebook link */}
                    <li className='socialmedia-link'>
                        <SocialIcon url="https://www.facebook.com" network='facebook' style={{height:30, width:30, color: "black"}}/>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default MenuSection;
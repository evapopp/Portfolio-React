import AboutImages from "../images/about-images/about-me-images";

const About = () => {
    return (
        <div>
            <div className='about-wd'>
                I'm an ambitous Full Stack Developer who is drawn to the tech industry for its continuous challenges, growth opportunities and the blending of design and innovation. I approach my work with a wholistic lens to bring together creative solutions with functionality to diagnose, restore and ultimately generate products that are useful for both clients and users.                 
            </div>
            <br/>
            <br/>
            <div className='about-personal'>
                I currently reside in Portland, OR where there is no scarcity of outdoor recreation. On weekends I will escape to the mountains or coast where the sunrises and sunsets are brilliant, but I enjoy my local sunset spots that I  frequent on a regular basis with a beer, my partner and our pup just as much, if not more.  I'm an avid hiker and backpacker, and aspire to put more time and energy into photography one day to help capture the places I visit. I also bike commute as much as possible and have started to dabble in the adventures of bikepacking. 
                </div>
                <AboutImages />
                <div class='buffer'></div>
                <div>
                I am a member of an elite ultimate frisbee team named <a href='https://www.oregonschwa.com/' className='schwa'>Schwa</a> which competes in the women's division at the national level, most recently ranking 3rd in the US. In 2020 I was selected to the US Women's National Team Roster, which was set to compete in the 2020 World Games held in the Netherlands. Unfortunately, The Games were canceld due to the pandemic, but I plan to tryout for the next Worlds cycle and live out my dream of representing the USA on a international level. <span className='dreams'>Here's to dreams.</span>
            </div>

        </div>
    )
}

export default About;
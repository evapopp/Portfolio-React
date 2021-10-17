import About from './partials/AboutMe'
import selfImage from './images/close-up.jpg'
import Example from './partials/OffCanvas';

const Header = () => {
    return (
        <div className='header-container'>
            <Example/>
            <div className='name-section'>
                <h1 className='name'>
                    Eva Popp
                </h1>
                <About/>
            </div>
            <img src={selfImage} alt='self' className='self-image'/>            
        </div>
    )
}

export default Header;
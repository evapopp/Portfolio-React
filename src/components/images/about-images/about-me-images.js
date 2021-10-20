import stevieImg from './stevie.jpg'
import delaneyImg from './delaney.jpg';

const AboutImages = () => {
    return (
        <div className='image-container'>
            <img src={delaneyImg} alt='me and delaney' className='about-image1'/>
            <img src={stevieImg} alt='dog' className='about-image2'/>                    
        </div>
    )
}

export default AboutImages;
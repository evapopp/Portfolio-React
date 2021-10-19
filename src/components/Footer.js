import githubImg from './images/footer-images/github.png';
import linkedImg from './images/footer-images/linkedin.png';
import emailImg from './images/footer-images/email.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='footer-images'>
                <a href='https://github.com/evapopp'> 
                    <img src={githubImg} alt='github' className='footer-img'/>
                </a>
                <a href='https://www.linkedin.com/in/evapopp/'>
                    <img src={linkedImg} alt='linked in' className='footer-img'/>
                </a>
                <a href = "mailto: evapopp8@gmail.com">
                    <img src={emailImg} alt='envelope' className='footer-img'/>
                </a>
            </div>
        </div>
    )
}

export default Footer;
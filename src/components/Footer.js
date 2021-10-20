import githubImg from './images/footer-images/github.png';
import linkedImg from './images/footer-images/linkedin.png';
import emailImg from './images/footer-images/email.png';
import React from 'react';
const {useState} = React




const Footer = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="footer-container">
            <div className='footer-images'>
                <a href='https://github.com/evapopp'> 
                    <img src={githubImg} alt='github' className='footer-img'/>
                </a>
                <a href='https://www.linkedin.com/in/evapopp/'>
                    <img src={linkedImg} alt='linked in' className='footer-img'/>
                </a>
                    <img src={emailImg} alt='envelope' className='email-img' onClick={() => setVisible(!visible)}/>
             
            </div>
                <div className='email-text'>
                   {visible && <a href = "mailto: evapopp8@gmail.com" className='emailLink'>EVAPOPP@GMAIL.COM</a> }
                </div>  
        </div>
    )
}

export default Footer;
import CssImg from './project-images/css-app.png'

const CssApp = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> Get tips from this Css App </h1>                
            </div>
            <div className='project-body'>

                <div className='project-text'>
                    <h2>app descrip</h2>
                    <h3>
                        <a href='https://evapopp.github.io/css-cheatsheet/'>Deployed</a>
                        <br/>
                        <a href='https://github.com/evapopp/css-cheatsheet'> Repo </a>
                    </h3>                        
                </div>
                <img src={CssImg} alt='screenshot' className='projectImg'/>            
            </div>

        </div>
    )
}

export default CssApp;
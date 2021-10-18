import CssImg from './project-images/css-app.png'

const CssApp = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> Get quick CSS references </h1>                
            </div>
            <div className='project-body'>

                <div className='project-text'>
                    <h5>
                        The CSS Cheatsheet app gives a few, quick CSS styling codes including psuedo classes. The application's layout is responsive and uses point breaks to make it easily viewable on any device. The technologies used for this application are CSS and HTML.
                        <br/>
                        <br/>
                        Check the cheatsheet to see if any of the styling snippets come in handy for you or take a look at the code that went into creating the app.
                    </h5>
                    <h5>
                        <div className='project-links'>
                            <a href='https://evapopp.github.io/css-cheatsheet/'>Deployed Site</a>
                            <a href='https://github.com/evapopp/css-cheatsheet'> Github Repository </a>
                        </div>
                    </h5>                        
                </div>
                <img src={CssImg} alt='screenshot' className='projectImg'/>            
            </div>

        </div>
    )
}

export default CssApp;
import brewImg from './project-images/brew-app.png'

const BrewApp = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> The Brewery App for anywhere you are </h1>                
            </div>
            <div className='project-body'>
                <img src={brewImg} alt='brewery app screenshot' className='projectImg'/>
                <div className='project-text'>
                    <h2>app descrip</h2>
                    <h3> links</h3>                        
                </div>
            
            </div>

        </div>
    )
}

export default BrewApp;
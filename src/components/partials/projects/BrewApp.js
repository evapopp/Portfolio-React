import brewImg from './project-images/brew-app.png'

const BrewApp = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> The Brewery App for anywhere you are </h1>                
            </div>
            <div className='project-body'>
                <img src={brewImg} alt='screenshot' className='projectImg'/>
                <div className='project-text'>
                    <h5 className='h5text'>
                        The Brews for You app is a serverless site which fetches brewery data from a third party API based on  a user's location query. The user can then select a brewery from the data list to get the brewery's address, phone number and website. The technologies and tools used in this app are Node-Fetch, Javascript, CSS and HTML. 
                        <br/>
                        <br/>
                        Additions I would like to add to this site in the future: an option to save a selected brewery (and it's data) to a favorites list for easy retrieval.
                        <br/>
                        <br/>
                        Feel free to try and find a brewery near you, or take a look at the code that went into creating the app. 
                    </h5>
                    <h5> 
                        <div className='project-links'>
                            <a href='https://brewery-app.netlify.app/'>Deployed Site</a>

                            <a href='https://github.com/evapopp/brewery-tracker'> Github Repository </a>
                        </div>
                    </h5>                        
                </div>
            
            </div>

        </div>
    )
}

export default BrewApp;
import NoteImg from './project-images/note-app.png'

const NoteApp = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> Keep track of lists, to-do's, and helpful notes </h1>                
            </div>
            <div className='project-body'>

                <div className='project-text'>
                    <h5>
                        The Note Taker application allows a user to input text, save it, and return to the note files at a later time.The user's notes are saved to a JSON file and retrieved using Express.js routes. The site is deployed via Heroku. The technologies and tools used for this app are Express.js, Javascript, CSS and HTML. 
                        <br/>
                        <br/>
                        Try saving your mom's favorite recipe or take a look at the code that went into creating the app.
                    </h5>
                    <h5>
                        <div className='project-links'>
                            <a href='https://aqueous-harbor-93159.herokuapp.com/'>Deployed Site</a>
                            <a href='https://github.com/evapopp/note-taker-app'> Github Repository </a>
                        </div>
                    </h5>                        
                </div>
                <img src={NoteImg} alt='creenshot' className='projectImg'/>            
            </div>

        </div>
    )
}

export default NoteApp;
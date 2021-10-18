import NoteImg from './project-images/note-app.png'

const NoteApp = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> Keep track of lists, to-do's, and helpful notes </h1>                
            </div>
            <div className='project-body'>

                <div className='project-text'>
                    <h2>app descrip</h2>
                    <h3>
                    <a href='https://aqueous-harbor-93159.herokuapp.com/'>Deployed</a>
                    <br/>
                    <a href='https://github.com/evapopp/note-taker-app'> Repo </a>
                    </h3>                        
                </div>
                <img src={NoteImg} alt='creenshot' className='projectImg'/>            
            </div>

        </div>
    )
}

export default NoteApp;
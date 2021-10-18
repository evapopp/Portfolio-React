import NoteImg from './project-images/note-app.png'

const NoteApp = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> Never forget anything again! </h1>                
            </div>
            <div className='project-body'>

                <div className='project-text'>
                    <h2>app descrip</h2>
                    <h3> links</h3>                        
                </div>
                <img src={NoteImg} alt='brewery app screenshot' className='projectImg'/>            
            </div>

        </div>
    )
}

export default NoteApp;
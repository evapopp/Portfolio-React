import WorkoutImg from '../projects/project-images/workout-app.png'

const WorkoutApp = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> Track your way to your fitness goals </h1>                
            </div>
            <div className='project-body'>

                <div className='project-text'>
                <h5>
                    The Fitness Tracker app is deployed via Heroku and is designed for user ease when logging a workout. The user's workout entries are saved to MongoDB and retrieved using Express.js routes to display user stats.  The technologies and tools used for this app are Express.js, MongoDB, Javascript, HTML and CSS.
                    <br/>
                    <br/>
                    Log your own workout in the app or check out the code that went into creating it.
                </h5>
                    <h5>
                        <div className='project-links'>
                            <a href='https://salty-wildwood-11707.herokuapp.com/'>Deployed Site</a>
                            <a href='https://github.com/evapopp/Fitness-Tracker'> Github Repository </a>
                    </div>
                </h5>                        
                </div>
                <img src={WorkoutImg} alt='screenshot' className='projectImg'/>            
            </div>

        </div>
    )
}

export default WorkoutApp;
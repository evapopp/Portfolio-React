import WorkoutImg from '../projects/project-images/workout-app.png'

const WorkoutApp = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> Track your way to your fitness goals </h1>                
            </div>
            <div className='project-body'>

                <div className='project-text'>
                    <h2>app descrip</h2>
                    <h3>
                    <a href='https://salty-wildwood-11707.herokuapp.com/'>Deployed</a>
                    <br/>
                    <a href='https://github.com/evapopp/Fitness-Tracker'> Repo </a>
                    </h3>                        
                </div>
                <img src={WorkoutImg} alt='screenshot' className='projectImg'/>            
            </div>

        </div>
    )
}

export default WorkoutApp;
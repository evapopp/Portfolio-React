import plannerImg from './project-images/planner-app.png'

const PlannerApp = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> Keep your day organized with a scheduler </h1>                
            </div>
            <div className='project-body'>
                <img src={plannerImg} alt='screenshot' className='projectImg'/>  
                <div className='project-text'>
                    <h5 className='h5text'>
                        The Work Day Scheduler app allows a user to enter an event into the given time slots and save it via localStorage. The application uses Moment.js to render the date and also color code the timeslots to indicate which slots are in the past, future, or the current hour. The technologies and tools used for this app are Moment.js, jQuery, Javascript, CSS and HTML.
                        <br/>
                        <br/>
                        Use the scheduler app to plan your day or take a look at the code that went into creating it.
                    </h5>
                    <h5>
                        <div className='project-links'>
                            <a href='https://evapopp.github.io/day-planner/'>Deployed Site</a>
                            <a href='https://github.com/evapopp/day-planner'> Github Repository </a>
                        </div>
                    </h5>                        
                </div>
          
            </div>

        </div>
    )
}

export default PlannerApp;
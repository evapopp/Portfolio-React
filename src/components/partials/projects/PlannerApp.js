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
                    <h2>app descrip</h2>
                    <h3>
                        <a href='https://evapopp.github.io/day-planner/'>Deployed</a>
                        <br/>
                        <a href='https://github.com/evapopp/day-planner'> Repo </a>
                    </h3>                        
                </div>
          
            </div>

        </div>
    )
}

export default PlannerApp;
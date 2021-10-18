import plannerImg from './project-images/planner-app.png'

const PlannerApp = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> Plan our your day </h1>                
            </div>
            <div className='project-body'>

                <div className='project-text'>
                    <h2>app descrip</h2>
                    <h3> links</h3>                        
                </div>
                <img src={plannerImg} alt='planner app screenshot' className='projectImg'/>            
            </div>

        </div>
    )
}

export default PlannerApp;
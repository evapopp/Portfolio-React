import DemoVid from '../projects/project-images/employee-tracker.mp4'

const EmployeeApp = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> Use a database to store your company's info </h1>                
            </div>
            <div className='project-body'>
                <video className='projectImg' autoPlay muted>
                    <source src={DemoVid} type='video/mp4'></source>
                </video> 
                <div className='project-text'>
                    <h2>app descrip</h2>
                    <h3>
                    <a href='https://watch.screencastify.com/v/EQbTGJHP9M2RU4WkTxN2'>Demo Video</a>
                    <br/>
                    <a href='https://github.com/evapopp/employee-tracker'> Repo </a>
                    </h3>                        
                </div>
          
            </div>

        </div>
    )
}

export default EmployeeApp;
import DemoVid from '../projects/project-images/employee-tracker.mp4'

const EmployeeApp = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> Use a database to store your company's info </h1>                
            </div>
            <div className='project-body'>
                <video className='projectVid' autoPlay muted>
                    <source src={DemoVid} type='video/mp4'></source>
                </video> 
                <div className='project-text'>
                    <h5>
                        The Employee Management Tracker is a command-line application that can be used to manage a company's employee database. The app uses the MySQL2 npm package for the employee database and performs user queries via the Inquirer package to retrieve and print table data. A user can view, create and update an employee, employee role and department via the command-line within their Node shell. The technologies and tools used for this app are SQL, Inquirer, Node.js, Javascript
                        <br/>
                        <br/>
                        Since this is applicaiton is not deployed, you can watch a demo video of the app's functionality or take a look at the code that went into creating it.
                    </h5>
                    <h5>
                        <div className='project-links'>
                            <a href='https://watch.screencastify.com/v/EQbTGJHP9M2RU4WkTxN2'>Demo Video</a>
                            <a href='https://github.com/evapopp/employee-tracker'> Github Repository </a>
                        </div>
                    </h5>                        
                </div>
          
            </div>

        </div>
    )
}

export default EmployeeApp;
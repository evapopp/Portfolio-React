import { Accordion } from 'react-bootstrap';
import BrewApp from './projects/BrewApp';
import PlannerApp from './projects/PlannerApp';
import CssApp from './projects/CssApp';
import NoteApp from './projects/NoteApp';
import EmployeeApp from './projects/EmployeeTrackApp';
import WorkoutApp from './projects/WorkoutApp';


const PortfolioAccordian = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Serverless Deployment</Accordion.Header>
                <Accordion.Body>
                    <BrewApp />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>MongoDB & Heroku</Accordion.Header>
                <Accordion.Body>
                    <WorkoutApp/>
                </Accordion.Body>
            </Accordion.Item>               
            <Accordion.Item eventKey="2">
                <Accordion.Header>SQL</Accordion.Header>
                <Accordion.Body>
                    <EmployeeApp />
                </Accordion.Body>
            </Accordion.Item>            
            <Accordion.Item eventKey="3">
                <Accordion.Header>Express.js</Accordion.Header>
                <Accordion.Body>
                    <NoteApp />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Locale Storage</Accordion.Header>
                <Accordion.Body>
                    <PlannerApp />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>CSS</Accordion.Header>
                <Accordion.Body>
                    <CssApp />
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>        
    )
}


  
export default PortfolioAccordian
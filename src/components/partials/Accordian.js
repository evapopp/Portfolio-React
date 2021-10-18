import { Accordion } from 'react-bootstrap';
import BrewApp from './projects/BrewApp';
import PlannerApp from './projects/PlannerApp';
import CssApp from './projects/CssApp';
import NoteApp from './projects/NoteApp';


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
                <Accordion.Header>Express.js</Accordion.Header>
                <Accordion.Body>
                    <NoteApp />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>CSS</Accordion.Header>
                <Accordion.Body>
                    <CssApp />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Locale Storage</Accordion.Header>
                <Accordion.Body>
                    <PlannerApp />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>        
    )
}


  
export default PortfolioAccordian
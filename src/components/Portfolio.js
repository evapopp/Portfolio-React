
import PortfolioAccordian from './partials/Accordian';

const Portfolio = () => {
    return (
        <div>
            <div className='portfolio-text'>
                <p>Below are a number of projects that I have created during my time at the UO FullStack coding bootcamp.</p>
                Take a look.
            </div>
            <PortfolioAccordian />
        </div>
    )
}

export default Portfolio;
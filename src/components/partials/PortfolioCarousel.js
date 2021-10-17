import { Carousel } from 'react-bootstrap';
import plannerImg from '../images/project-images/planner-app.png'
import cssImg from '../images/project-images/css-app.png';
import brewImg from '../images/project-images/brew-app.png';
import noteImg from '../images/project-images/note-app.png';


const PortfolioCarousel = () => {
    return (
    <Carousel>
        <Carousel.Item interval={5000}>
            <img
            className="test"
            src={plannerImg}
            alt="First slide"
            id='projectImg'
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img
            className="d-block w-10"
            src={cssImg}
            alt="Second slide"
            id='projectImg'
            />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-40"
            src={brewImg}
            alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-40"
            src={noteImg}
            alt="Fourth slide"
            />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}

export default PortfolioCarousel
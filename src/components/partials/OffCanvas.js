import { Offcanvas, Button } from "react-bootstrap";
import { useState } from 'react';
import About from "./AboutMe";


const options = [
    {
      name: 'get to know me',
      scroll: true,
      backdrop: true,
    },
  ];
  
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
  
    return (
      <>
        <Button variant="light-alert" onClick={toggleShow} className="me-2">
                <div className='textbox'>
                    About
                {/* {name} */}
                </div>
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Hey, I'm Eva</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <About />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
function Example() {
return (
    <>
    {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
    ))}
    </>
);
}
  
export default Example;

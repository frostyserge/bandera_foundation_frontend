import { Carousel } from 'react-bootstrap';

function Home() {
    return (
            <Carousel data-bs-theme="dark" style={{ height: '18rem'}}>
              <Carousel.Item style={{ height: '18rem', margin: '10px'}}>
              <h2 className="text-center">
                  Event 1
                </h2>
                <Carousel.Caption>
                  <h5>Event Name</h5>
                  <p>Event Description</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <h2 className="text-center">
                  Event 2
                </h2>
                <Carousel.Caption>
                  <h5>Event Name</h5>
                  <p>Event Description</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <h2 className="text-center">
                  Event 3
                </h2>
                <Carousel.Caption>
                  <h5>Event Name</h5>
                  <p>
                  Event Name.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
    );
}

export default Home;

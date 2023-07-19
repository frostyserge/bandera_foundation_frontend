import Merch from '../components/ShopDetailBox';
import { Carousel } from 'react-bootstrap';

function Home() {
    return (
            <Carousel data-bs-theme="dark" style={{ height: '18rem'}}>
              <Carousel.Item style={{ height: '18rem', margin: '10px'}}>
                <img
                  className="d-block w-100 fluid"
                  src="https://i.ibb.co/K2wK53s/326231088-1330812457742631-6107117845156717119-n.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5>Event Name</h5>
                  <p>Event Description</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=eee"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Event Name</h5>
                  <p>Event Description</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                  alt="Third slide"
                />
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

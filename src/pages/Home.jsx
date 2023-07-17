import Merch from '../components/Merch';
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
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=eee"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
    );
}

export default Home;
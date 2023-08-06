import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    return (
      <Carousel responsive={responsive}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      </Carousel>
            // <Carousel responsive={responsive} data-bs-theme="dark" style={{ height: '18rem'}}>
            //   <Carousel.Item style={{ height: '18rem', margin: '10px'}}>
            //   <h2 className="text-center">
            //       Event 1
            //     </h2>
            //     <Carousel.Caption>
            //       <h5>Event Name</h5>
            //       <p>Event Description</p>
            //     </Carousel.Caption>
            //   </Carousel.Item>
            //   <Carousel.Item>
            //     <h2 className="text-center">
            //       Event 2
            //     </h2>
            //     <Carousel.Caption>
            //       <h5>Event Name</h5>
            //       <p>Event Description</p>
            //     </Carousel.Caption>
            //   </Carousel.Item>
            //   <Carousel.Item>
            //   <h2 className="text-center">
            //       Event 3
            //     </h2>
            //     <Carousel.Caption>
            //       <h5>Event Name</h5>
            //       <p>
            //       Event Name.
            //       </p>
            //     </Carousel.Caption>
            //   </Carousel.Item>
            // </Carousel>
    );
}

export default Home;

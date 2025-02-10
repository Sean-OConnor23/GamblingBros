import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import baseballback from '../images/carousel/baseball-background.jpg';

export default function InfoCarousel(){
    return(<div>
        <Carousel>
            <Carousel.Item>
                <Image className="d-block w-100" text="First slide" src={baseballback}/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100" text="Second slide" src={baseballback}/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100" text="Third slide" src={baseballback}/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>);
}
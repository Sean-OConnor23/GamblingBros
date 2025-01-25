import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export default function InfoCarousel(){
    return(<div>
        <Carousel>
            <Carousel.Item>
                <Image text="First slide" src="holder.js/171x180"/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>);
}
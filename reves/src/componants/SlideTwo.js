import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import carousel1 from "../assets/carousel1.jpeg"
import carousel2 from "../assets/carousel2.jpeg"
import carousel3 from "../assets/carousel3.jpeg"
import '../styles/Slides.css';
const SlideTwo = () => {
    return (
        <div className="slideTwo">

            <div className="ctn-carousel">
                <Carousel className="carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 myIMG"
                            src={carousel1}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 myIMG"
                            src={carousel2}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 myIMG"
                            src={carousel3}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="carousel-ctn-txt">
                <p>Notre dernière collection de lingerie.</p>
            </div>
        </div>
    );
};

export default SlideTwo;
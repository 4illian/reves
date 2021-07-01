import React from 'react';
import toy from "../assets/black.png"
import Fade from 'react-reveal/Fade';
import { Button } from 'react-bootstrap'
const SlideOne = () => {
    return (
        <div className="slide one">
            <div className="one-ctn-txt">
                <Fade clear duration={3000}>
                    <h2 className="txt-title">Oh My</h2>
                </Fade>

                <Fade clear duration={3400}>
                    <p className="txt-sub-title">Rabbit.</p>
                    <p>Le nouveau vibromasseur de la marque Oh My,<br /> plus puissant, plus longtemps...</p>
                </Fade>

                <Button variant="dark">En voir plus</Button>

            </div>

            <div className="ctn-img">
                <img src={toy}></img>
            </div>
        </div>
    );
};

export default SlideOne;
import React from 'react';
import {DetailsType} from "../carousel/caurosel";
import {IconRightCircle} from "../button/buttonRight";
import PlayButton from "../playButton/playButton";
import s from "./carouselDetails.module.css"


type CarouselDetailsType = {
    data:DetailsType
}

export const CarouselDetails:React.FC<CarouselDetailsType> = ({
    data
                                                              }) => {
    const {description, img} = data;
    return (
            <div className={s.item}>
                <img className="img-circle" src={img} />
                <p>{description}</p>
            </div>
    );
};


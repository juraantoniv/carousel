import React, { useEffect, useState } from 'react';
import {CarouselDetails} from "../carouselDetails/carouselDetails";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './TestiMonials.css'
import PlayButton from "../playButton/playButton";
import left from "../../Icons/back.png"
import right from "../../Icons/next.png"
import rightJPG from "../../Icons/nextJPG.jpg"
import leftJPG from "../../Icons/backJPG.jpg"
import iimage from '../../Icons/nextJPG.jpg'
const image = require('../../Icons/nextJPG.jpg')



export type DetailsType = {
    name: string;
    description: string;
    address: string;
    img: string;
}



export const OwlCaurosel = () => {

    const [type, setType]= useState<boolean>(true)

    const data:Array<DetailsType> = [
        {
            name: 'Rekob Ramya',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
        },
        {
            name: 'Brandon Savage',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
        },
        {
            name: 'Steve Burns',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
    ]

    //Owl Carousel Settings
    const options = {
        stagePadding: 50,
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: type,
        dots: true,
        autoplayTimeout: 8500,
        navText: ["<img class='owl2' src='https://cdn.icon-icons.com/icons2/2249/PNG/512/arrow_left_circle_outline_icon_139954.png'/>", "<img  class='owl1' src='https://cdn.icon-icons.com/icons2/37/PNG/512/rightarrow_application_derecha_flech_4432.png'/>"],
        smartSpeed: 450,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };



    const playHandler = (type:boolean) => {
      setType(type)
    }
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                <div style={{ width:'1700px',padding:'0 20px 0 20px'}}>
                    <div className="col-md-12">
                        <div style={{display:'flex',alignItems:'center',flexDirection:'row-reverse', height:'80px', background:'darkblue', paddingRight:'200px'}}>
                        <PlayButton play={playHandler}/>
                        </div>
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                    data.map(el => {
                                        return (
                                            <CarouselDetails data={el}  />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};


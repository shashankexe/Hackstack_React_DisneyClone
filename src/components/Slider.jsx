import React, { useState, useEffect, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

let slideInterval;
let count=0;
function Slider() {
    const movies = [
        {
            'id': 1,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AAC4808815AE5721A6AAB372DD14B8CE2E7E9EFF3A27942EF2B6B45EBF4E65CB/scale?width=1440&aspectRatio=1.78&format=jpeg"
        },
        {
            'id': 2,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg"
        },
        {
            'id': 3,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
        },
        {
            'id': 4,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA1548A6B82C9991B1D38DF251A388FEA2483904510FBC73E150F67F7BDE38C0/scale?width=1440&aspectRatio=1.78&format=jpeg",
        },
        {
            'id': 5,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/56EEBB17CC25C9FE16E334C34EF96BF7D91EC9BA3B438F88FB24E1C2AE785E03/scale?width=1440&aspectRatio=1.78&format=jpeg",
        },
        {
            'id': 6,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg",
        },
        {
            'id': 7,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
        },
        {
            'id': 8,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D53D1F5D357587A8D09067AB09FFC7096F837CBAAE02BDC3C0E75814471A1E36/scale?width=1440&aspectRatio=1.78&format=jpeg",
        },
        {
            'id': 9,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A509165105A09F9F533E2008B143BCF38D6A5859D0EBB40CCA388772005CD94/scale?width=1440&aspectRatio=1.78&format=jpeg",
        },
        {
            'id': 10,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/223DAE104BE1175F374C4AACAC0EB5B8B0DB9C49839AA2E10085533DDFE07A8E/scale?width=1440&aspectRatio=1.78&format=jpeg",
        },
        {
            'id': 11,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6CDB6C0EB2D77EB19BCADA31F85066E001A1F61FA68F4AC3356A73FE076477F/scale?width=1440&aspectRatio=1.78&format=jpeg",
        },
        {
            'id': 12,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09A0617D43282F1A4FA1A97DF6159B4263A8DEB9679A007B61D5E5D6E5D0A2DD/scale?width=1440&aspectRatio=1.78&format=jpeg",
        },
        {
            'id': 13,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09DAD6A5DAECB6BA9E329FFA896B18978FE4AD5540C070D7973EE53357DD4D24/scale?width=1440&aspectRatio=1.78&format=jpeg",
        },
        {
            'id': 14,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6FF2B403436E6558C08FB44B40AE334A9172FA293A8325940E8E7FF7F696E4D3/scale?width=1440&aspectRatio=1.78&format=jpeg",
        },
        {
            'id': 15,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/456A711C19899C881600F6247705E5253EB18C2471D75E5281E1FF6ACB6D2FBA/scale?width=1440&aspectRatio=1.78&format=jpeg",
        },
        {
            'id': 16,
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28F85D4A1F7CA135B7B20B3EDB42EDA73196C2A71C52C5400A6C2285F8E071BE/scale?width=1440&aspectRatio=1.78&format=jpeg",
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return () => {
            pauseSlider();
        };
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            nextSlide();
        }, 4000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const prevSlide = () => {
        count = (currentIndex + movies.length - 1) % movies.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };

    const nextSlide = () => {
        count = (count + 1) % movies.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };

    return (
        <div ref={slideRef} className='max-w-[1400px] sm:h-[300px] md:h-[600px] lg:h-[780px] w-full m-auto py-5 px-4 relative group'>
            <div
                style={{ backgroundImage: `url(${movies[currentIndex].backgroundImg})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-3000'
            ></div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={40} />
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={40} />
            </div>
        </div>
    );
}

export default Slider;

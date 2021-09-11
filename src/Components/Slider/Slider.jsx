import React, { useState } from 'react';
import s from './Slider.module.css'
import sliderItem1 from '../Img/p1.jpg';
import sliderItem2 from '../Img/p2.jpg';
import sliderItem3 from '../Img/p3.jpg';
import sliderItem4 from '../Img/p4.jpg';
import sliderItem5 from '../Img/p5.jpg';

function Slider() {

    const SliderItems = [
        sliderItem1,
        sliderItem2,
        sliderItem3,
        sliderItem4,
        sliderItem5
    ]

    const [ActiveSliderItem, setActiveSliderItem] = useState(1);

    return (
        <div className={s.slider}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    {
                        SliderItems.map((item, index) => <img onClick={() => setActiveSliderItem(index)} className={
                            index === ActiveSliderItem ? 'slide__active' : 'slider__item'
                        } src={item} alt={item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export { Slider };

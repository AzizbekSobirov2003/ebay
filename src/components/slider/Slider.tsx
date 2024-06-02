
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';;



import slide2_1 from "../../assets/images/slide2_accessories.png"
import slide3 from "../../assets/images/slide_3.png"

import './Slider.scss';

const Slider = () => {
  return (
    <>
      <div className='slider'>
        <Swiper slidesPerView={1}
          centeredSlides={false}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false, }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper">
          <SwiperSlide className='slide_2'>
            <div className='slide_2_item2'>
              <img src={slide3} className='kiyim'  />
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide_3'>
            <div className='slide_3_item2'>
              <img src={slide2_1}/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Slider
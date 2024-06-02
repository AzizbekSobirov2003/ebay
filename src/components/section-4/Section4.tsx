import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { IoIosStar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

import 'swiper/css/pagination';
import './Section4.scss';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';
import '../../types'

const Section4 = () => {
  interface Product {
    id: number;
    title: string;
    images: string[];
    category: string;
    price: number;
    rating: number
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
  }, []);

  return (
    <div className='section4_slider'>
      <div className='section4_text'>
        <h1>Today's Deals  All With Free Shipping</h1>
        <p>See all <span><FaArrowRight /></span></p>
      </div>
      <Swiper
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={30}
        autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: false, }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwipers"
      >
        {
          products?.map(product => (
            <SwiperSlide className='section4_slider_items' key={product.id}>
              <Link to={`/singlePage/${product.id}`}>
                <img className='slider' src={product.images[0]} alt="" />
                <p><span><IoIosStar /><IoIosStar /><IoIosStar /></span> {product.rating} <br /><span className='section4_price'>${product.price}</span> </p>
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

export default Section4
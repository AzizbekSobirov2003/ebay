import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css/pagination';
import './Section2.scss';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';
import '../../types'
import { FaArrowRight } from "react-icons/fa6";

const Section2 = () => {
  interface Product {
    id: number;
    title: string;
    images: string[];
    category: string;
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
  }, []);

  return (
    <div className='section2_slider'>
      <Swiper
        slidesPerView={7}
        centeredSlides={false}
        spaceBetween={30}
        autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: false, }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwipers"
      >
        {
          products?.map(product => (

            <SwiperSlide className='section2_slider_items' key={product.id}>
              <Link to={`/singlePage/${product.id}`}>
                <img className='slider' src={product.images[0]} alt="" />
                <p>{product.title}</p>
              </Link>
            </SwiperSlide>

          ))
        }
      </Swiper>
      <div className='section4_text'>
        <h1>Score these trending kicks</h1>
        <p>See all <span><FaArrowRight /></span></p>
      </div>
    </div >
  );
}

export default Section2
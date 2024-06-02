import "./SinglePage.scss"
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { likeProduct } from '../../redux/likeSlice';
import { cartProduct } from '../../redux/CartSlice';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FaRegHeart } from "react-icons/fa";
import span from "../../assets/images/span.png"

const SinglePage = () => {

  interface Product {
    id: number;
    images: string[];
    products: any;
    category: any;
    product: any;
    title: string;
    description: string;
    brand: string;
    price: number;
  }

  const [products, setProducts] = useState<Product | null>(null)
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { single_id } = useParams();
  const navigate = useNavigate(); // useNavigate xookini qo'shdik

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${single_id}/`)
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [single_id])
  console.log(single_id);

  console.log(products)
  const dispatch = useDispatch();

  return (
    <>
      <div className='singlePage'>
        <div className='singlePage_carusel'>
        <button className="back" onClick={() => navigate('/')}> <img src={span} alt=""  />       Back to home page</button> 
      <p className="lis">| Listed in category:</p>
      <p className="liss">Electronics           Cell Phones & Accessories           Cell Phones & Smartphones</p>
          <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper">
            {
              products?.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img className='mySwiperImage' src={image} alt={`Product ${index}`} />
                </SwiperSlide>
              ))
            }
          </Swiper>
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {
              products?.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Product ${index}`} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className='singlePage_text_info'>
          <h1>{products?.title}</h1>
          <div className='singlePage_text_info_next'>
            <p className="dec"><strong>Description :</strong>{products?.description} <span>Read more...</span></p>
            <br />
            <p className="st">Model:</p>  <p className="bir">{products?.title}</p>
            <p className="st">Brand:</p><p className="ikki">  {products?.brand}</p>
            <p className="st">Category:</p> <p className="uch"> {products?.category}</p>
            <p className="st">Quantity: </p><p className="uc">1</p>
            <p className="last"><strong>Last One / 86 sold</strong></p>
            <br />
            <div className='singlePage_end'>
              <div className='singlePage_price'>
                <p>Price: <span>US ${products?.price}</span></p>
                <p className="full">
                  No Interest if paid in full in 6 mo on $99+*
                </p>
              </div>
              <div className='singlePage_btn'>
                <button className='btn1'>Buy It Now</button>
                <button className='btn2' onClick={() => dispatch(cartProduct(products))} >Add to Cart</button>
                <button className='btn3' onClick={() => dispatch(likeProduct(products))}><FaRegHeart />Add to Watchlist</button>
                <p className="sell"><strong>Upgrading? Sell it, don't trade it.</strong></p>
                <button className="now">Sell now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePage

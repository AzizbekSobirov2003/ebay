import "./Categories.scss"
import { Link } from 'react-router-dom';



const Categories = () => {
  return (
    <>
      <div className='navbar_categories'>
        <ul>
        <Link to={"/"}><li>Home</li></Link>
          <Link className='item' to={"/category/laptops"}><li>Laptops</li></Link>
          <Link className='item' to={"/category/smartphones"}><li>Smartphones</li></Link>
          <Link className='item' to={"/category/fragrances"}><li>Fragrances</li></Link>
          <Link className='item' to={"/category/sunglasses"}><li>sunglasses</li></Link>
          <Link className='item' to={"/category/home-decoration"}><li>Home-decoration</li></Link>
          <Link className='item' to={"/category/furniture"}><li>furniture</li></Link>
          <Link className='item' to={"/category/mens-shirts"}><li>mens-shirts</li></Link>
          <Link className='item' to={"/category/motorcycle"}><li>Motorcycle</li></Link>
          <Link className='item' to={"/category/tops"}><li>tops</li></Link>
          <Link className='item' to={"/category/mens-watches"}><li>mens-watches</li></Link>
          <Link className='item' to={"/category/mens-shoes"}><li>mens-shoes</li></Link>    
        </ul>
      </div>
    </>
  )
}

export default Categories   
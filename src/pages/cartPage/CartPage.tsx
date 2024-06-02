
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { cartProduct } from '../../redux/CartSlice'
import "./CartPage.scss"

const CartPage = () => {

  interface RootState {
    cartData: {
      cart: YourCartType[];
    }
  }

  type YourCartType = {
    id: number;
    images: string[];
    title: string;
  };

  const cartData = useSelector((state:RootState) => state.cartData.cart)
  console.log(cartData);

  return (
    <>
      <div className='cartPage'>
        {cartData.map((cart: YourCartType) => (
          <Link key={cart.id} to={`/singlePage/${cart.id}`}>
            <div className='cartPage_items'>
              <img src={cart.images[0]} style={{ width: "300px" }} />
              <h1>{cart.title}</h1>
            </div>
          </Link>
        ))
        }
      </div>
    </>
  )
}

export default CartPage

import React, { useContext } from 'react'
import OrderItem from '../components/OrderItem'
import AppContext from '../context/AppContext'
import '../styles/MyOrder.scss';
import arrow from '@icons/flechita.svg'

function MyOrder() {

  const { state } = useContext(AppContext)

  const sumTotal = () => {
    const reducer = (accum,currentValue) => accum + currentValue.price
    const sum = state.cart.reduce(reducer,0)
    return sum;
  }

  console.log(state);
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product, index) => (
          <OrderItem indexValue={index} product={product} key={index}/>
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  )
}

export default MyOrder
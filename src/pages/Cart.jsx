import React from 'react'
import CartItem from '../components/CartItem'

const Cart = () => {
  return (
    <section className='w-full flex justify-center'>
        <div className="content">
            <div className="cart-container w-[60%] bg-white p-[20px] rounded-lg">
                <h2>Cart</h2>

                <div className="row my-5">
                    <CartItem title="Biryani" category={"Main Course"}/>
                </div>
            </div>
            <div className="checkout-container w-[38%]"></div>
        </div>
    </section>
  )
}

export default Cart
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartCheckout = () => {
  return (
    <Col sm='12' className='cartCheck' >
    
      <div className='d-flex w-100 justify-content-center'>
        <input className='cartCheck-inp' placeholder='كود الخصم'/>
      <button className='cartCheck-btn'>تطبيق</button>
      </div>
      <div className='cartCheck-price w-100'>3400 جنيه</div>
    <Link to='/order/payMethoud' style={{textDecoration:'none'}}>
    <div className='cartCheck-purchase w-100 my-3' > اتمام الشراء</div>
    </Link>
    </Col>
  )
}

export default CartCheckout
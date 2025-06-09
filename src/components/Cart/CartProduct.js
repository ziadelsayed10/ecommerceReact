import React from 'react'
import mobile from '../../images/mobile.png'
import deleteicon from '../../images/delete.png'
import { Col, Row } from 'react-bootstrap'
const CartProduct = () => {
  return (
    <>
      <Col sm="12" className="cartItem-container my-2 d-flex">
        <img src={mobile} className='cartItem-img' />
        <div className='w-100'>
          <Row className='my-3'>
            <Col sm='12'className='d-flex justify-content-between ' >
            <div className='prodDet-title align-items-center'>الكنرونيات</div>
            <div className='d-flex  align-items-center'>
                <img src={deleteicon} className='' style={{width:"20px", height:"20px"}}/>
                <div className='prodDet-title  mx-2'>ازالة</div>

            </div>
            </Col>
          </Row>
          <Row>
            <Col sm='12'>
            <div className='prodDet-desc d-inline'>آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس</div>
            <div className='prodDet-text-rate d-inline mx-2'>4.5</div>
            </Col>
          </Row>

          <Row className='my-1'>
            <Col sm='12'>
            <div className='prodDet-title d-inline'>الماركة:</div>
            <div className='d-inline' style={{fontSize:"20px",color:"#4d4f50"}}>سامسونج</div>
            </Col>
          </Row>
          <Row>
            <Col sm='12'>
            <div style={{backgroundColor:'red', width:'30px',height:'30px',borderRadius:'50%'}}></div>
            </Col>
          </Row>
          <Row>
            <Col sm='12' className='d-flex justify-content-between'>
           <div className='d-flex align-items-center'>
           <div className='prodDet-title'>الكمية:</div>
           <input type='number' className='mx-2 ' style={{width:'40px'}}/>
           </div>
           <div className='prodDet-desc'>3000 جنيه</div>
            </Col>
          </Row>


        </div>
      </Col>
    </>
  )
}

export default CartProduct
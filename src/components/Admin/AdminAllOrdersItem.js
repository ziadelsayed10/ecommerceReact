import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import mobile from '../../images/mobile.png'
const AdminAllOrdersItem = () => {
  return (
    <>
   <Col sm='12' className='admin-orders-card mt-3'>
   <Link to='/admin/orders/20'  style={{textDecoration:'none', color:'gray'}} className='d-flex'>
   <img src={mobile} style={{width:'135px', height:'197px'}} className='my-1' />
   <div className='w-100 m-2'>
    <Row className='justify-content-between'>
        <Col sm='12' className='d-flex justify-content-between'>
        <div className='adminOrder-subTitle'>طلب رقم #240</div>
        <div className=''>ازالة</div>
        </Col>
    </Row>
    <Row>
        <Col sm='12' className='d-flex my-2'>
        <div className='mx-1'  style={{color:'black'}}>جهاز ايفون 13 ذو امكانيات كبيرة وجودة عالية</div>
        <div className='mx-1' style={{color:'#ffc107'}}>4.5</div>
        </Col>
    </Row>
    <Row>
        <Col sm='12' className='d-flex'>
        <div className='mx-1'>الماركة:</div>
        <div>سامسونج</div>
        </Col>
    </Row>
    <Row>
       <Col className='my-2' sm='12'><div className='mx-1 ' style={{width:'30px', height:'30px', borderRadius:'50%', backgroundColor:'red'}}></div></Col>
    </Row>
    <Row>
        <Col sm='12' className='d-flex justify-content-between'>
       <div className='d-flex'> 
        <label className='mx-1'>الكمية:</label>
        <input type='number' style={{width:'40px'}}/>
        </div>
       <div>3000 جنيه</div>
        </Col>
    </Row>
   </div>
   </Link>
   </Col>
    </>
  )
}

export default AdminAllOrdersItem
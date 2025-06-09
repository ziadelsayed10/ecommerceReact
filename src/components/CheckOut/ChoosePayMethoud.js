import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ChoosePayMethoud = () => {
    return (
        <>
            <div> 
                <div className='mt-5 sub-title'>اختر طريقة الدفع</div>
                <div className='my-3 payMethod-container'>
                    <Row className=''>
                        <Col sm='12' className='d-flex mt-4 mx-3'>
                        <input type='radio' />
                        <label className='mx-2'>الدفع عن طريق الفيزا</label>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col sm='12' className='d-flex mt-4 mx-3'>
                        <input type='radio' />
                        <label className='mx-2'>الدفع عند الاستلام</label>
                        </Col>
                    </Row>
                </div>
                <Row>
                <Col xs="12" className="d-flex justify-content-end">
                    <div className="product-price d-inline   border">34000 جنية</div>
                    <div className=" px-3 pt-2 d-inline me-2 "> اتمام الشراء</div>
                </Col>
                </Row>
            </div>
        </>
    )
}

export default ChoosePayMethoud
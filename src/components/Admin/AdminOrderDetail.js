import React from 'react'
import CartProduct from '../Cart/CartProduct'
import { Col, Row } from 'react-bootstrap'

const AdminOrderDetail = () => {
    return (
        <>
            <div>

                <div className='my-3 mx-2'>تفاصيل الطلب رقم#55</div>
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <Row className='orderCus-detail my-5'>
                    <Col xs="12" className=" d-flex">
                        <div style={{fontSize:'24px'}}>تفاصيل العميل</div>
                    </Col>
                    <Col xs='12' className='d-flex'>
                    <div className='select-subTitle'>الاسم:</div>
                    <div className='select-answer-subTitle'>السيد العالمي</div>
                    </Col>
                    <Col xs='12' className='d-flex'>
                    <div className='select-subTitle'>الايميل:</div>
                    <div className='select-answer-subTitle'> alsayed@yahoo.com</div>
                    </Col>
                    
                    <Col xs='12' className='d-flex'>
                    <div className='select-subTitle'>الهاتف:</div>
                    <div className='select-answer-subTitle'> 0100258746987</div>
                    </Col>
                    <div className='border my-2 d-flex align-items-center justify-content-center'>4000 المجموع </div>
                    
                    <div className="d-flex mt-2 justify-content-center my-2">
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1  text-center  px-2 w-50">
                        <option value="val">حالة الطلب</option>
                        <option value="val2">قيد التنفيذ</option>
                        <option value="val2">تم الانتهاء</option>
                        <option value="val2">الغاء</option>
                    </select>
                    <button className="select-btn px-3 d-inline mx-2 ">حفظ </button>
                </div>
                   
                </Row>
            </div>

        </>
    )
}

export default AdminOrderDetail
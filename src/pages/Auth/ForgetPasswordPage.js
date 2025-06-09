import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ForgetPasswordHook from '../../hook/auth/forget-password-hook'
import { ToastContainer } from 'react-toastify'


const ForgetPasswordPage = () => {
    const [email,changeEmail,onSubmit] = ForgetPasswordHook()
    
  return (
    <Container style={{minHeight:'670px'}}>
    <Row className='my-5'>
    <Col sm='12' className='d-flex flex-column'>
    <label className='mx-auto sub-title'> ادخل حساب لاستلام كود تعيين كلمة مرور</label>
    <input value={email} onChange={changeEmail} type='text' placeholder='الايميل...' className='mx-auto text-center user-login my-3'></input>
   
    <button onClick={onSubmit} className='btn-login mt-3 mx-auto'> ارسال الكود</button>
   
    </Col>
   
  
    </Row>
    <ToastContainer/>
   </Container>
  )
}

export default ForgetPasswordPage
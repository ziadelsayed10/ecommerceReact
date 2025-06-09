import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/auth/login-hook'
import { ToastContainer } from 'react-toastify'

const LoginPage = () => {
    const [email,password,changeEmail,changePassword,onSubmit] = LoginHook()
  return (
    <>
   <Container style={{minHeight:'670px'}}>
    <Row className='my-5'>
    <Col sm='12' className='d-flex flex-column'>
    <label className='mx-auto sub-title'>تسجيل الدخول</label>
    <input value={email} onChange={changeEmail} type='text' placeholder='الايميل...' className='mx-auto text-center user-login my-3'></input>
    <input value={password} onChange={changePassword} type='password' placeholder='كلمة السر...' className='mx-auto text-center user-login my-1'></input>
    <label className='mx-auto mt-3 '>
        
        <Link to='/forgetPassword' style={{textDecoration:'none'}}><span className='text-danger mx-1'>هل نسيت كلمة المرور؟</span></Link>
    </label>
    <button onClick={onSubmit} className='btn-login mt-3 mx-auto'>تسجيل الدخول</button>
    <label className='mx-auto mt-3 '>
        ليس لديك حساب؟
        <Link to='/register' style={{textDecoration:'none'}}><span className='text-danger mx-1'>اضغط هنا</span></Link>
    </label>
    </Col>
    <label className="mx-auto my-4">
                    <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                            الدخول ادمن
                        </span>
                    </Link>

                    <Link to="/user/allOrders" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                            الدخول مستخدم
                        </span>
                    </Link>
                </label>
    </Row>
    <ToastContainer/>
   </Container>
    </>
  )
}

export default LoginPage
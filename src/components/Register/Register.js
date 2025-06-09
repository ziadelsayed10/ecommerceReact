import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RegisterHook from '../../hook/auth/register-hook'
import { ToastContainer } from 'react-toastify'

const Register = () => {
  const [name,email,password,confirmPassword,phone,loading,onSubmit,onChangeName,onChangeEmail,onChangePassword,onChangeConfirmPassword,onChangePhone] = RegisterHook()
  return (
   <Container style={{minHeight:'670px'}}>
    <Row className='my-5'>
        <Col sm='12' className='d-flex flex-column'>
        <div className='sub-title mx-auto my-3'>تسجيل حساب جديد</div>
        <input className=' register-inp text-center mx-auto'
         type='text'
          placeholder='اسم المستخدم...'
          value={name}
          onChange={onChangeName}
          >
            
          </input>
        <input className=' register-inp text-center mx-auto my-3'
         type='email'
          placeholder='الايميل ...'
          value={email}
          onChange={onChangeEmail}
          
          >
            
          </input>
        <input className=' register-inp text-center mx-auto'
         type='password'
          placeholder='كلمة السر ...'
          value={password}
          onChange={onChangePassword}
          >
            
          </input>
        <input className=' register-inp text-center mx-auto my-3'
         type='password'
          placeholder=' تاكيد كلمة السر...'
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
          >
            
          </input>
        <input className=' register-inp text-center mx-auto'
         type='number'
          placeholder='رقم الهاتف...'
          value={phone}
          onChange={onChangePhone}
          >
            
          </input>
          <button onClick={onSubmit} className='register-btn mx-auto'>تسجيل الحساب</button>
          <div className='mx-auto my-3'>هل لديك حساب بالفعل؟
            <Link  to='/login' style={{textDecoration:'none'}}>
            <span className='text-danger mx-1'>اضغط هنا</span>
            </Link>
          </div>
        </Col>
    </Row>
    <ToastContainer/>
   </Container>
  )
}

export default Register
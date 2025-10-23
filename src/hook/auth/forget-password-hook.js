import React, { useEffect, useState } from 'react'
import notify from '../useNotifcations'
import { useDispatch, useSelector } from 'react-redux'
import { forgetPassword } from '../../redux/actions/AuthAction'
import { useNavigate } from 'react-router-dom'

const ForgetPasswordHook = () => {
    const [email, setEmail] = useState('')
    
   const [loading, setLoading] = useState(true)
   // const navigate = useNavigate()
   const dispatch =useDispatch()
   const navigate = useNavigate()
   const res =useSelector(state => state.allAuth.forgetPassword)
    const changeEmail = (e) => {
       setEmail(e.target.value)
    }
   
   
   const onSubmit =async () => {
       if ( email === '')  {
           notify("من فضلك اكمل البيانات ","warn");
           return;
           }
           setLoading(true)
           await dispatch(forgetPassword({
             email,
            }))
            setLoading(false)
            localStorage.setItem("user-email",email)
          }
   
   useEffect(() => {
     if (loading === false) {
       
       if (res) {
           console.log(res)
           if (res?.data?.status === "Success") {
            notify("تم ارسال الكود للايميل بنجاح","success")
            setTimeout(() => {
              navigate("/user/verify-code")
            }, 1000);
           }
           if (res.data.status === "fail") {
            notify("هذا الحساب غير مسجل لدينا","error")
           }
            }
     }
   }, [loading])
   
   
   return [email,changeEmail,onSubmit]    
}

export default ForgetPasswordHook
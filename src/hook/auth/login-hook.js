import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/actions/AuthAction'
import notify from '../useNotifcations'
import { useNavigate } from 'react-router-dom'

const LoginHook = () => {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
const [loading, setLoading] = useState(true)
// const navigate = useNavigate()
const dispatch =useDispatch()
const res =useSelector(state => state.allAuth.loginUser)
 const changeEmail = (e) => {
    setEmail(e.target.value)
 }
 const changePassword = (e) => {
    setPassword(e.target.value)
 }

const onSubmit =async () => {
    if ( email === '' || password === '')  {
        notify("من فضلك اكمل البيانات ","warn");
        return;
        }
setLoading(true)
 await dispatch(loginUser({
    email,
    password,
}))
setLoading(false)
}

useEffect(() => {
  if (loading === false) {
    
    if (res) {
        console.log(res)
         if(res.data.token) {
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("user",JSON.stringify(res.data.data))
            notify("تم تسجيل الدخول ينجاح","success")
            setEmail("")
            setPassword("")
            setTimeout(() => {
                // navigate('/')
                window.location.href='/'
            }, 1500);
        } 
        
        
         else {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
           if(res?.data?.message === "Incorrect email or password"){
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                notify("البيانات غير صحيحة","warn")
                return;

            }
        }
        // else if(res?.data?.message === "Incorrect email or password"){
        // notify("معلومات الدخول غير صحيحة ","error")
        // return
        // }
    }
  }
}, [loading])



 return [email,password,changeEmail,changePassword,onSubmit]
}

export default LoginHook
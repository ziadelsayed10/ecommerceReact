import React, { useEffect, useState } from 'react'
import notify from '../useNotifcations'
import { useDispatch, useSelector } from 'react-redux'
import { forgetPassword } from '../../redux/actions/AuthAction'

const ForgetPasswordHook = () => {
    const [email, setEmail] = useState('')
    
   const [loading, setLoading] = useState(true)
   // const navigate = useNavigate()
   const dispatch =useDispatch()
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
   }
   
   useEffect(() => {
     if (loading === false) {
       
       if (res) {
           console.log(res)
            }
     }
   }, [loading])
   
   
   return [email,changeEmail,onSubmit]    
}

export default ForgetPasswordHook
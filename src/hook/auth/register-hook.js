import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewUser } from '../../redux/actions/AuthAction'
import notify from '../useNotifcations'
import { useNavigate } from 'react-router-dom'

const RegisterHook = () => {
 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [confirmPassword, setConfirmPassword] = useState("")
 const [phone, setPhone] = useState("")
 const [loading, setLoading] = useState(true)

const navigate = useNavigate()
const dispatch =useDispatch()
const res = useSelector(state=>state.allAuth.createUser);

const onChangeName = (e) => {
    e.persist()
setName(e.target.value)
}
const onChangeEmail = (e) => {
    e.persist()
setEmail(e.target.value)
}
const onChangePassword = (e) => {
    e.persist()
setPassword(e.target.value)
}
const onChangeConfirmPassword = (e) => {
    e.persist()
setConfirmPassword(e.target.value)
}
const onChangePhone = (e) => {
    e.persist()
setPhone(e.target.value)
}

const onSubmit = async() => {
    if (name ==='' || email === '' || password === '' || confirmPassword === '' || phone === "")  {
        notify("من فضلك اكمل البيانات ","warn");
        return;
    }
    setLoading(true)
await dispatch(createNewUser({ name,
    email,
    password,
    passwordConfirm:confirmPassword,
    phone,
}))
setLoading(false)
}
useEffect(() => {
  if (loading=== false) {
    
    if(res){
        console.log(res)
if (res.data.token) {
    localStorage.setItem("token",res.data.token)
    notify("تم تسجيل الحساب ينجاح","success")
    setEmail("")
    setName("")
    setPassword("")
    setConfirmPassword("")
    setPhone("")
setTimeout(() => {
    navigate('/login')
}, 1500);
}
if (res.data.errors) {
    if (res.data.errors[0].msg ==='E-mail already in use') {
        notify("هذا الايميل مستخدم من قبل","error");
      return;
    }
    if (res.data.errors[0].msg ==='Password confirmation is incorrect') {
        notify("تاكيد كلمة لسر غير مطابق لكامة السر","error");
      return;
    }
    if (res.data.errors[0].msg ==='must be at least 3 chars') {
        notify("يجب ان لا يقل اسم المستخدم عن 3 احرف","error");
      return;
    }
    if (res.data.errors[0].msg ==='must be at least 6 chars') {
        notify("يجب ان لا تقل كلمة السر المستخدم عن 3 احرف","error");
      return;
    }
    if (res.data.errors[0].msg ==='accept only egypt phone numbers') {
        notify("يجب ان  يكون رقم الهاتف مصري 11 رقم","error");
      return;
    }
    if (res.data.errors[0].msg ==='Invalid email formate') {
        notify("من فضلك ادخل ايميل بصورة صحيحة","error");
      return;
    }
}
    }
  }
}, [loading])



return [name,email,password,confirmPassword,phone,loading,onSubmit,onChangeName,onChangeEmail,onChangePassword,onChangeConfirmPassword,onChangePhone]
}
export default RegisterHook











// DB_URI=mongodb+srv://vanpersi:snedier201110@cluster0.khp1d.mongodb.net/robben?retryWrites=true&w=majority&appName=Cluster0

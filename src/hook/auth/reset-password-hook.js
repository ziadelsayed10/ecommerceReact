import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import notify from '../useNotifcations';
import { resetPassword } from '../../redux/actions/AuthAction';

const ResetPasswordHook = () => {
 const dispatch =useDispatch();
 const navigate = useNavigate()
 const [password, setPassword] = useState('')
 const [confirmPassword, setConfirmPassword] = useState('')
 const [loading, setLoading] = useState(true)

const OnChangePassword = (e) => {
    setPassword(e.target.value)
}
const OnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
}

const onSubmit = async () => {
    if (password === "" || confirmPassword === "") {
        notify("من فضلك ادخل كلمة السر","error")
        return
    }
    
     if (password != confirmPassword) {
            notify("كلمة السر غير متطابقه مع تاكيد كلمع السر", "error")
            return
        }
           setLoading(true)
        await dispatch(resetPassword({
            email: localStorage.getItem("user-email"),
            newPassword: password
        }))
        setLoading(false)
}


    const res = useSelector(state => state.allAuth.verifyPassword)


useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.data.status === "Success") {
                    notify("تم تغير كلمة السر بنجاح", "success")
                    setTimeout(() => {
                        navigate("/login")
                    }, 1500);
                }
                if (res.data.status === "fail") {
                    notify("من فضلك اطلب كود جديد", "error")
                }
            }
        }
    }, [loading])

return [password, confirmPassword, , OnChangePassword, OnChangeConfirmPassword, onSubmit]
}

export default ResetPasswordHook
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createReview } from '../../redux/actions/ReviewAction';
import notify from '../useNotifcations';

const AddRateHook = (id) => {

 const [rateText, setRateText] = useState('');
 const [rateValue, setRateValue] = useState(0)
 const [loading, setLoading] = useState(true)

const dispatch =useDispatch()
const res = useSelector(state => (state.ReviewReducer.createReview))




const onChangeRateText = (e) =>{
    setRateText(e.target.value)
}
const onChangeRateValue = (val) =>{
    setRateValue(val)
}

var user = '' ;
if (localStorage.getItem("user") != null) {
    user = JSON.parse(localStorage.getItem("user"))
}
// console.log(user)

const onSubmit = async() => {
    
    setLoading(true)
    await dispatch(createReview(id,
        {
            review: rateText,
            rating: rateValue
        }
    ))
    setLoading(false)
   
       
}


useEffect(() => {
    if (loading === false) {
        if(res){
            console.log(res)
           
            if (res?.data?.errors?.[0]?.msg === 'You already added review on this product') {
            notify("لقد قمت باضافة تقييم بالفعل علي هذا المنتج","error")
            
            }
            if (res?.data?.errors?.[0]?.msg === 'Rating min value 1.0 and max 5.0') {
            notify("من فضلك قم بتحديد عدد النجوم للمنتج","warn")
            return;
            }
            if (res?.data?.errors?.[0]?.msg === 'Review required') {
            notify("من فضلك قم باضافة تعليق ","warn")
            return;
            }
            if (res?.data?.message === "You are not allowed to perform this action") {
            notify("غير مسموح للادمن باضافة تعليقات ","warn")
            return;
            }else if (res.status && res.status === 201) {
                notify("تمت اضافة التقييم بنجاح","success")
               
                setTimeout(() => {
                    window.location.reload()
                       
                     }, 1500);
            }
        }
  }
}, [loading])
return [rateText,rateValue,onChangeRateText,onChangeRateValue,user,onSubmit]
}

export default AddRateHook
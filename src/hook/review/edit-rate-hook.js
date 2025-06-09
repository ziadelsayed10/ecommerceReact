import React, { useEffect, useState } from 'react'
import { editReviewOnProduct } from '../../redux/actions/ReviewAction'
import { useDispatch, useSelector } from 'react-redux'
import notify from '../useNotifcations';

const EditRateHook = (review) => {
   
const [newRateText, setNewRateText] = useState(review.review);
const [newRateValue, setNewRateValue] = useState(review.rating);


const onChangeRateText = (e) => {
  setNewRateText(e.target.value)
}
const onChangeRateValue = (val) => {
  setNewRateValue(val)
}




const dispatch =useDispatch()

const res = useSelector(state => (state.ReviewReducer.updateReviewProduct))


  



const [editShow, setEditShow] = useState(false);
const [loading, setLoading] = useState(true);

const handleEditClose = () => {

   setEditShow(false)
  }
const handleEditShow = () => {setEditShow(true)}


const handleEdit = async() => {
  setLoading(true)
await dispatch(editReviewOnProduct(review._id,
  {
    review: newRateText,
    rating: newRateValue
}
))
setLoading(false)
   setEditShow(false)
//     setTimeout(() => {
//    window.location.reload()
      
//     }, 1500);
  }

  useEffect(() => {
    if (loading === false) {
       if (res) {
         console.log(res)
        
       } if (res.status && res.status === 200) {
        notify("تمت اضافة التقييم بنجاح","success")
       
        setTimeout(() => {
            window.location.reload()
               
             }, 1500);
    }
    }
  }, [loading])
  

  return [editShow,handleEditClose,handleEdit,handleEditShow,newRateText,newRateValue,onChangeRateText,onChangeRateValue]
}

export default EditRateHook
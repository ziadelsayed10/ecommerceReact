import React, { useEffect, useState } from 'react'
import { deleteReviewOnProduct } from '../../redux/actions/ReviewAction'
import { useDispatch, useSelector } from 'react-redux'

const DeletRateHook = (review) => {
    const [isUser, setIsUser] = useState(false)


const dispatch =useDispatch()

const res = useSelector(state => (state.ReviewReducer.deleteReviewProduct))


let user = (JSON.parse(localStorage.getItem("user")))
    useEffect(() => {
if (review.user._id === user._id) {
    setIsUser(true)
}
    }, [])
    
  



const [show, setShow] = useState(false);
const [loading, setLoading] = useState(true);

const handleClose = () => {

   setShow(false)
  }
const handleShow = () => {setShow(true)}


const handleDelete = async() => {
  setLoading(true)
await dispatch(deleteReviewOnProduct(review._id))
setLoading(false)
   setShow(false)
//     setTimeout(() => {
//    window.location.reload()
      
//     }, 1500);
  }

  useEffect(() => {
    if (loading === false) {
       
      console.log(res)
    }
  }, [loading])
  

  return [isUser,show,handleClose,handleDelete,handleShow]
}

export default DeletRateHook
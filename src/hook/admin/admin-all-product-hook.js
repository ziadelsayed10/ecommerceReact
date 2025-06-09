import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAllProduct, getAllProductPage } from '../../redux/actions/ProductAction'
import notify from '../useNotifcations'

const AdminAllProductHook = (item) => {
  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(getAllProduct(6))
  }, [])
  const allProduct = useSelector((state) => state.allProduct.allProduct)
 let items = []
  if(allProduct){
    if (allProduct.data) {
        items = allProduct.data
        // console.log(items)
    } else {
        items = []
    }
  }
 let PaginationCount = []
  if(allProduct){
    if (allProduct.paginationResult) {
        PaginationCount = allProduct.paginationResult.numberOfPages
    } else {
        PaginationCount = []
    }
  }

  const onPress = async(page) => {
await dispatch(getAllProductPage(6,page))
  }
    // console.log(allProduct)


    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleClose = () => {

       setShow(false)
      }
    const handleShow = () => {setShow(true)}


    const handleDelete = async() => {
      setLoading(true)
await dispatch(deleteProduct(item._id))
setLoading(false)
       setShow(false)
        setTimeout(() => {
       window.location.reload()
          
        }, 1500);
      }


// useEffect(() => {
//   if (loading=== false) {
     
//       notify("تم الحذف بنجاح","success")
    
//   }
// }, [loading])





return [items,PaginationCount,onPress,show,handleClose,handleShow,handleDelete]
}

export default AdminAllProductHook
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../redux/actions/ProductAction'

const HomePageHook = () => {
  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(getAllProduct())
  }, [])
  
const allProduct = useSelector(state => (state.allProduct.allProduct))
let productHome = []
if(allProduct)
if(allProduct.data)
  {
    // console.log(allProduct.data)
productHome = allProduct.data.slice(0,4)

} else productHome = []
return [productHome]
}




export default HomePageHook
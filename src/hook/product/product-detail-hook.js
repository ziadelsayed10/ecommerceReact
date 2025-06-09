import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProduct, getProductLike } from '../../redux/actions/ProductAction';
import { getOneCategory } from '../../redux/actions/CategoryAction';
import { getOneBrand } from '../../redux/actions/BrandActions';

const ProductDetailHook = (id) => {
  
  const dispatch = useDispatch() ; 
  useEffect(() => {
    const get = async() => {
      await dispatch(getOneProduct(id))
      
    }
    get()
  }, [])
  
  
  const oneProduct = useSelector((state) => state.allProduct.oneProduct)
  const oneCategory = useSelector((state) => state.allCategory.oneCategory)
  const oneBrand = useSelector((state) => state.allBrand.oneBrand)
  const productLike = useSelector((state) => state.allProduct.productLike)

    let item = []
    if(oneProduct){
 if(oneProduct.data){
  // console.log(oneProduct.data)
item = oneProduct.data
 }else{ item = []}
}


useEffect(() => {
  if(item.category){
    const get = async() => {
      await dispatch(getOneCategory(item.category))
    }
    get()
  }
  if(item.brand)
    {
    const get = async() => {
      await dispatch(getOneBrand(item.brand))
    }
    get()
  }
  if(item.category)
    {
    const get = async() => {
      await dispatch(getProductLike(item.category))
    }
    get()
  }
}, [item])


let specifiecCategory = []
if(oneCategory){
if(oneCategory.data){
  specifiecCategory = oneCategory.data
}else specifiecCategory = []
}


let specifiecBrand = []
if(oneBrand){
if(oneBrand.data){
  specifiecBrand = oneBrand.data
  // console.log(specifiecBrand)
}else specifiecBrand = []
}



let productSame = []
if(productLike){
if(productLike.data){
  productSame = productLike.data
  // console.log(productLike)
}else productSame = []
}
return [item,specifiecCategory,specifiecBrand,productSame]
}

export default ProductDetailHook
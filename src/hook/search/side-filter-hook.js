import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, getAllCategoryPage } from '../../redux/actions/CategoryAction'
import { useEffect, useState } from 'react'
import { getAllBrand } from '../../redux/actions/BrandActions'
import ShopProductHook from '../product/shop-product-hook'
const SideFilterHook = () => {
    const [items,pageCounter,results,getPage,getProduct] = ShopProductHook()
  const [catChecked, setCatChecked] = useState([])
  const [brandChecked, setBrandChecked] = useState([])
  const [pFrom, setPFrom] = useState("")
  const [pTo, setPTo] = useState("")
    const dispatch = useDispatch()

    useEffect (()=>{
      const get = async () => {
       await dispatch(getAllCategory(5))
      await dispatch(getAllBrand())
      }
      get()
  ;},[])

  const category = useSelector(state => state.allCategory.allCategory);
  const brand = useSelector(state => state.allBrand.allBrand)

  var cat = []; var bnd = [] ;
  try {
   
      // console.log(allProduct)
      if(category){
        if (category.data) {
            cat = category.data
            // console.log(cat)
            
        } else {
            cat = []
        }
        
      }
   
    
  } catch (error) {}
  try {
   
      // console.log(allProduct)
      if(brand){
        if (brand.data) {
            bnd = brand.data
            // console.log(cat)
            
        } else {
            bnd = []
        }
        
      }
   
    
  } catch (error) {}

    
  const loading = useSelector(state => state.allCategory.loading);
//   let pageCount = 0
//   if (category.paginationResult)
//   pageCount=category.paginationResult.numberOfPages
//   console.log(loading)
  
//    const getPage =(page) =>{dispatch(getAllCategoryPage(page))} 




const clickCategory = (e) => {
let value = e.target.value ;
if (value === "0") {
    setCatChecked([])
} else {
    if (e.target.checked === true) {
        setCatChecked([...catChecked,value])
    }else if(e.target.checked===false){
        const newArr = catChecked.filter(val => val !== value)
          setCatChecked(newArr)
    }
}

}

const clickBrand = (e) => {
let value = e.target.value ;
if (value === "0") {
    setBrandChecked([])
} else {
    if (e.target.checked === true) {
        setBrandChecked([...brandChecked,value])
    }else if(e.target.checked===false){
        const newArr = brandChecked.filter((e) => e !== value)
        setBrandChecked(newArr)
    }
}

}

var quereyCat = ""
useEffect(() => {
  quereyCat = catChecked.map( val =>"category[in][]=" + val).join("&")
localStorage.setItem("catCheckedStorage",quereyCat)

setTimeout(() => {
    getProduct();
}, 1000);

}, [catChecked])






///////////
const priceFrom =(e) => {
localStorage.setItem("priceFrom",e.target.value)
setPFrom(e.target.value)
}


const priceTo = (e) => {
    localStorage.setItem("priceTo",e.target.value)
    setPTo(e.target.value)
}
useEffect(() => {
 setTimeout(() => {
    getProduct()
 }, 1000);
}, [pFrom,pTo])


// save  values in filter price input after refresh 
let localFrom ="" ,localTo =""
if (localStorage.getItem("priceFrom") != null) {
  localFrom = localStorage.getItem("priceFrom")
}
if (localStorage.getItem("priceTo") != null) {
  localTo = localStorage.getItem("priceTo")
}




   return [cat,bnd,loading,clickCategory,clickBrand,priceFrom,priceTo,localFrom,localTo]
}

export default SideFilterHook
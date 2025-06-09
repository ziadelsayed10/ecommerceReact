import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct, getAllProductPage, getAllProductSearch } from '../../redux/actions/ProductAction'

const ShopProductHook = () => {
const limit = 7
    const dispatch = useDispatch()




    

    const getProduct = async() => {
      let word = "", quereyCat ='',priceTo="",priceFrom ="",priceFromString = "", priceToString ="";


      if(localStorage.getItem("searchWord") != null){
        word = localStorage.getItem("searchWord")}

      
        if(localStorage.getItem("catCheckedStorage") != null)
          quereyCat = localStorage.getItem("catCheckedStorage")



        if(localStorage.getItem("priceFrom") != null)
          priceFrom = localStorage.getItem("priceFrom")

        if(localStorage.getItem("priceTo") != null)
          priceTo = localStorage.getItem("priceTo")

if (priceFrom === "" || priceFrom <= 0) {
  priceFromString =""
} else {
  priceFromString = `&price[gte]=${priceFrom}`
}
if (priceTo === "" || priceTo <= 0) {
  priceToString =""
} else {
  priceToString = `&price[lte]=${priceTo}`
}




        
        sortData()
        // console.log(`Request URL: sort=${sort}&limit=${limit}&keyword=${word}&${quereyCat}${priceFromString}${priceToString}`);

      await dispatch(getAllProductSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${quereyCat}`))
      // await dispatch(getAllProduct(8))
    }

  useEffect(() => {

    setTimeout(() => {
      getProduct()
  }, 1000);


  }, [])
  
const allProduct = useSelector(state => (state.allProduct.allProduct))

var items = [];
var pageCounter = [];
var results = 0;
try {
  if (allProduct) {
    // console.log(allProduct)
    if(allProduct.data){
      items = allProduct.data
      // console.log(allProduct.data)
      
    }
  }
  
} catch (error) {}
try {
  if (allProduct) {
    if (allProduct.paginationResult) {
      
      if (allProduct.paginationResult.numberOfPages){
        pageCounter=allProduct.paginationResult.numberOfPages
      }else{
        pageCounter = 0
      }
    }
  }
  
} catch (error) {}
try {
  if (allProduct) {
    
    if (allProduct.results){
      results=allProduct.results
    }else{
      results = 0
    }
  }
  
} catch (error) {}

const getPage = async(page) =>{  
  let priceTo="",priceFrom ="",priceFromString = "", priceToString ="";
  sortData()
  let quereyCat ='';
      if(localStorage.getItem("catCheckedStorage") != null){
        quereyCat = localStorage.getItem("catCheckedStorage")
      }

  let word = ""
  if(localStorage.getItem("searchWord") != null){
 word = localStorage.getItem("searchWord")}



 if(localStorage.getItem("priceFrom") != null)
  priceFrom = localStorage.getItem("priceFrom")

if(localStorage.getItem("priceTo") != null)
  priceFrom = localStorage.getItem("priceTo")

if (priceFrom === "" || priceFrom <= 0) {
priceFromString =""
} else {
priceFromString = `&price[gte]=${priceFrom}`
}
if (priceTo === "" || priceTo <= 0) {
priceToString =""
} else {
priceToString = `&price[lte]=${priceTo}`
}

  
   await dispatch(getAllProductSearch(`sort=${sort}&limit=${limit}&page=${page}&${quereyCat}${priceFromString}${priceToString}`))

  // await dispatch(getAllProductPage(9,page))
} 



let sortType = '',sort ;
const sortData = () => {
  if (localStorage.getItem("sort") != null) {
   sortType = localStorage.getItem("sort")
  } else {
    sortType = ''
  }
  if(sortType === "الاكثر مبيعا")
    sort = "+sold"
    else if(sortType === "السعر من الاقل للاعلي")
    sort = "+price"
    else if(sortType === "")
    sort = ""
    else if(sortType === "السعر من الاعلي لللاقل")
    sort = "-price"
    // else if(sortType === "الاكثر مبيعا")
    // sort = "+"
    
}






return [items,pageCounter,results,getPage,getProduct]
}




export default ShopProductHook
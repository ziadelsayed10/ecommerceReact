import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, getAllCategoryPage } from '../../redux/actions/CategoryAction'
import { useEffect } from 'react'
const AllCategoryPageHook = () => {
  
    const dispatch = useDispatch()

    useEffect (()=>{
      dispatch(getAllCategory(1))
  ;},[])
    
  const category = useSelector(state => state.allCategory.allCategory);
  const loading = useSelector(state => state.allCategory.loading);
  const colors = ["#c9d5ff","#ffe6f1","#a4e1eb","#F4DBA4","#f9c3f0","#fbd6c3"]
  let pageCount = 0
  if (category.paginationResult)
  pageCount=category.paginationResult.numberOfPages
  console.log(loading)
  
   const getPage =(page) =>{dispatch(getAllCategoryPage(2,page))} 

   return [category,loading,getPage,pageCount]
}

export default AllCategoryPageHook
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/CategoryAction'
const HomeCategoryHook = () => {
    const dispatch = useDispatch()

    useEffect (()=>{
      dispatch(getAllCategory())
  ;},[])
    
  const res = useSelector(state => state.allCategory.allCategory);
  const loading = useSelector(state => state.allCategory.loading);
  const colors = ["#c9d5ff","#ffe6f1","#a4e1eb","#F4DBA4","#f9c3f0","#fbd6c3"]
  return[res,loading,colors]
}

export default HomeCategoryHook
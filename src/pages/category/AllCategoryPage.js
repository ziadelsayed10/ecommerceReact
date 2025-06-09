import React, { useEffect } from 'react'
import Pagination from '../../components/utility/Pagination'
import CategoryContainre from '../../components/Category/CategoryContainre'
import AllCategoryPageHook from '../../hook/category/all-category-page-hook'

const AllCategoryPage = () => {

  const [category,loading,getPage,pageCount] = AllCategoryPageHook()
  
  return (
    <>
   <div style={{minHeight:"670px"}}>
    <CategoryContainre loading={loading} data={category.data} />
   <Pagination pageCount={pageCount} getPage={getPage}/>
   </div>
    </> 
  )
}

export default AllCategoryPage
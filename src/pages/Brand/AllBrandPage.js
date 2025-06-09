import React from 'react'
import Pagination from '../../components/utility/Pagination'
import AllBrands from '../../components/Brand/AllBrands'
import AllBrandPageHook from '../../hook/brand/all-brand-page-hook'
const AllBrandPage = () => {
  const [brand,loading,pageCount,getPage] = AllBrandPageHook()
  return (
    <>
      <div style={{ minHeight: "670px" }}>
        <AllBrands brand={brand} loading={loading} />
        <Pagination pageCount={pageCount} getPage={getPage} />
      </div>
    </>
  )
}

export default AllBrandPage
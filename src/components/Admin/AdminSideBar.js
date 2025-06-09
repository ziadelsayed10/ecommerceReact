import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <>
    <div className='admin-sideBar'>
        <div className='d-flex flex-column'>
          
            <Link to='/admin/allOrders' style={{textDecoration:'none'}}>
            <div className='admin-sideBar-text border-bottom mt-4'>
                    ادارة الطلبات
            </div>
            </Link>
            <Link to='/admin/allProducts' style={{textDecoration:'none'}}>
            <div className='admin-sideBar-text border-bottom mt-1'>
                    ادارة المتجات
            </div>
            </Link>
            <Link to='/admin/addBrand' style={{textDecoration:'none'}}>
            <div className='admin-sideBar-text border-bottom mt-1'>
                    اضف ماركة 
            </div>
            </Link>
            <Link to='/admin/addCategory' style={{textDecoration:'none'}}>
            <div className='admin-sideBar-text border-bottom mt-1'>
                    اضف تصنيف 
            </div>
            </Link>
            <Link to='/admin/addSubCategory' style={{textDecoration:'none'}}>
            <div className='admin-sideBar-text border-bottom mt-1'>
                    اضف تصنيف فرعي 
            </div>
            </Link>
            <Link to='/admin/addProduct' style={{textDecoration:'none'}}>
            <div className='admin-sideBar-text border-bottom mt-1'>
                    اضف منتج 
            </div>
            </Link>
        </div>
    </div>
    </>
  )
}

export default AdminSideBar
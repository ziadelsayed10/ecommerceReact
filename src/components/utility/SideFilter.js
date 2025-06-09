import React from 'react'
import { Row } from 'react-bootstrap'
import SideFilterHook from '../../hook/search/side-filter-hook'

const SideFilter = () => {
    
   const [cat,bnd,loading,clickCategory,clickBrand,priceFrom,priceTo,localFrom,localTo] = SideFilterHook()
  return (
    <Row>
<div className='d-flex flex-column mt-2'>
<div className='filter-title '>الفئة</div>
<div className='d-flex mt-3'>
    <div>
        <input onChange={clickCategory} value="0" type='checkbox'/>
    </div>
    <div className='filterSub-title me-2'>الكل</div>
</div>
{cat?(cat.map((item)=>{
    return(
    <div key={item._id} className='d-flex mt-1'>
    <div>
        <input onChange={clickCategory} value={item._id} type='checkbox'/>
    </div>
    <div className='filterSub-title me-2'>{item.name}</div>
</div>

)})):null}

</div>

<div className='d-flex flex-column mt-2'>
    <div className='filter-title'>الماركة</div>

    <div className='d-flex mt-1'>

    <div > <input onChange={clickBrand} value="0" type='checkbox'/></div>
    <div className='filterSub-title me-2'>الكل</div>
    
    </div>
   {bnd?(bnd.map((item)=>{
    return(
        <div key={item._id} className='d-flex mt-1'>

        <div > <input onChange={clickBrand}   value={item._id} type='checkbox'/></div>
        <div className='filterSub-title me-2'>{item.name}</div>
    
        </div>
    )
   })):null}
   
</div>


<div className='d-flex flex-column mt-2'>
<div className='filter-title'>السعر</div>
<div className='d-flex '>
<p className='filterSub-title ms-2 mt-2'> من:</p>
<input onChange={priceFrom} value={localFrom} className='text-center mt-2' type='number' style={{width:"50px", height:"25px"}}/>
</div>
<div className='d-flex '>
<p className='filterSub-title ms-2 mt-2'> الي:</p>
<input onChange={priceTo} value={localTo} className='text-center mt-2' type='number' style={{width:"50px", height:"25px"}}/>
</div>
</div>

    </Row>
  )
}

export default SideFilter
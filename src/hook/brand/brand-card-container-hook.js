import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBrand } from '../../redux/actions/BrandActions';

const BrandCardContainerHook = () => {
 
    const dispatch =useDispatch() ;
    useEffect(() => {
     dispatch(getAllBrand())
    }, [])
    const brand = useSelector(state => state.allBrand.allBrand)
    const loading = useSelector(state => state.allBrand.loading)
    // console.log(brand)
    return [brand,loading]

}

export default BrandCardContainerHook
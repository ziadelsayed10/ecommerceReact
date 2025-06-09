import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand, getAllBrandPage } from "../../redux/actions/BrandActions";

const AllBrandPageHook = () => {
 
    const dispatch =useDispatch() ;
    useEffect(() => {
     dispatch(getAllBrand(2))
    }, [])
    const brand = useSelector(state => state.allBrand.allBrand)
    const loading = useSelector(state => state.allBrand.loading)
    console.log(brand)
    let pageCount = 0
    if (brand.paginationResult)
    pageCount=brand.paginationResult.numberOfPages
    console.log(loading)
    
     const getPage =(page) =>{dispatch(getAllBrandPage(1,page))} 
    return [brand,loading,pageCount,getPage]
}

export default AllBrandPageHook
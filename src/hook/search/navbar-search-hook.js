import { useEffect, useState } from "react"
import ShopProductHook from "../product/shop-product-hook"

const NavbarSearchHook = () => {
    const [items,pageCounter,results,getPage,getProduct] = ShopProductHook()
    const [searchWord, setSearchWord] = useState('')

 const onChangeSearch = (e) => {
    localStorage.setItem("searchWord",e.target.value)
     setSearchWord(e.target.value)
   //   getProduct()
     const path = window.location.pathname;
     if (path != "/products") {
        window.location.href = "/products"
     }
 }

 useEffect(() => {
    setTimeout(() => {
        getProduct()
    }, 1000);

 }, [searchWord])
 
 return [searchWord,onChangeSearch]
}

export default NavbarSearchHook
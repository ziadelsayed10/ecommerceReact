import React from 'react'
import SliderEc from '../../components/Home/SliderEc'
import HomeCategory from '../../components/Home/HomeCategory'
import ProductCardContainer from '../../components/Products/ProductCardContainer'
import DiscountSection from '../../components/Home/DiscountSection'
import BrandCardContainer from '../../components/Brand/BrandCardContainer'
import HomePageHook from '../../hook/home/home-page-hook'

const HomePage = () => {
  const [productHome] = HomePageHook()
  return (

    <>
      <SliderEc />
      <HomeCategory />
      <ProductCardContainer allProduct={productHome} subTitle="الاكثر مبيعا" pathText="/products" btnTitle="المزيد" />
      <DiscountSection />
      <ProductCardContainer  allProduct={productHome} subTitle="احدث الازياء" pathText="/products" btnTitle="المزيد" />
      <BrandCardContainer subTitle="اشهر الماركات" pathText="/allBrand" btnTitle="المزيد" />
    </>
  )
}

export default HomePage
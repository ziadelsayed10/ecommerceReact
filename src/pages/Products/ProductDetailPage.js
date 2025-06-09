import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../components/Category/CategoryHeader'
import ContainerGalleryText from '../../components/Products/ContainerGalleryText'
import ProductCardContainer from '../../components/Products/ProductCardContainer'
import ProductDetailHook from '../../hook/product/product-detail-hook'
import { useParams } from 'react-router-dom'
import RateContainer from '../../components/Rate/RateContainer'
import Pagination from '../../components/utility/Pagination'
const ProductDetailPage = () => {
  const { id } = useParams()
  const [item,specifiecCategory,specifiecBrand,productSame] = ProductDetailHook(id)
  // console.log(productSame)
  // console.log(item)
 if (item) {
  var reteAvg = item.ratingsAverage
  var rateQty = item.ratingsQuantity
 }
  return (
    <>
   <div style={{minHeight:"670px"}}>
   <Container>
      <CategoryHeader/>
      <ContainerGalleryText/>
      <RateContainer reteAvg={reteAvg} rateQty ={rateQty}/>
      <ProductCardContainer allProduct={productSame} subTitle="منتجات قد تعجبك"/>
      <Pagination/>
    </Container>
   </div>
    </>
  )
}

export default ProductDetailPage
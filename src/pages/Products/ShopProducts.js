import React from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader'
import { Col, Container, Row } from 'react-bootstrap'
import SearchCountResult from '../../components/utility/SearchCountResult'
import SideFilter from '../../components/utility/SideFilter'
import ProductCardContainer from '../../components/Products/ProductCardContainer'
import ShopProductHook from '../../hook/product/shop-product-hook'
import Pagination from '../../components/utility/Pagination'


const ShopProducts = () => {
  const [items,pageCounter,results,getPage,getProduct] = ShopProductHook()
  if (pageCounter) {
    var pageCount = pageCounter
  }else pageCount = 0
  return (
    <>
      <div style={{ minHeight: "670px" }}>
        <CategoryHeader />
        <Container>
          <SearchCountResult  title={`هناك ${results}نتيجة بحث   `} />
          <Row className="d-flex flex-row">
            <Col sm='2' xs="2" md='1'>
            <SideFilter/>
            </Col>
            <Col sm='10' xs="10" md='11'>
            <ProductCardContainer allProduct={items}/>
            </Col>
            <Pagination pageCount={pageCount} getPage={getPage}/>

          </Row>
        </Container>
      </div>
    </>
  )
}

export default ShopProducts
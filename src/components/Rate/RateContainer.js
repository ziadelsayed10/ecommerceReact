import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import rate from '../../images/rate.png'
import RateItem from './RateItem'
import RatePost from './RatePost'
import ViewAllReviewProduct from '../../hook/review/view-all-review-hook'
import { useParams } from 'react-router-dom'
import Pagination from '../utility/Pagination'
const RateContainer = ({reteAvg,rateQty}) => {
    const {id} = useParams()
  const [allReview,onPress] = ViewAllReviewProduct(id)
  return (
   <>
   <Container className='rate-container'>
   <Row>
    <Col className='d-flex'>
    <div className='sub-title d-inline p-1'>التقييمات</div>
    <img className='mt-2' src={rate} height="16px" width='16px'/>
    <div className='cat-rate d-inline p-1 pt-2'>{reteAvg}</div>
    <div className='rate-count d-inline p-1 pt-2'>({`${rateQty} تقييم`})</div>
    </Col>
   </Row>
   <RatePost/>
   {allReview.data?(allReview.data.map((review,index) => {
    return(
      <RateItem key={index} review={review}/>)}))
    : <h6>لا اتوجد تقييمات</h6>}
  
  {allReview.paginationResult &&
        allReview.paginationResult.numberOfPages >= 2 ? (
          <Pagination
            pageCount={
              allReview.paginationResult
                ? allReview.paginationResult.numberOfPages
                : 0
            } getPage={onPress}/>):null}

   </Container>
   </>
  )
}

export default RateContainer
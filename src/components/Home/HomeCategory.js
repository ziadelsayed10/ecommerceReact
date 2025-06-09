import React, { useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitles from '../utility/SubTitles'
import CategoryCard from '../Category/CategoryCard'
import HomeCategoryHook from '../../hook/category/home-category-hook'


const HomeCategory = () => {

 const [res,loading,colors]=HomeCategoryHook()
  return (
  <>
  
  <Container>
<SubTitles subTitle="التصنيفات" pathText="/allCategory" btnTitle="المزيد" />
<Row>
  {
    loading === false ?
    res?
     res.data?
      res.data.slice(0,6).map((item,index) => {
        return(<CategoryCard key={index} title={item.name} image={item.image}  color={colors[index]} />)
      })
    :"لا يوجد تصنيفات"
    :null
    :<Spinner animation="border" variant="primary" />
  }
                
              
</Row>
  </Container>
  </>
  )
}

export default HomeCategory
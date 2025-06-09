import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allReviewProduct } from "../../redux/actions/ReviewAction"

const ViewAllReviewProduct = (id) => {
    const [loading, setLoading] = useState(true)

    const dispatch =useDispatch()
    const allReview = useSelector(state => (state.ReviewReducer.allReviewProduct))
    // if (allReview)
    // console.log(allReview)
    useEffect( async() => {
      setLoading(true)
await dispatch(allReviewProduct(id,2,1))
      setLoading(false)
    }, [])
    const onPress = async(page) => {
await dispatch(allReviewProduct(id,2,page))
    }
    
    return [allReview,onPress]
}

export default ViewAllReviewProduct
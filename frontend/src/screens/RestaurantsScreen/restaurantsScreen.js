import React, { useEffect } from 'react'
import Carousel from '../../components/RestaurantImages/restaurantsCarousal'
import {allRestaurants} from '../../actions/restaurantsActions'
import { useDispatch, useSelector } from 'react-redux'
import Rest from '../../components/RestaurantImages/resturantsDisplay'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { Row, Col } from 'react-bootstrap'




const RestaurantScreen = () => {

      const dispatch = useDispatch()

      const restaurantsAll = useSelector((state) => state.restaurantsAll)
      const { loading, error, restautants } = restaurantsAll

      useEffect(() => {
            dispatch(allRestaurants())
      }, [dispatch])


      return (
            <>
            <Carousel />
                <h1>Restaurants</h1>
                {
                        loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>
                        ) : (
                <Row className='ro'>
                              {restautants.map((restaurant) =>

                                    <Col key={restaurant._id} sm={12} md={6} lg={4} xl={3}>
                                          <Rest restaurant={restaurant} />
                                    </Col>

                               )}
                  </Row>
                  )}
            </>
      )
}

export default RestaurantScreen
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { fetchAPI } from '../actions'
import Movie from './Movie'

const Movies = ({ title, fetchURL }) => {
    const dispatch = useDispatch()

    const fetchFromAPI = useSelector(state => state.fetchFromAPI)
    const { loading, error, apiInfo } = fetchFromAPI

    useEffect(() => {
        dispatch(fetchAPI(fetchURL))
    }, [dispatch, fetchURL])

    return (
        <Container>
            <h2 className='text-center ml-5'>{title}</h2>
            <Row>
                {apiInfo.map(movie => (
                    <Col sm={12} md={6} lg={4} key={movie.id}>
                        {loading ? <Loader /> : error ? <Message>{error}</Message> : <Movie movie={movie} />}
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Movies

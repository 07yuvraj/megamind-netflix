import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Movie from '../components/Movie'
import { movieSearch } from '../actions'

const SearchScreen = ({ match }) => {
    const keyword = match.params.keyword
    const dispatch = useDispatch()

    const searchMovie = useSelector(state => state.searchMovie)
    const { loading, error, apiInfo } = searchMovie

    useEffect(() => {
        dispatch(movieSearch(keyword))
    }, [dispatch, keyword])

    return (
        <Container>
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

export default SearchScreen

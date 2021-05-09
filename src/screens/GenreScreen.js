import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Movie from '../components/Movie'
import { genreMoviesFetch } from '../actions'

const GenreScreen = ({ match }) => {
    const genre_id = match.params.id
    const dispatch = useDispatch()

    const fetchGenreMovies = useSelector(state => state.fetchGenreMovies)
    const { loading, error, apiInfo } = fetchGenreMovies

    useEffect(() => {
        dispatch(genreMoviesFetch(genre_id))
    }, [dispatch, genre_id])
    
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

export default GenreScreen

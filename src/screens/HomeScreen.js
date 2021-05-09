import React from 'react'
import { Container } from 'react-bootstrap'
import Movies from '../components/Movies'
import { requests } from '../request'

const HomeScreen = () => {

    return (
        <Container>
            <div className='mt-3'>
                <Movies title="Trending Now" fetchURL={requests.fetchTrending} />
                <Movies title="Top Rated" fetchURL={requests.fetchTopRated} />
                <Movies title="Upcoming" fetchURL={requests.fetchUpcoming} />
            </div>

        </Container >
    )
}

export default HomeScreen

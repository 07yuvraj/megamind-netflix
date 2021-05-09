import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { fetchGenre } from '../actions'

const Header = ({ history }) => {
    const [category, setCategory] = useState('Categories')
    const dispatch = useDispatch()

    const genreFetch = useSelector(state => state.genreFetch)
    const { apiInfo } = genreFetch

    useEffect(() => {
        dispatch(fetchGenre())
    }, [dispatch])

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand onClick={() => {
                            history.push('/')
                        }}>Netflix</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='mb-1' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Route render={({ history }) => <SearchBox history={history} />} />
                        <Nav className="ml-auto text-center">
                            <NavDropdown title={category} id='username' className='ml-5'>
                                {apiInfo.map(genre => (
                                    <LinkContainer to={`/genre/${genre.id}`} key={genre.id}>
                                        <NavDropdown.Item onClick={() => setCategory(genre.name)}>
                                            {genre.name}
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                ))}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </header>
    )
}

export default Header

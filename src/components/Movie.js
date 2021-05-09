import React, { useState } from 'react'
import { Card, ListGroup, Button, Modal } from 'react-bootstrap'
import Rating from './Rating'
import db from '../firebase'
import firebase from 'firebase';

const Movie = ({ movie }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)

    const handleFirebase = () => {
        db.collection("movies").add({
            name: movie.original_title,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            released: movie.release_date,
            rating: movie.vote_average,
            details: movie.overview
        })
        setShow(true)
    }
    return (
        <div>
            <Card className='m-2'>
                <Card.Header className='text-center'>
                    {movie.original_title}
                </Card.Header>
                <Card.Body>
                    <ListGroup variant='flush'>
                        <ListGroup.Item className='movie-detail'>
                            Released On: {movie.release_date}
                        </ListGroup.Item>
                        <ListGroup.Item className='movie-detail'>
                            {movie.overview.substr(0, 300)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating rating={(movie.vote_average) / 2} />
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <Card.Footer className='text-center'>
                    <Button variant='secondary' onClick={handleFirebase}>
                        Add to Firebase
                    </Button>
                </Card.Footer>
            </Card>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Added successfully</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo,data is successfully added to Firebase</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Continue
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Movie

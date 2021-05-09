import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    fetchFromAPIReducer,
    genreFetchReducer,
    fetchGenreMoviesReducer,
    searchMovieReducer
} from './reducer'

const reducer = combineReducers({
    fetchFromAPI: fetchFromAPIReducer,
    genreFetch: genreFetchReducer,
    fetchGenreMovies: fetchGenreMoviesReducer,
    searchMovie: searchMovieReducer
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
import {
    FETCH_FROM_API_REQUEST,
    FETCH_FROM_API_SUCCESS,
    FETCH_FROM_API_FAIL,
    FETCH_GENRE_REQUEST,
    FETCH_GENRE_SUCCESS,
    FETCH_GENRE_FAIL,
    FETCH_GENREMOVIES_REQUEST,
    FETCH_GENREMOVIES_SUCCESS,
    FETCH_GENREMOVIES_FAIL,
    SEARCH_MOVIE_REQUEST,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAIL
} from './constants'

export const fetchFromAPIReducer = (state = { apiInfo: [] }, action) => {
    switch (action.type) {
        case FETCH_FROM_API_REQUEST:
            return { loading: true, apiInfo: [] }
        case FETCH_FROM_API_SUCCESS:
            return { loading: false, apiInfo: action.payload }
        case FETCH_FROM_API_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const genreFetchReducer = (state = { apiInfo: [] }, action) => {
    switch (action.type) {
        case FETCH_GENRE_REQUEST:
            return { loading: true, apiInfo: [] }
        case FETCH_GENRE_SUCCESS:
            return { loading: false, apiInfo: action.payload }
        case FETCH_GENRE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const fetchGenreMoviesReducer = (state = { apiInfo: [] }, action) => {
    switch (action.type) {
        case FETCH_GENREMOVIES_REQUEST:
            return { loading: true, apiInfo: [] }
        case FETCH_GENREMOVIES_SUCCESS:
            return { loading: false, apiInfo: action.payload }
        case FETCH_GENREMOVIES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const searchMovieReducer = (state = { apiInfo: [] }, action) => {
    switch (action.type) {
        case SEARCH_MOVIE_REQUEST:
            return { loading: true, apiInfo: [] }
        case SEARCH_MOVIE_SUCCESS:
            return { loading: false, apiInfo: action.payload }
        case SEARCH_MOVIE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
import instance, { requests } from './request'
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

const fetchAPI = (name) => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_FROM_API_REQUEST,
        })

        const { data } = await instance.get(name)

        dispatch({
            type: FETCH_FROM_API_SUCCESS,
            payload: data.results
        })

    } catch (error) {
        dispatch({
            type: FETCH_FROM_API_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

const fetchGenre = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_GENRE_REQUEST,
        })

        const { data } = await instance.get(requests.fetchGenre)

        dispatch({
            type: FETCH_GENRE_SUCCESS,
            payload: data.genres
        })

    } catch (error) {
        dispatch({
            type: FETCH_GENRE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

const genreMoviesFetch = (id) => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_GENREMOVIES_REQUEST,
        })

        const { data } = await instance.get(`/discover/movie?api_key=0933c406bc7464284e955ced3271c801&language=en-US&with_genres=${id}`)

        dispatch({
            type: FETCH_GENREMOVIES_SUCCESS,
            payload: data.results
        })

    } catch (error) {
        dispatch({
            type: FETCH_GENREMOVIES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

const movieSearch = (name) => async (dispatch) => {
    try {
        dispatch({
            type: SEARCH_MOVIE_REQUEST,
        })

        const { data } = await instance.get(`/search/movie?api_key=0933c406bc7464284e955ced3271c801&page=1&query=${name}`)

        dispatch({
            type: SEARCH_MOVIE_SUCCESS,
            payload: data.results
        })

    } catch (error) {
        dispatch({
            type: SEARCH_MOVIE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export { fetchAPI, fetchGenre, genreMoviesFetch, movieSearch }

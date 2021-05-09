import axios from 'axios'

const API_KEY = '0933c406bc7464284e955ced3271c801'

const requests = {
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchGenre: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
}

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export { requests }
export default instance

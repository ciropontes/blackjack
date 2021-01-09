import { useState, useEffect } from 'react'
import { MoviesService } from './MoviesService'

export const useMovies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await MoviesService.getPopularMovies()
            setMovies(data.results)
        }
        fetchMovies();
    }, [])

    return movies
}

export const useMovie = (id) => {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const fetchMovie = async (id) => {
            const { data } = await MoviesService.getMovieById(id)
            setMovie(data)
        }
        fetchMovie(id);
    }, [])

    return movie
}
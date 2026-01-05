
'use client'
import './index.scss'
import {useEffect, useState} from 'react'
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/types';


export default function(){
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() =>{
        getMovies();
    }, []);

    const getMovies = () =>{
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'e428a7e5930808f6236cac107c8b02f5',
                language: 'pt-BR'
            }
        }).then(response =>{
            setMovies(response.data.results);
            console.log(response.data.results);
        })
    }

    

    return(
        <ul className="movie-list">
            {movies.map((movie) =>
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            )}
        </ul>
    )
}
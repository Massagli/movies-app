
'use client'
import './index.scss'
import {useEffect, useState} from 'react'
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/types';

import { LoaderCircle } from 'lucide-react';


export default function(){
    const [movies, setMovies] = useState<Movie[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() =>{
        getMovies();
    }, []);

    const getMovies = async () =>{
        await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'e428a7e5930808f6236cac107c8b02f5',
                language: 'pt-BR'
            }
        }).then(response =>{
            setMovies(response.data.results);
        });

        setIsLoading(false); 
    }

    if(isLoading){
        return(
            <div className='loading-container'>
                <LoaderCircle className="animate-spin" size={40} color='#fff'/>
            </div>
        );
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
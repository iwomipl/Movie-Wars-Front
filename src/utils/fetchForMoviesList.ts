import { MoviesInDataBase } from 'types';
import {config} from './config/config';

export const fetchForMoviesList = async (number: number, method: string): Promise<MoviesInDataBase[] | []> =>{
    const path  = config.listOfMoviesUpdatePath;
    try {
    const results = await fetch(path, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            number: number,
        }),
    });
    const data = await results.json()

    return data;
    } catch(err){
        console.error(err)
        return [];
    }
}


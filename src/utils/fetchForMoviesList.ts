import { MoviesInDataBase } from 'types';
import {config} from './config/config';

export const fetchForMoviesList = async (number: number): Promise<MoviesInDataBase[] | []> =>{
    const path  = config.listOfMoviesUpdatePath;
    try {
    const results = await fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            number,
        }),
    });

    return await results.json();
    } catch(err){
        console.log(err);
        return [];
    }
}


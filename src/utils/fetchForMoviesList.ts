import { MoviesInDataBase } from 'types';
import {config} from './config/config';

export const fetchForMoviesList = async (): Promise<MoviesInDataBase[] | []> =>{
    const path  = config.listOfMoviesUpdatePath;
    try {
    const results: any = await fetch(path);

    return await results.json();
    } catch(err){
        console.log(err);
        return [];
    }
}


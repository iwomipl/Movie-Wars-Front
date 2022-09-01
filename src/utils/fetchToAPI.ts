import { MoviesInDataBase, GenresStatObject } from 'types';
import {config} from './config/config';

export const fetchToAPI = async (method: string, number: number, genre: string): Promise<MoviesInDataBase[] | [] | {
    name: string;
    number: number;
}[]> =>{
    const path  = config.listOfMoviesUpdatePath;
    try {
        if (number === 8 || number === 16 ||number === 32 || number === 64 || number === 128 || number === 256) {
            const results = await fetch(`${path}/get-list`, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    number: number,
                    genre: genre,
                }),
            });
            const data = await results.json()

            return await data;
        } else {
            throw new Error(`Number of movies to battle should be 8, 16, 32, 64, 128, or 256.`)
        }
    } catch(err){
        console.error(err)
        return [];
    }
}
//@TODO get those functions work as one later
export const fetchToAPIGET = async (method: string): Promise<GenresStatObject> =>{
    const path  = config.listOfMoviesUpdatePath;
    try {
        const results = await fetch(`${path}/get-list`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await results.json()

        return await data;
    } catch(err){
        console.error(err)
        return {};
    }
}


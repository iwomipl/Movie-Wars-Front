import {config} from './config/config';
import {headerAndBodyObject} from "../types/fetchTypes";
import { MoviesInDataBase, GenresStatObject } from 'types';


export const fetchToAPI = async (method: string, number?: number, genre?: string, startYear?: number, endYear?: number, rating?: string): Promise<MoviesInDataBase[] | [] | {
    name: string;
    number: number;
}[] | GenresStatObject> =>{
    const path  = config.listOfMoviesUpdatePath;
    try {
        if (number === 8 || number === 16 ||number === 32 || number === 64 || number === 128 || number === 256) {
            const results = await fetch(`${path}/get-list`, createHeaderAndBodyObject(method, number, genre, startYear, endYear, rating));
            const data = await results.json()

            return await data;
        } else if (!number || !genre){
            const results = await fetch(`${path}/get-list`, createHeaderAndBodyObject(method));
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

const createHeaderAndBodyObject = (method: string, number?: number, genre?: string, startYear?: number, endYear?: number, rating?: string): headerAndBodyObject =>{
    const headers = { 'Content-Type' : 'application/json',};
    const body = number && (genre || genre === '') ?
      JSON.stringify({
          number,
          genre,
          startYear,
          endYear,
          rating,
      })
      : null;

    if (body){
        return {
            method,
            headers,
            body,
        }
    }
    return {
        method,
        headers,
    }
}

export const fetchForNumbers = async ({genre = 'Drama', rating = 'PG-13', startYear = 1903, endYear = 2022}): Promise<number|string> =>{
    const path  = config.listOfMoviesUpdatePath;
    try {

            const results = await fetch(`${path}/get-number`, {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json',},
                body:       JSON.stringify({
                    genre,
                    rating,
                    startYear,
                    endYear,
                }),
            });
            const data = await results.json() as number|Error;
        if(Number.isInteger(data)) return data as number;
            throw new Error((data as Error).message);
    } catch(err){
        console.error('This is error',err)
        return (err as Error).message;
    }
}


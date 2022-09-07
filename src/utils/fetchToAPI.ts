import { MoviesInDataBase, GenresStatObject } from 'types';
import {config} from './config/config';
import {headerAndBodyObject} from "../types/fetchTypes";

export const fetchToAPI = async (method: string, number?: number, genre?: string): Promise<MoviesInDataBase[] | [] | {
    name: string;
    number: number;
}[] | GenresStatObject> =>{
    const path  = config.listOfMoviesUpdatePath;
    try {
        if (number === 8 || number === 16 ||number === 32 || number === 64 || number === 128 || number === 256) {
            const results = await fetch(`${path}/get-list`, createHeaderAndBodyObject(method, number, genre));
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

const createHeaderAndBodyObject = (method: string, number?: number, genre?: string): headerAndBodyObject =>{
    const headers = { 'Content-Type' : 'application/json',};
    const body = number && (genre || genre === '') ?
      JSON.stringify({
          number: number,
          genre: genre,
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


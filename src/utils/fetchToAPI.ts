import { MoviesInDataBase } from 'types';
import {config} from './config/config';

export const fetchToAPI = async (method: string, number: number): Promise<MoviesInDataBase[] | [] | {
    name: string;
    number: number;
}[]> =>{
    const path  = config.listOfMoviesUpdatePath;
    try {
    const results = await fetch(`${path}/get-list`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            number: number,
        }),
    });
    const data = await results.json()
        console.log('there');
    return await data;
    } catch(err){
        console.error(err)
        return [];
    }
}
//@TODO get those functions work as one later
export const fetchToAPIGET = async (method: string): Promise<{
    name: string;
    number: number;
}[]> =>{
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
        return [];
    }
}


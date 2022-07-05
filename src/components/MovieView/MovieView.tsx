import React from "react";

interface Props{
    className: string
}

export const MovieView =(props: Props)=> {

    return <div className={props.className}>
        <h3>Movie Title</h3>
        <h5>(1994)</h5>
        <img src="https://fwcdn.pl/fpo/47/13/4713/7535946.2.jpg" alt="" className="movieImg"/>
        <h6>Starring:</h6>
        <p>John Malcovitch, Mila Jovovic, Sebastian Mila</p>
    </div>;
}
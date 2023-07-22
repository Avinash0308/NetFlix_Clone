
import React, {useState,useEffect} from 'react'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from './axios'
import './Row.css'

const api_key = "6ed8ac02ebf46669b98f63f34cb747f9"
const baseURL = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");
    //a snippet of code which tuns based on a specific condition
    useEffect(()=>{
        //if [] run once when the row loads, and dont run again
        //if [Movies], run whenever Movies changes
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
            console.log(request);
            return request;
        }
        fetchData();

    },[fetchURL]);

    const opts = {
        height: "500px",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },

    }



    const handleClick = (movie) => {
        if(trailerURL){
            setTrailerURL("");
        }
        else{
            movieTrailer(movie?.name || "")
            .then((url) =>{
                console.log("here: ",url)
                const urlparams =new URLSearchParams( new URL(url).search)
                setTrailerURL(urlparams.get('v'))
            })
            .catch(error => console.log(error)) ;
        }
    }

    return(
        <div className='row'>
            <h2>{title}</h2>
            <div className={"row_posters "} >
                {movies.map(movie => (
                    <img 
                    onClick={() => handleClick(movie)}
                    key = {movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src = {`${baseURL}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                    alt = {movie.name}
                    />
                ))}
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts = {opts}/>}
        </div>
    )
}

export default Row
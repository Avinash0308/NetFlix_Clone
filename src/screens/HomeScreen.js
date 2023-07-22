import React from 'react'
import "./HomeScreen.css"
import Row from '../Row';
import requests from '../requests';
import Banner from '../Banner';
import Nav from '../Nav';


function HomeScreen() {
  return (
    <div className="homeScreen">
        <Nav/>
        <Banner/>
        <Row

            title= "NETFIX ORIGINALS" 
            fetchURL = {requests.fetchNetflixOriginals}
            isLargeRow

        />
        <Row title= "Trending now" fetchURL = {requests.fetchTrending}/>
        <Row title= "Top Rated" fetchURL = {requests.fetchTopRated}/>
        <Row title= "Action Movies" fetchURL = {requests.fetchActionMovies}/>
        <Row title= "Komidi Movies" fetchURL = {requests.fetchComedyMovies}/>
        <Row title= "Horror Movies" fetchURL = {requests.fetchHorrorMovies}/>
        <Row title= "Romance Movies" fetchURL = {requests.fetchRomanceMovies}/>
        <Row title= "Documentaries" fetchURL = {requests.fetchDocumantaries}/>
        </div>
  )
}

export default HomeScreen
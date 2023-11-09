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

            title= "FRESHLY COOKED" 
            fetchURL = {requests.fetchNetflixOriginals}
            isLargeRow

        />
        <Row title= "NEW HOT" fetchURL = {requests.fetchTrending}/>
        <Row title= "Highly Rated" fetchURL = {requests.fetchTopRated}/>
        <Row title= "Action - Jackson Movies" fetchURL = {requests.fetchActionMovies}/>
        <Row title= "Komidi - Womedy Movies" fetchURL = {requests.fetchComedyMovies}/>
        <Row title= "Horror - Darr Movies" fetchURL = {requests.fetchHorrorMovies}/>
        <Row title= "Romance - Love Movies" fetchURL = {requests.fetchRomanceMovies}/>
        <Row title= "Documentaries - Waste of Time" fetchURL = {requests.fetchDocumantaries}/>
        </div>
  )
}

export default HomeScreen
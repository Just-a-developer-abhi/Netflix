import React from 'react'
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className='app'>

      {/* Nav */}
      <Navbar />


      {/* Banner */}
      <Banner />

      {/* Rows */}
     <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals} />

      <Row title="TRENDING NOW" fetchUrl={requests.fetchtrending} />

      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />

      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />

      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />

      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />

    </div>
  )
}

export default App

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Header from '../Header/Header';
import Leagues from '../Leagues/Leagues'
import './Home.css'
const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England')
            .then(response => response.json())
            .then(data => setLeagues(data.countrys))
    }, [])
    console.log(leagues)
    
    return (
        <div className="homeSection">
            <div className="homeHeader">
                <Header state={true}>
                </Header>
            </div>
            <div className="homeDetails container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  mt-4 g-4">
                    {
                        leagues.map(league => <Leagues league={league}></Leagues>)
                    }
                </div>
            </div>
            </div>
    )
};

export default Home;
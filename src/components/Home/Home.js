import React, { useEffect } from 'react';
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

    return (
        <div className="homeSection">
            <div className="homeHeader mb-0 pb-0">
                <Header state={true}>
                </Header>
            </div>
            <div className="homeDetails">
                <div className="container">
                    <div className="row pt-5">
                        {
                            leagues.map(league => <Leagues league={league}></Leagues>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MaleImage from '../../Photo/male.png';
import FemaleImage from '../../Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMapMarker, faFlag, faVolleyballBall, faMars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './LeagueDetails.css'
import Header from '../Header/Header';
const LeagueDetail = () => {
    const { id } = useParams();
    const [league, setLeagueDetail] = useState([])

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
            .then(response => response.json())
            .then(data => setLeagueDetail(data.leagues[0]))
    }, [league.idLeague])

    const { strBadge, strLeague, strBanner, idLeague, strDescriptionEN, intFormedYear, strGender, strSport, strCountry, strFacebook, strYoutube, strTwitter } = league;
    
    return (
        <div className="leagueSection">
            {/* leagueSection has two section ,one leagueHeader and other is leagueDetails */}
            <div className="leagueHeader">
                <Header state={false}>
                    <div className="leagueBanner w-100 h-100">
                        <img src={strBanner} className="w-100 h-100 bannerHeaderImage" alt="image not shown"/>
                        <img src={strBadge} className="w-25 h-25 badgeHeaderImage" alt="image not shown" />
                    </div>
                </Header>
            </div>
            <div className="leagueDetails pt-4">
                {/* leagueDetails has three section card description adn footer */}
                <div className="card mb-3 container leagueDetailsCard">
                    <div className="row g-0 ">
                        <div className="col-md-6">
                            <div className="card-body">
                                <h2 className="card-title mt-5 mb-4">{strLeague}</h2>
                                <p className="card-text"> <FontAwesomeIcon icon={faMapMarker} /> Founded: {intFormedYear}</p>
                                <p className="card-text"> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faVolleyballBall} /> Sport Type: {strSport}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                            </div>
                        </div>
                        <div className="col-md-6 leagueDetailsImage my-2">
                            {strGender === "Female" ? <img src={FemaleImage} alt="..." className="h-100 w-100" /> :
                                <img src={MaleImage} alt="..." className="h-100 w-100" alt="image not shown" />}
                        </div>
                    </div>
                </div>
                <div className="description container">
                    <p>{strDescriptionEN}</p>
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="footer text-center">
                    <ul className="list-inline">
                        <a className="list-inline-item liSize" href={`https:${strFacebook}`} target="_blank"><FontAwesomeIcon className="iconSize twitterLogo" icon={faTwitter} /></a>
                        <a className="list-inline-item liSize" href={`https:${strFacebook}`} target="_blank"><FontAwesomeIcon className="iconSize fbLogo" icon={faFacebook} /></a>
                        <a className="list-inline-item liSize" href={`https:${strFacebook}`} target="_blank"><FontAwesomeIcon className="iconSize youtubeLogo" icon={faYoutube} /></a>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default LeagueDetail;
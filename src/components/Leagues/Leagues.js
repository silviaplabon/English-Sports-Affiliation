import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import './Leagues.css'
const Leagues = (props) => {
    const { strSport, strBadge, strLeague,idLeague } = props.league;
    const history=useHistory();
     const handleClick=((id)=>{
         history.push(`/league/${id}`);
     })
    return (
        <div className="col">
            <div className="card h-100 w-100 text-center">
                <div className="h-50 badgeImage">
                    <img src={strBadge} className="card-img-top h-50 w-50"/>
                </div>
                <div className="card-body h-50">
                    <h5 className="card-title leagueName">{strLeague}</h5>
                    <p className="card-text sportName">Sports type:{strSport}</p>
                    <button className="btn btn-primary exploreButton" onClick={()=>handleClick(idLeague)}>
                    <FontAwesomeIcon icon={faArrowRight} /> Explore</button>
                </div>
            </div>
        </div>
    )
}

export default Leagues;
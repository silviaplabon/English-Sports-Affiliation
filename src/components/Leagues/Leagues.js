import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import './Leagues.css'
const Leagues = (props) => {
    const { strSport, strBadge, strLeague, idLeague } = props.league;
    const history = useHistory();
    const handleClick = ((id) => {
        history.push(`/league/${id}`);
    })
    return (
        <div className="mb-5 col-lg-4 col-sm-6 ">
            <div className="card shadow-lg w-100 h-100 text-center rounded">
                <div className="d-flex justify-content-center align-items-center h-50 p-2">
                    <img src={strBadge} className="card-img-top h-50 w-50" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{strLeague}</h5>
                    <p className="card-text"><small>Sports Type: {strSport}</small></p>
                    <button className="btn btn-primary" onClick={() => handleClick(idLeague)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    )
}

export default Leagues;
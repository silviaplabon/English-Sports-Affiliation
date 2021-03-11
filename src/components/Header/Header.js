import React from 'react';
import './Header.css'
const Header = (props) => {
    return (
        <div className="headerDesign text-center">
            {
                props.state === true ?
                    <div className="headerBanner">
                        <h1 className="display-2" style={{color:"white"}}>English Sports Affiliation</h1>
                    </div>
                    :
                    props.children
            }
        </div>
    )
};
export default Header;
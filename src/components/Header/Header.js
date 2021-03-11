import React from 'react';
import './Header.css'
const Header = (props) => {
    return (
        <div className="headerDesign text-center">
            {
                props.state === true ?
                    <div className="headerBanner">
                        <h1>silvia</h1>
                    </div>
                    :
                    props.children
            }
        </div>
    )
};
export default Header;
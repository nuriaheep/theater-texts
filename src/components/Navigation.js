import React from 'react'
import NavItem from '../style/NavItem-style.js'

export default (props) => {

    return (
        <div className="navigation">
            <NavItem onClick={props.onPrevButtonClick}>Anterior</NavItem>
            <NavItem onClick={props.onNextButtonClick}>Següent</NavItem>
        </div>
    );
};

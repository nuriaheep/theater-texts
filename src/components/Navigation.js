import React from 'react'
import styled, { css } from 'styled-components'

export default (props) => {
    const NavItem = styled.button`
        width: 50%;
        text-align: center;
        height: 5rem;
        border: 2px solid lightgrey;
        bakcground: lightgrey;
        cursor: pointer;
        font-size: 2rem;

        &:hover {
            background: lightblue;
        }
    `

    return (
        <div className="navigation">
            <NavItem className="substract" onClick={(e) => props.onPrevButtonClick(e)} >Anterior</NavItem>
            <NavItem className="add" onClick={(e) => props.onNextButtonClick(e)} >Següent</NavItem>
        </div>
    )
}

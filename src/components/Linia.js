import React from 'react'
import styled, { css } from 'styled-components'

export default (props) => {
    const TextLine = styled('h3')`
        font-family: sans-serif;
        font-size: clamp(1.5rem, 3vw, 48px);

        &.marked {
            background-color: orange;
        }
    `

    return (
        <div className="text-line">
            <TextLine className={props.marked ? 'marked' : ''}>{props.text}</TextLine>
        </div>
    )
}

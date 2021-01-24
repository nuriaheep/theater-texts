import React from 'react'
import styled, { css } from 'styled-components'

export default function Linia(props) {
    const TextLine = styled('h3')`
        font-family: sans-serif;
        font-size: clamp(1.5rem, 3vw, 48px);
    `

    return (
        <div className="text-line">
            <TextLine>{props.text}</TextLine>
        </div>
    )
}

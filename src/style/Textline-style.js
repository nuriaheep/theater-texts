import styled from 'styled-components'

const TextLine = styled.h3`
    font-family: sans-serif;
    font-size: clamp(1.5rem, 3vw, 48px);

    &.marked {
        background-color: orange;
    }
`;

export default TextLine;

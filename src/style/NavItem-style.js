import styled from 'styled-components'

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
`;

export default NavItem;

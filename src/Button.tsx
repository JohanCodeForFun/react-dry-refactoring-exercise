import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.color};
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 5px; 
    font-size: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

const Button = ({ children, color }: { children: React.ReactNode, color: string }) => (
    <StyledButton color={color}>{children}</StyledButton>
)

export default Button;
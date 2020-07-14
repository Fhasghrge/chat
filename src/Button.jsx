import React from 'react';
import styled from 'styled-components';

// ! Beacause the paraent component <ThemeColor>,
// ! we can get "theme" attrs
const StyleButton = styled.div`
    width: ${({ width }) => width || '80px'};
    background-color: ${({ theme }) => theme.primaryColor};
`;

export default function Button({ width }) {
    return (
        <StyleButton width={width}>
            <button>++</button>
        </StyleButton>
    );
}

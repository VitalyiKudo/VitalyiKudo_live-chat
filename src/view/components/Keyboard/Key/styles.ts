// Core
import styled from 'styled-components';

export const Container = styled.div`
background-color: ${(props: {isActive: boolean}) => props.isActive === false ? '#F5F5F5' : '#FF69B4'};
`;


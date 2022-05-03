// Core
import styled from 'styled-components';

export const Container = styled.button`
background-color: ${(props: {isActive: boolean}) => props.isActive === false ? '#F5F5F5' : '#3C9CEE'};
`;


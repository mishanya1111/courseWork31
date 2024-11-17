import styled from 'styled-components';
const CustomDiv = styled.div`
    padding: 20px;
    border: 1px solid ${({ $checked }) => ($checked ? 'yellow' : 'white')};
    height: ${({ $title }) => ($title ? '' : '160px')};
    display: ${({ $title }) => ($title ? 'flex' : '')};
    justify-content: ${({ $title }) => ($title ? 'space-between' : '')};
`;
export default CustomDiv;

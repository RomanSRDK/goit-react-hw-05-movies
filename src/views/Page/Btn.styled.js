import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonLinkStyled = styled(NavLink)`
  display: block;
  width: 60px;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5%;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  background-color: yellow;
  color: blue;
  transition: all 250 linear;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: rgb(10, 47, 158);
  }
`;

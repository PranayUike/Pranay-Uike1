import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader style={{backgroundColor:'#B9AFF8'}}>
        <NavLink to="/">
            <img src="./images/cartlogo.png" style={{height:'100px',width:'100px'}} alt="my logo img" />
        </NavLink>
        <Nav />
    </MainHeader>
  )
};

const MainHeader = styled.header`
    height: 10rem;
    background-color: ${({theme}) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    .logo{
        height: 5rem;
    }
    @media (max-width: ${({theme}) => theme.media.mobile}) {
    }`;

export default Header;

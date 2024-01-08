import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Button } from '../styles/Button';

function Navbar() {
  const navItems = [
    { name: 'Home', path: 'home'},
    { name: 'Features', path: 'features'},
    { name: 'Team', path: 'team'},
    { name: 'Contact', path: 'contact'}
  ];

  return (
    <NavB>
      <div className='navbar'>
        <ul className='navbar-list flex items-center'>
          {
            navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className='navbar-link'
                  smooth={true}
                  duration={500}
                >
                  {item.name}
                </Link>
              </li>
            ))
          }

          <li>
            <a href='/' className='navbar-link'>
              <Button className='button'>Login</Button>
            </a>
          </li>

          <li>
            <a href='/' className='navbar-link'>
              <Button className='button'>SignUp</Button>
            </a>
          </li>
        </ul>
      </div>
    </NavB>
  )
}

const NavB = styled.nav`
  .navbar-list{
    gap: 2rem;

    .navbar-link{
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: black;
      padding: 0.5rem 0;
      cursor: pointer;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 500;

      &:link,
      &:visited{
        font-size: 1rem;
      }

      &:hover,
      &:active{
        color: red;
      }

      .button{
        font-size: 1.1rem;
        width: 100px;
        border-radius: 20px;
        color: black;
        border: solid 2px black;
      }
    }
  }
`;

export default Navbar;
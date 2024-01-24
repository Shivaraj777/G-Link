import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';

function Footer() {
  // footer data
  const footerData = [
    { name: 'Home', path: 'home', delay: '200' },
    { name: 'Features', path: 'features', delay: '400' },
    { name: 'Tech', path: 'technology', delay: '600' },
    { name: 'Contact', path: 'contact', delay: '800' },
  ];

  return (
    <StyledFooter id='footer'>
      <div className='footer-container flex flex-col justify-between items-center'>
        <div className='footer-block flex flex-col flex-wrap justify-center'>
          {/* logo */}
          <div className='logo-footer-content'>
            <div className='logo flex justify-center items-center'>
              <a href='/'>
                <img src='images/chat.png' alt='logo' />
              </a>
            </div>
          </div>

          {/* Footer section links */}
          <div className='links'>
            <div className='footer-content'>
              <ul>
                {footerData.map((data) => (
                  <li>
                    <Link to={data.path} className='navlink'>{data.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer section social links */}
          <div className='links'>
            <div className='social-links'>
              <ul>
                <li>
                  <a href='https://github.com/Shivaraj777/G-Link' title='github'>
                    <BsGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-copywrite'>
        <div className='custom-container flex justify-center items-center'>
          <div className='footer-bottom text-center'>
            <p>
              © {new Date().getFullYear()}. All rights reserved | Made with 💙
              by G-Link
            </p>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

// styled component
const StyledFooter = styled.section`
`;

export default Footer;
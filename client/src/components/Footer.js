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
            <div className='logo flex justify-center items-center' data-aos='fade-up' data-aos-delay='100'>
              <a href='/'>
                <img src='images/chat.png' alt='logo' />
              </a>
            </div>
          </div>

          {/* Footer section links */}
          <div className='links'>
            <div className='footer-content' data-aos='fade-up'>
              <ul>
                {footerData.map((data) => (
                  <li data-aos='fade-up' data-aos-delay={data.delay}>
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
                <li data-aos='fade-up' data-aos-delay='900'>
                  <a href='https://github.com/Shivaraj777/G-Link' title='github'>
                    <BsGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* copywrite section */}
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
  max-width: 100vw;
  height: 100%;
  background-color: ${({theme}) => theme.colors.bg2.secondary};

  .footer-container{
    padding: 3rem 0 3rem 0;

    .footer-content{
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .logo-footer-content{
      .logo{
        a{
          width: 5rem;
          display: flex !important;
          justify-content: center;
          align-items: center;
        }
        img{
          width: 100%;
          height: auto;
        }
      }
    }
  }

  .links{
    margin: 2rem auto 0 auto;
    max-width: 100%;

    .footer-content{
      max-width: 100%;
      margin: 0;
      padding: 0 12%;
      
      ul{
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        li{
          padding: 0 1rem;
          cursor: pointer;

          .navLink{
            padding: 1rem 0;
            font-size: 1.2rem;
            color: ${({theme}) => theme.colors.heading};
            transition: all 0.1s;
            &:hover{
              border-bottom: 2px solid ${({theme}) => theme.colors.cyan};
              color: ${({theme}) => theme.colors.cyan};
            }
          }
        }
      }
    }

    .social-links{
      max-width: 100%;
      margin: 0;

      ul{
        li{
          a{
            color: ${({theme}) => theme.colors.heading};
            font-size: 2rem;
            cursor: pointer;
          }
        }
      }
    }
  }

  .footer-copywrite{
    background-color: rgba(0, 0, 0, 0.02);
    border-top: 1px solid ${({theme}) => theme.colors.border2.primary};
    width: 100vw;
    height: 100%;
    padding: 30px 0;
    .custom-container{
      .footer-bottom{
        p{
          font-size: 1rem;
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default Footer;
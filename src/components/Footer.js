import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Eshters Arise Logo"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered">
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li> */}
                  </ul>
              </div>
              <div className="column is-4">
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                    {/* <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
                  </ul>
              </div>
              {/* <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/mypage/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/mypage/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

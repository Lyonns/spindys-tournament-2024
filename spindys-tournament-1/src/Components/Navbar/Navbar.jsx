import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = ({toggleTheme}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
    toggleTheme();
  }

  return (
    <div className='nav'>
      <div className="nav-logo">
        <a href="#home">Spindy's 2024</a>
      </div>
      <ul className="nav-menu">
        <li><a href="#merch">Merch</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#participants">Participants</a></li>
        <li><a href="#judges">Judges</a></li>
        <li><a href="#rulebook">Rulebook</a></li>
        <li className='nav-contact'>
          <a href="https://discord.gg/4Kj9UtG4Fd" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </li>
        <li className='nav-contact'>
          <a href="https://www.youtube.com/@tilt_ps" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <li className='nav-contact' onClick={handleToggle}>
          <FontAwesomeIcon className="moonSun" icon={isDarkMode ? faSun : faMoon} />
        </li>
      </ul>
    </div>
  )
}
export default Navbar
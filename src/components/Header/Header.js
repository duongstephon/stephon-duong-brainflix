import './Header.scss'
import BrainFlixLogo from '../../assets/images/BrainFlix-logo.jpg'
import AvatarImg from '../../assets/images/Mohan-muruge.jpg'
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

//Header Section
const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img 
        className='header__logo'
        src={BrainFlixLogo}
        alt='BrainFlix logo' />
      </Link>
      <div className='header__search'>
        <SearchBar />
        <Link to="/upload" className='header__link'>
          <button className='header__tablet-button'>upload</button>
        </Link>
        <img
        className='header__avatar-img'
        src={AvatarImg}
        alt='avatar' />
      </div>
      <Link to="/upload" className='header__link'>
        <button className='header__button'>upload</button>
      </Link>
    </header>
  );
};

export default Header;

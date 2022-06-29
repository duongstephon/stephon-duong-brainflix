import './Header.scss'
import BrainFlixLogo from '../../assets/images/BrainFlix-logo.jpg'
import AvatarImg from '../../assets/images/Mohan-muruge.jpg'
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
    return (
        <div className='header'>
            <img 
            className='header__logo'
            src={BrainFlixLogo}
            alt='BrainFlix logo' />
            <div className='header__search'>
                <SearchBar />
                <button className='header__tablet-button'>upload</button>
                <img
                className='header__avatar-img'
                src={AvatarImg}
                alt='avatar' />
            </div>
            <button className='header__button'>upload</button>
        </div>
    );
};

export default Header;
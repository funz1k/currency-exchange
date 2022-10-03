import './header.css'

const Header = ({ currencies }) => {

    return (
        <ul className='header'>
            <li className='header-item'>
                <div className='header-item-data'>USD : {(currencies.USD * currencies.UAH).toFixed(3)}</div>
            </li>
            <li className='header-item'>
                <div className='header-item-data'>EUR : {(currencies.UAH / currencies.EUR).toFixed(3)}</div>
            </li>
        </ul>
    )
}

export default Header;

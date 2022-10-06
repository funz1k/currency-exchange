import React from 'react';
import './header.css'

type ICurrency = {
    [key: string]: number;
}

type Props = {
    currencies: ICurrency,
}

const Header: React.FC<Props> = ({ currencies }) => {

    return (
        <ul className='header'>
            <li className='header-item'>
                <div className='header-item-data'>USD : {(currencies.USD * currencies.UAH).toFixed(3)}</div>
            </li>
            <li className='header-item'>
                <div className='header-item-data'>EUR : {(currencies.EUR * currencies.UAH).toFixed(3)}</div>
            </li>
        </ul>
    )
}

export default Header;

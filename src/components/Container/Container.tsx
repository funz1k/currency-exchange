import React from 'react';
import './container.css'

interface IProp {
    title: string;
    children: JSX.Element | JSX.Element[];
}

const Container: React.FC<IProp> = ({ title, children }) => (
    <section className='section-exchange'>
        <h1 className='exchange-title'>{title}</h1>
        {children}
    </section>
);

export default Container;
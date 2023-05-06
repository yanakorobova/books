import React from 'react';
import s from './Header.module.scss'
import background from 'assets/images/background.jpg'
import {FiltersPanel} from "features/Header/FiltersPanel/FiltersPanel";


export const Header = () => {

    return (
        <header className={s.header} style={{backgroundImage: `url(${background})`}}>
            <div className={s.container}>
                <h1>Search for Books</h1>
                <FiltersPanel/>
            </div>
        </header>
    );
};


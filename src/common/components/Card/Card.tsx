import React from 'react';
import {VolumeInfoType} from "common/type/type";
import s from './Card.module.scss'
import defaultImg from 'assets/images/default.jpg'

type CardPropsType = {
    info: VolumeInfoType
}
export const Card: React.FC<CardPropsType> = ({info}) => {
    const {authors, title, categories, imageLinks} = info
    return (
        <div className={s.card}>
            <img src={imageLinks?.thumbnail || defaultImg} alt='book img'/>
            <div className={s.information}>
                <p>{title.length > 100? title.slice(0,100)+'...':title}</p>
                { authors && <div className={s.authors}><b>Authors: </b> <span>{authors.join(', ')}</span></div>}
                {categories && <div className={s.categories}>{categories.map((a: any) => <span key={a}>{a}</span>)}</div>}
                {!authors && !categories && <span>No information available</span>}
            </div>
        </div>
    );
};


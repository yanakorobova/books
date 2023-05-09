import React from 'react';
import {VolumeInfoType} from "common/type/type";
import s from './Card.module.scss'
import defaultImg from 'assets/images/default.jpg'
import {useAppDispatch} from "app/store";
import {changeCategory, changeInauthor} from "features/Header/FiltersPanel/filters-slice";
import {Rate} from "antd";

type CardPropsType = {
    info: VolumeInfoType
}
export const Card: React.FC<CardPropsType> = ({info}) => {
    const {authors, title, categories, imageLinks, averageRating} = info
    const dispatch = useAppDispatch()
    const searchBookByAuthorHandler = (author: string) => {
        dispatch(changeInauthor({inauthor: author}))
    }
    const searchBookByCategoryHandler = (category: string) => {
        dispatch(changeCategory({category}))
    }

    return (
        <div className={s.card}>
            <img src={imageLinks?.thumbnail || defaultImg} alt='book img'/>
            <Rate disabled allowHalf defaultValue={averageRating} className={s.rating}/>
            <div className={s.information}>
                <p>{title.length > 55 ? title.slice(0, 55) + '...' : title}</p>
                {<div className={s.authors}>{authors ? <>
                    <b>Authors: </b> {authors.map((a: any, i: number) => {
                    return <span key={i} onClick={() => searchBookByAuthorHandler(a)}>{i !== 0 ? `, ${a}` : a}</span>
                })}
                </> : <p>No information available</p>}</div>}
                {<div className={s.categories}>{categories ? categories.map((c: any) =>
                        <span key={c}
                              onClick={() => searchBookByCategoryHandler(c)}
                              style={{cursor: "pointer"}}
                              className={s.category}>{c}</span>)
                    : <span>Others</span>}</div>}
            </div>
        </div>
    );
};


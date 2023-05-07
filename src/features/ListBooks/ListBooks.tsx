import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "app/store";
import {clearBooks, loadBooks} from "features/ListBooks/books-slice";
import {selectBooks, selectOrderBy, selectQuery} from "app/selectors";
import {Card} from "common/components/Card/Card";
import s from './ListBooks.module.scss';

export const ListBooks = () => {

    const dispatch = useAppDispatch()
    const books = useAppSelector(selectBooks)
    const query = useAppSelector(selectQuery)
    const orderBy = useAppSelector(selectOrderBy)

    useEffect(() => {
        dispatch(loadBooks({maxResults: 18, startIndex: 0, orderBy, query}))
        return ()=>{
            dispatch(clearBooks())
        }
    }, [query, orderBy])

    const booksMapped = books.map(b => {
        return <Card info={b.volumeInfo} key={b.id}/>
    })

    const onClickHandler = async () => {
        document.body.style.cursor = 'not-allowed'
        await dispatch(loadBooks({maxResults: 6, startIndex: books.length, orderBy, query}))
        document.body.style.cursor = 'auto'
    }
    return (
        <div className={s.container}>
            <div className={s.listBooks}>
                {booksMapped}
            </div>
            <div className={s.button}>
                <button id={'button'} onClick={onClickHandler}>Load More</button>
            </div>

        </div>
    );
};

import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "app/store";
import {changeAddMore, clearBooks, loadBooks} from "features/ListBooks/books-slice";
import {
    selectAddMore,
    selectBooks,
    selectCategory,
    selectError,
    selectInauthor,
    selectOrderBy,
    selectQuery,
    selectStatus,
    selectTotalItems
} from "app/selectors";
import {Card} from "common/components/Card/Card";
import s from './ListBooks.module.scss';
import {Loader} from "common/components/Loader/Loader";
import {MAX_RES_ADD_MORE, MAX_RES_FIRST} from "common/constants/constants";
import {Button} from "common/components/Button/Button";
import {useSearchParams} from "react-router-dom";
import {setFilters} from "features/Header/FiltersPanel/filters-slice";

export const ListBooks = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const isSearch = useRef(false)
    const isMounted = useRef(false)
    const dispatch = useAppDispatch()
    const books = useAppSelector(selectBooks)
    const query = useAppSelector(selectQuery)
    const orderBy = useAppSelector(selectOrderBy)
    const status = useAppSelector(selectStatus)
    const error = useAppSelector(selectError)
    const category = useAppSelector(selectCategory)
    const totalItems = useAppSelector(selectTotalItems)
    const inauthor = useAppSelector(selectInauthor)
    const addMore = useAppSelector(selectAddMore)

    useEffect(() => {
        if (window.location.hash && window.location.hash !== '#/') {
            const params = Object.fromEntries(searchParams)
            if (
                params.query !== query ||
                params.orderBy !== orderBy ||
                params.category !== category ||
                params.inauthor !== inauthor
            ) {
                dispatch(setFilters({params}))
                isSearch.current = true
            }
        }
    }, [])


    useEffect(() => {
        if (!isSearch.current) {
            dispatch(loadBooks({maxResults: MAX_RES_FIRST, startIndex: 0, orderBy, query, category, inauthor}))
        }
        isMounted.current && setSearchParams({query, orderBy, category, inauthor})
        isSearch.current = false
        isMounted.current = true
        return () => {
            dispatch(clearBooks())
        }
    }, [query, orderBy, category, inauthor])

    const booksMapped = books.map(b => {
        return <Card info={b} key={b.etag}/>
    })

    const onClickHandler = async () => {
        dispatch(changeAddMore({addMore: true}))
        await dispatch(loadBooks(
            {maxResults: MAX_RES_ADD_MORE, startIndex: books.length, orderBy, query, category, inauthor})
        )
        dispatch(changeAddMore({addMore: false}))
    }

    return (
        <>
            {status === 'loading' ? <Loader/> : error ? <div className={s.error}>{error}</div> :
                <div className={s.books}>
                    {books.length ? <>
                        <div className={s.countBooks}>Books <span>{totalItems}</span></div>
                        <div className={s.container}>
                            <div className={s.listBooks}>
                                {booksMapped}
                            </div>
                            {!!(totalItems - books.length) && <div className={s.button}>
                                <Button disabled={addMore} onClick={onClickHandler} style={{maxWidth: '300px'}}>Load
                                    More</Button>
                            </div>}
                        </div>
                    </> : <div className={s.notFound}>Nothing Found. <br/>Change query parameters.</div>}
                </div>
            }
        </>
    );
};

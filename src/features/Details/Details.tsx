import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "app/store";
import {useParams} from "react-router-dom";
import {deleteBook, loadBook} from "features/Details/details-slice";
import {selectBookIsLoad, selectError, selectStatus} from "app/selectors";
import {Loader} from "common/components/Loader/Loader";
import s from "features/ListBooks/ListBooks.module.scss";
import {Description} from "features/Details/Description/Description";

export const Details = () => {

    const dispatch = useAppDispatch()
    const {id} = useParams()
    const status = useAppSelector(selectStatus)
    const error = useAppSelector(selectError)
    const isLoad = useAppSelector(selectBookIsLoad)

    useEffect(() => {
        dispatch(loadBook({volumeId: id}))
        return () => {
            dispatch(deleteBook())
        }
    }, [])

    return (
        <>
            {(status === 'loading' || !isLoad) ? <Loader/> : error ?
                <div className={s.error}>{error}</div> : <Description/>
            }
        </>
    );
};


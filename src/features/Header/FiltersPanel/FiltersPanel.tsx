import React, {useCallback} from 'react';
import s from './../Header.module.scss'
import {Search} from "common/components/Search/Search";
import {CustomSelect} from "common/components/CustomSelect/CustomSelect";
import {useAppDispatch, useAppSelector} from "app/store";
import {selectCategory, selectOrderBy} from "app/selectors";
import {changeCategory, changeOrderBy, changeQuery} from "features/Header/FiltersPanel/settings-slice";
import {orderByType} from "common/type/type";

const categories = [
    {value: 'all', label: 'all'},
    {value: 'art', label: 'art'},
    {value: 'biography', label: 'biography'},
    {value: 'computers', label: 'computers'},
    {value: 'history', label: 'history'},
    {value: 'medical', label: 'medical'},
    {value: 'poetry', label: 'poetry'},
]
const sort = [
    {value: 'relevance ', label: 'relevance '},
    {value: 'newest', label: 'newest'},
]

export const FiltersPanel = () => {

    const dispatch = useAppDispatch()
    const orderBy = useAppSelector(selectOrderBy)
    const category = useAppSelector(selectCategory)

    const changeOrderByHandler = useCallback((orderBy: orderByType) =>
        dispatch(changeOrderBy({orderBy})), [])
    const changeCategoryHandler = useCallback((category: string) =>
        dispatch(changeCategory({category})), [])
    const changeQueryHandler = useCallback((query: string) =>
        dispatch(changeQuery({query})), [])

    return (
        <div className={s.filtersPanel}>
            <Search style={{width: '80%'}} callback={changeQueryHandler}/>
            <div className={s.selectsBlock}>
                <div>
                    <span>Categories</span>
                    <CustomSelect items={categories} variable={category} callback={changeCategoryHandler}/>
                </div>
                <div>
                    <span>Sorting by</span>
                    <CustomSelect items={sort} variable={orderBy} callback={changeOrderByHandler}/>
                </div>
            </div>
        </div>
    );
};


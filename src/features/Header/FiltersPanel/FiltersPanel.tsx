import React, {useCallback} from 'react';
import s from './../Header.module.scss'
import {Search} from "common/components/Search/Search";
import {CustomSelect} from "common/components/CustomSelect/CustomSelect";
import {useAppDispatch, useAppSelector} from "app/store";
import {selectCategory, selectOrderBy, selectQuery} from "app/selectors";
import {changeCategory, changeOrderBy, changeQuery} from "features/Header/FiltersPanel/filters-slice";
import {OrderByType} from "common/type/type";

const categories = [
    {value: 'All', label: 'All'},
    {value: 'Art', label: 'Art'},
    {value: 'Adventure', label: 'Adventure'},
    {value: 'Biography', label: 'Biography'},
    {value: 'Business', label: 'Business'},
    {value: 'Computers', label: 'Computers'},
    {value: 'Detective', label: 'Detective'},
    {value: 'Drama', label: 'Drama'},
    {value: 'England', label: 'England'},
    {value: 'Fantasy', label: 'Fantasy'},
    {value: 'Fiction', label: 'Fiction'},
    {value: 'Handbooks', label: 'Handbooks'},
    {value: 'Health', label: 'Health'},
    {value: 'History', label: 'History'},
    {value: 'Literature', label: 'Literature'},
    {value: 'Medical', label: 'Medical'},
    {value: 'Psychology', label: 'Psychology'},
    {value: 'Poetry', label: 'Poetry'},
    {value: 'Religion', label: 'Religion'},
    {value: 'Romance', label: 'Romance'},
    {value: 'Thrillers  ', label: 'Thrillers'},
]
const sort = [
    {value: 'Relevance ', label: 'Relevance'},
    {value: 'Newest', label: 'Newest'},
]

export const FiltersPanel = () => {

    const dispatch = useAppDispatch()
    const orderBy = useAppSelector(selectOrderBy)
    const category = useAppSelector(selectCategory)
    const query = useAppSelector(selectQuery)

    const changeOrderByHandler = useCallback((orderBy: OrderByType) =>
        dispatch(changeOrderBy({orderBy})), [orderBy])
    const changeCategoryHandler = useCallback((category: string) =>
        dispatch(changeCategory({category})), [category])
    const changeQueryHandler = useCallback((query: string) => {
        dispatch(changeCategory({category: 'All'}))
        dispatch(changeQuery({query}))
    }, [])

    return (
        <div className={s.filtersPanel}>
            <div className={s.search}>
                <Search callback={changeQueryHandler} variable={query}/>
            </div>
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


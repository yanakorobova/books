import React from 'react';
import s from './../Header.module.scss'
import {Search} from "common/components/Search/Search";
import {CustomSelect} from "common/components/CustomSelect/CustomSelect";

const categories = [
    {value: 'all', label:'all'},
    {value: 'art', label:'art'},
    {value: 'biography', label:'biography'},
    {value: 'computers', label:'computers'},
    {value: 'history', label:'history'},
    {value: 'medical', label:'medical'},
    {value: 'poetry', label:'poetry'},
]
const sort = [
    {value: 'relevance ', label:'relevance '},
    {value: 'newest', label:'newest'},
]

export const FiltersPanel = () => {
    return (
        <div className={s.filtersPanel}>
            <Search style={{width:'80%'}}/>
            <div className={s.selectsBlock}>
                <div>
                    <span>Categories</span>
                    <CustomSelect items={categories}/>
                </div>
                <div>
                    <span>Sorting by</span>
                    <CustomSelect items={sort}/>
                </div>
            </div>
        </div>
    );
};


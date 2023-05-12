import React, {ChangeEvent, useEffect, useState} from 'react';
import {Input} from 'antd';

type SearchPropsType = {
    callback: (value: string) => void
    variable: string
}
export const Search: React.FC<SearchPropsType> = React.memo(({callback, variable}) => {
    const [value, setValue] = useState(variable)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onClickHandler = (val: string) => {
        if (val) {
            callback(val)
        }
    }
    useEffect(() => {
        setValue(variable)
    }, [variable])

    return (
        <Input.Search
            size="large"
            placeholder="Books or author"
            allowClear
            onChange={onChangeHandler}
            value={value}
            onSearch={onClickHandler}
        />
    );
})
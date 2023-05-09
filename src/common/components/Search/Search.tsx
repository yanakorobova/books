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
    const onClickHandler = () => {
        if (value) {
            callback(value)
        }
    }
    useEffect(() => {
        setValue(variable)
    }, [variable])

    return (
        <Input.Search
            size="large"
            placeholder="Books or author"
            onChange={onChangeHandler}
            allowClear
            onSearch={onClickHandler}
            value={value}
        />
    );
})
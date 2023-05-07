import React, {useState} from 'react';
import {Select} from 'antd'

type ItemType = {
    value: string
    label: string
}
type CustomSelectPropsType = {
    items: ItemType[]
    variable: any
    callback: (value: any) => void
}
export const CustomSelect: React.FC<CustomSelectPropsType> = ({items, variable,callback}) => {
    const [value,setValue] = useState(variable)
    const onChangeHandler = (value: any) => {
       callback(value)
        setValue(value)
    }
    return (
        <Select
            style={{flexGrow: 1}}
            onChange={onChangeHandler}
            value={value}
            defaultValue={items[0].value}
            options={items}
            size='large'
        />
    );
};


import React from 'react';
import {Select} from 'antd'

type ItemType = {
    value: string
    label: string
}
type CustomSelectPropsType = {
    items: ItemType[]
}
export const CustomSelect: React.FC<CustomSelectPropsType> = ({items}) => {

    const onChangeHandler = () => {

    }
    return (
        <Select
            style={{flexGrow: 1}}
            onChange={onChangeHandler}
            value={'lucy'}
            defaultValue={items[0].value}
            options={items}
            size='large'
        />
    );
};


import React, {ChangeEvent, useState} from 'react';
import {SearchOutlined} from "@ant-design/icons";
import {Input} from 'antd';

type SearchPropsType = {
    style: any
    callback: (value: string) => void
}
export const Search: React.FC<SearchPropsType> = ({style, callback}) => {
    const [value,setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
   const onClickHandler = () =>{
       callback(value)
   }
    return (
        <Input
            size="large"
            placeholder="Provide your text"
            onChange={onChangeHandler}
            suffix={<SearchOutlined style={{color: 'gray', cursor: 'pointer'}} onClick={onClickHandler}/>}
            onPressEnter={onClickHandler}
            style={style}
        />
    );
};
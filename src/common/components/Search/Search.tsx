import React from 'react';
import {SearchOutlined} from "@ant-design/icons";
import {Input} from 'antd';

type SearchPropsType = {
    style: any
}
export const Search:React.FC<SearchPropsType> = ({style}) => {
    const onChangeHandler = () => {

    }

    return (
        <Input
            size="large"
            placeholder="Provide your text"
            onChange={onChangeHandler}
            suffix={<SearchOutlined style={{color: 'gray',cursor:'pointer'}} onClick={()=>{}}/>}
            onPressEnter={() => {
            }}
            style={style}
        />
    );
};
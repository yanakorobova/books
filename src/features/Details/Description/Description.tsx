import React, {useState} from 'react';
import s from './Description.module.scss'
import {useAppDispatch, useAppSelector} from "app/store";
import {selectBookInfo} from "app/selectors";
import defaultImg from 'assets/images/default.jpg'
import {changeCategory, changeInauthor} from "features/Header/FiltersPanel/filters-slice";
import {ArrowLeftOutlined, DownOutlined, StarFilled, UpOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {MAX_TEXT_SHOW} from "common/constants/constants";
import {Button} from "common/components/Button/Button";

export const Description = React.memo(() => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    let {
        authors, title, categories, imageLinks, averageRating,
        description, previewLink, printedPageCount, publishedDate, publisher, language
    } = useAppSelector(selectBookInfo)

    const searchBookByAuthorHandler = (author: string) => {
        dispatch(changeInauthor({inauthor: author}))
        backHandler()
    }
    const searchBookByCategoryHandler = (category: string) => {
        dispatch(changeCategory({category}))
        backHandler()
    }
    const showMoreHandler = () => {
        setShow(!show)
    }
    const backHandler = () => navigate(-1)

    return (
        <div className={s.container}>
            <div className={s.bgContainer}>
                <div className={s.bg}>
                    <img src={imageLinks?.small || imageLinks?.thumbnail || defaultImg} alt={'book img'}/>
                </div>
                <img src={imageLinks?.small || imageLinks?.thumbnail || defaultImg} alt={'book img'}/>
            </div>
            <div className={s.description}>
                <div onClick={backHandler} className={s.back}>
                    <ArrowLeftOutlined/> <span>Main</span>
                </div>
                <div className={s.info}>
                    <StarFilled className={s.star}/> {averageRating || 0}
                    <h1>{title}</h1>
                    {authors ? <p className={s.authors}>{authors.map((a: any, i: number) => {
                        return <span key={i}
                                     onClick={() => searchBookByAuthorHandler(a)}>{i !== 0 ? `, ${a}` : a}</span>
                    })}
                    </p> : "Author(s) name not available"}
                    <div className={s.yearPage}>
                        <p>{printedPageCount} printed pages</p>
                        <p>{publishedDate.slice(0, 4)}</p>
                    </div>
                    <div className={s.aboutBook}>
                        <h3>About the book</h3>
                        <div className={s.text}>{description.slice(0, MAX_TEXT_SHOW).replace(/<\/?\w+>/g, '')}
                            {description.length > MAX_TEXT_SHOW && !show && <>
                                <span>...</span>
                                <div className={s.line}></div>
                            </>}
                            {show && <span>{description.slice(MAX_TEXT_SHOW).replace(/<\/?\w+>/g, '')}</span>}
                        </div>
                        {description.length > MAX_TEXT_SHOW &&
                            <div className={s.button} onClick={showMoreHandler}>
                                {
                                    show ? <><UpOutlined style={{fontSize: '14px'}}/><span>Hide</span> </>
                                        : <><DownOutlined style={{fontSize: '14px'}}/> <span>Show more</span></>
                                }
                            </div>
                        }
                    </div>
                    <div>
                        <h3>Publisher</h3>
                        <div>{publisher ? publisher : "Publisher company not available"}</div>
                    </div>
                    <div>
                        <h3>Language</h3>
                        <div>{language.replace(/^\w/, l => l.toUpperCase())}</div>
                    </div>
                    {<div>
                        <h3>Categories</h3>
                        <div className={s.categories}>
                            {categories ? categories.map((c: any) => (
                                    <span key={c} onClick={() => searchBookByCategoryHandler(c)}
                                          style={{cursor: "pointer"}}
                                          className={s.category}>{c}</span>))
                                : <span>Others</span>}
                        </div>

                    </div>}
                    <a href={previewLink} target={'_blank'} rel="noreferrer">
                        <Button>Google Books</Button>
                    </a>
                </div>
            </div>
        </div>
    );
})


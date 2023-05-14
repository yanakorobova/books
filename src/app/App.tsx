import React from 'react';
import {Main} from "common/components/Main/Main";
import {Route, Routes} from "react-router-dom";
import {BookDescription} from "pages/BookDescription";
import {Header} from "features/Header/Header";
import {HomePage} from "pages/HomePage";

function App() {

    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/book/:id'} element={<BookDescription/>}/>
                </Routes>
            </Main>
        </>
    );
}

export default App;

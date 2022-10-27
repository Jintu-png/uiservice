import React, {useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PAGES } from './Constants';
import { setUserLoggedIn, getUserLoggedIn} from  './CommonUtils';

export const RouterHelper = () => {
    const [isAuth, setIsAuth] = useState(false);
    // const [useType, setUseType] = useState('guest');

    // setUserLoggedIn('true');
    // useEffect(() => {
    //     // setIsAuth(getUserLoggedIn());
    // }, []);

    if(isAuth) {
        // Procted   Pages 
        return (
            <Routes>
            <Route path={PAGES.CUSTOMERHOME.path} element={<PAGES.CUSTOMERHOME.component />} />
            <Route path={PAGES.SIGN_UP.path} element={<PAGES.SIGN_UP.component />} />
            <Route path={PAGES.SIGN_IN.path} element={<PAGES.SIGN_IN.component />} />
            <Route path={PAGES.SIGN_IN_NEW.path} element={<PAGES.SIGN_IN_NEW.component />} />
            <Route path={PAGES.DASHBOARD.path} element={<PAGES.DASHBOARD.component />} />
            <Route path={PAGES.BUSINESS_INFO.path} element={<PAGES.BUSINESS_INFO.component />} />
            <Route path={PAGES.ADD_INFO.path} element={<PAGES.ADD_INFO.component />} />
            <Route path={PAGES.PG_SEARCH.path} element={<PAGES.PG_SEARCH.component />} />
            <Route path={PAGES.CART.path} element={<PAGES.CART.component />} />
            <Route path={PAGES.PG_CONTACT_US.path} element={<PAGES.PG_CONTACT_US.component />} />
            <Route path={PAGES.FAQ.path} element={<PAGES.FAQ.component />} />
            </Routes>
        )
    } else {
        // Public  Pages 
        return(
            <Routes>
                <Route path="/*" element={<PAGES.SIGN_IN_NEW.component />} />
            </Routes>
        )
    }
}
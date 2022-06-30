import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const MainPage = () => { // props 자리에 있던 것들: { isDark, setIsDark }
    // const data = useContext(ThemeContext);
    // console.log(data);
    return (
        <div>
            <Header />
            <Content />
            <Footer/>


            {/* 첫번째방법 */}
            {/* <Header isDark={isDark}/>
            <Content isDark={isDark}/> */}

            {/* 버튼이 footer에 있으니깐 */}
            {/* <Footer isDark={isDark} setIsDark={setIsDark}/> */}
        </div>
    );
};

export default MainPage;
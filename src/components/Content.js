import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Content = () => { // {isDark}
    const { isDark } = useContext(ThemeContext);
    return (
        // <div className='content'>
        <div className={isDark? 'content dark' : 'content'}>
            좋은 하루 되세요 ~
        </div>
    );
};

export default Content;
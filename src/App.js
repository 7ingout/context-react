import './App.css';
import MainPage from './components/MainPage';
import { useState } from 'react'
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [ isDark, setIsDark ] = useState(false);   
  return (
    // 두번재 방법
    // context로 보낼 수 있음
    <ThemeContext.Provider value={ {isDark, setIsDark}}> 
    <div className="App">

      {/* 첫번째 방법 */}
      {/* MainPage props 자리에 이것들을 받음 */}
      {/* <MainPage isDark={isDark} setIsDark={setIsDark}/>  */}

      <MainPage/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;

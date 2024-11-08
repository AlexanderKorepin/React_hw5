
import './App.css';
import { createContext, useContext, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import store from './configs/store';

const ThemeContext = createContext();
const ThemeButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>Theme button</button>
  );
};

export const UserContext = createContext('Guest');
export const ThemeContext1 = createContext('light');


function App() {
  const [theme, setTheme] = useState({
    background: 'lightgray',
    foreground: 'black'
  });



  const [theme1, setTheme1] = useState('light');
  const [name, setName] = useState('Guest')

  function changeName(e) {
    let newName = e.target.closest('div').querySelector('input').value;
    setName(newName)
    newName = '';

  }
  function toggleTheme() {
    setTheme1((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    // console.log(theme1);

  }

  return (
    <div className="App">
      {/* task 3 */}
       <Provider store={store}>
       <div className="App">
         <h2>Task 3</h2>
         <Counter />
       </div>
     </Provider>

      {/* <Provider store={storeToggle}>
        <ToggleTheme />
      </Provider>
      <Provider store={store}>
        <Counter />
      </Provider> */}

   

    <ThemeContext1.Provider value={theme1}>
        <UserContext.Provider value={name}>
          <Header />
          <div>
            <input />
            <button onClick={changeName}>Edit user name</button>
          </div>
          <Profile />
          <Footer />
          <div>
            <button onClick={toggleTheme}>Change Theme</button>
          </div>
        </UserContext.Provider>
      </ThemeContext1.Provider>
      </div>
        

  );
}


export default App;

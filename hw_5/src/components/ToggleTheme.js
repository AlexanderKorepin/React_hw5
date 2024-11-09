import { useSelector, useDispatch } from "react-redux";
import React from "react";
import classes from "./ToggleTheme.module.css"

function ToggleTheme() {
    const theme = useSelector(state => state);
    const dispatch = useDispatch();
    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    }

    return (
        <div className={theme === 'light' ? `${classes.light}` : `${classes.dark}`}>
            <h1>Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта.
                Текущая тема: <span>{theme}</span></h1>
            <button onClick={toggleTheme}> Изменить тему на {theme === 'light' ? 'dark' : 'light'}</button>
        </div >
    );
}
export default ToggleTheme;
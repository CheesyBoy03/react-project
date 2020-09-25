import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
    return(
        <div className={style.header}>
            <div className={style.header_content}>
                <div className={style.logo}>
                    <NavLink exact to="/">CCA-2</NavLink>
                </div>
                <div className={style.menu}>
                    <div className={style.nav}>
                        <ul>
                            <NavLink to="/timetable" activeClassName={style.active} className={style.links}>расписание</NavLink>
                            <NavLink to="/tasks" activeClassName={style.active} className={style.links}>задания</NavLink>
                        </ul>
                    </div>
                    <div className={style.user_photo}>
                        <NavLink to="/profile"></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './Header.module.css';
import { logo } from './logo.png';

const Header = (props) => {
    return(
        <div className={style.header}>
            <div className={style.header_content}>
                <div className={style.logo}>
                    <NavLink exact to="/">ССА-2</NavLink>
                </div>
                <div className={style.menu}>
                    <div className={style.nav}>
                        <NavLink to="/timetable" activeClassName={style.active} className={style.links}>расписание</NavLink>
                        <NavLink to="/tasks" activeClassName={style.active} className={style.links}>задания</NavLink>
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
import React from 'react';
import style from './Timetable.module.css'

const Timetable = (props) => {
    return(
        <div className={style.timetable_content}>
            <Block1 date='21.09' day='Понедельник' subject='Информатика'/>
            <Block2 date='22.09' day='Вторник' subject='Физика'/>
        </div>
    );
};

const Block1 = (props) => {
    return(
        <div className={style.block}>
            <div className={style.header_block}>
                {props.date} {props.day}
            </div>
            <div className={style.subjects}>
                <ul>
                    <li>{props.subject}</li>
                    <li>{props.subject}</li>
                    <li>{props.subject}</li>
                </ul>
            </div>
        </div>
    )
}

const Block2 = (props) => {
    return(
        <div className={style.block}>
            <div className={style.header_block}>
            {props.date} {props.day}
            </div>
            <div className={style.subjects}>
                <ul>
                    <li>{props.subject}</li>
                    <li>{props.subject}</li>
                </ul>
            </div>
        </div>
    )
}

export default Timetable;
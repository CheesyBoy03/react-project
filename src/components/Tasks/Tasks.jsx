import React from 'react';
import image from './img/Group 1.png'
import style from './Tasks.module.css';

const Tasks = (props) => {
    return(
        <div className={style.Tasks_content}>
            <div className={style.Tasks}>
                <Block1 className={style.item} name='Иван' lastname='Степанов' subject='Родная литература' day='Понедельник' task='План стихотворения Агашиной'/>
                <Block1 className={style.item} name='Виктор' lastname='Линников' subject='Введение в IT' day='Пятнца' task='Сделать тест на сайте'/>
                <Block1 className={style.item} name='Илья' lastname='Мельников' subject='Информатика' day='Вторник' task='Сделать проект до конца года'/>
                <Block1 className={style.item} name='Вова' lastname='Кухаренко' subject='Введение в IT' day='Пятнца' task='Сделать тест на сайте'/>
                <Block1 className={style.item} name='Влад' lastname='Ушаков' subject='Родная литература' day='Понедельник' task='План стихотворения Агашиной'/>
            </div>
            <div className={style.for_btn}>
                <button></button>
                <div className={style.add_task}></div>
            </div>
        </div>
        
    );
};

const Block1 = (props) => {
    return(
        <div className={style.block}>
            <div className={style.header_block}>
                {props.name} {props.lastname}
            </div>
            <div className={style.list}>
                <div className={style.dz}>
                    <div className={style.topPart}>
                        <img src={image} />
                        <h3>{props.subject} ({props.day})</h3>
                    </div>
                    <p>{props.task}</p>
                </div>
            </div>
        </div>
    );
};

const Block2 = (props) => {
    return(
        <div className={style.block}>
            <div className={style.header_block}>
                {props.name} {props.lastname}
            </div>
            <div className={style.list}>
                <div className={style.dz}>
                    <div className={style.topPart}>
                        <img src={image} />
                        <h3>{props.subject} ({props.day})</h3>
                    </div>
                    <p>{props.task}</p>
                </div>
            </div>
        </div>
    );
};

const Block3 = (props) => {
    return(
        <div className={style.block}>
            <div className={style.header_block}>
                {props.name} {props.lastname}
            </div>
            <div className={style.list}>
                <div className={style.dz}>
                    <div className={style.topPart}>
                        <img src={image} />
                        <h3>{props.subject} ({props.day})</h3>
                    </div>
                    <p>{props.task}</p>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
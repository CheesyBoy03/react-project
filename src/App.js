import React from 'react';
import logo from './logo.svg';
import style from './App.css';
import Header from './components/Header/Header';
import Timetable from './components/Timetable/Timetable';
import Tasks from './components/Tasks/Tasks';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div className='content'>
          <Route path='/home' component={Main}/>
          <Route path='/timetable' component={Timetable} />
          <Route path='/tasks' component={Tasks} />  
       </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

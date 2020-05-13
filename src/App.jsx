import React from 'react';
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => {
  const languages = ['React', 'Vue', 'Angular'];
  return (
    <BrowserRouter>
      <div>
        <h1>welcome to react app!!</h1>
        <Route exact path='/' component={Booklist} />
        <Route path='/vue' component={Booklist} />
        <Route path='/angular' component={Booklist} />
      </div>
    </BrowserRouter>
  );
}

export default App;

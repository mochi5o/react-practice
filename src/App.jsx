import React from 'react';
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => {
  const languages = ['React', 'Vue', 'Angular'];
  return (
    <BrowserRouter>
      <div>
        <h1>welcome to react app!!</h1>
        <ul>
          <li><Link to='/'>React</Link></li>
          <li><Link to='/vue'>vue</Link></li>
          <li><Link to='/angular'>angular</Link></li>
        </ul>
        <hr />
        <Route exact path='/' render={props => <Booklist language={languages[0]} />} />
        <Route path='/vue' render={props => <Booklist language={languages[1]} />} />
        <Route path='/angular'  render={props => <Booklist language={languages[2]} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;

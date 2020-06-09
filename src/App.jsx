import React from 'react';
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Test from './components/Test';

const getDataFromAPI = async keyword => {
  const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
  const result = await axios.get(`${requestUrl}${keyword}`);
  return result;
}
const getTestAPI = async keyword => {
  const url = 'https://livlog.xyz/springwater/springWater?q='
  const testresult = await axios.get(`${url}${keyword}`);
  return testresult;
}

console.log('ok');

const App = () => {
  const languages = ['React', 'Vue', 'Angular'];
  const pref = ['愛知県'];

  return (
    <BrowserRouter>
      <div>
        <h1>welcome to react app!!</h1>
        <ul>
          <li><Link to='/react-practice'>React</Link></li>
          <li><Link to='/vue'>vue</Link></li>
          <li><Link to='/angular'>angular</Link></li>
        </ul>
        <hr />
        <Route
          exact
          path='/react-practice'
          render={
            props =>
            <Booklist
              language={languages[0]}
              getData={keyword => getDataFromAPI(keyword)}
            />
          }
        />
        <Route
          path='/vue'
          render={
            props =>
            <Booklist
              language={languages[1]}
              getData={keyword => getDataFromAPI(keyword)}
            />
          }
        />
        <Route
          path='/angular'
          render={
            props =>
            <Booklist
              language={languages[2]}
              getData={keyword => getDataFromAPI(keyword)}
            />
          }
        />
      </div>
      <Test
      pref={pref[0]}
      getTest={keyword => getTestAPI(keyword)}
    />
    </BrowserRouter>

  );
}

export default App;

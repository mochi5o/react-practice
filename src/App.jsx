import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Waterlist from './components/Waterlist';

const getDataFromAPI = async keyword => {
  const url = 'https://livlog.xyz/springwater/springWater?q='
  const result = await axios.get(`${url}${keyword}`);
  return result;
}

console.log(getDataFromAPI('愛知県'));

const App = () => {
  const pref = ['福岡県','熊本県','大分県','佐賀県','長崎県','宮崎県','鹿児島県'];

  return (
    <BrowserRouter>
      <div>
        <h1>九州の名水</h1>
        <ul>
          <li><Link to='/react-practice'>お気に入り湧き水スポット</Link></li>
          <li><Link to='/fukuoka'>福岡県</Link></li>
          <li><Link to='/kumamoto'>熊本県</Link></li>
          <li><Link to='/ooita'>大分県</Link></li>
          <li><Link to='/saga'>佐賀県</Link></li>
          <li><Link to='/nagasaki'>長崎県</Link></li>
          <li><Link to='/miyazaki'>宮崎県</Link></li>
          <li><Link to='/kagoshima'>鹿児島県</Link></li>
          <li><Link to='/search'>search</Link></li>
        </ul>
        <hr />
      </div>
      <Route
        path='/react-practice'
        render={
          props =>
            <Waterlist
              pref={pref[0]}
              getList={keyword => getDataFromAPI(keyword)}
            />
        }
      />
      <Route
        path='/fukuoka'
        render={
          props =>
            <Waterlist
              pref={pref[0]}
              getList={keyword => getDataFromAPI(keyword)}
            />
        }
      />
      <Route
        path='/kumamoto'
        render={
          props =>
            <Waterlist
              pref={pref[1]}
              getList={keyword => getDataFromAPI(keyword)}
            />
        }
      />
      <Route
        path='/ooita'
        render={
          props =>
            <Waterlist
              pref={pref[2]}
              getList={keyword => getDataFromAPI(keyword)}
            />
        }
      />
      <Route
        path='/saga'
        render={
          props =>
            <Waterlist
              pref={pref[3]}
              getList={keyword => getDataFromAPI(keyword)}
            />
        }
      />
      <Route
        path='/nagasaki'
        render={
          props =>
            <Waterlist
              pref={pref[4]}
              getList={keyword => getDataFromAPI(keyword)}
            />
        }
      />
      <Route
        path='/miyazaki'
        render={
          props =>
            <Waterlist
              pref={pref[5]}
              getList={keyword => getDataFromAPI(keyword)}
            />
        }
      />
      <Route
        path='/kagoshima'
        render={
          props =>
            <Waterlist
              pref={pref[6]}
              getList={keyword => getDataFromAPI(keyword)}
            />
        }
      />
      <Route
        path='/nagasaki'
        render={
          props =>
            <Waterlist
              pref={pref[0]}
              getList={keyword => getDataFromAPI(keyword)}
            />
        }
      />
    </BrowserRouter>

  );
}

export default App;

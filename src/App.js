import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import About from './About'
import HistorySample from './HistorySample'
import Home from './Home'
//import Profile from './Profile'
import Profiles from './Profiles'

function App() {
  return (
    <div>
      {/*현재 페이지에서 주소만 바꾸고 리렌더링 함(새로고침X) */}
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
        <li>
          <Link to='/profiles'>프로필 목록</Link>
        </li>
        <li>
          <Link to='/history'>예제</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
        {/*exact 경로가 완전히 일치할 때만 사용*/}
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>

        {/* <Route path='/profiles/:username' component={Profile}/> */}
        {/* 서브라우터 사용👇 */}
        <Route path='/profiles' component={Profiles}/>
        <Route path='/history' component={HistorySample}/>
        <Route render={({location})=>
          <div>
            <h2>이 페이지는 존재하지 않습니다.</h2>
            <p>{location.pathname}</p> 
          </div>}/>
      </Switch>
      
    </div>
  )
}

export default App

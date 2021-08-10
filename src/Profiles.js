import React from 'react'
import Profile from './Profile'
import {NavLink,Route} from 'react-router-dom'
import WithRouterSample from './WithRouterSample'
import RouterHookSample from './RouterHookSample'

function Profiles(){
    const user='사용자'
    return(
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li><NavLink to='/profiles/ktmihs' 
                        activeStyle={{background:'black',color:'white'}}
                        activeClassName="active"
                        isActive={(match,location)=>{return true/*조건일 때만*/}}
                        >ktmihs</NavLink></li>
                <li><NavLink to='/profiles/homer' activeStyle={{background:'black',color:'white'}}>homer</NavLink></li>
            </ul>
            {/*render로 바로 함수형 컴포넌트를 넣어줄 수 있음*/}
            {/* 특정 경로에 탭이 있을 경우, 서브 라우터를 사용하면 편함 */}
            <Route path='/profiles' exact render={()=><div>{user}를 선택해주세요</div>}/>
            <Route path='/profiles/:username' component={Profile}/>
            <WithRouterSample />
            <RouterHookSample/>
        </div>
    )
}
export default Profiles
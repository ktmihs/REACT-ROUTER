import React from 'react'
import { withRouter } from 'react-router-dom'


//withRouterSample가 router로 사용되지 않았더라도 router처럼 props를 사용할 수 있음
function WithRouterSample({location, match, history}){
    return(
        <div>
            <h4>location</h4>
            <textarea value={JSON.stringify(location,null,2)} readOnly/>
            <h4>match</h4>
            <textarea value={JSON.stringify(match,null,2)} readOnly/>
            <button onClick={()=>history.push('/')}>홈으로</button>
        </div>
    )
}
export default withRouter(WithRouterSample)
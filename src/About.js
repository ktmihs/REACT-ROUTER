import React from 'react'
import qs from 'qs'

//http://localhost:3000/about?detail=true
function About({location}){ // query사용시 location 받아서 사용
    
    // 파싱(안에서 값을 추출)
    const query=qs.parse(location.search,{  // ?포함되어있기 때문에 파싱해야함
        ignoreQueryPrefix:true  // ? 삭제
    })
    const detail=query.detail==='true'  // url parameter, query 모두 값을 불러올 때 string으로 읽어짐
                                        // 모두 문자열로 비교해야함
    
    return(
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 react router를 소개하는 페이지입니다.</p>
            {detail && <p>detail값이 true입니다.</p>}
        </div>
    )
}
export default About
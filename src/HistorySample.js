import React,{useEffect} from 'react'

function HistorySample({history}){
    const goBack=()=>{
        history.goBack()
    }
    const goHome=()=>{
        history.push('/')
    }
    const replaceHome=()=>{
        history.replace('/')    // 방문기록을 남기지 않음
    }
    useEffect(()=>{
        console.log(history)
        const unblock=history.block('정말 떠나실건가요?')
        return()=>{
            unblock()   // popup창으로 막을 수 있음
        }
    },[history])
    
    return(
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈</button>
            <button onClick={replaceHome}>홈(Replace)</button>
        </div>
    )
}
export default HistorySample
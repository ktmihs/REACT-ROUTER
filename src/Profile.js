import React from 'react'

const profileData={
    ktmihs:{
        name:'안현서',
        description:'frontend engineer'
    },
    homer:{
        name:'호머 심슨',
        description:'심슨 아빠'
    }
}
function Profile({match}){  // path에서 자동으로 받아옴
    const {username}=match.params
    const profile=profileData[username]
    if(!profile) return <div>존재하지 않는 이름입니다!</div>
    return(
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>
                {profile.description}
            </p>
        </div>
    )
}
export default Profile
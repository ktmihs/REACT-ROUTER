# ROUTER

### Single Page Application(SPA)
- 라우팅(어떤 주소에 어떤 UI를 보여줄지를 작업)을 클라이언트가 담당

### non-SPA
```
cli---/about--->server
   <---html---

단) 사용자와 인터렉션이 많은 경우, 적합하지 않음
```

### SPA
```
cli /about
       👇
   re-render ------> server
(서버에 요청하지 않고도 바로 페이지를 보여줌)
동적인 움직임이 필요할 때만, 특정 api를 요청해서 필요한 데이터만 json형식으로 받아옴
  re-render<--json---

- 장) 서버에서는 서버 자원을 아낄 수 있고
클라이언트 쪽에서는 사용자가 더 좋은 사용자 경험을 누릴 수 있음
- 단1) 앱의 규모가 커지면 js파일의 크기가 너무 커질 수 있음
	-> code splitting을 통해 해결할 수 있음(각 기능별로 파일을 분리시켜서 필요한 것만 불러옴)
- 단2) 브라우저에서 자바스크립트가 구동되지 않으면 UI를 볼 수 없음
(ex. 검색엔진에서 크롤링 불가능)
	-> server side rendering을 통해 해결할 수 있음
```

### 가장 많이 사용되는 라이브러리
	- react-router (컴포넌트를 기반으로 라우팅함-props설정)
	- 대안: Next.js(서버사이드렌더링을 굉장히 쉽게 - 구현할 수 있음, 파일 경로`이름을 기반으로 라우팅 함)

- <BrowserRouter>
	HTML5 History API 사용
	주소만 바꾸고 페이지는 다시 불러오지는 않음
- <HashRouter>
	주소 뒤에 #를 사용함, 옛날 브라우저에서도 사용할 수 있음
- <MemoryRouter>
	(주소가 변경되진 않음)
	브라우저가 아닌(브라우저 주소와 무관) 테스트나 리액트 네이티브 같은 환경에서 사용하기 좋음
- <StaticRouter>
	서버사이드렌더링 시 사용
- <Route>
	라우트를 정의할 때 사용
- <Link>
	사용한 Router의 주소를 바꿈, a 태그지만 새로고침 안 됨!

<hr/>

### parameter & query
```
<h5>parameter</h5>
const {username}=match.params
// match를 params로 받아 path안의 parameter값을 받아올 수 있음


<h5>query</h5>
const query=qs.parse(location.search,{  // ?포함되어있기 때문에 파싱(값추출)해야함
        ignoreQueryPrefix:true  // ? 삭제
    })
```

### 서브 라우터
- 특정 경로에 탭이 있을 경우, 서브 라우터를 사용하면 편함

### history
- 컴포넌트에서 라우터에 직접적인 접근을 할 수 있음
- 특정 함수를 호출했을 때, 특정 경로로 이동하거나 뒤로가거나 페이지 이탈을 방지할 수 있음
##### push
- 이동
##### back
- 이전으로
##### replace
- 이전으로(방문기록 남기지 않음)
##### block
- 이탈 방지

### withRouter
- 라우터 텀포넌트가 아닌 곳에서 match, location, history 사용(조건부로 이동해야 할 때)
	- ex. 로그인 성공 시에만 페이지 이동하고 싶을 때

### location
- 어디에서 불러오든 똑같은 값

### match
- 현재 component가 렌더링된 위치를 기준으로 match를 불러옴

### switch
- 여러 라우트 중 가장 먼저 매칭된 것 하나만 보여줌

### NavLink
- 현재 주소와 일치한다면 스타일 바꾸기

### useReactRouter Hook
- yarn add use-react-router 설치로 편리하게 사용가능
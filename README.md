# 박상현

<div align="center">

  <h1>해외축구 커뮤니티</h1>
  
</div>

<!-- About the Project -->

## :star2: 배포 링크

<a href="https://soccer-community-p-c.netlify.app/">배포 사이트</a>
</br>
### 백엔드 연동된 페이지
    read
    - / (메인)
    - /post (게시판)
    - /premier/schedule (프리미어리그 경기 일정)
    - /premier/schedule/match/712 (경기 상세 정보)
    - /premier/rank (프리미어리그 팀 순위)
    - /player/12444 (선수 상세 정보) - 일부 데이터
    
    * 게시글 쓰기, 로그인 등 기본 crud는 구현 했었으나 백엔드 api 문제로 현재 작동 x
    * 축구 정보 데이터 미흡


## 기술 스택

<img width="566" alt="아키텍처1" src="https://github.com/user-attachments/assets/a57c295a-a9c6-4f56-b3b3-05358d2fad6e">

## 아키 텍쳐

<img width="566" alt="아키텍처1" src="https://github.com/user-attachments/assets/ecda7479-9127-4502-bc8b-395ad489b7f5">


## 프로젝트 개요

- 해외축구 일정, 결과 등을 보여주고, 게시판을 통해 커뮤니티 활동을 할 수 있는 웹 사이트. 반응형, 다크모드 구현.

### :dart: 특징

- **팀 프로젝트** - 백엔드2, 프론트엔드2 구성으로 깃허브와 코드 컨벤션을 통해 협업 진행
- **다크모드, 반응형** - 사용자 친화적인 UI 구현
- **문서 작성** - Google Sheets를 통해 기능, api 요청사항, 테스트 케이스 작성
- **Apache ECharts 도입** - Apache ECharts를 통해 매치데이별 팀 순위를 그래프 UI로 구현

## :grey_question: 개발하면서 고민한점

- React Query를 사용하는 api로직과 UI를 렌더링하는 컴포넌트의 분리. 이를 위해 React Query를 사용하는 [디렉토리](https://github.com/soccer-community-P-C/soccer-community-frontend/tree/main/src/api)에서 커스텀 훅을 구현해 **관심사 분리.**
- **사용자 편의를 위해 고민했습니다**. ‘[경기일정 페이지](https://soccer-community-p-c.netlify.app/premier/schedule)’에서 오늘 날짜에 해당하는 경기일정으로 스크롤 하거나 “UP”버튼을 통해 화면 상단으로 이동을 구현**. [이때 동적으로 생성된 컴포넌트에 Ref를 이용하여 스크롤을 구현](https://velog.io/@tkdgus8903/React-%EB%8F%99%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%83%9D%EC%84%B1%EB%90%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90-Ref%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%8F%99-%EA%B5%AC%ED%98%84).**
- ECharts를 사용하여 [팀 순위 그래프를 그리는 과정](https://velog.io/@tkdgus8903/React-Typescript-Apache-Echarts%EC%9D%98-Bump-ChartRanking-label%EA%B3%BC-tooltip%EC%97%90-%EC%9D%B4%EB%AF%B8%EC%A7%80image-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0)에서 이미지(팀로고)와 라벨(팀명)을 같이 렌더링 하며 공식문서의 중요성을 느꼈습니다. 그리고 이 과정에서 [해당로직을 분리해 클래스화 시켜](https://github.com/soccer-community-P-C/soccer-community-frontend/blob/main/src/utils/rank-graph-generate.ts) 가독성을 높이기 위해 노력했습니다.
- **협업을 하며 명확한 기능 정의와, 문서화, 커뮤니케이션의 중요성을 깨달았습니다.** 그러기 위해 Sheets로 문서화를 하며 통일된 개발을 노력했습니다. 명확한 요구를 위해 ‘**요청사항 - 근거 - 예시’의 구조**로 요청사항을 작성했습니다.
- [[코드]](https://github.com/soccer-community-P-C/soccer-community-frontend/blob/main/src/hooks/use-window-size.tsx) 화면의 크기를 조절할 때(반응형) **Debounce(디바운스)기법을 사용하여 리렌더링 횟수를 거의 **1회**로 단축**. 기존 useWindowSize는 화면을 조절하는 동안 컴포넌트를 불필요하게 리렌더링시켰습니다. 이를 방지하기 위해 디바운스 기법을 적용 하였고 스크롤이 끝난 후 최종 **1회**만 리렌더링 되어 효율적으로 커스텀 훅을 만들었습니다.

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

# 박상현

<div align="center">

  <h1>해외축구 커뮤니티</h1>

</div>

<!-- About the Project -->

## :star2: 배포 링크

<a href="https://soccer-community-p-c.netlify.app/">배포 사이트</a> : 서버비용 문제로 API연결이 안되어 있는점 양해부탁드립니다.
</br>
<a href="https://github.com/soccer-community-P-C/soccer-community-frontend">원본 github</a>
</br>
<a href="https://www.youtube.com/watch?v=qvDQwg68PJw">**유튜브 데모영상**</a>
</br>
## 기술 스택

<img width="566" alt="아키텍처1" src="https://github.com/user-attachments/assets/a57c295a-a9c6-4f56-b3b3-05358d2fad6e">

## 아키 텍쳐

<img width="566" alt="아키텍처1" src="https://github.com/user-attachments/assets/ecda7479-9127-4502-bc8b-395ad489b7f5">


## 프로젝트 개요

- 해외축구 일정, 결과 등을 보여주고, 게시판을 통해 커뮤니티 활동을 할 수 있는 웹 사이트. 반응형, 다크모드 구현.

### :dart: 특징

- **팀 프로젝트** - 백엔드2, 프론트엔드2 구성으로 깃허브와 코드 컨벤션을 통해 협업 진행
- 전체적인 UI Layout, 경기일정, 경기 상세정보, 선수페이지 구현
- **다크모드, 반응형** - 사용자 친화적인 UI 구현
- **문서 작성** - Google Sheets를 통해 기능, api 요청사항, 테스트 케이스 작성
- **Apache ECharts 도입** - Apache ECharts를 통해 매치데이별 팀 순위를 그래프 UI로 구현

## :grey_question: 개발하면서 고민한점

- React Query를 사용하는 api로직과 UI를 렌더링하는 컴포넌트의 분리. 이를 위해 React Query를 사용하는 [디렉토리](https://github.com/soccer-community-P-C/soccer-community-frontend/tree/main/src/api)에서 커스텀 훅을 구현해 **관심사 분리.**
- **사용자 편의를 위해 고민했습니다**. ‘[경기일정 페이지](https://soccer-community-p-c.netlify.app/premier/schedule)’에서 오늘 날짜에 해당하는 경기일정으로 스크롤 하거나 “UP”버튼을 통해 화면 상단으로 이동을 구현**. [이때 동적으로 생성된 컴포넌트에 Ref를 이용하여 스크롤을 구현](https://velog.io/@tkdgus8903/React-%EB%8F%99%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%83%9D%EC%84%B1%EB%90%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90-Ref%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%8F%99-%EA%B5%AC%ED%98%84).**
- ECharts를 사용하여 [팀 순위 그래프를 그리는 과정](https://velog.io/@tkdgus8903/React-Typescript-Apache-Echarts%EC%9D%98-Bump-ChartRanking-label%EA%B3%BC-tooltip%EC%97%90-%EC%9D%B4%EB%AF%B8%EC%A7%80image-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0)에서 이미지(팀로고)와 라벨(팀명)을 같이 렌더링 하며 공식문서의 중요성을 느꼈습니다. 그리고 이 과정에서 [해당로직을 분리해 클래스화 시켜](https://github.com/soccer-community-P-C/soccer-community-frontend/blob/main/src/utils/rank-graph-generate.ts) 가독성을 높이기 위해 노력했습니다.
- **협업을 하며 명확한 기능 정의와, 문서화, 커뮤니케이션의 중요성을 깨달았습니다.** 그러기 위해 Sheets로 문서화를 하며 통일된 개발을 노력했습니다. 명확한 요구를 위해 ‘**요청사항 - 근거 - 예시’의 구조**로 요청사항을 작성했습니다.
- [[코드]](https://github.com/soccer-community-P-C/soccer-community-frontend/blob/main/src/hooks/use-window-size.tsx) 화면의 크기를 조절할 때(반응형) **Debounce(디바운스)기법을 사용하여 리렌더링 횟수를 거의 **1회**로 단축**. 기존 useWindowSize는 화면을 조절하는 동안 컴포넌트를 불필요하게 리렌더링시켰습니다. 이를 방지하기 위해 디바운스 기법을 적용 하였고 스크롤이 끝난 후 최종 **1회**만 리렌더링 되어 효율적으로 커스텀 훅을 만들었습니다.

---

## ⌨ 화면 살펴보기

### 홈 화면 페이지
| 홈 페이지 |
|-------|
| <img width="554" alt="image" src="https://github.com/user-attachments/assets/d0ce7ff0-6516-4d93-b092-a7bce24268ab"> |

### 게시판 페이지
| 게시판  | 글쓰기  | 게시글 |
|------|------| ---|
| <img width="568" alt="image" src="https://github.com/user-attachments/assets/d7609dfb-7e24-4b13-87ff-abc569ce1cde"> | <img width="568" alt="image" src="https://github.com/user-attachments/assets/2aedf53f-ebb2-42f2-88a2-4c4e811cea5e"> | <img width="706" alt="image" src="https://github.com/user-attachments/assets/1a88eb03-88c6-4113-a920-659fc592afc5">|

### 경기 일정 페이지
| 경기일정 1                                                                                                              | 경기일정 2 | 팀선택|
|---------------------------------------------------------------------------------------------------------------------|--------|-|
| <img width="561" alt="image" src="https://github.com/user-attachments/assets/2042bec2-cece-495b-9787-9ba8b44f32db"> | <img width="737" alt="image" src="https://github.com/user-attachments/assets/113380b3-25e8-4407-842f-af04bd7cdeb1">   |<img width="554" alt="image" src="https://github.com/user-attachments/assets/428f894f-6b32-491d-896c-c286d45191a8">|

### 경기 상세 페이지
| 경기 상세 페이지 |포메이션 + 라인업|교체라인업|
|-----------|-----|--|
| <img width="562" alt="image" src="https://github.com/user-attachments/assets/7ec7b3e6-6c9a-4dad-9dd6-9f2a3dbd8f02">      |<img width="432" alt="image" src="https://github.com/user-attachments/assets/6cc1a94f-0791-4a59-8ed2-88f63d990f49">|<img width="374" alt="image" src="https://github.com/user-attachments/assets/1035fe28-7d9e-4d71-abaf-c7ad9ee776f0">|

### 선수 페이지
| 선수페이지                                                                                                               |
|---------------------------------------------------------------------------------------------------------------------|
| <img width="557" alt="image" src="https://github.com/user-attachments/assets/7f5c0c9c-a71e-4302-a15b-b7643c66e54d"> |

### 팀순위 페이지
| 팀순위  | 팀순위 그래프 | 그래프 호버 | 
|------|---------|--------|
| <img width="563" alt="image" src="https://github.com/user-attachments/assets/e6ba665b-a23f-4bb2-822c-37d1015cb697"> | <img width="553" alt="image" src="https://github.com/user-attachments/assets/29b83992-76a9-4775-b198-5a1544ca054c">   |<img width="587" alt="image" src="https://github.com/user-attachments/assets/47881825-0d0c-4364-b61d-0fc857591262"> |

### 다크모드
| 다크모드 |
|------|
| <img width="568" alt="image" src="https://github.com/user-attachments/assets/758261da-39d6-4dc6-9a7a-08479d0f6481"> |

### 모바일 
| 메인                                                                                                                  | 일정 + 상세 |
|---------------------------------------------------------------------------------------------------------------------|---------|
| <img width="575" alt="image" src="https://github.com/user-attachments/assets/d6166e23-c719-4af0-a2cb-4d9b67ab7b1b"> | <img width="578" alt="image" src="https://github.com/user-attachments/assets/a22df1b6-3472-419a-a7a4-11c94c64d9ad">    |

| 기록 + 포메이션 | 팀순위  |
|-----------|------|
| <img width="584" alt="image" src="https://github.com/user-attachments/assets/5732ab97-e0ad-4353-9464-70503c6156db">     | <img width="583" alt="image" src="https://github.com/user-attachments/assets/e6848fe0-a66c-4298-8489-d2c0fce62fc1"> |

# vue_todolist

## architecture

\*\* Ref: [bencodezen/vue-enterprise-boilerplate](https://github.com/bencodezen/vue-enterprise-boilerplate)

### assets

- 로고 등 Vue CLI를 통해 만들어진 자원

### components

- 전역적으로 사용되는 베이스 컴포넌트 모음 e.g. Header

### router

- Vue Router 활용

#### views

- 각각의 view들은 페이지 템플릿을 위해 최소 하나 이상의 라우트를 가진다.
- 보통 `src/router` 하위에 views 폴더와 동일한 위치에 `layouts` 폴더를 활용하여 레이아웃 및 기본 컴포넌트로 활용하지만 이번 프로젝트에서는 별도로 분리 않음

#### index.js

- Vue Router 초기화 및 라우트 설정
- 보통 `src/router` 하위에 `routes.js` 파일을 설정하여 라우트를 따로 관리하지만 이번 프로젝트에서는 별도로 분리 않음

### App.vue

- 루트 컴포넌트: router-view에 위임

### main.js

- 엔트리 포인트: Vue 인스턴스 생성 및 DOM 마운트

# 웹프레임워크1 시작하조 상상카페

## 실행환경 설정
필요한 모듈 설치하기(json-server는 global로)
```
npm install react
npm install react-dom
npm install react-scripts
npm install react-router-dom
npm install react-bootstrap bootstrap
npm install react-icons
npm install react-use-cart
npm install react-filter-search
npm install -g json-server
```
```
npm install react react-dom react-scripts react-router-dom react-bootstrap bootstrap react-icons react-use-cart react-filter-search
```
```
npm install -g json-server
```

## 실행 방법
관리자 권한 터미널 두 개 필요 (모두 sangsang-cafe 프로젝트 루트 디렉토리 밑에서 실행)
### 로컬 json 서버 실행
```
json-server --watch ./src/data/order_list.json --port 3001
```
json-server 실행 시 윈도우 실행정책 관련 오류 발생시 관리자 권한 powershell에서 아래 명령 실행
```
> Set-ExecutionPolicy RemoteSigned
> Y
```
### 리액트 앱 실행
```
npm start
```

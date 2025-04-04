# 이정윤 202130423
---
# 4월 3일 (5주차)

## Component 간 데이터 공유
https://ko.react.dev/learn   
참고 사이트   

### 예제 1

![image](https://github.com/user-attachments/assets/e0aa186c-7d9f-4d57-a614-f2536979c857)   
![image](https://github.com/user-attachments/assets/5e608c3c-46a3-459a-a6b3-e4ce11f77adf)   

onClick 함수를 사용하면 버튼을 눌렀을때 화면에 원하는 텍스트를 띄울 수 있다.   

### 예제 2
![image](https://github.com/user-attachments/assets/9a360ca5-952c-4f94-8389-9535823eb6a8)   
![image](https://github.com/user-attachments/assets/efb41dc6-e57c-48da-847d-55813d7b93b9)   

count 클릭 버튼 js를 만든 뒤 <count />를 여러번 넣으면 각각 객체를 따로 적용하여 화면에 띄울 수 있다.   
이 각각의 Component는 완전 개별의 함수로 작동하며 서로 데이터를 공유하지 않는다.   

### 예제3
![image](https://github.com/user-attachments/assets/9aecf2c9-290b-4d7f-bee8-3d9d81c85f30)   
![image](https://github.com/user-attachments/assets/b37ed913-bb5f-401c-aec3-b9ad2ce12d20)   

이렇게 state를 개별 버튼에서 모든 버튼이 포함된 가장 가까운 컴포넌트 "위쪽"으로 이동시킨 뒤   
props로 전달한다면 아까와 다르게 두 컴포넌트간의 데이터 공유가 가능해진다.

오늘은 이와같이 Component간의 데이터 공유를 하는 법과 개별로 적용하는 법에 대해 배웠다.

---
# 3월 27일 (4주차)

## Component의 생성 및 nesting(중첩)
https://ko.react.dev/learn   
참고 사이트   

### 예제 1

![image](https://github.com/user-attachments/assets/59e3e0fd-2b35-4914-a9e0-a856fabeec4c)   

먼저 npx create-react-app react-test 명령어를 이용해   
Working Directory 폴더를 생성해준다.   

![image](https://github.com/user-attachments/assets/6061b5ff-1c29-454e-9147-949113d69c90)   

그 후 App.js 파일에 간단한 코드를 작성한 후   
npm start 명령어를 사용하여 웹페이지를 띄워 잘 작동하는지 확인해주었다.   

### 예제 2

![image](https://github.com/user-attachments/assets/1c001118-63ae-4a0f-bef5-77c02dc99a3f)   
![image](https://github.com/user-attachments/assets/52e249ea-21ee-41d1-a5e4-589ece5a4d1b)   
![image](https://github.com/user-attachments/assets/c61cacb8-59e1-462d-8e7d-be8ab62ce88d)   

touch src/MyButton.js 명령어를 이용해 MyButton.js 파일을 생성한 뒤   
MyButton 코드를 옮겨 export default를 이용하여 import로 가져와 실행하였다.   
MyButton import 이름은 짧게 MyB로 바꿔줬다.   

### 예제 3
![image](https://github.com/user-attachments/assets/76cc89d2-dedb-4302-9517-9d7554d76072)   
![image](https://github.com/user-attachments/assets/693c1308-07cf-4ce6-9088-4ece14c20c11)   


touch src/ButtonLib.js 명령어를 이용해 ButtonLib.js 파일을 생성한 뒤   
버튼 3개를 만들어 넣어줬다.   

### 예제 4
![image](https://github.com/user-attachments/assets/73be6504-616c-419b-98ad-09c4dd8419a3)   
![image](https://github.com/user-attachments/assets/3c414022-7a05-4699-a38f-9c20209a5cdc)   


touch src/AboutPage.js 명령어를 이용해 AboutPage.js 파일을 생성한 뒤   
h1과 p 태그로 제목과 설명을 만들었다.

### 예제 5
![image](https://github.com/user-attachments/assets/1826c116-05e5-46da-a8a1-77bc50a8f990)   
![image](https://github.com/user-attachments/assets/71670718-3505-40ad-be80-a87b8d871958)   
![image](https://github.com/user-attachments/assets/e5023407-1656-47e1-b1e6-8dcb51abd1d2)   
![image](https://github.com/user-attachments/assets/f731eba3-2b46-4d54-b409-1f47d9e9eb56)   
![image](https://github.com/user-attachments/assets/64eb966f-a98a-4d66-8fd1-982bc51bbcf1)   

touch src/profile.js 명령어를 이용해 profine.js 파일을 생성한 뒤   
위 스프링 참조 사이트에서 코드를 가져와 이미지를 띄워주었다.   
또한 네모난 이미지를 둥글게 만들어주기 위하여   
touch src/profile.css 명령어를 이용해 profile.css 파일을 만들어 준 뒤      
import 하여 적용해주고, div로 App.css 안에 그리드를 이용해 모든 내용을   
센터로 옮겨주었다.   

오늘은 이와같이 React 예제를 하나 둘 따라해 보며 리액트의 개념을 익혔다.

---
# 3월 20일 (3주차)

## 리액트의 구조와 역할

#### node_modules/
새로 설치하는 패키지가 저장되는 폴더로 많은 양의 파일이 존재한다.   
git으로 관리하지 않기 때문에 폴더 이름이 흐릿하게 나와있다.   

#### public/
배포할 html, css, JavaScript가 보관되는 폴더이다.   

#### src/
React 프로젝트 내부에서 작성하는 거의 모든 파일들이 이 폴더 있으며   
파일들은 명령어에 따라 JS로 컴파일이 진행된다.   

#### .gitignore
git에 포함하고 싶지않은 파일의 이름 혹은 폴더를 입력하는 파일이다.   

#### package.json
프로젝트의 의존성 목록과 실행 스크립트가 포함된 파일로   
라이브러리들의 목록이 포함되어 있다.   

#### README.md
프로젝트를 설명하는 문서이다.   


## package.json의 의존성 관리
#### 의존성을 관리하는 이유
1. npm install 한 줄로 손 쉽게 모든 의존성을 자동 설치할 수 있다.   
2. 팀원들과 같은 라이브러리 버전을 유지할 수 있다.
3. 필요없는 라이브러리를 제거하여 중복 설치를 방지할 수 있다.

#### package.json의 의존성 종류
##### dependencies   
실제 코드에서 사용하는 라이브러리
##### devDependencies
개발할 때만 필요한 라이브러리
##### peerDependencies
필요하지만 직접 설치하지 않고 사용자에게 설치를 맡길때 쓰는 라이브러리
##### optionalDependencies
선택적 의존성 라이브러리

## package.json과 package-lock.json의 차이
#### package.json
패키지 설치, 배포, 의존성 등에 대한 정보를 가지고 있는 파일
#### package-lock.json
패키지의 정확한 버전과 의존성 트리를 정확하게 기록한 파일

## node module 재설치 하는법
#### rm -rf node-modules package-lock   
명령어로 node modules 폴더와 package-lock.json 파일을 삭제할 수 있다.   

#### npm cache clean --force
명령어로 cache를 초기화 할 수 있다.

#### npm install
파일과 캐시 정리가 끝났다면 패키지를 다시 설치한다.

## React component
![image](https://github.com/user-attachments/assets/cb7ede1c-33e2-4d80-989e-8fce3417844b)   

위 화면은 https://ko.react.dev/ 사이트의 리액트 예제코드이다.   
React component는 데이터를 수신하고 화면에 표시해야 하는 내용을 반환한다.
사용자의 입력을 통해 새로운 데이터를 componect에 전달 할 수도 있다.

오늘은 이와같이 React를 써야하는 이유와 구조와 역할에 대해 배웠다.

---
# 3월 13일 (2주차)

## git의 기본적인 명령어들과 사용법   


![image](https://github.com/user-attachments/assets/d326a9e3-d094-4aeb-b9c8-ab52dec4706c)   

git init 명령어를 이용해 .git 폴더를 생성할 수 있다.   
만약 지우고 싶을때는 rm - rf .git 명령어를 이용해 지울 수 있다.   

![image](https://github.com/user-attachments/assets/bbf0942e-b4b7-4365-b6a2-e0e8f0caa701)   

git config user.name "사용할 이름"   
git config user.email "사용할 이메일"   
명령어를 이용해 초기 유저 설정을 할 수 있다.   

자신이 설정한 이름과 이메일을 보고 싶다면   
git config user.name   
git config user.email   
git config list    
명령어를 이용해 확인할 수 있다.   

   git config list 명령어에서 빠져나오고 싶다면 Q 를 누르면 된다.

![image](https://github.com/user-attachments/assets/d7faa38d-82dc-4860-b36c-36ab318f1bec)   

npx -v, npm -v, node-v 등의 명령어를 사용해   
현재 node.js의 버전을 확인 할 수 있다.      


![image](https://github.com/user-attachments/assets/aab60ae2-9e25-4b3b-ac13-ffb430c0516d)   

npx create-react-app "프로젝트명" 명령어를 사용해 사용할 Working Directory 폴더를 생성할 수 있다.     



![image](https://github.com/user-attachments/assets/0608918a-c92f-4b2c-a4eb-13139fdcddea)   

Happy Haking!이 뜬다면 정상적으로 폴더를 생성한 것을 확인할 수 있다.   
   

![image](https://github.com/user-attachments/assets/628fdd36-f97b-431b-9c11-ad5aa1b9b830)   

npm start 명령어를 사용하면 서버를 실행시켜 위와 같이 브라우저에 프로젝트를 띄울 수 있다.   
만약 서버를 중지 시키고 싶다면 ctrl + c를 이용해 중지시킬 수 있다.

![image](https://github.com/user-attachments/assets/2de289b3-ac7e-40f7-9cef-2f6083c8b2a7)   

git remote add "사용하고 싶은 별칭" "push할 깃헙 주소"   
명령어를 이용해 push할 깃헙 주소를 변경할 수 있다.   
변경한 주소를 확인하고 싶다면   
git remote -v 명령어를 통해 확인할 수 있다.   

git push -u "자신이 설정한 별칭" "브랜치명"   
명령어를 이용해 폴더를 push하여 깃헙에 저장할 수 있다.   

만약 버그가 생기거나 강제로 push할 일이 생겼다면   
git push -u "자신이 설정한 별칭" +"브랜치명"   
위 명령어와 같이 + 를 넣는것으로 강제 push 할 수 있다.

## node.js를 쓰는 이유와 장단점


node.js는 빠른성능과 V8 엔진 기반으로 고성능 처리가 가능하며   
프론트엔드와 백엔드를 같은 JavaScript로 개발이 가능하다   
또한 npm을 통해 300만개가 넘는 JavaScript 라이브러리 사용, 즉 다양한 패키지 사용이 가능하다.   

이렇게 좋은 서비스지만 단점또한 존재한다.   
싱글 스레드 기반이라 멀티스레딩 성능이 부족하며 심각한 보안 문제가 자주 발생하기도 한다.   

예를 들면 작년에 있던 사건 중 하나로 한 개발자가 npm 라이브러리를 매번 설치하는게 귀찮다는 이유로   
300만개의 라이브러리를 전부 의존시켜 하드디스크에 한번에 다운하는 코드를 만든적이 있는데   
그 여파로 npm에 올라온 모든 라이브러리의 삭제가 불가능한 버그가 생겨버렸다.   
npm은 내 라이브러리를 누가 의존중이면 삭제가 불가능한 정책이 있기 때문이었다.   
나중에 고쳐지긴 했지만 낚시용 가짜 악성 라이브러리들도 돌아다니기에   
npm의 보안 문제는 당분간 자주 발생할 것으로 보인다.   

오늘은 이와같이 node.js와 깃헙을 사용하는 방법에 대해 배웠다.   

---


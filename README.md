  # 3월 13일 (2주차)

  ---

### Git 최초 설정하는법 

git을 다운로드 후 git bash에 들어가서

git init 명령어로 .git 폴더를 생성할 수 있다.

![image](https://github.com/user-attachments/assets/47de5616-1eae-450a-9478-c708efb540e6)


생성한 .git폴더를 지우고 싶다면
rm - rf .git
명령어를 이용해 지울 수 있다.


git config user.name "username"

git config user.email "useremail.gmail.com"

의 명령어로 으로 최초 유저 설정을 할 수 있다.

![image](https://github.com/user-attachments/assets/fa8b7ed1-3912-41e6-91ba-62c61ab74bd7)


git config user.name

git config user.email

의 명령어로 설정한 유저 name과 email을 확인할 수 있다.

또한 .global를 추가해 정보를 custom하게 전역설정하여 사용할 수 있다.

git config --list
명령어를 통해 git 설정을 확인할 수 있으며 나가고 싶다면 Q 를 눌러 명령어에서 나갈 수 있다.

![image](https://github.com/user-attachments/assets/5401db62-6bdb-4dc7-a8bf-1949705f276a)




### node.js를 이용하여 React 개발환경 구축하기

node js를 다운한 후

npx -v

npm -v

node -v

명령어로 node와 npm 설치 버전 확인한다.
버전이 뜬다면 성공적으로 설치된 것이다.

![image](https://github.com/user-attachments/assets/d126c600-193b-442e-a103-7468a2bbb43e)



### React Projcet 만들기

npx create-react-app react-1
명령어를 이용해 내가 사용할 working directory를 만들 수 있다.
![image](https://github.com/user-attachments/assets/cd6c67e6-67a9-4351-8f39-fe63d17e7ea0)
이와 같이 Happy hacking! 이 나온다면 디렉토리가 성공적으로 생성됬다는 의미이다.

폴더를 만들었다면 (Ctrl + K + O) 단축키를 사용해 만든 프로젝트 폴더를 연 뒤
npm start
명령어를 이용하여 프로젝트의 초기 화면이 웹 브라우저를 통해 나타낼 수 있다.


오늘은 이와 같이 git을 설치하고 . git 폴더를 만들어 git을 사용하는 방법에 대해 배웠다
node js를 설치하고 프로젝트를 만들어 리액트 화면도 출력할 수 있게 되었다.










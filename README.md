# 이정윤 202130423
---
# 4월 18일 (9주차)
https://ko.react.dev/learn/tutorial-tic-tac-toe   
참고 사이트   

## state 한번 더 끌어올리기
```js
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];
```
Board 컴포넌트 대신 Game 컴포넌트를 선언하고 최상위 컴포넌트로 사용하도록 지시했다.   
현재 플레이에 대한 square를 렌더링하려면 history에서 마지막 squares의 배열을 읽어야한다.   
또한 [Array(9).fill(null)]은 단일 항목배열이기에 9개의 null 배열이라는 뜻이다.   
렌더링 중에 게산할 수 있는 충분한 정보가 이미 있기에 useState는 필요없다.   
 

```js
  function handlePlay(nextSquares) {
    // TODO
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
  )
}
```
게임을 업데이트할 때 호출할 handlePlay 함수를 만든 후   
xIsNext , currentSquares , handlePlay 를 Board 컴포넌트에 props로 전달할 수 있도록 만들었다.   
게임이 다시 작동하게 하려면 Game 컴포넌트에 handlePlay 함수를 구현하여야 한다.   
handlePlay 함수는 더 이상 호출할 수 있는 setSquares 함수가 없기에,   
이 정보를 저장하기 위해 history state 변수를 만들어 사용한다.   
또한 squares 배열을 history 항목으로 추가해서 업데이트한 뒤 xIsNext 값을 반전시켰다.   

```js
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
```
Board 컴포넌트를 xIsNext, squares, 그리고 플레이어가 움직일 때마다 Board가 업데이트된   
사각형을 배열로 호출할 수 있는 새로운 onPlay 함수를 props로 받도록 변경하였다.   
이제 Board 컴포넌트의 handleClick에 있는 setSquares 및 setXIsNext 호출을    
새로운 onPlay 함수에 대한 단일 호출로 대체함으로써 사용자가 사각형을 클릭할 때    
Game 컴포넌트가 Board를 업데이트할 수 있게 된다.   
원래는 setSquares를 호출했지만, 이제는 업데이트된 squares 배열을 onPlay로 전달된다.  

## JS의 전개구문

```js
  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
```
history 앞에 있는 ...은 history에 있는 모든 항목을 포함하는 새 배열을 만들고   
그 뒤에 nextSquares를 만드는 전개구문이다.   
예를 들어 history가 [[null,null,null], ["X",null,null]]이고,   
nextSquares 가 ["X",null,"O"]라면 새로운 [...history, nextSquares] 배열은   
[[null,null,null], ["X",null,null], ["X",null,"O"]]이 되게 된다.    

## 과거 움직임 보여주기 및 map 메서드
```js
[1, 2, 3].map((x) => x * 2) // [2, 4, 6]
```
JS에서 한 배열을 다른 배열로 변환할려면 위와 같은 map 메서드를 이용하면 된다.   
```js
  function jumpTo(nextMove) {
    // TODO
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
```
React에서 여러 엘리먼트를 렌더링하려면 React 엘리먼트 배열을 사용할 수 있다.   
이미 state에 이동 history 배열이 있기 때문에 이것을 React 엘리먼트 배열로 변환해야한다. 
map을 이용해 history를 화면의 버튼을 나타내는 React 엘리먼트로 변환하고,   
과거로 이동할 수 있도록 onClick 버튼을 만들어 옆에 띄워준다.   








하지만 이런식으로 코드를 짠다면
```
Each child in a list should have a unique "key" prop.
```
이와 같은 형태로 



---
# 4월 17일 (7주차)

https://ko.react.dev/learn/tutorial-tic-tac-toe   
참고 사이트

## 화살표 함수
```js
  return(
    <>
    <div>
      <div className="board-row">
        
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
    </>
  )
}
```
위 코드에서 () => handleClick(0) 라는 문법은 화살표 함수라는 문법으로,   
=> 뒤의 코드가 실행되게 만들어 함수를 짧게 만들 수 있는 문법이다.   


## 불변성이 중요한 이유
1. 복잡한 기능을 훨씬 쉽게 구현할 수 있다.   
예를 들어 우리가 만드는 틱택토의 경우 뒤로 돌아가기 기능을 추가할 예정인데,   
직접적인 데이터 변경을 피하면 이전 데이터를 그대로 유지하여 나중에 "재사용"할 수 있다.   

2. 부모 컴포넌트의 state가 변경되면 모든 자식 컴포넌트가 자동으로 다시 렌더링 된다.   
트리의 영향을 받지 않는 부분의 리렌더링은 피하는것이 좋기 때문에 불변성을 사용하면   
데이터 변경 여부를 저렴한 비용으로 판단할 수 있다.   

## 순서 정하기

틱택토를 클릭할때마다 다음 플레이어를 결정하기 위해서 xIsNext가 반전되어 state에 저장된다.   
이때, handleClick 함수를 업데이트해서 xIsNext의 값을 반전시키기 위해
```js
if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setXIsNext(!xIsNext);
}
```
위와 같이 if문을 사용해서 각각 플레이어에 따라 X와 O를 번갈아 출력하도록 할 수 있다.   
하지만 이와 같은 경우 X가 O를 O가 X를 덮어씌우는 문제가 발생해버린다.    
그렇기에    
```js
  if (squares[i]) {
    return;
  }
```
이미 채워져 있는 보드를 업데이트 하기전에 handleClick 함수에   
미리 return을 해준다면 덮어씌우는 문제가 사라지고   
X 또는 O만 추가할 수 있다.   

## 승자 결정하기
```js
function handleClick(i) {
  if (squares[i] || calculateWinner(squares)) {
    return;
  }

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```
게임의 승자를 결정하기 위해서 9개의 사각형 배열을 가져와서 승자를 확인하고   
적절하게 X , O, 또는 null을 반환하는 도우미 함수 calculateWinner 만들었다.   
Board 컴포넌트의 handleClick 함수에서 calculateWinner를 호출하여 플레이어가   
Winner인지 아닌지 확인한다. 또한 사용자가 X, 0 사각형을 클릭했는지 확인하기 위해,    
함수를 모두 return 하여 조기 반환하도록 추가하였다.   

```js
export default function Board() {
  // ...
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

 return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        // ...
  )
}
```
승자를 결정하는 코드를 만들었다면 화면에 누가 이겼는지도 제대로 알려야한다.   
Board 컴포넌트에 status 구역을 추가해서 이겼다면 Winner: O 또는 Winner: X를 표시하도록   
코드를 추가한다.   
또 누가 차례였는지 헷갈릴 수 있기에 똑같이 Next Player : O 또는 Player : X를 표시하도록   
status를 div로 넣어주었다.

## state 한번 더 끌어올리기
```js
export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
```
Board 컴포넌트의 이름을 Game 컴포넌트로 바꾼 뒤,   
Game 컴포넌트를 최상위 컴포넌트로 사용하도록 바꾸어주었다.   


오늘은 이렇게 틱택토 프로그램의 순서를 정하고 승자를 결정하는 코드를 완성했다.   

---
# 4월 10일 (6주차)

## Props를 통해 데이터 전달하기
https://ko.react.dev/learn/tutorial-tic-tac-toe    
참고 사이트   

## 예제 1

![image](https://github.com/user-attachments/assets/09b10b08-61b1-413e-ada1-6e8c4ca2f4d3)

Square 컴포넌트를 Board에서 전달할 prop value를 읽도록 만들어주면   
지저분하고 중복된 코드를 피할 수 있다.

## 예제 2

![image](https://github.com/user-attachments/assets/fd52ac61-5921-46b8-bc91-0610facf3876)   

handleClick 함수와 onClick 함수를 추가하여 틱택토 화면을 클릭하면   
콘솔에 clicked! 로그가 뜨도록 코딩해주었다.

## 예제 3

![image](https://github.com/user-attachments/assets/f14376b1-71a2-4c19-aca7-c0d9da65ecb7)   


useState 함수를 이용해서 Square의 값을 저장하고 클릭되면 "X가 출력되게 만들어줬다.
그렇기 때문에 Props은 더 이상 Square에서 사용하지 않으므로 value 값은 삭제해주었다.

## state 끌어올리기 

## 예제 4

![image](https://github.com/user-attachments/assets/f82b1170-b28f-4867-842a-e5390ac92151)   
![image](https://github.com/user-attachments/assets/c3aafe28-db81-4451-9889-34ddb1a39d05)   
![image](https://github.com/user-attachments/assets/99c35674-f892-43b1-a990-7f456bd63ee5)   


App.js, Board.js, Square.js를 각각 생성해 컴포넌트를 옮겨준 뒤,   
Board 컴포넌트에서 각 value prop를 받을 수 있도록 Square 컴포넌트를 수정한 뒤,   
handleClick 함수를 정의하여 보드의 state를 담고 있는 squares 배열을 업데이트해주었다.
그리고 handleClick 함수에 인덱스를 나타내는 인수 i를 추가한 뒤 
() => 문법을 사용해서 handleClick(0)을 각각 출력해 주었다.





---
# 4월 3일 (5주차)

## Component 간 데이터 공유
https://ko.react.dev/learn   
참고 사이트   

## onClick 함수와 alert

```js
export default function MyButton() {
  function handleClick() {
    alert('Hello world');
  }

  return (
    <button onClick={handleClick}>
      I'm MyButton
      </button>
  );
}
```
onClick 함수는 클릭했을때 이벤트를 일으킬 수 있는 함수이다.   
위 코드를 보면 버튼에 onClick 함수를 이용하여 버튼을 클릭했을때,   
이벤트를 발생하게 하였고 함수 이름을 handleClick 정의해 그 함수 안에 alert라는   
js에서 알림창을 띄울 수 있게 해주는 코드를 이용하여 버튼을 클릭하면 Hello world라는   
알림창이 나오게 할 수 있다.

## useState와 Component 각각 적용하기
```js
import { useState } from 'react';

export default function CountState() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    </div> 
  );
}
```
useState는 컴포넌트에 state 변수를 추가할 수 있는 React Hook이다.   
[count, setCount]와 같이  state 변수의 이름을 지정하는 것이 규칙이며,    
첫번째는 state 변수의 현재 state로, 처음에 제공한 초기 state로 설정된다.   
두 번째는 상호작용에 반응하여 다른 값으로 변경할 수 있는 set 함수이다.   
useState를 사용해 count 변수를 만들어주었고, 클릭할때마다 카운트 +1 이 되도록   
코드를 만들었다.   


count를 클릭할때마다 
```js
import Count from './CountState'
export default function App() {
  }

  return (
      <div>
        <h1>Updating the screen</h1>
        <Count />
        <Count />
        <Count />
      </div>
```
<count />를 여러번 넣으면 각각 객체를 따로 적용하여 화면에 띄울 수 있다.   
이 각각의 Component는 완전 개별의 함수로 작동하며 서로 데이터를 공유하지 않는다.   

## 완성된 코드
```js
import { useState } from 'react';

import MyB from "./MyButton"
import { Button1, Button2, Button3 } from "./ButtonLib"
import AP from "./AboutPage"
import Profile from "./profile"
import Splist from './Shoppinglist'
import Count from './CountState'

import './App.css'


function CountState2({count, onClick}) {
  return (
    <div>
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    </div>
    );
  }




export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="wrapper">
      <h1>Welcome to my app</h1>
      <div>
      <p>default export example</p>
      <MyB />
      <p>named export example</p>
      <Button1 /><br />
      <Button2 />&nbsp;
      <Button3 />
      <p>wrapping example</p>
      <AP />
      <p>Displaying data</p>
      <Profile />
      <p>Rendering lists</p>
      <Splist />
      </div>

      <div>
        <h1>Updating the screen</h1>
        <Count />
        <Count />
        <Count />

        <p>Sharing data between components</p>
        <CountState2 count={count} onClick={handleClick} />
        <CountState2 count={count} onClick={handleClick} />
      </div>
</div>
    
  ) 
}
```

이렇게 state를 개별 버튼에서 모든 버튼이 포함된 가장 가까운 컴포넌트 "위쪽"으로 이동시킨 뒤   
props로 전달한다면 아까와 다르게 두 컴포넌트간의 데이터 공유가 가능해진다.   
이때 props이란 부모 컴포넌트로부터 자식 컴포넌트로 전달할 수 있는 사용자 정의 속성이다.   
컴포넌트 내부에서 관리되며 시간이 지남에 따라 변경될 수 있는 상태와 달리   
props는 자식 컴포넌트의 관점에서 불변이다.

## Props와 State 비교하기

### Props
props는 데이터와 이벤트 핸들러를 부모로부터 자식 컴포넌트로 전달하는 데 사용되며 단방향 데이터 흐름을 설정하며,   
부모에 의해 설정되며 자식 컴포넌트에 의해 변경되지 않는다.

### State
State는 컴포넌트 내부의 것으로 동작과 렌더링을 제어한다.   
props와 달리 상태는 가변적이며 보통 사용자의 행동이나 시스템 이벤트에 응답하여 시간이 지남에 따라 변할 수 있다.


오늘은 이와같이 Component간의 데이터 공유를 하는 법과 개별로 적용하는 법에 대해 배웠다.

---
# 3월 27일 (4주차)

## Component의 생성 및 nesting(중첩)
https://ko.react.dev/learn   
참고 사이트   

## Component 생성 및 js의 태그 사용법

```bash
npx create-react-app react-test
```

프로젝트를 시작하기 전에 위 명령어를 git bash에 입력해      
Working Directory 폴더를 생성해준다.   

```js
function MyButton() {
  return (
    <button>
      I'm MyButton
    </button>
  )
}

export default function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <MyButton />
    </div>
  )
}  
```

그 후 App.js 파일에 Hello, React 라는 글자와 MyButton이라는 함수를 불러와   
글자 밑에 I'm MyButton이라는 버튼이 보이도록 웹사이트를 만들어 주었다.   
주의점이 있는데 return()안에 있는 코드들은 div태그 밖에 div태그를 따로 두지 못하기 때문에   
항상 div태그안에 다른 태그들을 다 넣어서 사용하던가, 하나의 태그를 사용하여야한다.

## import와 정의 방법

```bash
touch src/MyButton.js
```
```js
import MyB from "./MyButton"

export default function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <MyB />
    </div>
  );
}
```
```js
export default function MyButton() {
return (
    <button onClick={handleClick}>
      I'm MyButton
      </button>
  );
}
```
touch src/MyButton.js 명령어를 Git Bash에 입력해 MyButton.js 파일을 생성한 뒤   
MyButton 코드를 옮겨 export default를 이용하여 import로 가져왔다.   
여기서 주의할 점은 MyButton import 이름은 항상 "대문자"로 시작하여야하며,   
이름을 마음대로 지을 수 있지만 알기 쉽게 짓는것이 좋다.   

### import를 한번에 여러개 선언하기
```js
import MyB from "./MyButton"
import { Button1, Button2, Button3 } from "./ButtonLib"
export default function App() {
  return (
  <div>
  <h1>Hello, React!</h1>
  <MyB />
  <Button1 /><br />
  <Button2 />&nbsp;
  <Button3 />
  </div>

  )
}
```
```js
function Button1() {
  return (
    <button>Button1</button>
  );
}

function Button2() {
  return (
    <button>Button2</button>
  );
}

function Button3() {
  return (
    <button>Button3</button>
  );
}

export { Button1, Button2, Button3 }
```


ButtonLib.js 파일을 생성한 뒤 import를 통해 파일을 불러와 준다.   
그 후 각각 Button1, Button2, Button3 함수를 만들어 버튼 3개를 만들어 화면에 출력할 수 있다.   
아까 설명했듯이 import 이름을 정의할때는 항상 맨 앞의 이름은 대문자여야 한다.   


### 완성된 코드
```js
import MyB from "./MyButton"
import { Button1, Button2, Button3 } from "./ButtonLib"
import AP from "./AboutPage"
import Profile from "./profile"
import './App.css'

export default function App() {
  return (
    <div className="wrapper">
      <h1>Hello, React!</h1>
      <MyB />
      <Button1 /><br />
      <Button2 />&nbsp;
      <Button3 />
      <AP />
      <Profile />
      <Splist />
      </div>
  )
}
```
```js
import './profile.css'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

```
![image](https://github.com/user-attachments/assets/64eb966f-a98a-4d66-8fd1-982bc51bbcf1)   


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


```bash
git init
```
```bash
rm -rf.git
``` 

git init 명령어를 이용해 .git 폴더를 생성할 수 있다.   
만약 지우고 싶을때는 rm - rf .git 명령어를 이용해 지울 수 있다.   



```bash
git config user.name lightglow
```
```bash
git config user.email sk40408981@gmail.com
```
```bash
git config user name
```
```bash
git config user.email
``` 


git config user.name "사용할 이름"   
git config user.email "사용할 이메일"   
명령어를 이용해 초기 유저 설정을 할 수 있다.   

자신이 설정한 이름과 이메일을 보고 싶다면   
git config user.name   
git config user.email   
git config list    
명령어를 이용해 확인할 수 있다.   

git config list 명령어에서 빠져나오고 싶다면 Q 를 누르면 된다.

```bash
npx -v
```
```bash
npm -v
```
```bash
node -v
``` 


npx -v, npm -v, node-v 등의 명령어를 사용해   
현재 node.js의 버전을 확인 할 수 있다.      


```bash
npx create-react-app react-1
```

npx create-react-app "프로젝트명" 명령어를 사용해 사용할 Working Directory 폴더를 생성할 수 있다.     



![image](https://github.com/user-attachments/assets/0608918a-c92f-4b2c-a4eb-13139fdcddea)   

Happy Haking!이 뜬다면 정상적으로 폴더를 생성한 것을 확인할 수 있다.   
   

![image](https://github.com/user-attachments/assets/628fdd36-f97b-431b-9c11-ad5aa1b9b830)   

npm start 명령어를 사용하면 서버를 실행시켜 위와 같이 브라우저에 프로젝트를 띄울 수 있다.   
만약 서버를 중지 시키고 싶다면 ctrl + c를 이용해 중지시킬 수 있다.

```bash
git remote add light https://github.com/react-1
```
```bash
git remote -v
```


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



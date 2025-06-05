# 이정윤 202130423
---
# 6월 5일 (14주차)
https://ko.react.dev/learn/build-a-react-app-from-scratch    
참고 사이트

## 2단계 : 페이지 어디에서든 React 컴포넌트 렌더링하기



---
# 5월 29일 (13주차)
https://ko.react.dev/learn/build-a-react-app-from-scratch    
참고 사이트

### 애플리케이션 성능 개선

* 선택한 빌드 도구는 단일 페이지 앱(SPA)만 지원하기에
  - 서버 사이드 렌더링(SSR) : SSG와 유사하지만 매 요청 시 서버에서 정적 페이지 생성
  - 정적 사이트 생성(SSG) : 빌드 시 한 번에 모든 정적 페이지 생성
  - React 서버 컴포넌트(RSC) : 서버에서 동작하는 컴포넌트로 DB 접근 등이 가능와 같은     
    다른 **렌더링 패턴**을 구현해야 한다

1. 단일 페이지 앱(SPA)은 **단일 HTML 페이지를 로드**하고, 사용자가 앱과 **상호작용할 때 페이지를      
   동적으로 업데이트**한다.
   - SPA는 시작하기 쉽지만 **초기 로드 시간이 느리다.**
   - SPA는 대부분의 **빌드 도구에서 기본 아키텍처로 사용**한다.
2. 스트리밍 서버 측 렌더링(SSR)은 서버에서 페이지를 렌더링하고 **완전히 렌더링된 페이지를     
   클라이언트로 전송**한다.
   - SSR은 성능을 향상시킬 수 있지만, 단일 페이지 앱보다 **설정 및 유지 관리가 더 복잡**할 수 있다.
   - 특히 **스트리밍 기능이 추가**되면 SSR은 설정 및 유지 관리가 매우 복잡해질 수 있다.
3. 정적 사이트(SSG)은 **빌드 시점에 앱의 모든 정적 HTML 파일을 생성**한다
   - SSG는 **성능을 향상시킬 수**있지만, 서버측 렌더링(SSG)보다 **설정 및 유지관리가 더 복잡**할 수 있다.
4. React Server Components(RSC)를 사용하면 **빌드 타임, 서버 전용, 인터랙티브 컴포넌트**를 단일        
   **React 트리에 포함**할 수 있다.
   - RSC는 **성능을 향상**시킬 수 있지만, 현재 **설정 및 유지 관리에 대한 전문 지식이 필요**하다.

* 렌더링 전략은 **라우터와 통합**되어야 프레임워크로 빌드된 앱이 **경로별로 렌더링 전략을 선택**할 수 있다.
* **앱 전체를 다시 작성하지 않고도 다양한 렌더링 전략을 사용**할 수 있다.
* 앱의 **랜딩 페이지는 정적으로 생성되는 SSG(정적 생성) 방식이 유리**할 수 있지만,      
  **콘텐츠 피드가 있는 페이지는 서버 측 렌더링이 가장 효과적**일 수 있다.

- 콘텐츠 피드란, 사용자들이 **자주 업데이트 되는 콘텐츠**를 쉽게 받아볼 수 있도록 제공되는     
   데이터 형식 또는 스트림이다.
- 소셜 미디어, 웹사이트, 앱 등 다양한 플랫폼에서 **사용자들이 관심 있는 정보를 실시간**으로      
  확인하고 소통할 수 있도록 도와주는 역활을 한다.

* **올바른 경로에 적합한 렌더링 전략**을 사용하면
  - 콘텐츠의 첫 바이트를 로드하는 데 걸리는 시간(첫 번째 바이트까지의 시간),
  - 콘첸츠의 첫 번쨰 부분을 렌더링하는 데 걸리는 시간(첫 번째 콘텐츠 페인트),
  - 앱에서 가장 큰 표시 콘텐츠를 렌더링하는 데 걸리는 시간(가장 큰 콘텐츠 페인트)을 **줄일 수 있다.**
 


## 기존 프로젝트에 React 추가
* 기존 프로젝트에 **인터랙티브 기능을 추가**하고 싶다면, **React로 프로젝트를 다시 작성할 필요는 없다.**
  - 인터랙티브 기능이란, 사용자와 시스템 간의 **상호 작용**을 가능하게 하는 기능이다.
* **기존 스택에 React를 추가**하고 어디에서나 인터랙티브 React 컴포넌트를 렌더링하자

### 기존 웹사이트의 전체 하위 경로에 React 사용
* Rails와 같은 **다른 서버 기술로 구축 한 기존 웹 앱(example.com)**이 있고,        
  **example.com/some-app/로 시작하는 경로가 있다고 가정하고, 이것으로 시작하는 모든 경로를          
  React로 완전히 구현하고 싶다고 가정해보자**

1. **React 기반 프레임워크 중 하나를 사용**하여 앱의 **React 부분을 빌드**한다.
2. 프레임워크 설정에서 **기본 경로를 /some-app로 지정**한다
3. /some-app/ 하위의 모든 요청이 React 앱에서 처리 되도록 **서버나 프록시를 설정**한다.
* React 부분에 해당 **프레임워크에 포함된 모범 사례**의 장점을 활용할 수 있다.
* 많은 **React 기반의 프레임워크**는 **풀스택**이며, React 앱이 **서버를 활용**할 수 있도록 한다.
* 그러나 **서버에서 자바스크립트를 실행할 수 없거나,** **실행하고 싶지 않은 경우**에도          
  동일한 접근 방식을 이용할 수 있다.
  - HTML/CSS/JS 내보내기를 /some-app/에서 대신 제공하면 된다.


## 기존 페이지의 일부분에 React 사용하기
* 이미 **다른 기술**(Rails와 같은 서버 기술 또는 Backbone과 같은 클라이언트 기술)로        
  **빌드된 기존 페이지**가 있고, 해당 **페이지 일부에서 상호작용**할 수 있는 React 컴포넌트를 렌더링하고      
  싶다고 가정하자
* 이 것은 **React 컴포넌트를 통합하는 일반적인 방식**이다.

1. **JSX 구문을 사용**할 수 있게 자바스크립트 환경을 설정하고, import / export 구문을 통해       
   **코드를 모듈로 분리**한 다음, **npm 패키지** 레지스트리의 패키지(예시: React)를 사용한다.
2. 해당 페이지에서 **원하는 위치에 React 컴포넌트를 렌더링**한다.

## 1단계 : 모듈 자바스크립트 환경 설정하기
* **모듈 자바스크립트 환경**은 모든 코드를 한 파일에 작성하는 것이 아닌, **각각의 React 컴포넌트를             
  개별 파일로 작성**할 수 있게 한다.
* 또한 (React 자체를 포함한) 다른 개발자들이 **npm 레지스트리에 배포한 훌륭한 배키지들을 모두 사용**할 수 있다.

1. 이미 애플리케이션이 import 문을 이용해 **파일로 분리하고 있다면,** **기존에 가지고 있는 설정을 이용**하자
   - JS 코드에서 **<div />를 작성하면 문법 오류가 발생하는지 확인**한다.
   - 문법 오류가 발생한다면 **Bable을 이용한 자바스크립트 코드 변환이 필요**할 수 있으며, JSX를 사용하려면        
      **Bable React 프리셋을 활성화**해야 할 수 있다.
2. 애플리케이션이 자바스크립트 모듈을 컴파일하기 위한 **기존 설정이 없다면** **Vite**를 이용하여 설정한다.
   - Vite 커뮤니티는 Rails, Django, Laravel을 포함한 다양한 **백엔드 프레임워크와의 통합을 지원**하고 있다.
   - 사용 중인 **백엔드 프레임워크가 목록에 없다면 Vite 빌드를 백엔드와 수동으로 통합**한다.
  
   - 설정이 제대로 동작하는지 확인하려면 프로젝트 폴더에서 아래 명령어를 실행한다.
```bash
npm install react react-dom
```



오늘은 애플리케이션의 성능을 개선하고 기존 프로젝트에 React를 추가하여 React를 사용하는 방법에 대해       
배웠다.

---
# 5월 22일 (12주차)
https://ko.react.dev/learn/installation   
https://ko.react.dev/learn/creating-a-react-app   
https://ko.react.dev/learn/build-a-react-app-from-scratch    
참고 사이트

## 프로젝트에 도입하기 (Installation)
React는 **점진적으로 적용할 수 있도록 설계**되어, **필요한 만큼 React를 사용**할 수 있다.   
React로 **간단한 HTML 페이지에 약간의 상호작용을 추가**하거나, **복잡한 React 기반의 앱**을    
만들고자 하는 경우 사용하면 좋다.     

단순히 React를 사용하고 싶다면 local에서 Node.js만 설치하면 되지만,     
설치하지 않아도 위 사이트에서 온라인 코드 샌드박스를 사용하면 쉽게 React를 체험해 볼 수 있다.   
위 사이트가 아니여도 RCodeSandbox, StackBlitz, CodePen 등의 온라인 샌드박스에서 React를 지원한다.   

## 새로운 React 앱 만들기
React로 앱이나 웹사이트를 구축할려면 **프레임워크 부터 시작하는 것**이 좋다.

### 풀스택 프레임워크
권장 프레임워크는 프로덕션에서 앱을 배포하고 확장하는 데 필요한 모든 기능을 지원한다.   
최신 React 기능을 통합하고 React의 아키텍처를 활용하며, **풀스택 프레임워크에는 서버가 필요하지 않다.**   
이 페이지의 모든 프레임워크는 클라이언트 측 렌더링(CSR), 단일 페이지 앱(SPA), 정적 사이트 생성(SSG)을 지원한다.   
이러한 앱은 서버 없이 CDN 또는 정적 호스팅 서비스에 배포할 수 있다.   
여기서 CDN이란 외부링크를 통해서 해당 프레임워크를 간편하게 도와주는 네트워크 기술이다.   

* Next.js (앱 라우터)
  ```bash
  npx create-next-app@latest
  ```
  - 풀 스택 React 앱을 활성화하는 React 프레임워크다.
  - Next.js는 **Vercel**에서 유지 관리한다.
  - Vercel은 Opt-in(옵트-인), 예를 들어 AWS처럼 유료 클라우드 서비스를 지원한다.  
  - 앱을 빌드해서 Node.js와 서버리스 호스팅 혹은 자체 서버에 배포할 수 있다.

* React Rounter (v7)
  ```bash
  npx create-react-router@latest
  ```
  - React Router는 **React에서 가장 인기인는 라우팅 라이브러리**이며
    **Vite와 함께 사용하면 풀스택 React 프레임워크를 만들 수 있다.**
  - **표준 Web API**이며 **다양한 자바스크립트 런타임과 플랫폼을 위한 준비된 배포 템플릿**이 있다.

* Expo (네이티브 앱용)
  ```bash
  npx create-expo-app@latest
  ```
  - Expo는 **네이티브 UI를 사용하여 안드로이드, iOS, 웹을 위한 범용앱을 만들 수 있는 React 프레임워크**이다.
  - **Expo로 앱을 빌드하는 것은 무료**이고 구글이나 애플 스토어에 제한없이 제출할 수 있지만,    
  추가적으로 옵트인 유료 클라우드 서비스도 제공한다.

## 처음부터 React 앱 만들기
앱에 **기존 프레임워크에서 잘 제공되지 않는 제약 조건**이 있거나, **자체 프레임워크를 구축하는    
것을 선호**하거나, **React 앱의 기본 사항을 배우려는 경우** React 프로젝트를 처음부터 시작하는데 사용할 수 있다.   

처음부터 시작하면 **더 많은 유연성**을 얻을 수 있지만 라우팅, 데이터 가져오기 및 기타 일반적인 사용 패턴에   
**사용할 도구를 선택**해야 한다.    

이미 존재하는 프레임워크를 사용하는 대신 **자신만의 프레임워크를 구축하는 것과 비슷**하다.

### [1단계: 빌드 도구 설치]
첫 번째 단계는 vite, parcel 또는 rsbuild와 같은 빌드 도구를 설치하는 것이다.    
이러한 빌드 도구는 소스 코드를 패키징하고 실행하는 기능을 제공하며,    
로컬 개발을 위한 개발 서버와 앱을 프로덕션 서버에 배포하는 빌드 명령을 제공한다.

* Vite
  ```bash
  npm create vite@latest my-app -- --template react
  ```
  + Vite는 모던 웹 프로젝트에서 **빠르고 간결한 개발 환경을 제공하는 것**을 목표로 하는 빌드 도구이다.
  + Vite에는 빠른 새로고침, JSX, Babel/SWC 및 기타 일반적인 기능을 지원하는 풍부한 플러그인 에코시스템이 있다.
  + 제일 많이 쓰는 빌드 도구로 빠른 빌드 도구로 인기가 많다.

* Parcel
  ```bash
  npm install --save-dev parcel
  ```
  - Parcel은 뛰어난 기본 개발 경험과 확장 가능한 아키텍처를 결합하여 프로젝트를 시작 단계에서
    대규모 프로덕션 애플리케이션으로 발전 시킬 수 있다.
  - Parcel은 빠른 새로고침, JSX, TypeScript, flow 및 스타일링을 기본적으로 지원한다.
  
* Rsbuild
  ```bash
  npx create-rsbuild --template react
  ```
  - Rsbuild는 Rspack 기반 빌드 도구로 세심하게 조정된 기본 설정과 성능 최적화 기능을 바로 사용할 수 있도록 제공한다.
  - Rsbuild는 빠른 새로고침, JSX, TypeScript, 스타일링 등 React 기능을 기본적으로 지원한다.


* [React Native용 Metro]
  - React Native를 처음부터 사용하려면 React Native용 JavaScript 번들러인 Metro를 사용해야한다.   
  - Metro는 ios 및 Android와 같은 플랫폼에 대한 번들링을 지원하지만, 여기 소개된 도구에 비해 기능이 부족하다.   
  - 프로젝트에 React Native 지원이 필요하지 않다면 Vite, Parcel 또는 Rs bulid로 시작하는 것이 좋다.

### [2단계: 공통 애플리케이션 패턴 구축]
위에 나열된 빌드 도구는 클라이언트 전용 단일 페이지 앱 (SPA)으로 시작하지만    
**라우팅, 데이터 가져오기, 스타일링과 같은 일반적인 기능에 대한 추가 솔루션은 포함하지 않는다.**

* [Routing]
  - 라우팅은 사용자가 **특정 URL을 방문할 때 표시할 콘텐츠나 페이지를 결정**한다.
  - 앱의 여러 부분에 **URL을 매핑하려면 라우터를 설정**해야한다.
  - 또한 **중첩된 경로, 경로 매개변수, 쿼리 매개변수도 처리**해야 한다.
  - 라우터는 **코드 내에서 구성**하거나 **구성요소 폴더 및 파일구조**에 따라 정의할 수 있다.
  - 라우터는 **최신 애플리케이션의 핵심**부분이며 일반적으로
    + 데이터 패치: 더 빠른 로딩을 위해 전체 페이지에 대한 데이터를 미리 페치하는 것 포함
    + 코드 분할 : 클라이언트 번들 크기를 최소화하기 위한 것
    + 페이지 렌더링 방식 : 각 페이지가 생성되는 방식을 경정하기 위한 것이 포함

라우팅은 React Router, Tanstack Router를 사용하는 것을 추천한다.

* [Data Fetching] 데이터 미리 가져오기
  - 서버나 다른 데이터 소스에서 **데이터를 미리 가져오는 것**으로 대부분의 애플리케이션에서
    **핵심적인 부분**이다.
  - 이를 제대로 수행하려면 **로딩 상태, 오류 상태, 그리고 가져온 데이터를 캐싱 등 복잡한 기능이 포함**된다.
  - 특별히 제작된 데이터 가져오기 라이브러리는 **데이터를 가져오고 캐싱하는 어려운 작업을 대신 처리** 해주기 때문에,
    개발자는 앱에 필요한 데이터와 이를 표시하는 방법에 집중할 수 있다.
  - 이러한 라이브러리는 **일반적으로 컴포넌트에서 직접 사용**하지만, 더 빠른 프리페칭과 나은 성능을 위해
    **라우팅 로더에 통합되거나 서버 렌더링에도 사용**할 수 있다.
  - 컴포넌트에서 직접 데이터를 가져오면 네트워크 요청 폭주로 로딩 시간이 느려질 수 있으므로,
    **라우팅 로더나 서버에서 데이터를 미리 가져오는 것**이 좋다.
    이렇게 하면 페이지가 표시될때 페이지의 모든 데이터를 한 번에 가져올 수 있다.

대부분의 **백엔드나 REST 스타일 API에서 데이터를 가져오는 경우** React Query, SWR, RYK Query를 사용하는 것이 좋다.    
GraphQL API에서 데이터를 가져오는 경우엔 Apollo, Relay를 사용하는 것이 좋다.

* [Code-splitting] 코드 분할
  - 코드 분할은 **앱을 필요에 따라 로드할 수 있는 작은 묶음으로 나누는 프로세스**이다.
  - 앱의 코드 크기는 새로운 기능이 추가되고 종속성이 추가될 때마다 증가한다.
  - 앱을 사용하기 전에 전체 앱의 모든 코드를 전송해야 하므로 앱 로딩 속도가 느려질 수 있다.
  - 캐싱, 기능/종속성 감소, 일부 코드를 서버에서 실행하도록 이동하는 것은 느린 로딩을 완화하는 데 도움이 될 수 있지만
    과도하게 사용하면 기능이 저하될 수 있다.
    - 예를 들어, 차트를 **지연 로딩**하면 차트 렌더링에 필요한 코드 전송이 지연되어
      **차트 코드가 앱의 나머지 부분에서 분리**된다.
  - **Parcel은 React.lazy를 사용하여 코드 분할을 지원**한다.
  - **차트가 처음 렌더링된 후 데이터를 로드하면 두 번 대기**하게 되는데 이것을 워터폴(waterfall) 현상이라고 부른다.
  - 차트 데이터를 가져오는 것과 동시에 렌더링 코드를 전송하는 것이 아니라,
    **각 단계가 차례로 완료될 때까지 기다려야**한다.
  - 번들링 및 데이터 페칭과 **통합된 경로 별 코드 분할**은 앱의 **초기 로드 시간**과
    앱에서 **가장 큰 콘텐츠를 렌더링**하는데 걸리는 시간을 줄일 수 있다.


이렇게 오늘은 외부 프레임워크나 빌드 도구를 이용하여 React를 프로젝트에 도입하는 방법을 배웠다.

---
# 5월 15일 (11주차)
https://ko.react.dev/learn/thinking-in-react   
참고 사이트

### Step 4: State가 어디에 있어야 할 지 정하기
React는 항상 컴포넌트 계층구조에 따라    
**부모에서 자식으로 데이터를 전달하는 단방향 데이터흐름을 사용**한다.   
이 과정에서 **어떤 컴포넌트가 state를 가져야 하는 지 바로 명확하지 않을 수 있기에**
어려울 수 있지만 아래 과정을 따라 가면 해결할 수 있다.

1. 해당 state를 기반으로 렌더링하는 모든 컴포넌트를 찾는다.
2. 그 중 가장 가까운 공통되는 부모 컴포넌트(계층에서 모두를 포괄하는 상위 컴포넌트)를 찾는다.
3. state가 어디에 위치 되어야 하는지 결정한다.
- 공통 부모 state를 그냥 두면 된다
- 혹은 공통 부모 상위의 컴포넌트에 둬도 된다.
- state를 소유할 적절한 컴포넌트를 못 찾았다면, state를 소유하는 컴포넌트를 하나 만들어서
   상위 계층에 추가한다.

```js
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}
```
1. state를 쓰는 컴포넌트를 찾는다.
   * ProductTable은 state에 기반한 상품 리스트를 필터링해야 한다. (검색어와 체크 박스의 값)
   * SeacrchBar는 state를 표시해 주어야 한다. (검색어와 체크 박스의 값)
2. 공통 부모를 찾는다. (둘 모두가 공유하는 첫 번째 부모 컴포넌트는 FilterableProductTable 다.
3. State가 어디에 존재할지 찾는다.
(ilterableProductTable에 검색어와 체크 박스 값을 state로 두었다.)

   이제 ilterText의 초깃값을 useState('')에서 useState('fruit')로 수정하면
   검색창과 데이터 테이블이 업데이트 되어 friut가 이름에 들어간 값이 화면에 출력된다.

하지만 이렇게 코드를 짜면 오류가 발생하는데 아직 폼을 수정하는 작업을   
작성하지 않았기에 SearchBar와 CheckBox가 제대로 작동하지 않는다.   
이것은  의도적으로 <input value={filterText} />로 코드를 쓰면서 value라는 prop이 항상    
FilterableProductTable의 filterText라는 state를 통해서 데이터를 받도록 정했기 때문이다.   
filterText라는 state가 변경되는 게 아니기 때문에 input의 value는 변하지 않고 화면도 바뀌는게 없다.     
이것을 해결하기 위해 밑의 내용을 진행한다.

### Step 5: 역 데이터 흐름 추가하기
사용자의 입력에 따라 state를 변경하기 위해선 **반대 방향의 데이터 흐름**을 만들어야 한다.   
이를 위해서는 계층 구조의 하단에 있는 컴포넌트에서    
**FilterableProductTable의 state를 업데이트**할 수 있어야 한다.   
사용자가 input을 변경할 때 마다 사용자의 입력을 반영할 수 있도록 state를 업데이트 해야하기 때문에   
FilterableProductTable 안의 있는 state를 변경하기 위해서 setFilterText와 setInStockOnly를 호출해야 한다.    

```js
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
```
```js
function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
        />

      <label>
        <input
          type="checkbox"
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}
```
SerchBar에 onChange 이벤트 핸들러를 추가해서 부모 state를 변경할 수 있도록 구현해 주었다.   

이제 SearchBar와 CheckBox가 제대로 작동한다!!!

## 완성된 코드
```js
import { useState } from 'react';
import './App.css';

export default function App() {

  return (
    <>
    <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
      
    </tr>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
        
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
        />

      <label>
        <input
          type="checkbox"
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
];

```

오늘은 단방향 데이터 흐름을 이용해서 어떤 컴포넌트가 state를 가져야하며,   
역 데이터 흐름을 이용해서 input을 변경할 때마다 사용자의 입력을 받을 수 있도록 만들어 주었다.   
  
---
# 5월 8일 (10주차)
https://ko.react.dev/learn/thinking-in-react
참고 사이트

## React로 사고하기
React로 사용자 인터페이스를 빌드할 때, 먼저 이를 **컴포넌트**라는 조각으로 나눈다.   
그리고 각 컴포넌트의 다양한 시각적 상태들을 정의한다.   
마지막으로 컴포넌트들을 연결하여 데이터가 그 사이를 흘러가게 한다.

## 모의시안과 함께 시작하기
### Step 1: UI를 컴포넌트 계층으로 쪼개기 
* Programming :
  단일 책임 원칙(캡슐화)를 반영하고자 한다면 컴포넌트는 이상적으로 한 번에 한 가지 일만 해야한다.
* CSS :
  클래스 선택자를 무엇으로 어떻게 만들지 생각하자.
* Design :
  디자인 계층을 어떤 식으로 구성할 지 미리 생각해보자.

JSON이 잘 구조화 되어있다면, UI 컴포넌트 구조가 자연스럽게 데이터 모델에 대응 된다는걸   
알 수 있다. 이는 UI와 데이터 모델이 보통 같은 구조를 가지기 때문이다.   
UI를 컴포너트로 분리하고, 각 컴포넌트가 데이터 모델에 매칠 될 수 있도록 한다면   
더 쉽게 UI를 분리하고 자연스럽게 구현할 수 있다.   


![image](https://github.com/user-attachments/assets/fe5ec3a9-4a49-4eef-a3d8-015447e08ab4)   
1. FilterableProductTable(회색): 예시 전체를 포괄한다.
2. SearchBar(파란색): 사용자의 입력을 받는다.
3. ProductTable(라벤더색): 데이터 리스트를 보여주고, 사용자의 입력을 기반으로 필터링한다.
4. ProductCategoryRow(초록색): 각 카테고리의 헤더를 보여준다.
5. ProductRow(노란색): 각각의 제품에 해당하는 행을 보여준다.

ProductTable을 보면 “Name”과 “Price” 레이블을 포함한 테이블 헤더 기능만을 가진 컴포넌트는 없다.   
독립된 컴포넌트를 따로 생성할 지 생성하지 않을지는 내 선택이며, 이 예시에서는 ProductTable의   
위의 단순한 헤더들이 ProductTable의 일부이기 때문에 위 레이블들을 컴포넌트로 만들지 않고 그냥 남겨두었다.   
그러나 이 헤더가 복잡해지면 (정렬 기능 등) ProductTableHeader 컴포넌트를 만드는 것이 더 합리적이다.   

### Step 2: React로 정적인 버전 구현하기 
가장 쉬운 접근 방법은 상호작용 기능보다 먼저 데이터 모델로부터 UI를 렌더링하는 버전을 만드는 것이다.   
먼저 정적인 버전을 만들고 상호작용 기능을 추가하는 게 타이핑이 필요하지만 생각할 것이 적다.   
반대로 상호작용 기능을 먼저 추가하면, 많은 생각이 필요하지만 타이핑이 많이 필요하지 않다.   
데이터 모델을 렌더링 하는 앱의 정적인 버전을 만들기 위해서는   
다른 컴포넌트를 재사용하고 props로 데이터를 넘겨주는 컴포넌트를 구현하는게 좋다.   
* props는 부모가 자식에게 데이터를 넘겨줄 때 사용할 수 있는 방법이다.   

정적인 버전을 구현할 때는 **state를 사용하면 복잡해지기 때문에 쓰지 않는것**이 좋다.   
만드는 방법으로는   
1. FilterableProductTable 부터 시작하는 **하향식(top-down)** 과
5. ProductRow 부터 시작하는 **상향식(bottom-up)** 이 있다.

**간단한 예시에서는 보통 하향식**으로 만드는 게 쉽지만,   
**프로젝트가 커지면 상향식**으로 만드는게 개발하기가 더 쉽다.   

### component 구현하기
```js
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default function App() {

  return (
    <>
    <FilterableProductTable products={PRODUCTS} />
    </>
  );
}


function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
];
```

데이터 모델을 렌더링하는 앱의 정적인 버전을 만들기 위해서 다른 컴포넌트를 재사용하고   
**props**을 이용하여 데이터를 넘겨주는 컴포넌트를 구현했다.   
또한 정적 버전을 만들고 있기 때문에 state는 사용하지 않았다.     

### Step 3: 최소한의 데이터만 이용해서 완벽하게 UI State 표현하기
UI를 상호작용(interactive)하게 만들려면, 사용자가 기반 데이터 모델을 변경할 수 있게 해야한다.   
React는 state를 통해 기반 데이터 모델을 변경할 수 있게 한다.   

state는 앱이 기억해야 하는, **변경할 수 있는 최소 집합**이다.    
state를 구조화 하는데 가장 중요한 원칙은 **중복배제원칙(Don't Repeat Yourself)** 이다.   

React는 props와 state라는 두 개의 데이터 **모델**이 존재한다.
* Props는 함수를 통해 전달되는 인자 같은 성격을 가진다.
  props는 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 넘겨서 외관을 커스터마이징하게 해준다.
  예를 들어, Form은 color라는 prop을 Button으로 보내서 Button을 내가 원하는 형태로 커스터마이징시킬 수 있다.
* State는 컴포넌트의 메모리 같은 성격을 가진다.
  state는 컴포넌트가 몇몇 정보를 계속 따라갈 수 있게 해주고 변화하면서 상호작용(interaction)을 만들어 낸다.
  예를 들어, Button은 isHovered라는 state를 따라간다.   


오늘은 이렇게 UI를 컴포넌트 계층으로 쪼개서 구현하는 방법과   
정적인 버전을 구현할때 주의점과 어떻게 개발해야하는지를 배웠다.   

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


## map 메서드
```js
const moves = history.map((squares, move) => { }
```
JS에서 한 배열을 다른 배열로 변환할려면 위와 같은 map 메서드를 이용하면 된다.  
map의 기본 구문은 map(callbackFn) or map(callbackFn, thisArg)이다.   
thisArg는 내부에서 this로 사용할 값을 지정하는데 화살표 함수에서는 이것이 생략된다.   
따라서 이 예제에서는 화살표 함수가 callback 함수를 대신한다.    
squares, move는 화살표 함수의 매개변수이다.  
* 원본 배열 (history) : map이 호출된 원본 배열
* 원본 배열의 인덱스 (move) : 현재 순환 중인 원본 배열 요소의 인덱스
* 요소 값 (squares) : 현재 순회 중인 요소 배열의 값

각각의 history 요소에 대한 { }의 실행문(후작업)을 실행하고,   
moves 객체에 저장하여 최종 출력에 사용한다.   


## 과거 움직임 보여주기
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

하지만 코드를 실행하게 된다면
```
Each child in a list should have a unique "key" prop.
```
이와 같은 형태로 콘솔창에 오류가 뜨게 된다.   
이것을 해결하기 위해 해야할것이 바로 밑에 있는
 
## Key 선택하기
key는 React에서 특별하게 미리 지정된 프로퍼티이다.   
엘리먼트가 생성되면 React는 key 프로퍼티를 추출하여 반환되는 엘리먼트에 직접 key를 저장한다.   
React는 자동으로 key를 사용해 업데이트할 컴포넌트를 결정하기에   
부모가 지정한 key가 무엇인지 컴포넌트는 알 수 없습니다.
동적인 리스트를 만들 때마다 적절한 key를 할당하는 것이 매우 좋다.   
key가 지정되지 않은 경우, React는 경고를 표시하기에 위와 같은 오류가 뜬 것이고,   
배열의 인덱스를 기본 key로 사용한다.   
key는 전역적으로 고유할 필요는 없으며, 컴포넌트와 해당 컴포넌트의 형제 컴포넌트 사이에서만   
고유하면 되며, 모든 프로젝트에서 고유할 필요는 없다.   

리스트를 렌더링 할때 React는 렌더링 된 각 리스트 항목에 대한 몇 가지 정보를 저장한다.   
리스트를 업데이트할 때 React는 무엇이 변경되었는지 확인해야 하며,   
항목은 추가, 제거, 재정렬 또는 업데이트 될 수 있다.   
```js
<li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>
```
위와 같은 코드가   
```js
<li>Ben: 9 tasks left</li>
<li>Claudia: 8 tasks left</li>
<li>Alexa: 5 tasks left</li>
```
이와 같이 업데이트 되었다고 가정해보자   
이러면 React는 task의 개수가 업데이트 되고 Alexa와 Ben의 순서가 바뀌고   
두 사람 사이에 Claudia가 추가 되었다고 생각할것이다.   
하지만 React는 이것을 알지 못하기 때문에 key 프로퍼티를 리스트 항목에 지정하여   
각 리스트 항목이 다른 항목과 다르다는 것을 구별해줘야한다.   

```js
<li key={user.id}>
  {user.name}: {user.taskCount} tasks left
</li>
```
리스트가 다시 렌더링 되면 React는 각 리스트 항목의 key를 가져와서 이전 리스트 항목에서   
일치하는 key를 탐색한 후, 이전에 존재하지 않았던 key가 있으면 컴포넌트를 생성한다.    
만약 이전 리스트에 존재했던 key를 가지고 있지 않다면 그 컴포넌트를 제거하게 된다.   

틱택토 게임 기록에는 과거의 각 플레이에는 해당 플레이의 일련번호는 고유 ID 즉 인덱스가 있다.    
중간에 순서를 바꾸거나 삭제하거나 삽입할 수 없기에 인덱스를 key로 사용하는것이 안전하다.
```js
const moves = history.map((squares, move) => {
  //...
  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
});
```
이렇게 ```<li key={move}>```로 key를 추가한 뒤 다시 로드하면 key 에러가 사라지게 된다.

## 시간여행 구현하기
```js
const [currentMove, setCurrentMove] = useState(0);
```
사용자가 현재 어떤 단계를 보고 있는지 추적하기 위해 currenMove라는 새 변수를 만들었다.
```js
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }
```
다음으로 Game 내부의 jumpTo 함수에 currentMove를 업데이트 한 뒤   
currentMove를 변경하는 숫자가 짝수면 xIsNext를 true로 설정했다.

```js
function handlePlay(nextSquares) {
  const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
  setHistory(nextHistory);
  setCurrentMove(nextHistory.length - 1);
  setXIsNext(!xIsNext);
}
```
버튼을 눌렀을때 그 시점에서 새로운 이동을 하는 경우 해당 시점까지의 히스토리만   
유지해야하기에 history의 모든 항목 전개구문 뒤에 nextSquares를 추가하고,
history.slice(0, currentMove + 1)의 모든 항목 뒤에 추가하여 이전 히스토리의    
해당 부분만 유지하도록 만들어주었다.   


```js
const currentSquares = history[currentMove];
```
마지막으로 마지막 동장을 렌더링하는 대신 현재 선택한 동작을 렌더링 하도록
```history.length - 1``` 코드를 ```currenmove```로 변경한다.    
그럼 이제 history의 특정 단계 버튼을 클릭하면 틱택토 보드가 즉시 업데이트 되어   
과거의 보드 모양이 표시되게 된다.   


## 완성된 틱택토 코드
```js
import { useState } from 'react';

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
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
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
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
    [2, 4, 6],
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
코드를 살펴보면 currentMove가 짝수일 때는 xIsNext === true가 되고,    
currentMove가 홀수일 때는 xIsNext === false가 되는 것을 알 수 있다.    
currentMove의 값을 알고 있다면 언제나 xIsNext가 무엇인지 알 수 있기에,   
state를 모두 저장할 이유가 없다.    
마지막으로 Game을 변경하여 더 이상 xIsNext를 별도의 state 변수로 저장하지 않고    
currentMove를 기반으로 알아내도록 수정하였다.


오늘은 이렇게 JS의 전개구문과 map 메서드, key를 선택하는 법에 대해 배웠고,    
틱택토 프로그램의 시간여행을 구현하여 틱택토 게임의 최종 결과물을 완성했다.    

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

```js
function Board() {
  return (
    <div>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>

      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>

      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </div>

    
  );
}

function Square({ value }) {
  return (
    <div>
      <button className="square">
        {value}
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
    </div>
  );
}

export default App;
```

Square 컴포넌트를 Board에서 전달할 prop value를 읽도록 만들어주면   
지저분하고 중복된 코드를 피할 수 있다.

## 예제 2

```js
function Square({ value }) {

  function handleClick() {
    console.log('clicked');
  }
  return (
    <div>
      <button className="square"
      onClick={handleClick}>
        {value}
      </button>
    </div>
  );
}

```

handleClick 함수와 onClick 함수를 추가하여 틱택토 화면을 클릭하면   
콘솔에 clicked! 로그가 뜨도록 코딩해주었다.

## 예제 3

```js
import'./App.css';
import {useState} from 'react';


function Square() {

  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('X');
    console
  }


  return (
    <div>
      <button className="square"
      onClick={handleClick}>
        {value}
      </button>
    </div>
  );
}

function Board() {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>

    
  );
}


function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
    </div>
  );
}
```


useState 함수를 이용해서 Square의 값을 저장하고 클릭되면 "X가 출력되게 만들어줬다.
그렇기 때문에 Props은 더 이상 Square에서 사용하지 않으므로 value 값은 삭제해주었다.

## state 끌어올리기 

## 예제 4

```js
import './App.css';

export default function Square({ value, onSquareClick }) {
  return (
    <div>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </div>
  );
}
```

```js
import './App.css';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
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
  );
}
```

```js
import './App.css';

function App() {
  return (
    <div>
    <h1>Tic Tac Toe</h1>
    <Game />
    </div>
  );
}

export default App;

```



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



---
layout: post
title: "Variable"
categories: JavaScript
tags: JavaScript variable
---

## Variable

### let

- `let` : 변수 선언

  ```javascript
  "use strict";
  let name = "hyun";
  console.log(name);

  name = "hello";
  console.log(name);

  //출력
  //hyun
  //hello
  ```

  선언하면 변수 메모리에 참조할 수 있는 포인터가 생김

- 전역변수, 지역변수

  - 지역 scope `{ }`

  ```javascript
  "use strict";
  let globalVar = "global";
  {
    let name = "hyun";
    console.log(name);

    name = "hello";
    console.log(name);

    // 지역안에서는 전역변수 사용 가능.
    console.log(globalVar);
  }

  // 출력 X (공백)
  console.log(name);
  ```

- **`var` : 쓰지 말자!**

  1. 선언도 하기 전에 호출이 가능하기 때문,, 비정상적이다. (**`hoisting`개념**)
  2. **블럭 scope 와 무관**하게 된다.

### constant

- 상수

- 사용하는 이유

  1. 보안

  2. Thread safety

     : 프로그램이 실행되면 여러가지의 스레드가 실행되고 동시에 변수를 참조하는데 동시에 값을 변경할 수 있는데, 위험성이 존재함. 상수면 이런 위험을 없애준다.

  3. 실수 가능성 감소

---

<u>_참고_</u>

- Immutable data types : primitive types, frozen objects(`object.freeze()`)

  - primitive type이 변경 불가라는게 무슨말 ?

    ```javascript
    let str = "hello";
    str = "world";
    ```

    1. 메모리에 `hello`가 생성되고 `str`은 `hello` 의 **주소를 참조**한다.
    2. 그 후, str이 <u>**수정되는 것이 아닌**</u> 새로 생성된 world의 주소를 참조하는 것이다. 즉, 참조하는 주소만 달라지는 것 뿐.

- Mutable data types : `objects` , _JS안의 거의 모든 object는 mutable_

---

### 변수 타입

1. Primitive type (single item)

   : `number`, `string`,` boolean`, `null`, `undefined`, `symbol`

   메모리에 바로 저장. (`value`로 값이 바로 저장)

2. Object

   : single. item들을 묶어서 한 박스로 관리할 수 있게 해줌 ( box container )

   너무 커서 한번에 저장할 수 없음. `reference` 를 통해 오브젝트가 담긴 메모리를 가리키는 것.

3. function ( first - class function )

#### 1-1. primitive type

- `number`의 경우

  - C언어, Java의 경우 : 메모리할당을 미리 생각해 타입을 지정해 주어야 한다. (`double`, `float`, ....)

  - JavaScript : <u>number하나면 퉁칠수 있다.</u>

    - `let a = 1.2;`
    - `let b = 1;`

- `string` 의 경우

  - 한글자(`c`)든 여러글자든 모두 `string` 타입

  - ` +` 연산도 가능

  - **Template literals (backtick `)**

    - ` ${변수}`

    - 이용하면 일일이 `+` 연산을 붙어야하는 수고로움을 덜 수 있다.

- `symbol`

  - 고유의 식별자

  - 우선순위가 필요한 경우 사용됨

    ```javascript
    const symbol1 = Symbol('id');
    const symbol2 = Symbol('id');

    console.log(symbol1 === symbol2);
    // false

    // string이 똑같다면 동일한 symbol을 만들고 싶다? for이용
    const gSymbol1 = Symbol.for('id');
    const gSymbol2 = Symbol.for('id');
    console.log(symbol1 === symbol2);
    //true

    console.log(`value : ${symbol1}`) ---> 오류발생
    console.log(`value : ${symbol1.description}`) -- description을 사용해야한다.
    ```

- Dynamic typing : dynamically typed language

  - 선언 시 어떤 타입인지 선언하지 않고 런타임중에 값이 할당된 타입에 따라 그 타입이 변경된다.
  - _C , Java는 statically typed language_
  - 개발 중간에 타입이 바뀌게 되면 런타임오류가 발생하는 일이 빈번할 수 있다. ( 나의 코드 + 여러사람의 코드가 섞이게 되는 경우를 생각해보면 )
    - 이를 보완하기 위해 만들어진 것이` typescript`

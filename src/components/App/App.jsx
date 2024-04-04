//Хуки завжди імпортяться в фігурних дужках.
import { useState } from 'react';
import { useRef } from 'react';
import './App.css';
import UseStateHook from '../UseStateHook/UseStateHook.jsx';
import UseRefHook from '../UseRefHook/UseRefHook.jsx';

//
//Рендер не перерисовує ДОМ-дерево! Він створює віртуальне ДОМ-дерево, щоб порівняти з попереднім, і коли вони не відрізняються, перерисовка жодного ДОМ-елементу (оновлення інтерфейсу) не відбувається.
//Рендер відбувається, коли відбувається зміна стану батьківського компонента
//

function App() {
  //Хуками в реакті називають спеціальні методи які дозволяють застосовувати стани та інші розширення реакту до функціональних компонентів. Хуки викликаються тільки на верхньому рівні, не потрібно викликати хуки всередині циклів або вкладених функцій. Хуки можуть викликатись тільки із функціональних компонентів в React, так як в класових компонентах є окремі інструменти для реалізації функціоналу хуків. Хуки не повинні використовуватись всередині умовних операторів.
  //
  //хук для роботи зі станами дозволяє рендерити той DOM-елемент де цей хук використовується при кожній зміні значення цього хуку.:
  const [val, setVal] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  function valueSetter(event) {
    setVal(event.target.value);
  }

  const arraySetter = () => {
    let temp = [...arr];
    temp.push(1);
    setArr(temp);
  };
  const anotherArraySetter = () => {
    setArr([...arr, 1]);
  };

  //
  //Хук для прямого доступу до JSX-елементів UseRef дозволяє прив'язатись до будь-якого ДОМ-елементу нашого компоненту та працювати з ним напряму:
  //
  const inputRef = useRef();
  const buttonRef = useRef();
  const checkboxRef = useRef();

  function getButtonDOMAndManipulateIt() {
    //get event Object with all the methods applicable to it:
    console.log(buttonRef);
    buttonRef.current.style.background = 'teal';

    console.log(inputRef.current.value);

    console.log(checkboxRef.current.checked);
    checkboxRef.current.checked = true;
  }

  function getInputDOMAndManipulateIt() {
    console.log(inputRef.current.value);
  }

  function getCheckboxDOMAndManipulateIt() {
    console.log(checkboxRef.current.checked);
  }

  //Хук для роботи зі сторонніми ефектами useEffect.

  return (
    <div className="App">
      <UseStateHook
        val={val}
        valueSetter={valueSetter}
        arraySetter={arraySetter}
        anotherArraySetter={anotherArraySetter}
        arr={arr}
      />

      <UseRefHook
        inputRef={inputRef}
        buttonRef={buttonRef}
        checkboxRef={checkboxRef}
        buttonListener={getButtonDOMAndManipulateIt}
        inputListener={getInputDOMAndManipulateIt}
        checkboxListener={getCheckboxDOMAndManipulateIt}
      />
    </div>
  );
}

export default App;

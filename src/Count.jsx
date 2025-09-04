import React, { useState, useEffect, useRef } from "react";

function Count() {
// Состояние компонента
const [numbers, setNumbers] = useState([1, 2, 3]);

// useRef: можно хранить ссылку на DOM-элемент
const inputRef = useRef(null);

// useRef: можно хранить "любое значение между рендерами"
// Например — сколько раз обновился компонент
const renderCount = useRef(0);

// Эффекты
// 1. Срабатывает один раз при первом появлении компонента на странице
useEffect(() => {
renderCount.current += 1;
console.log("Массив numbers обновился раз:", renderCount.current);
}, [numbers]);


// 2. Срабатывает каждый раз, когда numbers меняется
useEffect(() => {
console.log("NumberBoard обновился", numbers);

// увеличиваем счётчик ререндеров (НЕ вызывает новый ререндер, т.к. useRef)
renderCount.current += 1;
console.log("Компонент обновился раз:", renderCount.current);
}, [numbers]);

// 3. Срабатывает при удалении компонента
useEffect(() => {
return () => {
    console.log("NumberBoard исчез с страницы");
};
}, []);

// Вспомогательные функции
const addNumber = () => {
const randNumber = Math.round(Math.random() * 10);
setNumbers([...numbers, randNumber]);
};

const removeNumber = (numToRemove) => {
setNumbers(numbers.filter((num) => num !== numToRemove));
};

const focusInput = () => {
// через useRef можно управлять DOM напрямую
if (inputRef.current) {
    inputRef.current.focus();
}
};

return (
<div className="number-board">
    <h2>Трекер чисел</h2>
    <input ref={inputRef} placeholder="Фокус через useRef" />
    <button onClick={focusInput}>Фокус на input</button>

    <ul>
    {numbers.map((num, index) => (
        <li key={index}>
        {num} <button onClick={() => removeNumber(num)}>-</button>
        </li>
    ))}
    </ul>
    <button onClick={addNumber}>Добавить число</button>
</div>
);
}

export default Count;

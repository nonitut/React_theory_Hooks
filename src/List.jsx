import React from "react";

function List() {
const [numbers, setNumbers] = React.useState([1, 2, 3]);

// componentDidMount
// React.useEffect(() => {
// console.log("Первый рендер");
// }, []);

// // componentDidUpdate
// React.useEffect(() => {
// console.log("Компонент обновился");
// });

// // componentWillUnmount
// React.useEffect(() => {
// return () => {
//     console.log("Компонент размонтирован");
// };
// }, []);

const addNumber = () => {
const randNumber = Math.round(Math.random() * 10);
setNumbers([...numbers, randNumber]);
};

const removeNumber = (numToRemove) => {
setNumbers(numbers.filter((num) => num !== numToRemove));
};

return (
<div className="App">
    <ul>
    {numbers.map((num, index) => (
        <li key={index}>
        {num}{" "}
        <button onClick={() => removeNumber(num)}>x</button>
        </li>
    ))}
    </ul>
    <button onClick={addNumber}>New number</button>
</div>
);
}

export default List;






import React from 'react';
import './App.css';
import List from './List';
import Count from './Count';

// List —  отображает массив // Count — трекер чисел с кнопками add/remove
// NumberBoard — то же, что Count, но с другим названием и визуальным смыслом

function App() {
  const [visibleList, setVisibleList] = React.useState(true); 
  const [visibleBoard, setVisibleBoard] = React.useState(true);
  // state — это текущее значение, которое React хранит для компонента
  // setState — это функция, которую нужно вызывать, чтобы изменить state и автоматически перерисовать компонент
  // initialValue — значение, которое будет при первом рендере

  return (
    <div className='App'>
      <button onClick={() => setVisibleList(!visibleList)}>
        {visibleList ? "Скрыть список" : "Показать список"}
      </button>

      {visibleList && <List />}

      <button onClick={() => setVisibleBoard(!visibleBoard)}>
        {visibleBoard ? "Скрыть трекер" : "Показать трекер"}
      </button>

      {visibleBoard && <Count />} 
    </div>
  );
}

export default App;

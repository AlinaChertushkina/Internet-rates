import React, { useState } from 'react';
import './Tariff.css';
import TariffCard from './TariffCard';
import '././assets/tariff-cards-styles.css';

const App = () => {
    // Использование хука useState для хранения состояния переменной tariffs
  const [tariffs, setTariffs] = useState([
    { amount: 300, speed: 10, highlighted: false, cardClassName: 'tariff-card-1'},
    { amount: 450, speed: 50, highlighted: false, cardClassName: 'tariff-card-2'},
    { amount: 550, speed: 100, highlighted: true, cardClassName: 'tariff-card-3'},
    { amount: 1000, speed: 200, highlighted: false, cardClassName: 'tariff-card-4'},
  ]);

  // Обработчик события на карте тарифа
  const handleCardClick = (index) => {
  // Создание копии массива tariffs и обновление значения highlighted для выбранной карты
    const updatedTariffs = tariffs.map((tariff, i) => {
      return { ...tariff, highlighted: i === index };
    });

// Обновление состояния переменной tariffs
    setTariffs(updatedTariffs);
  };

// Отрисовка компонента
  return (
    <div className="App">
      <h1 className="title-name">Интернет-тарифы</h1>
        <div className="tariff-container">
          {tariffs.map((tariff, index) => (
            <TariffCard
              key={index}
              amount={tariff.amount}
              speed={tariff.speed}
              highlighted={tariff.highlighted}
              cardClassName={tariff.cardClassName}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
    </div>
  );
}

export default App;
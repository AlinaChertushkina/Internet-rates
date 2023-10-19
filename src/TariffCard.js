//Функция, которая принимает пропсы и использует их внутри компонента

function TariffCard({ amount, speed, highlighted, cardClassName, onClick }) {
    const className = `tariff-card ${highlighted ? 'highlighted' : ''} ${cardClassName}`;
  
    return (
      <div className={className} onClick={onClick}>
        <h3>Безлимитный {amount}</h3>
        <p>{amount} руб/мес</p>
        <p>до {speed} Мбит/сек</p>
        <span>Объем включенного трафика не ограничен</span>
      </div>
    );
  }

  export default TariffCard;
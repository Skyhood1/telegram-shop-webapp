import { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;

const products = [
  {
    id: 1,
    name: "Крем для лица",
    price: 1200,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Шампунь",
    price: 950,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Маска для волос",
    price: 1100,
    image: "https://via.placeholder.com/150"
  }
];

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  const handleBuy = (product) => {
    tg.sendData(JSON.stringify(product));
  };

  return (
    <div className="container">
      <h1>Магазин косметики</h1>
      <div className="product-list">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price} ₽</p>
            <button onClick={() => handleBuy(item)}>Купить</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
